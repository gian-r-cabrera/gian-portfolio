<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal'

const props = defineProps({
  about: {
    type: Object,
    required: true,
  },
})

const { el } = useScrollReveal()
</script>

<template>
  <section
    ref="el"
    id="about"
    class="about-shell section-shell grid gap-10 rounded-[2rem] border border-[var(--line-strong)]/90 bg-[var(--surface)] p-6 sm:p-8"
  >
    <div class="space-y-6">
      <div class="flex flex-wrap items-center gap-3">
        <span
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--line-strong)] bg-[var(--surface-raised)] text-[var(--accent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <path d="M8 7h8M8 11h5" />
          </svg>
        </span>
        <p class="section-label text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          {{ about.sectionLabel ?? 'About' }}
        </p>
      </div>

      <div class="h-px max-w-xs bg-gradient-to-r from-[var(--accent)]/50 to-transparent" aria-hidden="true" />

      <h2 class="max-w-2xl text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
        {{ about.title }}
      </h2>

      <p v-if="about.paragraphs?.length" class="max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
        {{ about.paragraphs[0] }}
      </p>

      <div class="grid gap-2 sm:grid-cols-3">
        <span
          v-for="item in about.differentiators"
          :key="item"
          class="exp-skill-pill !flex h-auto min-h-0 w-full items-start justify-center py-3.5 text-left leading-snug"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>
