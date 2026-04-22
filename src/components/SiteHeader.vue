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
  activeSection: {
    type: String,
    default: '',
  },
})

defineEmits(['toggle-theme'])
</script>

<template>
  <header data-site-header class="fixed inset-x-0 top-3 z-50 px-4 sm:px-6 lg:px-10">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-3 rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-panel)] px-4 py-3 shadow-[0_24px_50px_rgba(32,24,16,0.12)] backdrop-blur sm:gap-4 md:flex-row md:flex-nowrap md:items-center md:gap-5 md:px-6"
    >
      <div class="flex w-full items-center gap-3 md:w-auto md:flex-none">
        <a href="#top" class="flex min-w-0 items-center gap-3">
          <span class="flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[var(--line)] bg-[var(--surface-raised)] sm:h-11 sm:w-11">
          <img
            :src="profile.photo.src"
            :alt="profile.photo.alt"
            class="h-full w-full object-cover object-top"
          />
          </span>
          <div class="min-w-0">
            <p class="truncate text-sm font-semibold tracking-[0.18em] text-[var(--ink-strong)] uppercase">
              {{ profile.name }}
            </p>
            <p class="hidden truncate text-sm text-[var(--ink-muted)] sm:block">
              {{ profile.location }}
            </p>
          </div>
        </a>
      </div>

      <nav class="w-full overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] md:w-auto md:flex-1 md:overflow-visible md:pb-0">
        <div class="flex min-w-max items-center gap-1.5 text-sm text-[var(--ink-soft)] md:min-w-0 md:justify-center md:gap-2">
          <a
            v-for="item in navigation"
            :key="item.href"
            :href="item.href"
            :class="[
              'rounded-full px-4 py-2 transition hover:bg-[var(--surface-raised)] hover:text-[var(--ink-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
              activeSection === item.href.replace('#', '')
                ? 'bg-[var(--surface-raised)] font-semibold text-[var(--ink-strong)]'
                : 'text-[var(--ink-soft)]',
            ]"
          >
            {{ item.label }}
          </a>
        </div>
      </nav>

      <div class="flex items-center justify-end gap-2 sm:gap-3 md:flex-none">
        <button
          type="button"
          :aria-label="themeLabel"
          :title="themeLabel"
          @click="$emit('toggle-theme')"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-raised)] text-[var(--ink-strong)] transition hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:h-11 sm:w-11"
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
          class="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] px-4 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:px-5 sm:py-3"
          style="background: var(--button-secondary-bg); color: var(--button-secondary-text);"
        >
          <span class="hidden sm:inline">View work</span>
          <span class="sm:hidden">Work</span>
        </a>
      </div>
    </div>
  </header>
</template>
