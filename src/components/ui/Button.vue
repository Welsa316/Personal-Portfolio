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
  }>(),
  {
    variant: 'primary',
    size: 'md',
  },
)

const tag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2'

  const sizes: Record<string, string> = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  }

  const variants: Record<string, string> = {
    primary: 'bg-accent text-white shadow-sm hover:bg-accent-dark hover:shadow-md',
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
  <component :is="tag" :class="classes" v-bind="linkProps">
    <slot />
  </component>
</template>
