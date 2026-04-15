<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps<{
  demoUrl?: string
  screenshot?: string
  iframeAllowed: boolean
}>()

const screenRef = ref<HTMLElement | null>(null)
const scaleFactor = ref(1)
const isVisible = ref(false)
const iframeLoaded = ref(false)

const nativeWidth = 375

const useIframe = computed(() => props.iframeAllowed && props.demoUrl)

let resizeObserver: ResizeObserver | null = null
let intersectionObserver: IntersectionObserver | null = null

function updateScale() {
  if (screenRef.value) {
    scaleFactor.value = screenRef.value.clientWidth / nativeWidth
  }
}

onMounted(() => {
  if (screenRef.value) {
    resizeObserver = new ResizeObserver(updateScale)
    resizeObserver.observe(screenRef.value)
    updateScale()

    intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    intersectionObserver.observe(screenRef.value)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  intersectionObserver?.disconnect()
})
</script>

<template>
  <div class="relative bg-[#1a1a1a] rounded-[12%/6%] p-[3%] shadow-2xl">
    <!-- Side buttons (right side: power) -->
    <div class="absolute right-[-2px] top-[22%] w-[3px] h-[10%] bg-[#0a0a0a] rounded-r-sm"></div>
    <!-- Side buttons (left side: volume) -->
    <div class="absolute left-[-2px] top-[18%] w-[3px] h-[6%] bg-[#0a0a0a] rounded-l-sm"></div>
    <div class="absolute left-[-2px] top-[28%] w-[3px] h-[6%] bg-[#0a0a0a] rounded-l-sm"></div>

    <!-- Screen area -->
    <div
      ref="screenRef"
      class="relative overflow-hidden rounded-[10%/5%] bg-white"
      style="aspect-ratio: 9/19.5;"
    >
      <!-- Dynamic Island -->
      <div class="absolute top-[2%] left-1/2 -translate-x-1/2 w-[32%] h-[3.5%] rounded-full bg-[#0a0a0a] z-20"></div>

      <!-- Iframe mode -->
      <template v-if="useIframe">
        <div
          class="absolute inset-0 overflow-hidden"
          :class="{ 'pause-animation': !isVisible }"
        >
          <iframe
            v-if="isVisible || iframeLoaded"
            :src="demoUrl"
            :style="{
              width: nativeWidth + 'px',
              height: '3500px',
              transform: `scale(${scaleFactor})`,
              transformOrigin: 'top left',
            }"
            class="absolute top-0 left-0 animate-mockup-scroll"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            @load="iframeLoaded = true"
          />
        </div>
      </template>

      <!-- Screenshot mode -->
      <template v-else-if="screenshot">
        <div class="absolute inset-0 overflow-hidden">
          <img
            :src="screenshot"
            alt="Mobile preview"
            class="absolute top-0 left-0 w-full animate-mockup-scroll"
            :class="{ 'pause-animation': !isVisible }"
          />
        </div>
      </template>

      <!-- Fallback placeholder -->
      <template v-else>
        <div class="flex h-full items-center justify-center bg-surface-sunken">
          <p class="text-ink-400 text-xs">Preview unavailable</p>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.pause-animation :deep(*),
.pause-animation :where(iframe, img) {
  animation-play-state: paused !important;
}
</style>
