<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import Button from '@/components/ui/Button.vue'
import ProjectGrid from '@/components/projects/ProjectGrid.vue'
import { getFeaturedProjects } from '@/data/projects'

const featured = getFeaturedProjects()

const features = [
  {
    icon: '◇',
    title: 'Web Development',
    description:
      'Pixel-perfect, performant interfaces built with modern frameworks. From SPAs to full-stack applications.',
  },
  {
    icon: '△',
    title: 'AI-Assisted Development',
    description:
      'Integrating LLMs and machine learning into real products.',
  },
  {
    icon: '○',
    title: 'Design Systems',
    description:
      'Scalable component libraries and design tokens that keep teams shipping consistently and fast.',
  },
]
</script>

<template>
  <!-- Hero -->
  <section class="relative overflow-hidden py-24 sm:py-32">
    <!-- Decorative background -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
      <div class="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-ink-200/30 blur-3xl" />
    </div>

    <Container>
      <div class="max-w-3xl">
        <p
          class="mb-4 font-mono text-sm tracking-widest text-accent opacity-0 animate-fade-up"
        >
          HELLO, I'M
        </p>
        <h1
          class="font-display text-5xl leading-tight tracking-tight text-ink-950 opacity-0 animate-fade-up stagger-1 sm:text-6xl lg:text-7xl"
        >
          Walid Elsayed
        </h1>
        <p
          class="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 opacity-0 animate-fade-up stagger-2"
        >
          A web developer who builds fast, beautiful interfaces and leverages
          AI to ship smarter. Currently open to new opportunities.
        </p>
        <div
          class="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-3"
        >
          <Button :to="{ name: 'projects' }" size="lg">View My Work</Button>
          <Button :to="{ name: 'contact' }" variant="secondary" size="lg">Get in Touch</Button>
        </div>
      </div>
    </Container>
  </section>

  <!-- Features -->
  <section class="border-t border-ink-200/60 bg-surface-sunken py-20 sm:py-24">
    <Container>
      <SectionHeader title="What I Do" subtitle="Focused on craft, speed, and meaningful technology." center />

      <div class="grid gap-8 sm:grid-cols-3">
        <div
          v-for="(feat, i) in features"
          :key="feat.title"
          class="rounded-2xl border border-ink-200/60 bg-surface-raised p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md opacity-0 animate-fade-up"
          :class="`stagger-${i + 1}`"
        >
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 font-display text-xl text-accent">
            {{ feat.icon }}
          </span>
          <h3 class="mt-5 font-display text-lg text-ink-950">{{ feat.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ feat.description }}</p>
        </div>
      </div>
    </Container>
  </section>

  <!-- Featured Projects -->
  <section class="py-20 sm:py-24">
    <Container>
      <SectionHeader
        title="Featured Projects"
        subtitle="A few things I've built recently."
        center
      />
      <ProjectGrid :projects="featured" />
      <div class="mt-12 text-center">
        <Button :to="{ name: 'projects' }" variant="secondary">
          See All Projects
        </Button>
      </div>
    </Container>
  </section>

  <!-- CTA -->
  <section class="border-t border-ink-200/60 bg-ink-950 py-20 sm:py-24">
    <Container>
      <div class="text-center">
        <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
          Let's build something together
        </h2>
        <p class="mx-auto mt-4 max-w-lg text-lg text-ink-400">
          I'm currently available for freelance work and full-time roles.
          If you have a project in mind, let's talk.
        </p>
        <div class="mt-8">
          <Button :to="{ name: 'contact' }" size="lg">Start a Conversation</Button>
        </div>
      </div>
    </Container>
  </section>
</template>
