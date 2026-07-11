<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import SelectedWorksAccordion from '@/components/projects/SelectedWorksAccordion.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSiteHead } from '@/composables/useSiteHead'

useScrollReveal()
useSiteHead({
  title: 'Projects',
  description:
    'Selected works by Walid Elsayed — restaurant, education, and bilingual law-firm websites built with Vue, React, and Tailwind CSS. Open each to see the live site.',
})
</script>

<template>
  <section class="py-20 sm:py-28">
    <Container>
      <header class="scroll-reveal mb-12 sm:mb-16">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent-light">
          Portfolio · New Orleans
        </p>
        <h1 class="font-hero text-5xl font-bold leading-[0.95] tracking-tight text-ink-950 sm:text-7xl">
          Selected Works
        </h1>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
          Open a project to see the site up close — then dive into the full build with
          live, scrolling device previews.
        </p>
      </header>

      <div class="scroll-reveal">
        <SelectedWorksAccordion />
      </div>
    </Container>
  </section>
</template>
