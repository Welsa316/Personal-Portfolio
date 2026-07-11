<script setup lang="ts">
import { ref } from 'vue'
import { projects, categoryLabels } from '@/data/projects'

// Single-open disclosure. Default-open the first project so the pre-rendered
// (SSG) HTML ships a visible, crawlable panel and no-JS visitors see content.
const openId = ref(projects[0]?.id ?? '')

function toggle(id: string) {
  openId.value = openId.value === id ? '' : id
}
function isOpen(id: string) {
  return openId.value === id
}

// Roving arrow-key navigation between the accordion headers (WAI-ARIA pattern).
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
</script>

<template>
  <div @keydown="onKeydown">
    <div
      v-for="(p, i) in projects"
      :key="p.id"
      class="acc-row border-t border-ink-200/60"
      :class="{ 'is-open': isOpen(p.id), 'border-b': i === projects.length - 1 }"
    >
      <h2 class="m-0">
        <button
          data-acc-head
          type="button"
          class="group flex w-full items-center justify-between gap-5 py-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset sm:py-8"
          :aria-expanded="isOpen(p.id)"
          :aria-controls="`acc-panel-${p.id}`"
          @click="toggle(p.id)"
        >
          <span
            class="font-hero text-3xl font-bold leading-[1.02] tracking-tight transition-colors duration-300 sm:text-5xl lg:text-[3.75rem]"
            :class="isOpen(p.id) ? 'text-accent-light' : 'text-ink-950 group-hover:text-ink-700'"
          >{{ p.title }}</span>
          <span
            class="acc-plus shrink-0 transition-colors duration-300"
            :class="isOpen(p.id) ? 'text-accent-light' : 'text-ink-400 group-hover:text-ink-600'"
            aria-hidden="true"
          ></span>
        </button>
      </h2>

      <div class="acc-panel">
        <div class="acc-panel-inner">
          <div
            :id="`acc-panel-${p.id}`"
            role="region"
            :aria-label="`${p.title} — details`"
            class="grid gap-6 pb-9 md:grid-cols-[1.6fr_1fr] md:gap-10 md:pb-11"
          >
            <!-- Screenshot framed as a light editorial print on the dark wall -->
            <div class="media-tile self-start">
              <div class="flex items-center gap-1.5 px-3 py-2.5" style="background: #e7e2d8">
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
                <div v-else class="flex h-full items-center justify-center text-sm text-ink-400">
                  Preview coming soon
                </div>
              </div>
            </div>

            <!-- Meta -->
            <div class="flex flex-col justify-center gap-5">
              <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                {{ categoryLabels[p.category] }}
              </p>
              <p class="text-ink-700 leading-relaxed">{{ p.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="t in p.tags"
                  :key="t"
                  class="rounded-full border border-ink-200 bg-surface-raised px-3 py-1 font-mono text-[11px] text-ink-600"
                >{{ t }}</span>
              </div>
              <router-link
                :to="{ name: 'project-detail', params: { id: p.id } }"
                class="group/cta inline-flex w-max items-center gap-2 rounded font-semibold text-accent-light outline-none transition-colors hover:text-ink-950 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
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
</template>

<style scoped>
/* SSG-safe collapse — pure CSS, no JS height measurement */
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
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 24px 50px -24px rgba(0, 0, 0, 0.75);
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c3bcac;
}

/* + that rotates to × on open */
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
