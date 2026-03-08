<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string | string[]
    speed?: number
    cursor?: string
    loop?: boolean
    deleteSpeed?: number
    delay?: number
    initialDelay?: number
  }>(),
  {
    speed: 100,
    cursor: '|',
    loop: false,
    deleteSpeed: 50,
    delay: 1500,
    initialDelay: 0,
  }
)

const displayText = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)
const textArrayIndex = ref(0)

const textArray = computed(() => (Array.isArray(props.text) ? props.text : [props.text]))
const currentText = computed(() => textArray.value[textArrayIndex.value] || '')

let timeout: ReturnType<typeof setTimeout> | null = null

function tick() {
  if (!currentText.value) return

  if (!isDeleting.value) {
    if (currentIndex.value < currentText.value.length) {
      displayText.value += currentText.value[currentIndex.value]
      currentIndex.value++
      timeout = setTimeout(tick, props.speed)
    } else if (props.loop) {
      timeout = setTimeout(() => {
        isDeleting.value = true
        tick()
      }, props.delay)
    }
    // If not looping and done typing, just stop — cursor keeps blinking
  } else {
    if (displayText.value.length > 0) {
      displayText.value = displayText.value.slice(0, -1)
      timeout = setTimeout(tick, props.deleteSpeed)
    } else {
      isDeleting.value = false
      currentIndex.value = 0
      textArrayIndex.value = (textArrayIndex.value + 1) % textArray.value.length
      timeout = setTimeout(tick, props.speed)
    }
  }
}

timeout = setTimeout(tick, props.initialDelay)

onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
})
</script>

<template>
  <span class="inline">
    <span>{{ displayText }}</span>
    <span v-if="cursor" class="animate-cursor-blink">{{ cursor }}</span>
  </span>
</template>

<style scoped>
@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-cursor-blink {
  animation: cursorBlink 0.8s step-end infinite;
}
</style>
