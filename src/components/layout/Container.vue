<script setup lang="ts">
defineProps<{
  narrow?: boolean
}>()
</script>

<template>
  <div
    class="mx-auto w-full px-6"
    :class="narrow ? 'max-w-3xl' : 'max-w-6xl'"
  >
    <slot />
  </div>
</template>
