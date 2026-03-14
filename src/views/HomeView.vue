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

const portraitUrl = '/OvalHeadshot.png'

onMounted(() => {
  // Staggered hero reveal — animate all hero elements in order
  const heroEls = document.querySelectorAll('.hero-animate')
  heroEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('revealed')
    }, 150 + i * 150)
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
    <!-- Mobile: stacked layout (portrait + text). md+: overlapping absolute layout -->
    <section class="relative min-h-screen overflow-hidden bg-surface">

      <!-- Mobile hero (portrait as background, text overlay) -->
      <div class="relative min-h-screen md:hidden flex flex-col justify-end">
        <!-- Portrait filling the background -->
        <div class="hero-animate absolute inset-0 flex items-center justify-center">
          <img
            :src="portraitUrl"
            alt="Walid Elsayed Portrait"
            class="h-[80%] w-auto max-w-none object-cover object-top mt-8"
          />
        </div>

        <!-- Bottom gradient so text is readable -->
        <div class="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-surface via-surface/90 to-transparent"></div>

        <!-- Text overlay at bottom -->
        <div class="relative z-20 px-5 pb-20">
          <h1
            class="hero-animate massive-text font-hero select-none leading-[0.85]"
          >
            <span class="block text-ink-950">
              <Typewriter text="WALID" :speed="80" cursor="" :initial-delay="200" />
            </span>
            <span class="block text-accent">
              <Typewriter text="ELSAYED" :speed="80" cursor="|" :initial-delay="700" />
            </span>
          </h1>
          <div class="hero-animate mt-4 flex flex-col gap-3">
            <p class="text-sm text-ink-500 font-light">
              — Web developer &amp; designer
            </p>
            <Button :to="{ name: 'projects' }" size="md">View My Work</Button>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="hero-animate absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
          <span class="text-[9px] uppercase tracking-[0.4em] text-ink-500 font-mono">Scroll down</span>
          <div class="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent opacity-30"></div>
        </div>
      </div>

      <!-- Desktop hero (overlapping absolute layout) -->
      <div class="hidden md:block">
        <div
          class="hero-animate absolute right-0 top-0 h-full w-[50vw] lg:w-[45vw] z-10 flex items-center justify-center"
        >
          <img
            :src="portraitUrl"
            alt="Walid Elsayed Portrait"
            class="h-[85%] w-auto max-w-none object-cover object-top"
          />
        </div>

        <div class="absolute bottom-24 left-0 z-20 px-10">
          <h1
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
            class="hero-animate mt-6 flex flex-row items-center gap-4"
          >
            <p class="text-base text-ink-500 font-light">
              — Web developer &amp; designer
            </p>
            <Button :to="{ name: 'projects' }" size="md">View My Work</Button>
          </div>
        </div>

        <div
          class="hero-animate absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
          <span class="text-[9px] uppercase tracking-[0.4em] text-ink-500 font-mono">Scroll down</span>
          <div class="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent opacity-30"></div>
        </div>
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
    <section class="py-20 sm:py-32 lg:py-40 border-t border-ink-200/60">
      <div class="px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto">
        <!-- Section header — significantly bigger -->
        <div class="scroll-reveal mb-6">
          <p class="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-4">Selected Work</p>
          <h2 class="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-ink-950 leading-[0.9]">
            Featured<br /><span class="text-accent">Projects</span>
          </h2>
        </div>
        <div class="editorial-divider scroll-reveal mt-8 mb-20"></div>

        <!-- Desktop: ARCHITECH-style interactive carousel -->
        <div class="hidden lg:block scroll-reveal">
          <div class="flex items-end gap-4" style="height: 75vh; min-height: 500px">
            <div
              v-for="(project, i) in featured"
              :key="project.id"
              class="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer h-full"
              :class="activeProject === i ? 'flex-[3]' : 'flex-[1]'"
              @click="setActive(i)"
            >
              <!-- Active: big prominent image -->
              <div v-if="activeProject === i" class="group relative h-full overflow-hidden rounded-lg bg-surface-sunken">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="h-full w-full object-contain p-12 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
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
                <!-- Number overlay on active image -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span class="font-hero text-[12rem] text-white/25 leading-none select-none">
                    {{ i + 1 }}
                  </span>
                </div>
              </div>

              <!-- Inactive: large number -->
              <div v-else class="group flex items-center justify-center h-full">
                <span class="font-hero text-[12rem] xl:text-[14rem] text-ink-200 group-hover:text-ink-400 transition-colors duration-300 leading-none select-none">
                  {{ i + 1 }}
                </span>
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
                  <h3 class="font-semibold text-ink-950" :class="activeProject === i ? 'text-xl' : 'text-base'">
                    {{ project.title }}
                  </h3>
                  <span class="text-[10px] uppercase tracking-[0.15em] text-accent font-bold mt-1 block">
                    {{ categoryLabels[project.category] }}
                  </span>
                  <div v-if="activeProject === i" class="flex flex-wrap gap-1.5 mt-2">
                    <span
                      v-for="tag in project.tags"
                      :key="tag"
                      class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-ink-100 text-ink-600 border border-ink-200/60"
                    >
                      {{ tag }}
                    </span>
                  </div>
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
            <div class="relative aspect-[3/4] sm:aspect-[2/3] overflow-hidden rounded-lg bg-surface-sunken">
              <img
                :src="featured[activeProject].image"
                :alt="featured[activeProject].title"
                class="h-full w-full object-contain p-10 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span class="text-white font-semibold text-sm flex items-center gap-2">
                  View Project
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </div>
              <!-- Number overlay on mobile -->
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span class="font-hero text-8xl text-white/15 leading-none select-none">
                  {{ activeProject + 1 }}
                </span>
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
              <div class="flex flex-wrap gap-1.5 mt-3">
                <span
                  v-for="tag in featured[activeProject].tags"
                  :key="tag"
                  class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-ink-100 text-ink-600 border border-ink-200/60"
                >
                  {{ tag }}
                </span>
              </div>
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
