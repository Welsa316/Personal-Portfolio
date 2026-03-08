<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
import ProjectGrid from '@/components/projects/ProjectGrid.vue'
import { getFeaturedProjects } from '@/data/projects'

const featured = getFeaturedProjects()

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

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Shipped', value: '12+' },
  { label: 'Happy Clients', value: '8' },
]

const portraitUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face'
</script>

<template>
  <div>
    <!-- ======================== HERO ======================== -->
    <section class="relative min-h-screen overflow-hidden bg-ink-950 flex items-center">
      <!-- Massive background typography -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 class="massive-text text-ink-800/10 whitespace-nowrap font-display">
          WALID
        </h1>
      </div>

      <!-- Vertical side text -->
      <div class="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-10">
        <span class="vertical-text text-ink-500 font-mono text-[10px] tracking-[0.3em]">
          Developer &amp; Designer / 2024
        </span>
        <div class="w-px h-24 bg-ink-700/50"></div>
      </div>

      <!-- Main hero content -->
      <Container class="relative z-20 py-32 lg:py-0">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-0">
          <!-- Left: Text content -->
          <div class="max-w-xl">
            <p class="mb-4 font-mono text-xs tracking-[0.25em] text-accent uppercase opacity-0 animate-fade-up">
              Hello, I'm
            </p>
            <h2 class="font-display text-5xl leading-tight tracking-tight text-white opacity-0 animate-fade-up stagger-1 sm:text-6xl lg:text-7xl">
              Walid Elsayed
            </h2>
            <p class="mt-6 max-w-md text-lg leading-relaxed text-ink-400 opacity-0 animate-fade-up stagger-2">
              A web developer who builds fast, beautiful interfaces and leverages
              AI to ship smarter. Currently open to new opportunities.
            </p>
            <div class="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-3">
              <Button :to="{ name: 'projects' }" size="lg">View My Work</Button>
              <Button :to="{ name: 'contact' }" variant="secondary" size="lg">Get in Touch</Button>
            </div>

            <!-- Stats -->
            <div class="mt-12 flex gap-10 opacity-0 animate-fade-up stagger-4">
              <div v-for="stat in stats" :key="stat.label" class="text-left">
                <span class="block font-display text-2xl text-white tabular-nums">{{ stat.value }}</span>
                <span class="text-[9px] uppercase tracking-[0.2em] text-ink-500 font-mono">{{ stat.label }}</span>
              </div>
            </div>
          </div>

          <!-- Right: Portrait -->
          <div class="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[380px] xl:w-[440px] z-30 opacity-0 animate-fade-up stagger-5">
            <div class="portrait-glow">
              <img
                :src="portraitUrl"
                alt="Walid Elsayed Portrait"
                class="portrait-hover w-full h-auto rounded-sm"
                style="filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.3));"
              />
            </div>
            <!-- Decorative label -->
            <div class="absolute -left-14 bottom-1/4 vertical-text text-accent font-bold text-[10px] tracking-[0.3em] hidden xl:block">
              ELITE DEVELOPER
            </div>
          </div>
        </div>
      </Container>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
        <span class="text-[9px] uppercase tracking-[0.4em] text-ink-500 font-mono">Scroll to explore</span>
        <svg class="w-4 h-4 text-ink-500 scroll-indicator" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>

    <!-- ======================== WHAT I DO ======================== -->
    <section class="bg-surface py-24 sm:py-32">
      <Container>
        <!-- Editorial section header -->
        <div class="mb-4">
          <p class="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-3">What I Do</p>
          <h2 class="font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Focused on craft, speed, and<br class="hidden sm:block" /> meaningful technology.
          </h2>
        </div>

        <div class="editorial-divider mt-8 mb-0"></div>

        <!-- Editorial feature grid -->
        <div class="grid sm:grid-cols-3">
          <div
            v-for="(feat, i) in features"
            :key="feat.title"
            class="px-0 sm:px-8 py-10 opacity-0 animate-fade-up"
            :class="[
              `stagger-${i + 1}`,
              i === 0 ? 'sm:pl-0' : '',
              i === features.length - 1 ? 'sm:pr-0' : '',
              i < features.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-ink-200/60' : ''
            ]"
          >
            <span class="font-display text-6xl sm:text-7xl text-ink-200/80 leading-none">
              {{ feat.number }}
            </span>
            <h3 class="mt-4 font-display text-xl text-ink-950">{{ feat.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-500">{{ feat.description }}</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- ======================== FEATURED PROJECTS ======================== -->
    <section class="py-24 sm:py-32 border-t border-ink-200/60">
      <Container>
        <!-- Editorial section header -->
        <div class="mb-4">
          <p class="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-3">Selected Work</p>
          <h2 class="font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Featured Projects
          </h2>
        </div>
        <div class="editorial-divider mt-6 mb-12"></div>

        <ProjectGrid :projects="featured" />

        <div class="mt-12">
          <Button :to="{ name: 'projects' }" variant="secondary">
            See All Projects
          </Button>
        </div>
      </Container>
    </section>

    <!-- ======================== CTA ======================== -->
    <section class="bg-ink-950 py-28 sm:py-36">
      <Container>
        <div class="text-center">
          <p class="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-4">Get in Touch</p>
          <h2 class="font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something together
          </h2>
          <p class="mx-auto mt-6 max-w-2xl text-lg text-ink-400 sm:text-xl">
            I'm currently available for freelance work and full-time roles.
            If you have a project in mind, let's talk.
          </p>
          <div class="mt-10">
            <Button :to="{ name: 'contact' }" size="lg">Start a Conversation</Button>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>
