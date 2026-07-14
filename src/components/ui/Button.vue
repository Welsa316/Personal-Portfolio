<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    to?: RouteLocationRaw
    href?: string
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
)

const tag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-[color,background-color,box-shadow,transform,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'

  const sizes: Record<string, string> = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  }

  // primary: resting fill is accent-dark so white text clears WCAG AA (6.9:1);
  // hover warms to accent + a terracotta glow/lift rather than brightening (which
  // would drop the text below the contrast floor).
  const variants: Record<string, string> = {
    primary: 'bg-accent-dark text-white shadow-sm hover:bg-accent hover:shadow-glow hover:-translate-y-0.5',
    secondary:
      'border-2 border-ink-300 text-ink-800 hover:border-ink-950 hover:text-ink-950',
    ghost: 'text-ink-700 hover:text-ink-950 hover:bg-ink-100',
  }

  return [base, sizes[props.size], variants[props.variant]].join(' ')
})

const linkProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
  return {}
})
</script>

<template>
  <component :is="tag" :class="classes" :disabled="disabled" v-bind="linkProps">
    <slot />
  </component>
</template>
