import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollReveal(options = {}) {
  const el = ref(null)
  let observer = null

  onMounted(() => {
    if (!el.value) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = el.value.getBoundingClientRect()
    const alreadyVisible = rect.top < window.innerHeight * 0.98

    if (alreadyVisible) return

    el.value.classList.add('will-reveal')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('will-reveal')
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06, ...options },
    )

    observer.observe(el.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { el }
}
