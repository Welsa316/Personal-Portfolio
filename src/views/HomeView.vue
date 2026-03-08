<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
import Typewriter from '@/components/ui/Typewriter.vue'
import { getFeaturedProjects } from '@/data/projects'

const featured = getFeaturedProjects()

// Project carousel state
const activeProject = ref(0)

function setActive(index: number) {
  activeProject.value = index
}

function nextProject() {
  activeProject.value = (activeProject.value + 1) % featured.length
}

function prevProject() {
  activeProject.value = (activeProject.value - 1 + featured.length) % featured.length
}

const categoryLabels: Record<string, string> = {
  web: 'Web Development',
  ai: 'AI / Machine Learning',
  other: 'Other',
}

// SVG icon paths for each project (used instead of numbers in the carousel)
const projectIcons: Record<string, string> = {
  'ok-ice-cream':
    'M12 2C10.34 2 9 3.34 9 5c0 .28.04.55.1.8C7.29 6.47 6 8.27 6 10.5c0 .5.07 1 .2 1.46L5 22h14l-1.2-10.04c.13-.46.2-.96.2-1.46 0-2.23-1.29-4.03-3.1-4.7.06-.25.1-.52.1-.8 0-1.66-1.34-3-3-3zM10 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-2.8 7.5c0-1.66.84-3.12 2.1-3.96-.43.3-.8.68-1.1 1.12-.3.44-.5.94-.6 1.48-.06.28-.1.58-.1.86h1c0-1.34.76-2.5 1.87-3.06A3.5 3.5 0 0114 11h1c0-.28-.04-.58-.1-.86-.1-.54-.3-1.04-.6-1.48-.3-.44-.67-.82-1.1-1.12 1.26.84 2.1 2.3 2.1 3.96 0 .34-.04.66-.1.96L16.3 20H7.7l1.1-7.54c-.06-.3-.1-.62-.1-.96z',
  'ai-task-planner':
    'M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.07A7.001 7.001 0 0 1 8 18H7a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 3-5.75V5.73A2.002 2.002 0 0 1 12 2zm-2 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
  'design-system-kit':
    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.48-9-10-9zM6.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
  'portfolio-v2':
    'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
}

const features = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Pixel-perfect, performant interfaces built with modern frameworks. From SPAs to full-stack applications.',
  },
  {
    number: '02',
    title: 'AI-Assisted Development',
    description:
      'Integrating LLMs and machine learning into real products that solve meaningful problems.',
  },
  {
    number: '03',
    title: 'Design Systems',
    description:
      'Scalable component libraries and design tokens that keep teams shipping consistently and fast.',
  },
]

const portraitUrl = '/Headshot.png'

