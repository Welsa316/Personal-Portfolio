<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
import Typewriter from '@/components/ui/Typewriter.vue'
import ContainerScrollAnimation from '@/components/ui/ContainerScrollAnimation.vue'
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

const portraitUrl =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1600&fit=crop&crop=face'

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

      <!-- Portrait: fills right side, seamlessly blended (face only) -->
      <div
        ref="portraitRef"
        class="hero-animate absolute right-0 top-0 h-full w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw] z-10 flex items-end justify-center"
      >
        <img
          :src="portraitUrl"
          alt="Walid Elsayed Portrait"
          class="portrait-hover portrait-seamless h-[85%] w-auto max-w-none object-cover object-top"
        />
      </div>

      <!-- Name + subtitle at bottom-left -->
      <div class="absolute bottom-20 sm:bottom-24 left-0 z-20 px-6 md:px-10">
        <h1
          ref="nameRef"
          class="hero-animate massive-text font-display select-none leading-[0.85]"
        >
          <span class="block text-ink-950">WALID</span>
          <span class="block text-accent">ELSAYED</span>
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
    <section class="relative bg-surface">
      <ContainerScrollAnimation>
        <template #title>
          <p class="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-3">Selected Work</p>
          <h2 class="font-display text-4xl tracking-tight text-ink-950 sm:text-5xl md:text-6xl">
            Featured <Typewriter
              :text="['Projects', 'Works', 'Builds', 'Creations']"
              :speed="70"
              :wait-time="1500"
              :delete-speed="40"
              cursor-char="_"
              class="text-accent"
            />
          </h2>
          <p class="text-ink-500 text-base mt-4 max-w-lg mx-auto font-light">
            A curated selection of work that represents my craft, attention to detail, and technical range.
          </p>

          <!-- Navigation arrows in header area -->
          <div class="flex items-center justify-center gap-3 mt-6">
            <button
              class="p-2 rounded-full border border-ink-200 text-ink-400 hover:border-accent hover:text-accent transition-all"
              @click="prevProject"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M5 12l5-5M5 12l5 5" />
              </svg>
            </button>
            <span class="font-mono text-xs text-ink-400">
              {{ String(activeProject + 1).padStart(2, '0') }} / {{ String(featured.length).padStart(2, '0') }}
            </span>
            <button
              class="p-2 rounded-full border border-ink-200 text-ink-400 hover:border-accent hover:text-accent transition-all"
              @click="nextProject"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M19 12l-5-5M19 12l-5 5" />
              </svg>
            </button>
          </div>
        </template>

        <!-- Card content: the project carousel -->
        <div class="h-full flex flex-col">

          <!-- Desktop carousel -->
          <div class="hidden lg:flex items-stretch gap-3 h-full p-1">
            <div
              v-for="(project, i) in featured"
              :key="project.id"
              class="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden rounded-xl"
              :class="activeProject === i ? 'flex-[2.5]' : 'flex-[1]'"
              @click="setActive(i)"
            >
              <!-- Active: expanded card with image -->
              <div v-if="activeProject === i" class="group relative h-full">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div class="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <span class="text-accent-light text-[10px] uppercase tracking-[0.2em] font-bold">
                    {{ categoryLabels[project.category] }}
                  </span>
                  <h3 class="text-white text-lg md:text-2xl font-bold mt-1 group-hover:underline underline-offset-4 decoration-1">
                    {{ project.title }}
                  </h3>
                  <p class="text-white/70 text-sm mt-2 line-clamp-2 hidden md:block">
                    {{ project.description }}
                  </p>
                  <a
                    v-if="project.links.demo && project.links.demo !== '#'"
                    :href="project.links.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 mt-4 text-white text-sm font-semibold hover:text-accent-light transition-colors"
                  >
                    View Project
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Inactive: large number + title -->
              <div v-else class="group relative h-full flex flex-col items-center justify-center bg-surface-sunken hover:bg-ink-100 transition-colors duration-300">
                <span class="font-display text-6xl xl:text-8xl text-ink-200 group-hover:text-ink-400 transition-colors duration-300 leading-none select-none">
                  {{ i + 1 }}
                </span>
                <div class="mt-4 text-center px-2">
                  <h3 class="text-sm font-semibold text-ink-700 group-hover:text-ink-950 transition-colors">
                    {{ project.title }}
                  </h3>
                  <span class="text-[10px] uppercase tracking-[0.15em] text-accent font-bold mt-1 block">
                    {{ categoryLabels[project.category] }}
                  </span>
                </div>
                <svg class="w-4 h-4 text-ink-300 group-hover:text-accent mt-3 transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Mobile/tablet carousel -->
          <div class="lg:hidden h-full flex flex-col p-2">
            <div class="group relative flex-1 overflow-hidden rounded-xl">
              <img
                :src="featured[activeProject].image"
                :alt="featured[activeProject].title"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div class="absolute bottom-0 left-0 right-0 p-5">
                <span class="text-accent-light text-[10px] uppercase tracking-[0.2em] font-bold">
                  {{ categoryLabels[featured[activeProject].category] }}
                </span>
                <h3 class="text-white text-xl font-bold mt-1 group-hover:underline underline-offset-4 decoration-1">
                  {{ featured[activeProject].title }}
                </h3>
                <p class="text-white/70 text-sm mt-2 line-clamp-2">
                  {{ featured[activeProject].description }}
                </p>
              </div>
              <!-- Large number overlay -->
              <div class="absolute top-4 right-4 font-display text-7xl text-white/15 leading-none select-none">
                {{ activeProject + 1 }}
              </div>
            </div>
          </div>
        </div>
      </ContainerScrollAnimation>

      <!-- View all projects button below the scroll container -->
      <div class="relative z-10 -mt-40 pb-24 flex justify-center">
        <Button :to="{ name: 'projects' }" variant="secondary">
          See All Projects
        </Button>
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
