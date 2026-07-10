<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSiteHead } from '@/composables/useSiteHead'

useScrollReveal()
useSiteHead({
  title: 'About',
  description:
    'About Walid Elsayed — full-stack web developer and designer based in New Orleans, building custom sites for small businesses without templates or page builders.',
})

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['Vue 3', 'React', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML / CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
  },
  {
    label: 'Tools & Infra',
    skills: ['Git', 'Vite', 'Vercel', 'AWS', 'Figma'],
  },
]


</script>

<template>
  <div>
    <!-- ======================== HERO ======================== -->
    <section class="relative min-h-[80vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 bg-surface overflow-hidden">
      <!-- Eyebrow -->
      <div class="text-center mb-10 sm:mb-14 z-10 scroll-reveal">
        <span class="inline-block px-4 py-1.5 font-mono text-xs tracking-[0.2em] text-accent uppercase border border-accent/30 rounded-full bg-accent/5">
          About the Developer
        </span>
      </div>

      <!-- Central composition: manifesto hero + floating badges -->
      <div class="relative w-full max-w-6xl mx-auto flex flex-col items-center z-10">
        <!-- Accent glow -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-accent/15 rounded-full blur-[120px]"></div>
        </div>

        <!-- Manifesto -->
        <h1 class="relative z-10 scroll-reveal font-display font-normal text-center leading-[0.95] tracking-tight text-ink-950 px-4">
          <span class="block text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-9xl">
            Small businesses
          </span>
          <span class="block italic text-ink-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-2 sm:my-3 md:my-4">
            deserve
          </span>
          <span class="block text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-9xl">
            <span class="text-accent">world-class</span> websites.
          </span>
        </h1>

        <!-- Static floating badges (md+: absolute around manifesto, no animation) -->
        <div class="hidden md:block absolute z-20 top-[12%] -left-10 lg:-left-16 scroll-reveal" style="transition-delay: 200ms">
          <div class="glass-badge px-4 py-3 rounded-2xl flex items-center gap-3">
            <div class="text-xs md:text-sm font-medium text-ink-700">
              Projects Delivered <span class="font-bold text-base text-ink-950 ml-1">5+</span>
            </div>
          </div>
        </div>

        <div class="hidden md:block absolute z-20 top-[18%] -right-10 lg:-right-16 scroll-reveal" style="transition-delay: 350ms">
          <div class="glass-badge px-4 py-3 rounded-2xl flex items-center gap-3">
            <span class="text-base" aria-hidden="true">📍</span>
            <div class="text-xs md:text-sm font-medium text-ink-700">
              Based in <span class="font-bold text-ink-950">New Orleans</span>
            </div>
          </div>
        </div>

        <div class="hidden md:block absolute z-20 bottom-[18%] -left-12 lg:-left-20 scroll-reveal" style="transition-delay: 500ms">
          <div class="glass-badge px-4 py-3 rounded-2xl flex items-center gap-3">
            <span class="text-base" aria-hidden="true">🎓</span>
            <div class="text-xs md:text-sm font-medium text-ink-700">
              <span class="font-bold text-ink-950">CS Graduate</span>
            </div>
          </div>
        </div>

        <div class="hidden md:block absolute z-20 bottom-[12%] -right-12 lg:-right-20 scroll-reveal" style="transition-delay: 650ms">
          <div class="glass-badge px-4 py-3 rounded-2xl flex items-center gap-3">
            <span class="text-base" aria-hidden="true">⚡</span>
            <div class="text-xs md:text-sm font-medium text-ink-700">
              <span class="font-bold text-ink-950">Full-Stack</span> Focus
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile/tablet badges (flow below manifesto, not overlapping) -->
      <div class="md:hidden mt-10 grid grid-cols-2 gap-2 w-full max-w-md z-10 scroll-reveal" style="transition-delay: 200ms">
        <div class="glass-badge px-3 py-2 rounded-2xl flex items-center justify-center gap-2">
          <div class="text-[11px] font-medium text-ink-700 text-center">
            Projects <span class="font-bold text-ink-950">5+</span>
          </div>
        </div>
        <div class="glass-badge px-3 py-2 rounded-2xl flex items-center justify-center gap-2">
          <span class="text-sm" aria-hidden="true">📍</span>
          <div class="text-[11px] font-medium text-ink-700">
            <span class="font-bold text-ink-950">New Orleans</span>
          </div>
        </div>
        <div class="glass-badge px-3 py-2 rounded-2xl flex items-center justify-center gap-2">
          <span class="text-sm" aria-hidden="true">🎓</span>
          <div class="text-[11px] font-medium text-ink-700">
            <span class="font-bold text-ink-950">CS Graduate</span>
          </div>
        </div>
        <div class="glass-badge px-3 py-2 rounded-2xl flex items-center justify-center gap-2">
          <span class="text-sm" aria-hidden="true">⚡</span>
          <div class="text-[11px] font-medium text-ink-700">
            <span class="font-bold text-ink-950">Full-Stack</span>
          </div>
        </div>
      </div>

      <!-- Bio text -->
      <div class="mt-20 sm:mt-24 text-left max-w-2xl px-6 z-10 scroll-reveal space-y-5">
        <p class="text-lg md:text-xl text-ink-700 leading-relaxed">
          I'm <span class="font-bold text-ink-950 underline decoration-accent decoration-2 underline-offset-4">Walid Elsayed</span>. Web developer &amp; designer in New Orleans, bilingual in English and Arabic, fresh out of UNO with a CS degree (2026).
        </p>
        <p class="text-base md:text-lg text-ink-700 leading-relaxed">
          I started building websites because I kept running into the same problem on the client side: small businesses stuck on monthly Wix subscriptions, paying every month for a site they don't own — and waiting a week just to update a phone number. Most agencies overcharge them, ship templates, and lock them into subscriptions they don't understand. They deserve better.
        </p>
        <p class="text-base md:text-lg text-ink-700 leading-relaxed">
          So I build custom — hand-coded, fast, accessible, fully owned by the client. <span class="font-semibold text-ink-950">Five live projects</span> so far across restaurants, education, and law. Each one shipped without a page builder, a template, or a monthly fee.
        </p>
        <p class="text-base md:text-lg text-ink-700 leading-relaxed italic">
          If your business deserves a website that doesn't break in six months,
          <router-link :to="{ name: 'contact' }" class="not-italic text-accent font-semibold underline decoration-accent/40 hover:decoration-accent transition-colors">let's talk</router-link>.
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
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.06);
}
</style>
