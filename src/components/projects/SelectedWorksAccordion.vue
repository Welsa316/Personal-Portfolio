<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects, categoryLabels } from '@/data/projects'

const props = withDefaults(defineProps<{ limit?: number }>(), { limit: 0 })

const items = computed(() => (props.limit > 0 ? projects.slice(0, props.limit) : projects))

// Single-open disclosure. Default-open the first so SSG/no-JS ships a visible panel.
const openId = ref(items.value[0]?.id ?? '')
function toggle(id: string) {
  openId.value = openId.value === id ? '' : id
}
function isOpen(id: string) {
  return openId.value === id
}

// Roving arrow-key navigation between headers (WAI-ARIA accordion pattern).
function onKeydown(e: KeyboardEvent) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return
  const headers = Array.from(
    (e.currentTarget as HTMLElement).querySelectorAll<HTMLButtonElement>('[data-acc-head]'),
  )
  const idx = headers.indexOf(document.activeElement as HTMLButtonElement)
  if (idx === -1) return
  e.preventDefault()
  let next = idx
  if (e.key === 'ArrowDown') next = (idx + 1) % headers.length
  else if (e.key === 'ArrowUp') next = (idx - 1 + headers.length) % headers.length
  else if (e.key === 'Home') next = 0
  else if (e.key === 'End') next = headers.length - 1
  headers[next]?.focus()
}

const pad = (n: number) => String(n + 1).padStart(2, '0')
</script>

<template>
  <div @keydown="onKeydown">
    <div
      v-for="(p, i) in items"
      :key="p.id"
      class="acc-row border-t border-ink-200/60"
      :class="{ 'is-open': isOpen(p.id), 'border-b': i === items.length - 1 }"
    >
      <!-- md+: title left, panel reveals to the right. Mobile: stacked. -->
      <div class="md:grid md:grid-cols-[44%_1fr] md:items-center md:gap-10">
        <!-- Title (left) -->
        <h3 class="m-0">
          <button
            data-acc-head
            type="button"
            class="group flex w-full items-center gap-4 py-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset sm:gap-6 sm:py-8 lg:py-9"
            :aria-expanded="isOpen(p.id)"
            :aria-controls="`acc-panel-${p.id}`"
            @click="toggle(p.id)"
          >
            <span
              class="hidden shrink-0 self-start pt-2 font-mono text-xs tabular-nums transition-colors duration-300 sm:block"
              :class="isOpen(p.id) ? 'text-accent-light' : 'text-ink-400'"
            >{{ pad(i) }}</span>
            <span
              class="flex-1 font-hero text-[1.85rem] font-bold uppercase leading-[1.0] tracking-tight transition-colors duration-300 sm:text-4xl lg:text-5xl"
              :class="isOpen(p.id) ? 'text-accent-light' : 'text-ink-950 group-hover:text-ink-700'"
            >{{ p.title }}</span>
            <span
              class="acc-plus shrink-0 self-center transition-colors duration-300"
              :class="isOpen(p.id) ? 'text-accent-light' : 'text-ink-400 group-hover:text-ink-600'"
              aria-hidden="true"
            ></span>
          </button>
        </h3>

        <!-- Panel (right column on md+, below on mobile) -->
        <div class="acc-panel">
          <div class="acc-panel-inner">
            <div
              :id="`acc-panel-${p.id}`"
              role="region"
              :aria-label="`${p.title} — details`"
              class="grid gap-5 pb-9 md:py-7 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-7"
            >
              <!-- Screenshot as a light editorial print -->
              <div class="media-tile">
                <div class="flex items-center gap-1.5 px-3 py-2" style="background: #e7e2d8">
                  <span class="dot"></span><span class="dot"></span><span class="dot"></span>
                </div>
                <div class="relative aspect-[16/10] overflow-hidden bg-[#f4f1eb]">
                  <img
                    v-if="p.desktopScreenshot"
                    :src="p.desktopScreenshot"
                    :alt="`${p.title} — website preview`"
                    loading="lazy"
                    class="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              <!-- Meta -->
              <div class="flex flex-col gap-4">
                <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                  {{ categoryLabels[p.category] }}
                </p>
                <p class="leading-relaxed text-ink-700">{{ p.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="t in p.tags"
                    :key="t"
                    class="rounded-full border border-ink-200 bg-surface-raised px-3 py-1 font-mono text-[11px] text-ink-600"
                  >{{ t }}</span>
                </div>
                <router-link
                  :to="{ name: 'project-detail', params: { id: p.id } }"
                  class="group/cta mt-1 inline-flex w-max items-center gap-2 rounded font-semibold text-accent-light outline-none transition-colors hover:text-ink-950 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  :tabindex="isOpen(p.id) ? 0 : -1"
                  :aria-hidden="!isOpen(p.id)"
                >
                  View full project
                  <span class="transition-transform duration-200 group-hover/cta:translate-x-1">→</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.acc-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.acc-row.is-open .acc-panel {
  grid-template-rows: 1fr;
}
.acc-panel-inner {
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.4s ease 0.05s;
}
.acc-row.is-open .acc-panel-inner {
  opacity: 1;
}

.media-tile {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 24px 50px -26px rgba(0, 0, 0, 0.8);
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c3bcac;
}

.acc-plus {
  position: relative;
  width: 24px;
  height: 24px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
}
.acc-row.is-open .acc-plus {
  transform: rotate(45deg);
}
.acc-plus::before,
.acc-plus::after {
  content: '';
  position: absolute;
  background: currentColor;
  border-radius: 2px;
}
.acc-plus::before {
  left: 50%;
  top: 2px;
  width: 2px;
  height: 20px;
  transform: translateX(-50%);
}
.acc-plus::after {
  top: 50%;
  left: 2px;
  height: 2px;
  width: 20px;
  transform: translateY(-50%);
}
</style>
