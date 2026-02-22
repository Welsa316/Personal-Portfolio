<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  center?: boolean
}>()
</script>

<template>
  <div :class="center ? 'text-center' : ''" class="mb-12">
    <h2 class="font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 max-w-2xl text-lg text-ink-500" :class="center ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>
