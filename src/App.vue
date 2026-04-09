<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ProofSection from './components/sections/ProofSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import RecommendationsSection from './components/sections/RecommendationsSection.vue'
import {
  about,
  contact,
  experience,
  navigation,
  profile,
  proof,
  projects,
  recommendations,
  skills,
} from './data/portfolio'

const year = new Date().getFullYear()
const theme = ref('light')

const themeLabel = computed(() =>
  theme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
)

const applyTheme = (value) => {
  theme.value = value
  document.documentElement.dataset.theme = value
  window.localStorage.setItem('portfolio-theme', value)
}

const toggleTheme = () => {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  const savedTheme = window.localStorage.getItem('portfolio-theme')
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(savedTheme || (preferredDark ? 'dark' : 'light'))

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }

  if (!window.location.hash) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
  }
})

watch(theme, (value) => {
  document.documentElement.dataset.theme = value
})
</script>

<template>
  <div class="relative isolate overflow-hidden pb-12">
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[34rem] max-w-6xl">
      <div class="absolute left-0 top-16 h-64 w-64 rounded-full bg-[rgba(27,110,97,0.12)] blur-3xl" />
      <div class="absolute right-0 top-36 h-72 w-72 rounded-full bg-[rgba(186,111,77,0.12)] blur-3xl" />
    </div>

    <SiteHeader
      :navigation="navigation"
      :profile="profile"
      :theme="theme"
      :theme-label="themeLabel"
      @toggle-theme="toggleTheme"
    />

    <main class="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-12 pt-6 sm:px-6 lg:px-10">
      <HeroSection :profile="profile" />
      <ProofSection :proof="proof" />
      <ProjectsSection :projects="projects" />
      <ExperienceSection :experience="experience" :skills="skills" />
      <AboutSection :about="about" />
      <RecommendationsSection :recommendations="recommendations" />
      <ContactSection :contact="contact" :profile="profile" />
    </main>

    <footer class="px-4 pb-4 text-center text-sm text-[var(--ink-muted)] sm:px-6 lg:px-10">
      <p>
        {{ year }} Gian Cabrera. Built with Vue, crafted for public health dashboards and reporting workflows.
      </p>
    </footer>
  </div>
</template>
