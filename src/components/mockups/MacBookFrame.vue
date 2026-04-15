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

const nativeWidth = 1440

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
  <div class="w-full">
    <!-- Lid: bezel + screen -->
    <div class="relative bg-[#1a1a1a] rounded-t-[14px] p-[10px] pb-[10px] shadow-2xl">
      <!-- Notch (camera bump) -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[14%] h-[14px] bg-[#1a1a1a] rounded-b-[8px] z-20 flex items-center justify-center">
        <div class="w-1 h-1 rounded-full bg-[#0a0a0a] ring-[0.5px] ring-[#222]"></div>
      </div>

      <!-- Screen -->
      <div
        ref="screenRef"
        class="relative overflow-hidden bg-white rounded-[3px]"
        style="aspect-ratio: 16/10;"
      >
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
                height: '4500px',
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
              alt="Desktop preview"
              class="absolute top-0 left-0 w-full animate-mockup-scroll"
              :class="{ 'pause-animation': !isVisible }"
            />
          </div>
        </template>

        <!-- Fallback placeholder -->
        <template v-else>
          <div class="flex h-full items-center justify-center bg-surface-sunken">
            <p class="text-ink-400 text-sm">Preview unavailable</p>
          </div>
        </template>
      </div>
    </div>

    <!-- Base: keyboard deck — pixel-based outward extension for sub-pixel safety -->
    <div class="relative" style="width: calc(100% + 12px); margin-left: -6px;">
      <!-- Hinge gap (subtle dark line where lid meets base) — inset to match lid edges -->
      <div class="h-[3px] bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]" style="margin-left: 6px; margin-right: 6px;"></div>

      <!-- Base body with subtle gradient like aluminum -->
      <div class="relative h-[14px] bg-gradient-to-b from-[#c8ccd0] via-[#a8acb0] to-[#8b8f93] rounded-b-[6px] shadow-md">
        <!-- Trackpad indent (subtle dark notch at center bottom) -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[18%] h-[5px] bg-gradient-to-b from-[#7a7e82] to-[#5a5e62] rounded-b-[4px]"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pause-animation :deep(*),
.pause-animation :where(iframe, img) {
  animation-play-state: paused !important;
}
</style>
