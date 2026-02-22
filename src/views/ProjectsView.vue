<script setup lang="ts">
import { ref, computed } from 'vue'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import ProjectGrid from '@/components/projects/ProjectGrid.vue'
import { projects } from '@/data/projects'

const activeFilter = ref('all')

const filters = [
  { label: 'All', value: 'all' }
]

const filtered = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter((p) => p.category === activeFilter.value)
})
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
          @click="activeFilter = f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <ProjectGrid :projects="filtered" />

      <p
        v-if="filtered.length === 0"
        class="py-16 text-center text-ink-400"
      >
        No projects in this category yet.
      </p>
    </Container>
  </section>
</template>
