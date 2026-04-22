import { onMounted, onUnmounted, ref } from 'vue'

export function useActiveSection(sectionIds) {
  const activeSection = ref('')
  let observer = null

  onMounted(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

    if (!sections.length) return

    observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting)
        if (!intersecting.length) return

        const best = intersecting.reduce((a, b) => {
          if (b.intersectionRatio !== a.intersectionRatio) {
            return b.intersectionRatio > a.intersectionRatio ? b : a
          }
          return a.boundingClientRect.top <= b.boundingClientRect.top ? a : b
        })

        activeSection.value = best.target.id
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { activeSection }
}
