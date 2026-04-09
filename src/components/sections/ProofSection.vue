<script setup>
defineProps({
  proof: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="section-shell grid gap-6 pt-2 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
    <div class="rounded-[1.8rem] border border-[var(--line-strong)] bg-[var(--surface)] p-6 shadow-[0_18px_42px_rgba(32,24,16,0.06)] sm:p-8">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Recognition
        </p>
        <h2 class="mt-3 max-w-2xl text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
          Proof points that support credibility beyond the project grid.
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-7 text-[var(--ink-soft)]">
          Awards, conference abstracts, and organization roles help show academic performance, domain exposure, and professional involvement.
        </p>
      </div>

      <div class="mt-8 grid gap-4 md:grid-cols-3">
        <article
          v-for="item in proof.highlights"
          :key="item.title"
          class="flex h-full flex-col rounded-[1.35rem] border border-[var(--line)] bg-[var(--surface-raised)] p-5"
        >
          <p class="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            {{ item.label }}
          </p>
          <h3 class="mt-3 text-[1.2rem] leading-[1.2] font-semibold text-[var(--ink-strong)] sm:text-[1.35rem]">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-sm leading-7 text-[var(--ink-muted)]">
            {{ item.description }}
          </p>
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
            rel="noreferrer"
            class="mt-auto pt-4 text-sm font-medium text-[var(--accent)] underline decoration-[rgba(27,110,97,0.28)] underline-offset-4 transition hover:decoration-[var(--accent)]"
          >
            {{ item.linkLabel || 'View' }}
          </a>
        </article>
      </div>
    </div>

    <aside class="rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface-panel-soft)] p-6 text-[var(--ink-strong)] shadow-[0_18px_42px_rgba(32,24,16,0.05)] sm:p-8">
      <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
        Public Profiles
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
          class="rounded-[1.2rem] border border-[var(--line)] bg-[var(--surface-panel)] p-4 text-[var(--ink-strong)] transition hover:-translate-y-0.5 hover:border-[var(--line-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
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
