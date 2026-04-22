<script setup>
import { computed, ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const props = defineProps({
  recommendations: {
    type: Array,
    required: true,
  },
})

const { el } = useScrollReveal()

const visibleRecommendations = computed(() => props.recommendations.filter((item) => !item.draft))

const gridClass = computed(() =>
  visibleRecommendations.value.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1',
)

const expanded = ref({})

const cardKey = (item) => `${item.name}-${item.role}`

const toggleExpanded = (item) => {
  const key = cardKey(item)
  expanded.value = { ...expanded.value, [key]: !expanded.value[key] }
}

const isExpanded = (item) => Boolean(expanded.value[cardKey(item)])

const needsToggle = (item) => (item.quote?.length || 0) > 260
</script>

<template>
  <section ref="el" id="recommendations" class="section-shell space-y-8 pt-3">
    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="section-label text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Recommendations
        </p>
        <h2 class="mt-3 text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--ink-strong)] sm:text-4xl">
          Endorsements from collaborators and mentors.
        </h2>
        <p class="mt-3 max-w-xl text-base leading-relaxed text-[var(--ink-soft)]">Short notes from people I’ve worked with.</p>
      </div>
    </div>

    <div class="grid gap-7" :class="gridClass">
      <article
        v-for="item in visibleRecommendations"
        :key="`${item.name}-${item.role}`"
        class="rec-card hover-card group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.6rem] border border-[var(--line-strong)] bg-[var(--surface)] p-7 shadow-[0_18px_44px_rgba(32,24,16,0.08)] sm:p-9"
      >
        <div class="relative z-[1] mb-5 flex flex-wrap items-center gap-2">
          <span
            v-if="item.sourceLabel"
            class="rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]"
          >
            {{ item.sourceLabel }}
          </span>
          <span
            v-if="item.sourceDate"
            class="rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]"
          >
            {{ item.sourceDate }}
          </span>
        </div>
        <div class="pointer-events-none absolute left-4 top-4 font-serif text-6xl leading-none text-[var(--accent)]/20" aria-hidden="true">
          “
        </div>
        <blockquote
          :class="[
            'relative z-[1] flex-1 border-l-2 border-[var(--accent)]/25 pl-5 font-[family-name:var(--font-heading)] text-base italic leading-8 text-pretty text-[var(--ink-strong)] sm:text-lg',
            needsToggle(item) && !isExpanded(item) ? 'rec-quote-clamp' : '',
          ]"
        >
          {{ item.quote }}
        </blockquote>
        <div v-if="needsToggle(item)" class="relative z-[1] mt-4">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            @click="toggleExpanded(item)"
          >
            {{ isExpanded(item) ? 'Show less' : 'Read more' }}
          </button>
        </div>
        <div class="mt-8 flex shrink-0 items-center gap-4 border-t border-[var(--line)] pt-6">
          <div
            v-if="item.avatarUrl"
            class="h-11 w-11 flex-none overflow-hidden rounded-full border border-[var(--line)] bg-[var(--surface-raised)]"
          >
            <img :src="item.avatarUrl" :alt="item.name" class="h-full w-full object-cover" />
          </div>
          <div
            v-else
            class="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-raised)] text-sm font-semibold text-[var(--accent)]"
          >
            {{ item.name.charAt(0) }}
          </div>
          <div class="min-w-0">
            <p class="text-base font-semibold text-[var(--ink-strong)] not-italic">
              {{ item.name }}
            </p>
            <p class="text-sm leading-6 text-[var(--ink-muted)] not-italic">
              {{ item.role }}
            </p>
            <a
              v-if="item.linkedinUrl"
              :href="item.linkedinUrl"
              target="_blank"
              rel="noreferrer"
              class="mt-1 inline-block text-xs font-medium text-[var(--accent)] underline decoration-[rgba(27,110,97,0.28)] underline-offset-4 transition hover:decoration-[var(--accent)]"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </article>
    </div>

  </section>
</template>
