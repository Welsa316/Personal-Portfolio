<script setup lang="ts">
import { onMounted } from 'vue'
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['Vue 3', 'React', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML / CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    label: 'Tools & Infra',
    skills: ['Git', 'Vite', 'Vercel', 'AWS', 'Figma'],
  },
]


onMounted(() => {
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
  document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el))
})
</script>

<template>
  <div>
    <!-- ======================== HERO ======================== -->
    <section class="relative min-h-[80vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 bg-surface overflow-hidden">
      <!-- Header -->
      <div class="text-center mb-12 z-10 scroll-reveal">
        <span class="inline-block px-4 py-1.5 mb-6 font-mono text-xs tracking-[0.2em] text-accent uppercase border border-accent/30 rounded-full bg-accent/5">
          About the Developer
        </span>
        <h1 class="font-display text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.2] max-w-2xl mx-auto text-ink-950">
          Meet the Mind Behind the <span class="text-accent">Digital Experience</span>
        </h1>
      </div>

      <!-- Central composition: portrait + floating badges -->
      <div class="relative w-full max-w-5xl mx-auto flex flex-col items-center z-10">
        <!-- Accent glow -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-accent/15 rounded-full blur-[120px]"></div>
        </div>

        <!-- Portrait -->
        <div class="relative z-10 scroll-reveal">
          <img
            src="/AboutPortrait.jpg"
            alt="Walid Elsayed"
            class="w-full max-w-[500px] md:max-w-none md:w-[720px] lg:w-[860px] max-h-[400px] md:max-h-[550px] lg:max-h-[650px] object-contain drop-shadow-2xl"
          />
        </div>

        <!-- Floating badges -->
        <div class="absolute z-20 top-[15%] left-2 sm:left-0 md:-left-16 animate-float scroll-reveal" style="transition-delay: 200ms">
          <div class="glass-badge px-3 py-2 sm:px-4 sm:py-3 rounded-2xl flex items-center gap-3">
            <div class="text-[10px] sm:text-xs md:text-sm font-medium text-ink-700">
              Projects Delivered <span class="font-bold text-sm sm:text-base text-ink-950 ml-1">4+</span>
            </div>
          </div>
        </div>

        <div class="absolute z-20 top-[25%] right-2 sm:right-0 md:-right-16 animate-float-d1 scroll-reveal" style="transition-delay: 350ms">
          <div class="glass-badge px-3 py-2 sm:px-4 sm:py-3 rounded-2xl flex items-center gap-3">
            <span class="text-sm sm:text-base">📍</span>
            <div class="text-[10px] sm:text-xs md:text-sm font-medium text-ink-700">
              Based in <span class="font-bold text-ink-950">New Orleans</span>
            </div>
          </div>
        </div>

        <div class="absolute z-20 bottom-[30%] left-2 sm:left-0 md:-left-20 animate-float-d2 scroll-reveal" style="transition-delay: 500ms">
          <div class="glass-badge px-3 py-2 sm:px-4 sm:py-3 rounded-2xl flex items-center gap-3">
            <span class="text-sm sm:text-base">🎓</span>
            <div class="text-[10px] sm:text-xs md:text-sm font-medium text-ink-700">
              <span class="font-bold text-ink-950">CS Student</span>
            </div>
          </div>
        </div>

        <div class="absolute z-20 bottom-[22%] right-2 sm:right-0 md:-right-20 animate-float-d3 scroll-reveal" style="transition-delay: 650ms">
          <div class="glass-badge px-3 py-2 sm:px-4 sm:py-3 rounded-2xl flex items-center gap-3">
            <span class="text-sm sm:text-base">⚡</span>
            <div class="text-[10px] sm:text-xs md:text-sm font-medium text-ink-700">
              <span class="font-bold text-ink-950">Full-Stack</span> Focus
            </div>
          </div>
        </div>
      </div>

      <!-- Bio text -->
      <div class="mt-16 text-center max-w-2xl px-6 z-10 scroll-reveal">
        <p class="text-lg md:text-xl text-ink-600 leading-relaxed">
          I'm <span class="font-bold text-ink-950 underline decoration-accent decoration-2 underline-offset-4">Walid Elsayed</span>,
          a computer science student focused on building structured, scalable web systems.
          I design and develop modern websites and digital platforms with an emphasis on
          clean architecture, performance, and long-term maintainability.
        </p>
      </div>
    </section>

    <!-- ======================== SKILLS ======================== -->
    <section class="border-t border-ink-200/60 py-20 sm:py-24">
      <Container>
        <div class="scroll-reveal mb-10">
          <p class="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-3">Toolkit</p>
          <h2 class="font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Technologies I work with.
          </h2>
        </div>

        <div class="grid gap-8 sm:grid-cols-3">
          <div
            v-for="(group, i) in skillGroups"
            :key="group.label"
            class="scroll-reveal rounded-2xl border border-ink-200/60 bg-surface-raised p-6"
            :style="`transition-delay: ${i * 100}ms`"
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

    <!-- ======================== CTA ======================== -->
    <section class="bg-ink-950 py-24 sm:py-32">
      <Container>
        <div class="text-center scroll-reveal">
          <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's build something together
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg text-ink-400">
            Currently open to freelance work and full-time opportunities.
          </p>
          <div class="mt-10">
            <Button :to="{ name: 'contact' }" size="lg">Get in Touch</Button>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
.glass-badge {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.06);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
.animate-float-d1 {
  animation: float 6s ease-in-out infinite;
  animation-delay: 1.5s;
}
.animate-float-d2 {
  animation: float 6s ease-in-out infinite;
  animation-delay: 3s;
}
.animate-float-d3 {
  animation: float 6s ease-in-out infinite;
  animation-delay: 4.5s;
}
</style>
