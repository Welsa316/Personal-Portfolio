<script setup lang="ts">
import { ref, computed } from 'vue'
import IconArrow from '@/components/ui/IconArrow.vue'
import { projects, categoryLabels, type Project } from '@/data/projects'

const props = withDefaults(defineProps<{ limit?: number }>(), { limit: 0 })

const items = computed(() => (props.limit > 0 ? projects.slice(0, props.limit) : projects))

// A "menu + preview" showcase (ARIA tablist): the titles are the menu on the left,
// and one large preview panel on the right shows whichever project is active and
// pops in on change. One project is always active so SSG/no-JS ships a full preview.
const activeId = ref(items.value[0]?.id ?? '')
const active = computed(() => items.value.find((p) => p.id === activeId.value) ?? items.value[0])

function setActive(id: string) {
  activeId.value = id
}
function isActive(id: string) {
  return activeId.value === id
}
// Hover-to-preview, but only with a real pointer so touch taps don't thrash it.
function hoverActivate(id: string) {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches
  ) {
    setActive(id)
  }
}

// Roving arrow-key navigation (vertical tablist). Selection follows focus.
function onKeydown(e: KeyboardEvent) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return
  const tabs = Array.from(
    (e.currentTarget as HTMLElement).querySelectorAll<HTMLButtonElement>('[data-sw-tab]'),
  )
  const idx = tabs.indexOf(document.activeElement as HTMLButtonElement)
  if (idx === -1) return
  e.preventDefault()
  let next = idx
  if (e.key === 'ArrowDown') next = (idx + 1) % tabs.length
  else if (e.key === 'ArrowUp') next = (idx - 1 + tabs.length) % tabs.length
  else if (e.key === 'Home') next = 0
  else if (e.key === 'End') next = tabs.length - 1
  const el = tabs[next]
  if (el) {
    el.focus()
    setActive(items.value[next].id)
  }
}

function host(p: Project): string {
  try {
    return new URL(p.links.demo ?? '').hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

const pad = (n: number) => String(n + 1).padStart(2, '0')
</script>

<template>
  <div class="md:grid md:grid-cols-[42%_1fr] md:items-center md:gap-12 lg:gap-16">
    <!-- Menu: the titles (left) -->
    <div
      role="tablist"
      aria-orientation="vertical"
      aria-label="Selected works"
      class="flex flex-col"
      @keydown="onKeydown"
    >
      <button
        v-for="(p, i) in items"
        :id="`sw-tab-${p.id}`"
        :key="p.id"
        data-sw-tab
        type="button"
        role="tab"
        :aria-selected="isActive(p.id)"
        aria-controls="sw-preview"
        :tabindex="isActive(p.id) ? 0 : -1"
        class="group flex items-center gap-4 border-t border-ink-200/60 py-6 text-left outline-none last:border-b focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:gap-6 sm:py-8 lg:py-9"
        @click="setActive(p.id)"
        @mouseenter="hoverActivate(p.id)"
      >
        <span
          class="hidden shrink-0 self-start pt-2 font-mono text-xs tabular-nums transition-colors duration-300 sm:block"
          :class="isActive(p.id) ? 'text-accent-light' : 'text-ink-400'"
        >{{ pad(i) }}</span>
        <span
          class="flex-1 font-hero text-[1.85rem] font-bold uppercase leading-[1.0] tracking-tight transition-colors duration-300 sm:text-4xl lg:text-5xl"
          :class="isActive(p.id) ? 'text-accent-light' : 'text-ink-950 group-hover:text-ink-700'"
        >{{ p.title }}</span>
        <IconArrow
          class="shrink-0 text-xl transition-all duration-300"
          :class="isActive(p.id)
            ? 'translate-x-0 text-accent-light opacity-100'
            : '-translate-x-2 text-ink-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'"
        />
      </button>
    </div>

    <!-- Preview: one big panel (right) that pops in on change -->
    <div
      id="sw-preview"
      role="tabpanel"
      :aria-labelledby="`sw-tab-${active.id}`"
      class="mt-8 md:mt-0"
    >
      <div :key="active.id" class="sw-pop flex flex-col gap-5">
        <!-- Browser-framed screenshot, large -->
        <div class="overflow-hidden rounded-card border border-ink-300 bg-surface shadow-raised">
          <div class="flex h-8 items-center gap-1.5 border-b border-ink-200 px-4">
            <span class="h-2 w-2 rounded-full bg-ink-300"></span>
            <span class="h-2 w-2 rounded-full bg-ink-300"></span>
            <span class="h-2 w-2 rounded-full bg-ink-300"></span>
            <span
              v-if="host(active)"
              class="mx-auto max-w-[62%] truncate rounded bg-surface-sunken px-2 py-0.5 font-mono text-[10px] text-ink-500"
            >{{ host(active) }}</span>
          </div>
          <div class="relative aspect-[16/10] overflow-hidden bg-surface-sunken">
            <img
              v-if="active.desktopScreenshot"
              :src="active.desktopScreenshot"
              alt=""
              loading="lazy"
              class="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <!-- Meta -->
        <div class="flex flex-col gap-3">
          <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
            {{ categoryLabels[active.category] }}
          </p>
          <p class="max-w-xl text-pretty leading-relaxed text-ink-700">{{ active.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="t in active.tags"
              :key="t"
              class="rounded-full border border-ink-300 bg-surface-raised px-3 py-1 font-mono text-[11px] text-ink-600"
            >{{ t }}</span>
          </div>
          <router-link
            :to="{ name: 'project-detail', params: { id: active.id } }"
            class="mt-1 inline-flex w-max items-center gap-2 rounded font-semibold text-accent-light outline-none transition-colors hover:text-ink-950 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            View full project
            <IconArrow class="text-lg transition-transform duration-200 group-hover:translate-x-1" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* The preview "pops" in each time the active project changes (keyed re-mount).
   The global reduced-motion rule zeroes this to an instant swap. */
.sw-pop {
  animation: swPop 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes swPop {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
