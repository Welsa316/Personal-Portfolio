<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
import { useSiteHead } from '@/composables/useSiteHead'

useSiteHead({ title: '404', description: 'Page not found.' })
</script>

<template>
  <section class="flex min-h-[70vh] items-center py-20 bg-surface">
    <Container narrow>
      <div class="text-center">
        <p class="eyebrow mb-4">Error 404</p>
        <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ink-950 leading-[0.95]">
          Page <span class="text-accent-light italic">not found.</span>
        </h1>
        <div class="editorial-divider mx-auto mt-10 max-w-xs"></div>
        <p class="mt-8 mx-auto max-w-md text-base sm:text-lg text-ink-700 leading-relaxed">
          The page you're looking for doesn't exist, or it moved. Check the URL,
          or head back to the homepage to start over.
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button :to="{ name: 'home' }" size="lg">Back to Home</Button>
          <Button :to="{ name: 'projects' }" variant="secondary" size="lg">See Projects</Button>
        </div>
      </div>
    </Container>
  </section>
</template>
