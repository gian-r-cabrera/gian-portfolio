<script setup>
const currentLabel = 'present'

defineProps({
  experience: {
    type: Array,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section id="experience" class="section-shell grid gap-10 pt-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
    <div class="space-y-6 rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_18px_42px_rgba(32,24,16,0.06)] sm:p-8">
      <div class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Experience
        </p>
        <h2 class="text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
          Experience in analytics products where clarity affects decisions.
        </h2>
      </div>

      <div class="space-y-4">
        <article
          v-for="item in experience"
          :key="`${item.company}-${item.role}`"
          :class="[
            'rounded-[1.6rem] border p-5',
            item.dates.toLowerCase().includes(currentLabel)
              ? 'border-[var(--line-strong)] bg-[var(--surface-panel-soft)] shadow-[0_12px_28px_rgba(32,24,16,0.06)]'
              : 'border-[var(--line)] bg-[var(--surface-raised)]',
          ]"
        >
          <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <p class="text-[1.05rem] font-semibold leading-7 text-[var(--ink-strong)]">
                {{ item.company }}
              </p>
              <p class="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                {{ item.role }}
              </p>
              <p class="mt-2 max-w-2xl text-sm leading-[1.65] text-[var(--ink-muted)]">
                {{ item.summary }}
              </p>
            </div>

            <span class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)] md:text-right">
              {{ item.dates }}
            </span>
          </div>

          <ul class="mt-4 space-y-2.5 text-[var(--ink-soft)]">
            <li
              v-for="highlight in item.highlights"
              :key="highlight"
              class="flex gap-3 leading-[1.7]"
            >
              <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>

    <aside class="space-y-5">
      <div class="rounded-[2rem] border border-[var(--line)] bg-[var(--surface-panel-strong)] p-6 text-[var(--ink-strong)] shadow-[0_18px_42px_rgba(21,38,35,0.24)] sm:p-8">
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Why This Fits
        </p>
        <p class="mt-4 max-w-xl text-[1.05rem] leading-[1.75] text-[var(--ink-soft)]">
          Strongest on dashboards, reporting workflows, and data-heavy interfaces.
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
          <span class="rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-3 py-1.5 text-sm text-[var(--ink-soft)]">
            Dashboards
          </span>
          <span class="rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-3 py-1.5 text-sm text-[var(--ink-soft)]">
            KPI views
          </span>
          <span class="rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-3 py-1.5 text-sm text-[var(--ink-soft)]">
            Reporting workflows
          </span>
          <span class="rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-3 py-1.5 text-sm text-[var(--ink-soft)]">
            Data-heavy interfaces
          </span>
        </div>
      </div>

      <div class="grid gap-4">
        <article
          v-for="group in skills"
          :key="group.title"
          class="rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface)] p-5 text-[var(--ink-strong)]"
        >
          <h3 class="text-base font-semibold tracking-[-0.01em] text-[var(--ink-strong)]">
            {{ group.title }}
          </h3>

          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-3 py-1.5 text-xs text-[var(--ink-strong)]"
            >
              {{ item }}
            </span>
          </div>
        </article>
      </div>
    </aside>
  </section>
</template>
