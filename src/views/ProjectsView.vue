<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import IconArrow from '@/components/ui/IconArrow.vue'
import { projects, categoryLabels, type Project } from '@/data/projects'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSiteHead } from '@/composables/useSiteHead'

useScrollReveal()
useSiteHead({
  title: 'Projects',
  description:
    'Selected works by Walid Elsayed. Restaurant, education, and bilingual law-firm websites built with Vue, React, and Tailwind CSS.',
})

// Bento placement per project (index → responsive span classes). Five projects
// pack into a 4-column grid: one large feature, then varied tiles. Update in
// lockstep with the number of projects so the grid stays hole-free.
const spans = [
  'md:col-span-2 md:row-span-2', // 0 — feature
  'md:col-span-2', // 1
  'md:col-span-1', // 2
  'md:col-span-1', // 3
  'md:col-span-2', // 4
]

// Live domain for the feature tile's browser chrome — signals a real, shipped site.
// Runs identically in the vite-ssg Node prerender and in the browser.
function host(p: Project): string {
  try {
    return new URL(p.links.demo ?? '').hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}
</script>

<template>
  <section class="py-20 sm:py-28 lg:py-32">
    <Container>
      <header class="scroll-reveal mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
        <div>
          <p class="eyebrow mb-4">Portfolio · New Orleans</p>
          <h1 class="text-balance font-hero text-5xl font-bold uppercase leading-[0.95] tracking-tight text-ink-950 sm:text-7xl">
            Selected<br />Works
          </h1>
        </div>
        <p class="max-w-sm text-pretty text-lg leading-relaxed text-ink-500">
          Every project here was hand-built for a real business. Open any one for the full case
          study, live device previews and all.
        </p>
      </header>

      <div class="bento-grid cascade scroll-reveal">
        <router-link
          v-for="(p, i) in projects"
          :key="p.id"
          :to="{ name: 'project-detail', params: { id: p.id } }"
          class="bento-tile group flex flex-col overflow-hidden rounded-card border border-ink-300 bg-surface-raised"
          :class="[spans[i] || 'md:col-span-1', i === 0 ? 'is-feature' : '']"
          :style="{ '--i': i }"
          :aria-label="`View ${p.title} project`"
        >
          <!-- Media shelf: the screenshot framed inside a browser window, never touching text -->
          <div class="flex shrink-0 bg-surface-sunken md:flex-1" :class="i === 0 ? 'p-5 sm:p-6' : 'p-3 sm:p-4'">
            <div class="flex w-full flex-col overflow-hidden rounded-md border border-ink-300/60 bg-surface shadow-card">
              <div class="flex h-7 shrink-0 items-center gap-1.5 border-b border-ink-200 px-3">
                <span class="h-2 w-2 rounded-full bg-ink-300"></span>
                <span class="h-2 w-2 rounded-full bg-ink-300"></span>
                <span class="h-2 w-2 rounded-full bg-ink-300"></span>
                <span
                  v-if="i === 0 && host(p)"
                  class="mx-auto max-w-[62%] truncate rounded bg-surface-sunken px-2 py-0.5 font-mono text-[10px] text-ink-500"
                >{{ host(p) }}</span>
              </div>
              <div class="relative aspect-[16/10] overflow-hidden md:aspect-auto md:flex-1">
                <img
                  v-if="p.desktopScreenshot"
                  :src="p.desktopScreenshot"
                  :alt="`${p.title} website screenshot`"
                  loading="lazy"
                  class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>

          <!-- Text plate: solid surface, zero overlap with the screenshot -->
          <div class="flex shrink-0 flex-col gap-1.5 px-5 py-4 sm:px-6 sm:py-5">
            <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light sm:text-[11px]">
              {{ categoryLabels[p.category] }}
            </p>
            <h2
              class="text-balance font-hero font-bold uppercase leading-[0.98] tracking-tight text-ink-950"
              :class="i === 0 ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-xl sm:text-2xl'"
            >
              {{ p.title }}
            </h2>
            <div v-if="i === 0" class="mt-1 flex flex-wrap items-center gap-2">
              <span
                v-for="t in p.tags.slice(0, 3)"
                :key="t"
                class="rounded-full border border-ink-300 px-2.5 py-0.5 font-mono text-[10px] text-ink-500"
              >{{ t }}</span>
              <span class="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-700 transition-colors group-hover:text-accent-light">
                View
                <IconArrow class="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </router-link>

        <!-- CTA tile fills the trailing row -->
        <router-link
          :to="{ name: 'contact' }"
          class="bento-tile cta-tile group flex flex-col justify-between rounded-card border border-ink-300 bg-surface-sunken p-6 sm:p-8 md:col-span-2"
          :style="{ '--i': projects.length }"
          aria-label="Get in touch about a project"
        >
          <p class="eyebrow">Next</p>
          <div>
            <h2 class="font-display text-3xl leading-tight text-ink-950 sm:text-4xl">
              Have a project in mind?
            </h2>
            <p class="mt-3 inline-flex items-center gap-1.5 font-semibold text-accent-light">
              Let's build it
              <IconArrow class="transition-transform duration-200 group-hover:translate-x-1" />
            </p>
          </div>
        </router-link>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 260px;
    gap: 20px;
  }
}

.bento-tile {
  outline: none;
  min-height: 300px;
  transition:
    border-color 0.3s ease,
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.is-feature {
  min-height: 360px;
}
@media (min-width: 768px) {
  .bento-tile {
    min-height: 0;
  }
}
.bento-tile:hover {
  transform: translateY(-4px);
  border-color: theme('colors.accent.DEFAULT');
  box-shadow: 0 18px 40px -24px rgba(0, 0, 0, 0.75);
}
.bento-tile:focus-visible {
  outline: none;
  border-color: theme('colors.accent.DEFAULT');
  box-shadow: 0 0 0 2px theme('colors.accent.DEFAULT');
}
</style>
