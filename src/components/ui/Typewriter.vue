<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string | string[]
    speed?: number
    initialDelay?: number
    waitTime?: number
    deleteSpeed?: number
    loop?: boolean
    showCursor?: boolean
    hideCursorOnType?: boolean
    cursorChar?: string
  }>(),
  {
    speed: 50,
    initialDelay: 0,
    waitTime: 2000,
    deleteSpeed: 30,
    loop: true,
    showCursor: true,
    hideCursorOnType: false,
    cursorChar: '|',
  }
)

const displayText = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)
const currentTextIndex = ref(0)
const texts = computed(() => (Array.isArray(props.text) ? props.text : [props.text]))

let timeout: ReturnType<typeof setTimeout> | null = null

function tick() {
  const currentText = texts.value[currentTextIndex.value]

  if (isDeleting.value) {
    if (displayText.value === '') {
      isDeleting.value = false
      if (currentTextIndex.value === texts.value.length - 1 && !props.loop) return
      currentTextIndex.value = (currentTextIndex.value + 1) % texts.value.length
      currentIndex.value = 0
      timeout = setTimeout(tick, props.waitTime)
    } else {
      displayText.value = displayText.value.slice(0, -1)
      timeout = setTimeout(tick, props.deleteSpeed)
    }
  } else {
    if (currentIndex.value < currentText.length) {
      displayText.value += currentText[currentIndex.value]
      currentIndex.value++
      timeout = setTimeout(tick, props.speed)
    } else if (texts.value.length > 1) {
      timeout = setTimeout(() => {
        isDeleting.value = true
        tick()
      }, props.waitTime)
    }
  }
}

timeout = setTimeout(tick, props.initialDelay)

onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
})

const cursorHidden = computed(
  () =>
    props.hideCursorOnType &&
    (currentIndex.value < texts.value[currentTextIndex.value].length || isDeleting.value)
)
</script>

<template>
  <span class="inline whitespace-pre-wrap">
    <span>{{ displayText }}</span>
    <span
      v-if="showCursor"
      class="ml-0.5 animate-cursor-blink"
      :class="{ 'opacity-0': cursorHidden }"
    >{{ cursorChar }}</span>
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
