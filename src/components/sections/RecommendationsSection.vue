<script setup>
defineProps({
  recommendations: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="section-shell space-y-6 pt-2">
    <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Recommendations
        </p>
        <h2 class="mt-3 text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
          Placeholder endorsements you can replace with real testimonials.
        </h2>
      </div>
      <p class="max-w-md text-base leading-7 text-[var(--ink-soft)]">
        Add short quotes from teammates, mentors, managers, or professors. One strong sentence is usually enough.
      </p>
    </div>

    <div class="grid gap-5 lg:grid-cols-3">
      <article
        v-for="item in recommendations"
        :key="`${item.name}-${item.role}`"
        class="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_38px_rgba(32,24,16,0.05)]"
      >
        <p class="text-base leading-8 text-[var(--ink-soft)]">
          "{{ item.quote }}"
        </p>
        <div class="mt-6 border-t border-[rgba(24,71,62,0.08)] pt-4">
          <p class="text-base font-semibold text-[var(--ink-strong)]">
            {{ item.name }}
          </p>
          <p class="text-sm leading-6 text-[var(--ink-muted)]">
            {{ item.role }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
