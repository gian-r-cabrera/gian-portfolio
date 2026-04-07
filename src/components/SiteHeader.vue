<script setup>
defineProps({
  navigation: {
    type: Array,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  themeLabel: {
    type: String,
    required: true,
  },
})

defineEmits(['toggle-theme'])
</script>

<template>
  <header class="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
    <div
      class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-panel)] px-4 py-3 shadow-[0_20px_45px_rgba(32,24,16,0.08)] backdrop-blur md:px-6"
    >
      <a href="#top" class="flex items-center gap-3">
        <span class="flex h-11 w-11 overflow-hidden rounded-full border border-[var(--line)] bg-[var(--surface-raised)]">
          <img
            :src="profile.photo.src"
            :alt="profile.photo.alt"
            class="h-full w-full object-cover object-top"
          />
        </span>
        <div>
          <p class="text-sm font-semibold tracking-[0.18em] text-[var(--ink-strong)] uppercase">
            {{ profile.name }}
          </p>
          <p class="text-sm text-[var(--ink-muted)]">
            {{ profile.location }}
          </p>
        </div>
      </a>

      <nav class="flex flex-wrap items-center justify-center gap-2 text-sm text-[var(--ink-soft)]">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="rounded-full px-4 py-2 transition hover:bg-[var(--surface-raised)] hover:text-[var(--ink-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <button
          type="button"
          :aria-label="themeLabel"
          :title="themeLabel"
          @click="$emit('toggle-theme')"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-raised)] text-[var(--ink-strong)] transition hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <svg
            v-if="theme === 'dark'"
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
          >
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9L5.3 5.3" />
          </svg>
          <svg
            v-else
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
          >
            <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7Z" />
          </svg>
        </button>

        <a
          href="#projects"
          class="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          style="background: var(--button-primary-bg); color: var(--button-primary-text);"
        >
          Selected Work
        </a>
      </div>
    </div>
  </header>
</template>
