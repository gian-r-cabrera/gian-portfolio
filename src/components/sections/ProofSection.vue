<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal'

defineProps({
  proof: {
    type: Object,
    required: true,
  },
})

const { el } = useScrollReveal()

const iconPaths = {
  award: 'M12 2.8l2.4 5 5.5.7-4 3.8 1 5.4-4.9-2.6-4.9 2.6 1-5.4-4-3.8 5.5-.7L12 2.8z',
  research:
    'M4.5 5.8h7.4M4.5 9.2h7.4M4.5 12.6h5.2M13.7 14.8l2.2 2.2M15.4 12.4a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  org: 'M7.5 7.5h9M7.5 12h9M7.5 16.5h9M4.5 7.5h.01M4.5 12h.01M4.5 16.5h.01',
}
</script>

<template>
  <section ref="el" class="section-shell grid gap-6 pt-2 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-start">
    <div class="rounded-[1.8rem] border border-[var(--line-strong)] bg-[var(--surface)] p-6 shadow-[0_18px_42px_rgba(32,24,16,0.06)] sm:p-8">
      <div class="max-w-3xl">
        <p class="section-label text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Recognition
        </p>
        <h2 class="mt-3 max-w-2xl text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
          Proof points that support credibility beyond the project grid.
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-7 text-[var(--ink-soft)]">
          Awards, conference abstracts, and organization roles help show academic performance, domain exposure, and professional involvement.
        </p>
      </div>

      <div class="mt-8 grid gap-4">
        <article
          v-for="item in proof.highlights"
          :key="item.title"
          class="hover-card flex items-start gap-4 rounded-[1.35rem] border border-[var(--line)] bg-[var(--surface-raised)] p-5"
        >
          <div class="flex h-12 w-12 flex-none items-center justify-center rounded-[1.05rem] border border-[var(--line)] bg-[var(--surface-panel)] text-[var(--accent)]">
            <img
              v-if="item.thumb"
              :src="item.thumb"
              :alt="`${item.title} thumbnail`"
              class="h-full w-full rounded-[0.9rem] object-cover"
              loading="lazy"
            />
            <svg
              v-else
              aria-hidden="true"
              viewBox="0 0 24 24"
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path :d="iconPaths[item.icon] || iconPaths.org" />
            </svg>
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-baseline justify-between gap-3">
              <p class="text-label text-[var(--accent)]">
                {{ item.label }}
              </p>
              <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                rel="noreferrer"
                class="text-sm font-medium text-[var(--accent)] underline decoration-[rgba(27,110,97,0.28)] underline-offset-4 transition hover:decoration-[var(--accent)]"
              >
                {{ item.linkLabel || 'View' }} →
              </a>
            </div>
            <h3 class="mt-2 text-[1.25rem] leading-[1.2] font-semibold text-[var(--ink-strong)] sm:text-[1.35rem]">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </div>

    <aside class="rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface-panel-soft)] p-6 text-[var(--ink-strong)] shadow-[0_18px_42px_rgba(32,24,16,0.05)] sm:p-8">
      <p class="section-label text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
        Quick Access
      </p>
      <p class="mt-4 max-w-md text-base leading-7 text-[var(--ink-soft)]">
        Quick access to the profiles and documents most relevant to hiring conversations.
      </p>
      <div class="mt-6 grid gap-4">
        <a
          v-for="item in proof.profiles"
          :key="item.label"
          :href="item.url"
          target="_blank"
          rel="noreferrer"
          class="hover-card rounded-[1.2rem] border border-[var(--line)] bg-[var(--surface-panel)] p-5 text-[var(--ink-strong)] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <p class="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
            {{ item.label }}
          </p>
          <p class="mt-2 text-base font-medium text-[var(--ink-strong)]">
            {{ item.handle }}
          </p>
          <p class="mt-1 text-sm leading-6 text-[var(--ink-soft)]">
            {{ item.description }}
          </p>
        </a>
      </div>

    </aside>
  </section>
</template>
