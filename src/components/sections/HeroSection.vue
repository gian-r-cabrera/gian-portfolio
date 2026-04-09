<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section
    id="top"
    class="section-shell relative grid gap-8 overflow-hidden rounded-[2rem] border border-[var(--line-strong)] bg-[var(--surface)] px-6 py-8 shadow-[0_30px_80px_rgba(35,26,18,0.08)] sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:px-12 lg:py-12"
  >
    <div class="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(27,110,97,0.4),transparent)]" />

    <div class="relative z-10 space-y-6 lg:pr-4">
      <div class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
          Portfolio
        </p>

        <div class="space-y-5">
          <h1 class="max-w-[11.5ch] text-5xl leading-[0.97] font-semibold tracking-[-0.045em] text-[var(--ink-strong)] sm:text-[4.4rem] lg:text-[4.15rem]">
            {{ profile.title }}
          </h1>

          <p class="max-w-xl pt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[0.92rem]">
            {{ profile.kicker }}
          </p>

          <p class="max-w-[38rem] text-lg leading-[1.85] text-[var(--ink-soft)] sm:text-[1.1rem]">
            {{ profile.intro }}
          </p>

          <p class="max-w-[38rem] text-base leading-8 text-[var(--ink-soft)]">
            {{ profile.credibility }}
          </p>
        </div>
      </div>

      <div class="grid gap-3 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-panel-soft)] p-4 sm:mt-1 sm:grid-cols-2">
        <div
          v-for="item in profile.benchmarkStrip"
          :key="item.label"
          class="rounded-[1rem] border border-[var(--line)] bg-[var(--surface-panel)] px-4 py-3.5"
        >
          <p class="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            {{ item.label }}
          </p>
          <p class="mt-1.5 text-lg font-medium leading-7 text-[var(--ink-strong)]">
            {{ item.value }}
          </p>
          <p class="mt-1 text-sm leading-6 text-[var(--ink-muted)]">
            {{ item.detail }}
          </p>
        </div>
      </div>

      <div class="flex flex-wrap gap-3 pt-1">
        <a
          href="#projects"
          class="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          style="background: var(--button-primary-bg); color: var(--button-primary-text);"
        >
          View Projects
        </a>

        <a
          :href="profile.resumeUrl"
          class="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] px-6 py-3.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          style="background: var(--button-secondary-bg); color: var(--button-secondary-text);"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>

        <a
          :href="profile.contactHref"
          class="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] px-6 py-3.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          style="background: var(--button-secondary-bg); color: var(--button-secondary-text);"
        >
          {{ profile.contactLabel }}
        </a>
      </div>

      <div class="flex flex-wrap gap-3 pt-1">
        <span
          v-for="item in profile.focusAreas"
          :key="item"
          class="rounded-full border border-[var(--line)] bg-[var(--surface-panel-soft)] px-3.5 py-1.5 text-xs font-medium tracking-[0.01em] text-[var(--ink-muted)]"
        >
          {{ item }}
        </span>
      </div>
    </div>

    <div class="relative grid gap-4 lg:pl-2">
      <div
        class="motion-card absolute -right-10 top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(27,110,97,0.25),_transparent_70%)] blur-2xl"
      />
      <div
        class="motion-card absolute -left-6 bottom-4 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(186,111,77,0.22),_transparent_70%)] blur-2xl"
      />

      <figure class="relative overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface-panel-strong)] p-3 shadow-[0_24px_50px_rgba(36,26,18,0.12)]">
        <div class="relative">
          <img
            :src="profile.photo.src"
            :alt="profile.photo.alt"
            class="aspect-[4/5] w-full rounded-[1.35rem] object-cover object-top"
          />

          <div class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(22,55,48,0.72))]" />

          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
            <div>
              <p class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/72">
                Profile
              </p>
              <p class="mt-1 text-lg font-medium text-white">
                {{ profile.name }}
              </p>
            </div>

            <span class="rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur" style="color: rgba(255,255,255,0.96);">
              Available
            </span>
          </div>
        </div>

        <figcaption class="px-2 pt-3 text-sm leading-6 text-[var(--ink-muted)]">
          {{ profile.photo.caption }}
        </figcaption>
      </figure>

      <div
        class="relative rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface-panel-strong)] p-6 shadow-[0_24px_50px_rgba(36,26,18,0.12)]"
      >
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          At A Glance
        </p>
        <div class="mt-5 space-y-3">
          <div
            v-for="fact in profile.credibilityPoints"
            :key="fact.label"
            class="rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface-panel)] p-4"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              {{ fact.label }}
            </p>
            <p class="mt-1.5 text-lg leading-7 text-[var(--ink-strong)]">
              {{ fact.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
