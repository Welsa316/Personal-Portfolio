<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['Vue 3', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Nuxt'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    label: 'Tools & Infra',
    skills: ['Git', 'Vite', 'Vercel', 'AWS'],
  },
]

</script>

<template>
  <section class="py-20 sm:py-24">
    <Container>
      <div class="grid items-start gap-16 lg:grid-cols-5">
        <!-- Bio -->
        <div class="lg:col-span-3">
          <SectionHeader title="About Me" />
          <div class="space-y-4 text-ink-600 leading-relaxed">
            <p>
              I'm a computer science student focused on building structured, scalable web systems.
            </p>
            <p>
              I design and develop modern websites and digital platforms with an emphasis on clean architecture, performance, and long-term maintainability.
            </p>
            <p>
              My work centers around creating systems that generate measurable results through thoughtful UX, automation, and conversion-focused design.
            </p>
          </div>
        </div>

        <!-- Photo placeholder -->
        <div class="lg:col-span-2">
          <div class="aspect-[4/5] overflow-hidden rounded-2xl bg-surface-sunken border border-ink-200/60">
            <div class="flex h-full items-center justify-center text-ink-300">
              <svg class="h-16 w-16" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>

  <!-- Skills -->
  <section class="border-t border-ink-200/60 bg-surface-sunken py-20 sm:py-24">
    <Container>
      <SectionHeader title="Skills" subtitle="Technologies and tools I work with regularly." />
      <div class="grid gap-8 sm:grid-cols-3">
        <div
          v-for="group in skillGroups"
          :key="group.label"
          class="rounded-2xl border border-ink-200/60 bg-surface-raised p-6"
        >
          <h3 class="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            {{ group.label }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="rounded-full bg-surface-sunken px-3 py-1.5 text-sm text-ink-700"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </Container>
  </section>

</template>
