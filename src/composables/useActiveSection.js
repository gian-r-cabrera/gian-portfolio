import { onMounted, onUnmounted, ref } from 'vue'

const getScrollOffset = () => {
  const header = document.querySelector('[data-site-header]')
  const height = header?.getBoundingClientRect().height ?? 0
  return Math.max(100, Math.round(height + 24))
}

export function useActiveSection(sectionIds) {
  const activeSection = ref(sectionIds[0] || '')

  const updateActiveSection = () => {
    const position = window.scrollY + getScrollOffset()
    let current = sectionIds[0]

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue
      if (el.offsetTop <= position) {
        current = id
      }
    }

    activeSection.value = current
  }

  onMounted(() => {
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
    window.removeEventListener('resize', updateActiveSection)
  })

  return { activeSection }
}
