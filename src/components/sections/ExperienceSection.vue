<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal'

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

const { el } = useScrollReveal()

const isCurrentRole = (item) => item.current === true || item.dates?.toLowerCase().includes(currentLabel)
</script>

<template>
  <section
    ref="el"
    id="experience"
    class="section-shell grid gap-12 pt-6 xl:grid-cols-2 xl:items-start xl:gap-12"
  >
    <div class="space-y-6">
      <header class="space-y-3">
        <p class="section-label text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Experience
        </p>
        <h2 class="text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
          Experience.
        </h2>
        <p class="max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
          Roles and milestones where I shipped UI, reporting workflows, and data-heavy features — from internships to production work.
        </p>
      </header>

      <div
        class="experience-shell space-y-6 rounded-[2rem] border border-[var(--line-strong)]/80 bg-[var(--surface)] p-6 sm:p-8"
      >
        <div class="relative space-y-0">
        <div
          class="pointer-events-none absolute left-[0.8rem] top-10 bottom-10 hidden w-px bg-gradient-to-b from-[var(--line)]/25 via-[var(--line)]/18 to-transparent md:block"
          aria-hidden="true"
        />

        <div class="flex flex-col gap-4 md:gap-5">
          <div
            v-for="(item, index) in experience"
            :key="`${item.company}-${item.role}`"
            class="exp-entry-wrap flex items-start gap-3 md:gap-4"
          >
            <div class="relative flex w-11 shrink-0 flex-col items-center md:w-11">
              <div
                class="relative z-[1] mt-5 flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-raised)] text-[var(--accent)] shadow-[0_10px_24px_rgba(32,24,16,0.08),inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <img
                  v-if="item.logoSrc"
                  :src="item.logoSrc"
                  :alt="item.logoAlt || `${item.company} logo`"
                  class="h-full w-full object-contain p-[0.52rem] opacity-100 grayscale-[12%] contrast-[1.05]"
                  loading="lazy"
                />
                <span
                  v-else-if="item.logoMark?.type === 'text'"
                  class="px-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]"
                  :aria-label="item.logoMark.ariaLabel || item.company"
                  role="img"
                >
                  {{ item.logoMark.text }}
                </span>
                <svg
                  v-else-if="index === 2"
                  viewBox="0 0 24 24"
                  class="h-4 w-4 opacity-80"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
                <svg
                  v-else
                  viewBox="0 0 24 24"
                  class="h-4 w-4 opacity-80"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M12 12v.01" />
                </svg>
              </div>
              <div
                v-if="index < experience.length - 1"
                class="mt-2 w-px flex-1 min-h-[1.5rem] bg-gradient-to-b from-[var(--line)]/55 via-[var(--line)]/35 to-transparent"
                aria-hidden="true"
              />
            </div>

            <article
              :class="[
                'exp-entry hover-card min-w-0 flex-1 rounded-[1.6rem] border p-7',
                isCurrentRole(item)
                  ? 'border-[var(--line-strong)] border-l-[3px] border-l-[var(--accent)] bg-[var(--surface-panel-soft)] shadow-[0_16px_40px_rgba(32,24,16,0.09)]'
                  : 'border-[var(--line)] bg-[var(--surface-raised)]',
              ]"
            >
              <div class="relative">
                <span
                  class="exp-date-pill inline-flex w-fit shrink-0 items-center rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] text-[var(--ink-strong)] shadow-[0_12px_26px_rgba(32,24,16,0.07),inset_0_1px_0_rgba(255,255,255,0.1)] sm:absolute sm:right-0 sm:top-0 sm:min-w-[8.75rem] sm:justify-center"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    class="-ml-0.5 mr-2 h-4 w-4 text-[var(--ink-muted)]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M8 2v3M16 2v3" />
                    <path d="M3.5 9h17" />
                    <path d="M6 4h12a2 2 0 0 1 2 2v13.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  </svg>
                  {{ item.dates }}
                </span>

                <div class="min-w-0 sm:pr-[9.5rem]">
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="text-[1.05rem] font-semibold leading-6 text-[var(--ink-strong)] sm:text-base">
                      {{ item.company }}
                    </h3>
                    <span
                      v-if="isCurrentRole(item)"
                      class="rounded-full bg-[var(--accent)]/15 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]"
                    >
                      Current
                    </span>
                  </div>

                  <p class="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {{ item.role }}
                  </p>
                </div>

                <p class="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">
                  {{ item.summary }}
                </p>
              </div>

              <ul class="mt-5 space-y-2.5 text-[var(--ink-soft)]">
                <li
                  v-for="highlight in (item.highlights || []).slice(0, 2)"
                  :key="highlight"
                  class="flex gap-3 leading-snug"
                >
                  <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                  <span>{{ highlight }}</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="space-y-6">
      <header class="space-y-3">
        <p class="section-label text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Capabilities
        </p>
        <h2 class="text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
          Capabilities.
        </h2>
        <p class="max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
          The strengths I bring to dashboard-heavy work — from UI craft to reporting workflows and collaboration.
        </p>
      </header>

      <aside
        class="capabilities-shell rounded-[2rem] border border-[var(--line-strong)] bg-[var(--surface-panel-strong)] p-6 text-[var(--ink-strong)] shadow-[0_22px_52px_rgba(21,38,35,0.18)] sm:p-8 xl:sticky xl:top-28 xl:self-start"
        aria-label="Capabilities and skills"
      >
      <div class="space-y-6">
        <div>
          <p class="max-w-xl text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
            Strongest on dashboards, reporting workflows, and data-heavy interfaces.
          </p>
          <div class="mt-4 flex flex-wrap gap-1.5">
            <span class="exp-skill-pill">Dashboards</span>
            <span class="exp-skill-pill">KPI views</span>
            <span class="exp-skill-pill">Reporting workflows</span>
            <span class="exp-skill-pill">Data-heavy interfaces</span>
          </div>
        </div>

        <div class="space-y-5 border-t border-[var(--line)] pt-6">
          <div v-for="group in skills" :key="group.title" class="space-y-3">
            <h3 class="text-base font-semibold tracking-[-0.01em] text-[var(--ink-strong)]">
              {{ group.title }}
            </h3>
            <div class="mt-1 flex flex-wrap gap-1.5">
              <span v-for="skill in group.items" :key="skill" class="exp-skill-pill text-xs">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <div class="space-y-4 border-t border-[var(--line)] pt-6">
          <div>
            <p class="text-label text-[var(--ink-muted)]">Work style</p>
            <p class="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
              Calm, detail-oriented delivery — with a bias toward clarity, reliability, and useful UX.
            </p>
          </div>
          <div class="flex flex-wrap gap-1.5">
            <span class="exp-skill-pill">Reliable in production</span>
            <span class="exp-skill-pill">Iterative shipping</span>
            <span class="exp-skill-pill">Clear communication</span>
          </div>
        </div>
      </div>
      </aside>
    </div>
  </section>
</template>
