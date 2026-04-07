<script setup>
import { computed } from 'vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
})

const featuredProjects = computed(() => props.projects.filter((project) => project.featured))
const primaryProject = computed(
  () => featuredProjects.value.find((project) => project.primary) || featuredProjects.value[0],
)
const secondaryProjects = computed(() =>
  featuredProjects.value.filter((project) => project.slug !== primaryProject.value?.slug),
)

const projectLinks = (project) => {
  return [
    project.liveUrl ? { label: 'Live product', url: project.liveUrl } : null,
    project.repoUrl ? { label: 'Source', url: project.repoUrl } : null,
    project.caseStudyUrl ? { label: 'Case study', url: project.caseStudyUrl } : null,
  ].filter(Boolean)
}
</script>

<template>
  <section id="projects" class="section-shell space-y-8 pt-6">
    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div class="max-w-3xl space-y-3">
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Selected Work
        </p>
        <h2 class="text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
          Work shaped around analytics, monitoring, and decision support.
        </h2>
      </div>

      <p class="max-w-xl text-base leading-7 text-[var(--ink-soft)]">
        The strongest examples here are the ones where dense research or surveillance data had to become something people could scan, trust, and use quickly.
      </p>
    </div>

    <article
      v-if="primaryProject"
      class="grid gap-6 rounded-[1.9rem] border border-[var(--line-strong)] bg-[var(--surface)] p-6 shadow-[0_20px_44px_rgba(32,24,16,0.08)] lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:p-8"
    >
      <div class="space-y-5">
        <div class="flex flex-wrap items-center gap-3">
          <span
            class="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]"
            style="background: var(--button-primary-bg); color: var(--button-primary-text);"
          >
            Featured Project
          </span>
          <span class="text-sm font-medium text-[var(--ink-muted)]">
            {{ primaryProject.role }}
          </span>
        </div>

        <div class="space-y-3">
          <h3 class="text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
            {{ primaryProject.title }}
          </h3>
          <p class="text-base leading-7 text-[var(--ink-soft)]">
            {{ primaryProject.context }}
          </p>
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            {{ primaryProject.resultLabel }}
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-[1.2rem] border border-[var(--line)] bg-[var(--surface-raised)] p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              Contribution
            </p>
            <p class="mt-2 text-base leading-7 text-[var(--ink-strong)]">
              {{ primaryProject.contribution }}
            </p>
          </div>

          <div class="rounded-[1.2rem] border border-[var(--line)] bg-[var(--surface-raised)] p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              Outcome
            </p>
            <p class="mt-2 text-base leading-7 text-[var(--ink-strong)]">
              {{ primaryProject.impact }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex h-full flex-col rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-panel-soft)] p-5 text-[var(--ink-strong)]">
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          Why it matters
        </p>
        <p class="mt-3 text-base leading-7 text-[var(--ink-soft)]">
          {{ primaryProject.summary }}
        </p>

        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="item in primaryProject.stack"
            :key="item"
            class="rounded-full border border-[var(--line)] bg-[var(--surface-panel)] px-3 py-1.5 text-sm text-[var(--ink-strong)]"
          >
            {{ item }}
          </span>
        </div>

        <div class="mt-auto flex flex-wrap gap-3 pt-8">
          <a
            v-for="item in projectLinks(primaryProject)"
            :key="item.label"
            :href="item.url"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            style="background: var(--button-primary-bg); color: var(--button-primary-text);"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </article>

    <div class="flex items-center justify-between pt-2">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          More Projects
        </p>
        <p class="mt-2 text-base text-[var(--ink-soft)]">
          Additional work focused on monitoring, reporting, and analytics UX.
        </p>
      </div>
    </div>

    <div class="grid gap-5 lg:grid-cols-3">
      <article
        v-for="project in secondaryProjects"
        :key="project.slug"
        class="group flex h-full flex-col rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-panel-soft)] p-6 text-[var(--ink-strong)] shadow-[0_16px_38px_rgba(32,24,16,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(32,24,16,0.1)]"
      >
        <div class="flex items-center justify-between gap-4">
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
            {{ project.role }}
          </p>
        </div>

        <div class="mt-5 space-y-3">
          <h3 class="text-2xl leading-tight font-semibold tracking-[-0.02em] text-[var(--ink-strong)]">
            {{ project.title }}
          </h3>
          <p class="text-sm leading-6 text-[var(--ink-muted)]">
            {{ project.context }}
          </p>
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {{ project.resultLabel }}
          </p>
        </div>

        <div class="mt-5">
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            Contribution
          </p>
          <p class="mt-2 text-base leading-7 text-[var(--ink-soft)]">
            {{ project.contribution }}
          </p>
        </div>

        <div class="mt-5 rounded-[1.15rem] border border-[var(--line)] bg-[var(--surface-raised)] p-4">
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ink-muted)]">
            Outcome
          </p>
          <p class="mt-2 text-sm leading-6 text-[var(--ink-strong)]">
            {{ project.impact }}
          </p>
        </div>

        <div class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="item in project.stack"
            :key="item"
            class="rounded-full border border-[var(--line)] bg-[var(--surface-panel)] px-3 py-1.5 text-xs text-[var(--ink-soft)]"
          >
            {{ item }}
          </span>
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            v-for="item in projectLinks(project)"
            :key="item.label"
            :href="item.url"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] px-4 py-2.5 text-sm font-medium text-[var(--ink-strong)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {{ item.label }}
          </a>

          <span
            v-if="!projectLinks(project).length"
            class="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-4 py-2.5 text-sm text-[var(--ink-muted)]"
          >
            Internal or private work
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
