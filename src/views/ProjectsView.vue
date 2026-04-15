<script setup lang="ts">
import { ref, computed } from 'vue'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { getProjectsByCategory, categoryLabels } from '@/data/projects'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const activeFilter = ref<'all' | 'web' | 'ai' | 'other'>('all')

const filters = [
  { label: 'All', value: 'all' as const }
]

const filtered = computed(() => getProjectsByCategory(activeFilter.value))

// Repeating asymmetric grid pattern for visual variety
const gridClasses = [
  'md:col-span-8 aspect-[4/3] md:aspect-[16/10]',   // large featured
  'md:col-span-4 aspect-[4/3] md:aspect-[3/4]',     // tall vertical
  'md:col-span-5 aspect-[4/3] md:aspect-[4/5]',     // medium vertical
  'md:col-span-7 aspect-[4/3] md:aspect-square',    // large square
  'md:col-span-6 aspect-[4/3] md:aspect-[3/4]',     // medium vertical
  'md:col-span-6 aspect-[4/3] md:aspect-video',     // wide horizontal
]

// Alternating text sizes for visual hierarchy
const titleSizes = [
  'text-2xl md:text-3xl',
  'text-xl',
  'text-xl',
  'text-2xl md:text-3xl',
  'text-xl',
  'text-xl',
]

</script>

<template>
  <section class="py-20 sm:py-24">
    <Container>
      <SectionHeader
        title="Projects"
        subtitle="A collection of work spanning web apps, AI integrations, and developer tools."
      />

      <!-- Filters -->
      <div class="mb-10 flex flex-wrap gap-2">
        <button
          v-for="f in filters"
          :key="f.value"
          class="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200"
          :class="
            activeFilter === f.value
              ? 'bg-ink-950 text-white shadow-sm'
              : 'bg-surface-sunken text-ink-600 hover:text-ink-950'
          "
          :aria-pressed="activeFilter === f.value"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <!-- Asymmetric grid with text-on-image cards -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <div
          v-for="(project, i) in filtered"
          :key="project.id"
          class="scroll-reveal group relative overflow-hidden rounded-xl cursor-pointer bg-surface-sunken"
          :class="gridClasses[i % gridClasses.length]"
          :style="`transition-delay: ${i * 100}ms`"
        >
          <router-link
            :to="{ name: 'project-detail', params: { id: project.id } }"
            class="block relative h-full w-full"
          >
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              class="h-full w-full object-contain p-8 mix-blend-multiply will-change-transform transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 md:p-8">
              <h3
                class="font-display text-white leading-tight"
                :class="titleSizes[i % titleSizes.length]"
              >
                {{ project.title }}
              </h3>
              <p class="mt-1 text-xs font-medium uppercase tracking-widest text-white/60">
                {{ categoryLabels[project.category] }}
              </p>
              <div class="flex flex-wrap gap-1.5 mt-3">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/15 text-white/80 backdrop-blur-sm"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <p
        v-if="filtered.length === 0"
        class="py-16 text-center text-ink-400"
      >
        No projects in this category yet.
      </p>
    </Container>
  </section>
</template>
