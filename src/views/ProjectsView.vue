<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import { projects, categoryLabels } from '@/data/projects'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSiteHead } from '@/composables/useSiteHead'

useScrollReveal()
useSiteHead({
  title: 'Projects',
  description:
    'Selected works by Walid Elsayed — restaurant, education, and bilingual law-firm websites built with Vue, React, and Tailwind CSS.',
})

// Bento placement per project (index → responsive span classes). Five projects
// pack into a 4-column grid: one large feature, then varied tiles.
const spans = [
  'md:col-span-2 md:row-span-2', // 0 — feature
  'md:col-span-2', // 1
  'md:col-span-1', // 2
  'md:col-span-1', // 3
  'md:col-span-2', // 4
]
</script>

<template>
  <section class="py-20 sm:py-28">
    <Container>
      <header class="scroll-reveal mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
        <div>
          <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent-light">
            Portfolio · New Orleans
          </p>
          <h1 class="font-hero text-5xl font-bold uppercase leading-[0.95] tracking-tight text-ink-950 sm:text-7xl">
            Selected<br />Works
          </h1>
        </div>
        <p class="max-w-sm text-lg leading-relaxed text-ink-500">
          Every project hand-built for a real business — hover any tile to explore, click through
          for the full case with live device previews.
        </p>
      </header>

      <div class="bento-grid scroll-reveal">
        <router-link
          v-for="(p, i) in projects"
          :key="p.id"
          :to="{ name: 'project-detail', params: { id: p.id } }"
          class="bento-tile group"
          :class="[spans[i] || 'md:col-span-1', i === 0 ? 'is-feature' : '']"
          :aria-label="`View ${p.title} project details`"
        >
          <img
            v-if="p.desktopScreenshot"
            :src="p.desktopScreenshot"
            :alt="`${p.title} — website preview`"
            loading="lazy"
            class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
          <div class="tile-scrim"></div>
          <div class="relative flex h-full flex-col justify-end gap-2 p-5 sm:p-6">
            <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
              {{ categoryLabels[p.category] }}
            </p>
            <h2
              class="font-hero font-bold uppercase leading-[0.98] tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-0.5"
              :class="i === 0 ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-3xl'"
            >
              {{ p.title }}
            </h2>
            <div class="flex flex-wrap items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span
                v-for="t in p.tags.slice(0, i === 0 ? 4 : 2)"
                :key="t"
                class="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 font-mono text-[10px] text-white/90 backdrop-blur-sm"
              >{{ t }}</span>
              <span class="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-white">
                View
                <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>
        </router-link>

        <!-- CTA tile fills the grid -->
        <router-link
          :to="{ name: 'contact' }"
          class="bento-tile cta-tile group md:col-span-2"
          aria-label="Get in touch"
        >
          <div class="relative flex h-full flex-col justify-between gap-4 p-6 sm:p-8">
            <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">Next</p>
            <div>
              <h2 class="font-display text-3xl leading-tight text-ink-950 sm:text-4xl">
                Have a project in mind?
              </h2>
              <p class="mt-3 inline-flex items-center gap-2 font-semibold text-accent-light">
                Let's build it
                <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </p>
            </div>
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
    grid-auto-rows: 220px;
    gap: 20px;
  }
}

.bento-tile {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid theme('colors.ink.200');
  background: theme('colors.surface.raised');
  min-height: 260px;
  outline: none;
  transition: border-color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
@media (min-width: 768px) {
  .bento-tile {
    min-height: 0;
  }
}
.bento-tile:hover {
  border-color: theme('colors.accent.DEFAULT');
  transform: translateY(-3px);
}
.bento-tile:focus-visible {
  border-color: theme('colors.accent.DEFAULT');
  box-shadow: 0 0 0 2px theme('colors.accent.DEFAULT');
}

/* image scrim so overlaid text stays legible on any screenshot */
.tile-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10, 8, 6, 0.92) 0%, rgba(10, 8, 6, 0.45) 42%, rgba(10, 8, 6, 0.08) 100%);
  pointer-events: none;
}

.cta-tile {
  background: theme('colors.surface.sunken');
}
</style>
