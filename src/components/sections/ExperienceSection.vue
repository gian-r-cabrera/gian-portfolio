<script setup>
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
  <section id="experience" class="section-shell grid gap-8 pt-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
    <div class="space-y-6 rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_18px_42px_rgba(32,24,16,0.06)] sm:p-8">
      <div class="space-y-3">
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Experience
        </p>
        <h2 class="text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
          Experience in analytics products where clarity affects decisions.
        </h2>
      </div>

      <div class="space-y-5">
        <article
          v-for="item in experience"
          :key="`${item.company}-${item.role}`"
          class="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-raised)] p-5"
        >
          <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <p class="text-xl font-semibold text-[var(--ink-strong)]">
                {{ item.company }}
              </p>
              <p class="text-base text-[var(--ink-soft)]">
                {{ item.role }}
              </p>
              <p class="mt-2 max-w-2xl text-sm leading-6 text-[var(--ink-muted)]">
                {{ item.summary }}
              </p>
            </div>

            <span class="text-sm font-medium uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              {{ item.dates }}
            </span>
          </div>

          <ul class="mt-4 space-y-3 text-[var(--ink-soft)]">
            <li
              v-for="highlight in item.highlights"
              :key="highlight"
              class="flex gap-3 leading-7"
            >
              <span class="mt-2 h-2 w-2 flex-none rounded-full bg-[var(--accent)]" />
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
        <p class="mt-4 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
          I am strongest when the work sits between frontend implementation, analytics communication, and a real operational use case.
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
            Decision-support UX
          </span>
        </div>
      </div>

      <div class="grid gap-5">
        <article
          v-for="group in skills"
          :key="group.title"
          class="rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface)] p-6 text-[var(--ink-strong)]"
        >
          <h3 class="text-xl font-semibold text-[var(--ink-strong)]">
            {{ group.title }}
          </h3>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-3 py-1.5 text-sm text-[var(--ink-strong)]"
            >
              {{ item }}
            </span>
          </div>
        </article>
      </div>
    </aside>
  </section>
</template>