// Template refs for staggered hero animations
const sideTextRef = ref<HTMLElement | null>(null)
const nameRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const portraitRef = ref<HTMLElement | null>(null)
const scrollRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Staggered hero reveal with editorial timing
  const reveals = [
    { el: nameRef, delay: 150 },
    { el: portraitRef, delay: 300 },
    { el: subtitleRef, delay: 450 },
    { el: sideTextRef, delay: 350 },
    { el: scrollRef, delay: 600 },
  ]

  reveals.forEach(({ el, delay }) => {
    setTimeout(() => {
      if (el.value) el.value.classList.add('revealed')
    }, delay)
  })

  // IntersectionObserver for below-fold scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div>
    <!-- ======================== HERO ======================== -->
    <section class="relative min-h-screen overflow-hidden bg-surface">

      <!-- Vertical side text -->
      <div
        ref="sideTextRef"
        class="hero-animate absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-10"
      >
        <span class="vertical-text text-ink-400 font-mono text-[10px] tracking-[0.3em]">
          Portfolio 2024
        </span>
        <div class="w-px h-24 bg-ink-300/50"></div>
      </div>

      <!-- Portrait: fills right side, no mask (transparent bg image) -->
      <div
        ref="portraitRef"
        class="hero-animate absolute right-0 top-0 h-full w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw] z-10 flex items-center justify-center"
      >
        <img
          :src="portraitUrl"
          alt="Walid Elsayed Portrait"
          class="h-[85%] w-auto max-w-none object-cover object-top"
        />
      </div>

      <!-- Name + subtitle at bottom-left -->
      <div class="absolute bottom-20 sm:bottom-24 left-0 z-20 px-6 md:px-10">
        <h1
          ref="nameRef"
          class="hero-animate massive-text font-hero select-none leading-[0.85]"
        >
          <span class="block text-ink-950">
            <Typewriter text="WALID" :speed="80" cursor="" :initial-delay="200" />
          </span>
          <span class="block text-accent">
            <Typewriter text="ELSAYED" :speed="80" cursor="|" :initial-delay="700" />
          </span>
        </h1>
        <div
          ref="subtitleRef"
          class="hero-animate mt-6 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <p class="text-sm md:text-base text-ink-500 font-light">
            — Web developer &amp; designer
          </p>
          <Button :to="{ name: 'projects' }" size="md">View My Work</Button>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        ref="scrollRef"
        class="hero-animate absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span class="text-[9px] uppercase tracking-[0.4em] text-ink-500 font-mono">Scroll down</span>
        <div class="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent opacity-30"></div>
      </div>
    </section>

    <!-- ======================== WHAT I DO ======================== -->
    <section class="bg-surface-sunken py-24 sm:py-32">
      <Container>
        <!-- Editorial section header -->
        <div class="scroll-reveal mb-4">
          <p class="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-3">What I Do</p>
          <h2 class="font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Focused on craft, speed, and<br class="hidden sm:block" /> meaningful technology.
          </h2>
        </div>

        <div class="editorial-divider scroll-reveal mt-8 mb-0"></div>

        <!-- Editorial feature grid -->
        <div class="grid sm:grid-cols-3">
          <div
            v-for="(feat, i) in features"
            :key="feat.title"
            class="group scroll-reveal px-0 sm:px-8 py-10 rounded-xl transition-all duration-300 hover:bg-surface-raised hover:shadow-md"
            :class="[
              i === 0 ? 'sm:pl-4' : '',
              i === features.length - 1 ? 'sm:pr-4' : '',
              i < features.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-ink-200/60' : ''
            ]"
            :style="`transition-delay: ${i * 100}ms`"
          >
            <span class="font-display text-6xl sm:text-7xl text-accent/30 leading-none transition-colors duration-300 group-hover:text-accent/60">
              {{ feat.number }}
            </span>
            <h3 class="mt-4 font-display text-xl text-ink-950 transition-colors duration-300 group-hover:text-accent-dark">
              {{ feat.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-500 transition-colors duration-300 group-hover:text-ink-700">
              {{ feat.description }}
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- ======================== FEATURED PROJECTS ======================== -->
    <section class="py-32 sm:py-40 border-t border-ink-200/60">
      <div class="px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto">
        <!-- Section header — significantly bigger -->
        <div class="scroll-reveal mb-6">
          <p class="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-4">Selected Work</p>
          <h2 class="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-ink-950 leading-[0.9]">
            Featured<br />Projects
          </h2>
        </div>
        <div class="editorial-divider scroll-reveal mt-8 mb-20"></div>

        <!-- Desktop: ARCHITECH-style interactive carousel with icons -->
        <div class="hidden lg:block scroll-reveal" style="min-height: 720px">
          <div class="flex items-end gap-4" style="height: 640px">
            <div
              v-for="(project, i) in featured"
              :key="project.id"
              class="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer h-full"
              :class="activeProject === i ? 'flex-[3]' : 'flex-[1]'"
              @click="setActive(i)"
            >
              <!-- Active: big prominent image -->
              <div v-if="activeProject === i" class="group relative h-full overflow-hidden rounded-lg">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a
                    v-if="project.links.demo && project.links.demo !== '#'"
                    :href="project.links.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white font-semibold text-sm flex items-center gap-2"
                  >
                    View Project
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
                <!-- Icon watermark overlay on active image -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg class="w-40 h-40 text-white/15" viewBox="0 0 24 24" fill="currentColor">
                    <path :d="projectIcons[project.id]" />
                  </svg>
                </div>
              </div>

              <!-- Inactive: large icon -->
              <div v-else class="group flex items-center justify-center h-full">
                <svg class="w-24 h-24 xl:w-32 xl:h-32 text-ink-200 group-hover:text-ink-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path :d="projectIcons[project.id]" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Bottom row: titles + arrows for all items -->
          <div class="flex gap-4 mt-8">
            <div
              v-for="(project, i) in featured"
              :key="'info-' + project.id"
              class="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
              :class="activeProject === i ? 'flex-[3]' : 'flex-[1]'"
              @click="setActive(i)"
            >
              <div class="border-t border-ink-200/60 pt-4 flex items-start justify-between">
                <div>
                  <h3 class="font-semibold text-ink-950" :class="activeProject === i ? 'text-lg' : 'text-sm'">
                    {{ project.title }}
                  </h3>
                  <span class="text-[10px] uppercase tracking-[0.15em] text-accent font-bold mt-1 block">
                    {{ categoryLabels[project.category] }}
                  </span>
                </div>
                <svg class="w-5 h-5 text-ink-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile/tablet carousel -->
        <div class="lg:hidden scroll-reveal">
          <div class="group">
            <div class="relative aspect-[2/3] overflow-hidden rounded-lg bg-surface-sunken">
              <img
                :src="featured[activeProject].image"
                :alt="featured[activeProject].title"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span class="text-white font-semibold text-sm flex items-center gap-2">
                  View Project
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </div>
              <!-- Icon watermark overlay on mobile -->
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg class="w-24 h-24 text-white/10" viewBox="0 0 24 24" fill="currentColor">
                  <path :d="projectIcons[featured[activeProject].id]" />
                </svg>
              </div>
            </div>
            <div class="mt-4">
              <span class="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                {{ categoryLabels[featured[activeProject].category] }}
              </span>
              <h3 class="mt-1 font-semibold text-xl text-ink-950">
                {{ featured[activeProject].title }}
              </h3>
              <p class="mt-2 text-sm text-ink-500 leading-relaxed">
                {{ featured[activeProject].description }}
              </p>
            </div>
          </div>

          <!-- Mobile navigation -->
          <div class="flex items-center justify-between mt-8">
            <div class="flex gap-2">
              <button
                class="p-2 rounded-full border border-ink-200 text-ink-500 hover:border-accent hover:text-accent transition-all"
                @click="prevProject"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M5 12l5-5M5 12l5 5" />
                </svg>
              </button>
              <button
                class="p-2 rounded-full border border-ink-200 text-ink-500 hover:border-accent hover:text-accent transition-all"
                @click="nextProject"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M19 12l-5-5M19 12l-5 5" />
                </svg>
              </button>
            </div>
            <span class="font-mono text-xs text-ink-400">
              {{ String(activeProject + 1).padStart(2, '0') }} / {{ String(featured.length).padStart(2, '0') }}
            </span>
          </div>
        </div>

        <!-- View all + nav arrows -->
        <div class="scroll-reveal mt-16 flex items-center justify-between" style="transition-delay: 100ms">
          <Button :to="{ name: 'projects' }" variant="secondary">
            See All Projects
          </Button>
          <div class="hidden lg:flex gap-2">
            <button
              class="p-2 rounded-full border border-ink-200 text-ink-500 hover:border-accent hover:text-accent transition-all"
              @click="prevProject"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M5 12l5-5M5 12l5 5" />
              </svg>
            </button>
            <button
              class="p-2 rounded-full border border-ink-200 text-ink-500 hover:border-accent hover:text-accent transition-all"
              @click="nextProject"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M19 12l-5-5M19 12l-5 5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== CTA ======================== -->
    <section class="bg-ink-950 py-28 sm:py-36">
      <Container>
        <div class="text-center">
          <p class="scroll-reveal font-mono text-xs tracking-[0.25em] text-accent uppercase mb-4">
            Get in Touch
          </p>
          <h2 class="scroll-reveal font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something together
          </h2>
          <p class="scroll-reveal mx-auto mt-6 max-w-2xl text-lg text-ink-400 sm:text-xl" style="transition-delay: 100ms">
            I'm currently available for freelance work and full-time roles.
            If you have a project in mind, let's talk.
          </p>
          <div class="scroll-reveal mt-10" style="transition-delay: 200ms">
            <Button :to="{ name: 'contact' }" size="lg">Start a Conversation</Button>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>
