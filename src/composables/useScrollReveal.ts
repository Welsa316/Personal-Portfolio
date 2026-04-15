import { onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollReveal(rootRef?: Ref<HTMLElement | null>, threshold = 0.1) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    const root = rootRef?.value ?? document
    root.querySelectorAll('.scroll-reveal').forEach((el) => observer!.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
