<script setup lang="ts">
// One drawn arrow for every "view / next / explore" affordance, so the site speaks
// a single interaction signature instead of mixing raw → glyphs with SVG strokes.
// Sized in em so it scales with the surrounding text.
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    class="h-[1em] w-[1em]"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
</template>
