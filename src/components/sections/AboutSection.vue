<script setup>
defineProps({
  about: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section
    id="about"
    class="section-shell grid gap-8 rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_18px_42px_rgba(32,24,16,0.06)] sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]"
  >
    <div class="space-y-5">
      <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
        About
      </p>

      <h2 class="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
        {{ about.title }}
      </h2>

      <div class="space-y-4 text-base leading-8 text-[var(--ink-soft)]">
        <p v-for="paragraph in about.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <div class="grid gap-3 sm:grid-cols-3">
        <div
          v-for="item in about.differentiators"
          :key="item"
          class="rounded-[1.15rem] border border-[var(--line)] bg-[var(--surface-panel-soft)] p-4 text-sm leading-6 text-[var(--ink-strong)]"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface-panel)] p-6 text-[var(--ink-strong)]">
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
        Working Principles
      </p>

      <ul class="mt-5 space-y-4">
        <li
          v-for="item in about.principles"
          :key="item"
          class="flex gap-3 text-base leading-7 text-[var(--ink-strong)]"
        >
          <span class="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-[var(--accent)]" />
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
