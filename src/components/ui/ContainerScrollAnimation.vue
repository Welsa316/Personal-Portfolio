<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
const scrollProgress = ref(0)
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth <= 768
}

function onScroll() {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const elementHeight = rect.height

  // 0 when element top enters viewport bottom, 1 when element bottom exits viewport top
  const progress = (windowHeight - rect.top) / (windowHeight + elementHeight)
  scrollProgress.value = Math.max(0, Math.min(1, progress))
}

const rotate = computed(() => 20 - 20 * scrollProgress.value)
const scale = computed(() =>
  isMobile.value ? 0.7 + 0.2 * scrollProgress.value : 1.05 - 0.05 * scrollProgress.value
)
const translateY = computed(() => -100 * scrollProgress.value)

const cardStyle = computed(() => ({
  transform: `perspective(1000px) rotateX(${rotate.value}deg) scale(${scale.value})`,
  boxShadow:
    '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
}))

const headerStyle = computed(() => ({
  transform: `translateY(${translateY.value}px)`,
}))

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div
    ref="containerRef"
    class="h-[55rem] md:h-[70rem] flex items-center justify-center relative p-2 md:p-20"
  >
    <div class="py-10 md:py-32 w-full relative" style="perspective: 1000px">
      <div :style="headerStyle" class="max-w-5xl mx-auto text-center mb-8">
        <slot name="title" />
      </div>
      <div
        :style="cardStyle"
        class="max-w-5xl -mt-12 mx-auto h-[28rem] md:h-[38rem] w-full border-4 border-ink-300/40 p-2 md:p-4 bg-ink-950 rounded-[30px] shadow-2xl"
      >
        <div class="h-full w-full overflow-hidden rounded-2xl bg-surface">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
