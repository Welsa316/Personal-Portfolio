<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
import DeviceMockup from '@/components/mockups/DeviceMockup.vue'
import { getProjectById, getAdjacentProjects, categoryLabels } from '@/data/projects'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSiteHead } from '@/composables/useSiteHead'
import { SITE_URL } from '@/config/constants'

useScrollReveal()

const route = useRoute()
const router = useRouter()

const project = computed(() => getProjectById(route.params.id as string))
const adjacent = computed(() => getAdjacentProjects(route.params.id as string))

if (!project.value && typeof window !== 'undefined') {
  router.replace({ name: 'not-found' })
}

// Trim to the last whole word within `max` chars and add an ellipsis.
function truncateAtWord(text: string, max = 155): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`
}

// Per-page meta + JSON-LD CreativeWork schema, set via @unhead/vue
useSiteHead({
  title: () => project.value?.title,
  description: () => {
    const p = project.value
    return p ? truncateAtWord(`${p.title}. ${p.description}`) : undefined
  },
  image: () => (project.value ? `${SITE_URL}/og/${project.value.id}.jpg` : undefined),
  type: 'article',
  schema: () => {
    const p = project.value
    if (!p) return undefined

    const projectUrl = `${SITE_URL}/projects/${p.id}`

    const creativeWork = {
      '@type': 'CreativeWork',
      name: p.title,
      description: p.description,
      url: projectUrl,
      image: `${SITE_URL}/og/${p.id}.jpg`,
      creator: {
        '@type': 'Person',
        name: 'Walid Elsayed',
        url: `${SITE_URL}/`,
      },
      keywords: p.tags.join(', '),
      ...(p.links.demo && p.links.demo !== '#' && { sameAs: p.links.demo }),
    }

    const breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
        { '@type': 'ListItem', position: 3, name: p.title, item: projectUrl },
      ],
    }

    return {
      '@context': 'https://schema.org',
      '@graph': [creativeWork, breadcrumb],
    }
  },
})
</script>

<template>
  <div v-if="project">
    <!-- Compact top bar: back link only -->
    <div class="pt-8 pb-4 sm:pt-10">
      <Container>
        <router-link
          :to="{ name: 'projects' }"
          class="group scroll-reveal inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-950"
        >
          <svg class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M5 12l5-5M5 12l5 5" />
          </svg>
          All Projects
        </router-link>
      </Container>
    </div>

    <!-- Mockup hero section: full visual focus, at top -->
    <section
      v-if="project.status !== 'pending'"
      class="scroll-reveal bg-surface-sunken pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28"
    >
      <div class="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <DeviceMockup :project="project" />
      </div>
    </section>

    <!-- Pending placeholder (replaces mockup at top) -->
    <section
      v-else
      class="scroll-reveal bg-surface-sunken pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28"
    >
      <Container>
        <div class="flex flex-col items-center justify-center text-center py-16">
          <div class="mb-4 rounded-full bg-warning/15 p-4">
            <svg class="h-8 w-8 text-warning" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <p class="font-display text-2xl text-ink-950">Demo Coming Soon</p>
          <p class="mt-2 text-ink-600 max-w-md">
            This project is currently being updated. Check back soon for a live demo.
          </p>
        </div>
      </Container>
    </section>

    <!-- Title section: now below mockup -->
    <section class="pt-12 pb-8 sm:pt-16 sm:pb-12">
      <Container>
        <!-- Category + Title -->
        <div class="scroll-reveal">
          <span class="eyebrow">
            {{ categoryLabels[project.category] }}
          </span>
          <h1 class="mt-2 text-balance font-display text-4xl leading-[0.95] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
            {{ project.title }}
          </h1>
        </div>

        <!-- Status badge + Tags -->
        <div class="scroll-reveal mt-6 flex flex-wrap items-center gap-3" style="transition-delay: 100ms">
          <span
            v-if="project.status === 'pending'"
            class="rounded-full bg-warning/15 px-3 py-1 text-xs font-semibold text-warning"
          >
            Coming Soon
          </span>
          <span
            v-else-if="project.status === 'offline'"
            class="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-500"
          >
            Offline
          </span>
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full bg-surface-sunken px-3 py-1 font-mono text-xs text-ink-600"
          >
            {{ tag }}
          </span>
        </div>

        <div class="editorial-divider scroll-reveal mt-8" style="transition-delay: 150ms"></div>
      </Container>
    </section>

    <!-- Description -->
    <section class="pb-12">
      <Container>
        <p class="scroll-reveal max-w-3xl text-pretty text-lg text-ink-700 leading-relaxed">
          {{ project.description }}
        </p>
        <p
          v-if="project.longDescription"
          class="scroll-reveal mt-4 max-w-2xl text-pretty text-base text-ink-700 leading-relaxed"
          style="transition-delay: 100ms"
        >
          {{ project.longDescription }}
        </p>
      </Container>
    </section>

    <!-- Project details + Links -->
    <section class="py-12 sm:py-16">
      <Container>
        <div class="scroll-reveal grid gap-10 md:grid-cols-2">
          <!-- Details -->
          <div class="space-y-6">
            <div v-if="project.role">
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-ink-600 mb-1">Role</p>
              <p class="text-ink-800 font-medium">{{ project.role }}</p>
            </div>
            <div v-if="project.client">
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-ink-600 mb-1">Client</p>
              <p class="text-ink-800 font-medium">{{ project.client }}</p>
            </div>
            <div v-if="project.year">
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-ink-600 mb-1">Year</p>
              <p class="text-ink-800 font-medium">{{ project.year }}</p>
            </div>
            <div>
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-ink-600 mb-2">Tech Stack</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-full border border-ink-300 bg-surface-raised px-3 py-1 font-mono text-[11px] text-ink-600"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Links -->
          <div class="flex flex-col gap-4 md:items-end md:justify-end">
            <Button
              v-if="project.links.demo && project.links.demo !== '#' && project.status === 'live'"
              :href="project.links.demo"
              size="lg"
            >
              View Live Site
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Button>
            <Button
              v-if="project.links.github"
              :href="project.links.github"
              variant="secondary"
              size="lg"
            >
              View Source
              <svg class="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Prev/Next navigation -->
    <section class="border-t border-ink-200/60 py-12">
      <Container>
        <div class="scroll-reveal flex items-center justify-between">
          <router-link
            v-if="adjacent.prev"
            :to="{ name: 'project-detail', params: { id: adjacent.prev.id } }"
            class="group flex items-center gap-3 text-ink-500 hover:text-ink-950 transition-colors"
          >
            <svg class="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M5 12l5-5M5 12l5 5" />
            </svg>
            <div class="text-left">
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">Previous</p>
              <p class="font-medium text-sm">{{ adjacent.prev.title }}</p>
            </div>
          </router-link>
          <div v-else></div>

          <router-link
            v-if="adjacent.next"
            :to="{ name: 'project-detail', params: { id: adjacent.next.id } }"
            class="group flex items-center gap-3 text-ink-500 hover:text-ink-950 transition-colors"
          >
            <div class="text-right">
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">Next</p>
              <p class="font-medium text-sm">{{ adjacent.next.title }}</p>
            </div>
            <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M19 12l-5-5M19 12l-5 5" />
            </svg>
          </router-link>
          <div v-else></div>
        </div>
      </Container>
    </section>
  </div>
</template>
