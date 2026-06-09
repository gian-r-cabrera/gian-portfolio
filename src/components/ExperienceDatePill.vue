<script setup>
defineProps({
  dates: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'compact', 'inline'].includes(value),
  },
  absolute: {
    type: Boolean,
    default: false,
  },
  highlighted: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <span
    :class="[
      'exp-date-pill inline-flex w-fit shrink-0 items-center rounded-full border font-semibold',
      variant === 'inline'
        ? 'exp-date-pill-inline px-2 py-0.5 text-[0.6rem] tracking-[0.08em]'
        : 'shadow-[0_12px_26px_rgba(32,24,16,0.07),inset_0_1px_0_rgba(255,255,255,0.1)]',
      highlighted
        ? variant === 'inline'
          ? 'border-[var(--accent)]/45 bg-[var(--accent)]/12 text-[var(--accent)]'
          : 'border-[var(--accent)]/35 bg-[var(--accent)]/10 text-[var(--accent)]'
        : variant === 'inline'
          ? 'border-[var(--line-strong)] bg-[var(--surface)] text-[var(--ink-muted)]'
          : 'border-[var(--line)] bg-[var(--surface)] text-[var(--ink-strong)]',
      variant === 'compact'
        ? 'px-2.5 py-1 text-[0.68rem] tracking-[0.12em]'
        : variant === 'default'
          ? 'px-3.5 py-1.5 text-[0.72rem] tracking-[0.14em]'
          : '',
      absolute ? 'sm:absolute sm:right-0 sm:top-0 sm:min-w-[8.75rem] sm:justify-center' : '',
    ]"
  >
    <svg
      v-if="variant !== 'inline'"
      aria-hidden="true"
      viewBox="0 0 24 24"
      :class="[
        '-ml-0.5',
        highlighted ? 'text-[var(--accent)]' : 'text-[var(--ink-muted)]',
        variant === 'compact' ? 'mr-1.5 h-3.5 w-3.5' : 'mr-2 h-4 w-4',
      ]"
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
    {{ dates }}
  </span>
</template>
