<script setup>
defineProps({
  contact: {
    type: Object,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section
    id="contact"
    class="section-shell grid gap-8 rounded-[2rem] border border-[var(--line)] bg-[var(--surface-panel-strong)] p-6 text-[var(--ink-strong)] shadow-[0_22px_60px_rgba(21,38,35,0.24)] sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]"
  >
    <div class="space-y-5">
      <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
        Contact
      </p>
      <h2 class="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
        {{ contact.title }}
      </h2>
      <p class="max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
        {{ contact.intro }}
      </p>
      <p class="max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
        {{ contact.availability }}
      </p>

      <div class="flex flex-wrap gap-4">
        <a
          :href="contact.primaryCta.url"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          style="background: var(--button-primary-bg); color: var(--button-primary-text);"
        >
          {{ contact.primaryCta.label }}
        </a>

        <a
          :href="contact.secondaryCta.url"
          class="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] px-6 py-3.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          style="background: var(--button-secondary-bg); color: var(--button-secondary-text);"
        >
          {{ contact.secondaryCta.label }}
        </a>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-4 py-2 text-sm text-[var(--ink-soft)]">
          {{ profile.location }}
        </span>
        <span class="rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-4 py-2 text-sm text-[var(--ink-soft)]">
          {{ profile.currentRole }}
        </span>
      </div>
    </div>

    <div class="grid gap-4">
      <a
        v-for="item in contact.links"
        :key="item.label"
        :href="item.url"
        target="_blank"
        rel="noreferrer"
        class="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-panel)] p-5 text-[var(--ink-strong)] transition hover:-translate-y-1 hover:border-[var(--line-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          {{ item.label }}
        </p>
        <p class="mt-3 text-lg font-medium text-[var(--ink-strong)]">
          {{ item.description }}
        </p>
      </a>
    </div>
  </section>
</template>
