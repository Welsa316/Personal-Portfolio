<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSiteHead } from '@/composables/useSiteHead'

useScrollReveal()
useSiteHead({
  title: 'About',
  description:
    'Walid Elsayed — a New Orleans web developer who hand-builds fast, fully-owned websites for small businesses. No templates, no monthly rent. Bilingual in English and Arabic.',
})

const competencies = [
  {
    title: 'The Front End',
    body: 'The part people see and use. Fast, accessible interfaces that work on every screen — from a one-page site to a full web app.',
    tags: ['Vue 3', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: 'M2.25 3h19.5M3 3v16.5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V3M8.25 21v-4.5h7.5V21',
  },
  {
    title: 'The Back End',
    body: 'The engine behind it. APIs, databases, and server logic that stay reliable as a business grows.',
    tags: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75',
  },
  {
    title: 'Shipping & Upkeep',
    body: 'Getting it live and keeping it that way. Clean deploys, sane tooling, and no shortcuts that break six months later.',
    tags: ['Git', 'Vite', 'Vercel', 'AWS'],
    icon: 'M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
  },
]
</script>

<template>
  <div class="pt-8">
    <!-- ======================== HERO ======================== -->
    <section class="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div class="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]"></div>
      <Container>
        <div class="scroll-reveal max-w-4xl">
          <p class="eyebrow mb-6">How I Work</p>
          <h1 class="text-balance font-display text-4xl leading-[1.05] tracking-tight text-ink-950 sm:text-6xl lg:text-7xl">
            I build websites you <span class="italic">actually own</span>.
          </h1>
          <div class="my-8 h-px w-24 bg-accent/50"></div>
          <p class="max-w-2xl text-pretty text-lg leading-relaxed text-ink-700 sm:text-xl">
            I'm Walid — a web developer and designer in New Orleans. I build custom sites for small
            businesses. No page builders, no templates, no monthly rent on software you'll never
            own. Just fast, clean, hand-coded work that's actually yours.
          </p>
        </div>
      </Container>
    </section>

    <!-- ======================== NARRATIVE ======================== -->
    <section class="scroll-reveal border-t border-ink-200/60 py-20 sm:py-28 lg:py-32">
      <Container>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div class="md:col-span-4">
            <h2 class="text-balance font-display text-2xl leading-snug text-ink-950 sm:text-3xl md:sticky md:top-28">
              Why I build this way.
            </h2>
          </div>
          <div class="space-y-6 md:col-span-7 md:col-start-6">
            <p class="text-pretty text-xl leading-relaxed text-ink-800">
              Honestly? I started doing this because the alternative bugged me. I kept running into
              small businesses paying Wix every month for a site they didn't even own — then waiting
              a week just to change a phone number. Every tiny edit was a fight, and they were paying
              for the privilege.
            </p>
            <p class="leading-relaxed text-ink-700">
              Agencies aren't much better. They overcharge, hand over a template, and lock you into a
              subscription you don't fully understand. A local shop deserves the same quality as a
              company with a whole design team — a site that loads fast, looks sharp, and still holds
              up a few years from now.
            </p>
            <blockquote class="my-8 border-l-2 border-accent bg-surface-raised/40 p-6">
              <p class="m-0 font-display text-2xl italic leading-snug text-ink-950">
                “Perfection is achieved not when there is nothing more to add, but when there is
                nothing left to take away.”
              </p>
              <footer class="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
                — Antoine de Saint-Exupéry
              </footer>
            </blockquote>
            <p class="leading-relaxed text-ink-700">
              So I build everything custom, by hand. I cut anything that isn't pulling its weight —
              not to look minimal, but because less code means a faster site that's easier to keep
              running. And since I'm bilingual in English and Arabic, I can build for clients a lot
              of developers can't reach.
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- ======================== STATEMENT BAND ======================== -->
    <section class="scroll-reveal bg-surface-sunken py-16 sm:py-20">
      <Container>
        <div class="relative overflow-hidden rounded-card border border-ink-300 bg-surface-raised px-8 py-16 sm:px-14 sm:py-24">
          <div class="grain absolute inset-0"></div>
          <div class="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/15 blur-[110px]"></div>
          <p class="relative max-w-4xl text-balance font-display text-3xl leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
            Small businesses deserve <span class="italic text-accent-light">world-class</span> websites.
          </p>
          <p class="relative mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-500">
            The whole reason I do this
          </p>
        </div>
      </Container>
    </section>

    <!-- ======================== COMPETENCIES ======================== -->
    <section class="scroll-reveal py-20 sm:py-28 lg:py-32">
      <Container>
        <div class="mb-12 flex flex-col justify-between gap-6 border-b border-ink-200/60 pb-8 md:flex-row md:items-end">
          <div>
            <p class="eyebrow mb-4">The Work</p>
            <h2 class="font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">The whole stack</h2>
          </div>
          <p class="max-w-sm text-pretty text-ink-500">
            I handle the whole build — design, front end, back end, and getting it shipped.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          <div v-for="c in competencies" :key="c.title" class="group flex flex-col border-b border-ink-200/60 pb-8">
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-surface-raised text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path stroke-linecap="round" stroke-linejoin="round" :d="c.icon" />
              </svg>
            </div>
            <h3 class="mb-3 font-display text-xl text-ink-950">{{ c.title }}</h3>
            <p class="mb-5 flex-grow text-pretty leading-relaxed text-ink-700">{{ c.body }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in c.tags"
                :key="t"
                class="rounded-full border border-ink-300 bg-surface-raised px-3 py-1 font-mono text-[11px] text-ink-600"
              >{{ t }}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- ======================== VALUES BENTO ======================== -->
    <section class="scroll-reveal py-20 sm:py-28 lg:py-32">
      <Container>
        <h2 class="mb-10 text-balance text-center font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">
          What I stand for
        </h2>
        <div class="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-12">
          <!-- 01 large -->
          <div class="group flex flex-col justify-between rounded-card border border-ink-300 bg-surface-raised p-8 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-card md:col-span-8">
            <span class="font-mono text-xs text-accent-light">01</span>
            <div>
              <h3 class="mb-2 font-display text-2xl text-ink-950">Own it, don't rent it.</h3>
              <p class="max-w-md leading-relaxed text-ink-700">
                You get the code, the domain, and the keys — no subscription holding your business
                hostage, no platform you can't walk away from.
              </p>
            </div>
          </div>

          <!-- identity / facts card (textured graphic, no photo) -->
          <div class="relative flex flex-col justify-between overflow-hidden rounded-card border border-ink-300 bg-surface-raised p-8 md:col-span-4">
            <div class="grain absolute inset-0"></div>
            <div class="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-accent/15 blur-[70px]"></div>
            <span class="relative font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">Based in</span>
            <div class="relative">
              <h3 class="font-display text-3xl text-ink-950">New Orleans</h3>
              <p class="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-500">
                English · Arabic · Remote-friendly
              </p>
            </div>
          </div>

          <!-- 02 medium -->
          <div class="group flex flex-col justify-between rounded-card border border-ink-300 bg-surface-raised p-8 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-card md:col-span-6">
            <span class="font-mono text-xs text-accent-light">02</span>
            <div>
              <h3 class="mb-2 font-display text-2xl text-ink-950">Bilingual by default.</h3>
              <p class="leading-relaxed text-ink-700">
                English and Arabic. I build for the clients — and the communities — a lot of
                developers can't reach.
              </p>
            </div>
          </div>

          <!-- 03 terracotta -->
          <div class="relative flex flex-col justify-between overflow-hidden rounded-card bg-accent-dark p-8 transition-transform duration-300 hover:-translate-y-0.5 md:col-span-6">
            <span class="font-mono text-xs text-white/70">03</span>
            <div>
              <h3 class="mb-2 font-display text-2xl text-white">Fast on purpose.</h3>
              <p class="leading-relaxed text-white/90">
                Every site is built to load quick and stay quick — not just look good the day it
                launches.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- ======================== CTA ======================== -->
    <section class="scroll-reveal border-t border-ink-200/60 bg-surface-sunken py-24 text-center sm:py-32">
      <Container>
        <h2 class="text-balance font-display text-4xl tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
          Got something to build?
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-pretty text-lg text-ink-500">
          Like how I work? I'm taking on freelance projects and open to full-time roles —
          tell me what you're building.
        </p>
        <div class="mt-10">
          <Button :to="{ name: 'contact' }" size="lg">Get in Touch</Button>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
/* Subtle film grain so the graphic panels have texture instead of a photo */
.grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
  background-size: 180px 180px;
  pointer-events: none;
}
</style>
