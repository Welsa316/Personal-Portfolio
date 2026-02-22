<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <section class="flex min-h-[60vh] items-center py-20">
    <Container narrow>
      <div class="text-center">
        <p class="font-mono text-6xl font-bold text-accent">404</p>
        <h1 class="mt-4 font-display text-3xl text-ink-950">Page Not Found</h1>
        <p class="mt-3 text-ink-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div class="mt-8">
          <Button :to="{ name: 'home' }" size="lg">Back to Home</Button>
        </div>
      </div>
    </Container>
  </section>
</template>
