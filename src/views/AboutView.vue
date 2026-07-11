<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSiteHead } from '@/composables/useSiteHead'

useScrollReveal()
useSiteHead({
  title: 'About',
  description:
    'Walid Elsayed — a New Orleans web developer who hand-builds fast, accessible, fully-owned websites for small businesses. Bilingual in English and Arabic.',
})

const competencies = [
  {
    title: 'Interface Engineering',
    body: 'Pixel-accurate, accessible interfaces built with modern frameworks — from marketing sites to full single-page apps.',
    tags: ['Vue 3', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: 'M2.25 3h19.5M3 3v16.5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V3M8.25 21v-4.5h7.5V21',
  },
  {
    title: 'Systems & Data',
    body: 'APIs, databases, and server logic that stay reliable and clear as a business grows.',
    tags: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75',
  },
  {
    title: 'Ship & Maintain',
    body: 'Clean deploys, sane tooling, and an obsession with long-term maintainability over quick hacks.',
    tags: ['Git', 'Vite', 'Vercel', 'AWS'],
    icon: 'M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
  },
]
</script>

<template>
  <main class="pt-8">
    <!-- ======================== HERO ======================== -->
    <section class="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <!-- ambient terracotta glow -->
      <div class="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]"></div>
      <Container>
        <div class="scroll-reveal max-w-4xl">
          <p class="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent-light">The Approach</p>
          <h1 class="font-display text-4xl leading-[1.05] tracking-tight text-ink-950 sm:text-6xl lg:text-7xl">
            Craft, clarity, and code you actually own.
          </h1>
          <div class="my-8 h-px w-24 bg-ink-300"></div>
          <p class="max-w-2xl text-lg leading-relaxed text-ink-700 sm:text-xl">
            I'm Walid Elsayed, a web developer and designer in New Orleans. I build custom websites
            for small businesses — hand-coded, fast, accessible, and fully yours. No page builders,
            no templates, no monthly rent on software you'll never control.
          </p>
        </div>
      </Container>
    </section>

    <!-- ======================== NARRATIVE ======================== -->
    <section class="scroll-reveal border-t border-ink-200/60 py-16 sm:py-24">
      <Container>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div class="md:col-span-4">
            <h2 class="font-display text-2xl leading-snug text-ink-950 sm:text-3xl md:sticky md:top-28">
              From frustrated client to hands-on builder.
            </h2>
          </div>
          <div class="space-y-6 md:col-span-7 md:col-start-6">
            <p class="text-xl leading-relaxed text-ink-800">
              The principles of good building don't change when you move from a storefront to a
              screen — structure, clarity, speed. I kept meeting small businesses stuck on monthly
              Wix plans, paying every month for a site they didn't own, waiting a week just to change
              a phone number.
            </p>
            <p class="leading-relaxed text-ink-700">
              Most agencies overcharge them, ship a template, and lock them into subscriptions they
              don't understand. I reject that premise. A local business deserves the same craft as a
              company with a full design team — fast load times, clean typography, and a site that
              still feels current three years from now.
            </p>
            <blockquote class="my-8 border-l-2 border-accent bg-surface-raised/40 p-6">
              <p class="m-0 font-display text-2xl italic leading-snug text-ink-950">
                “Clarity is the ultimate sophistication. A fast site you own beats a bloated one you rent.”
              </p>
            </blockquote>
            <p class="leading-relaxed text-ink-700">
              So I build custom. Every project starts by stripping away the superfluous until only
              the essential remains — not as an aesthetic pose, but as a performance strategy. Less
              code means faster pages, easier maintenance, and a clearer path for the person on the
              other side of the screen. Bilingual in English and Arabic, I also build for the clients
              other developers can't reach.
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- ======================== BREAKOUT IMAGE ======================== -->
    <section class="scroll-reveal bg-surface-sunken py-16 sm:py-20">
      <Container>
        <figure class="m-0">
          <div class="group relative aspect-[16/8] w-full overflow-hidden rounded-xl border border-ink-200 bg-accent">
            <img
              src="/screenshots/ok-desktop.jpg"
              alt="Recent work — OK Ice Cream Shop website"
              loading="lazy"
              class="h-full w-full object-cover object-top opacity-90 mix-blend-luminosity transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent"></div>
          </div>
          <figcaption class="mt-4 text-right font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
            Fig 01 — Recent work, New Orleans
          </figcaption>
        </figure>
      </Container>
    </section>

    <!-- ======================== COMPETENCIES ======================== -->
    <section class="scroll-reveal py-16 sm:py-24">
      <Container>
        <div class="mb-12 flex flex-col justify-between gap-6 border-b border-ink-200/60 pb-8 md:flex-row md:items-end">
          <div>
            <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent-light">Competencies</p>
            <h2 class="font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">Technical depth</h2>
          </div>
          <p class="max-w-sm text-ink-500">
            Capabilities forged where rigorous engineering meets a designer's eye for detail.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          <div v-for="c in competencies" :key="c.title" class="group flex flex-col border-b border-ink-200/40 pb-8">
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-surface-raised text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" :d="c.icon" />
              </svg>
            </div>
            <h3 class="mb-3 font-display text-xl text-ink-950">{{ c.title }}</h3>
            <p class="mb-5 flex-grow leading-relaxed text-ink-700">{{ c.body }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in c.tags"
                :key="t"
                class="rounded-full border border-ink-200 bg-surface-raised px-3 py-1 font-mono text-[11px] text-ink-600"
              >{{ t }}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- ======================== VALUES BENTO ======================== -->
    <section class="scroll-reveal py-16 sm:py-24">
      <Container>
        <h2 class="mb-10 text-center font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">
          What I stand for
        </h2>
        <div class="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-12">
          <!-- 01 large -->
          <div class="group flex flex-col justify-between rounded-xl border border-ink-200 bg-surface-raised p-8 transition-colors duration-300 hover:border-accent md:col-span-8">
            <div class="flex items-start justify-between">
              <span class="font-mono text-xs text-accent-light">01</span>
            </div>
            <div>
              <h3 class="mb-2 font-display text-2xl text-ink-950">Own it, don't rent it.</h3>
              <p class="max-w-md leading-relaxed text-ink-700">
                You get the code, the domain, and the keys — no subscriptions holding your business
                hostage, no platform you can't leave.
              </p>
            </div>
          </div>

          <!-- portrait card -->
          <div class="relative overflow-hidden rounded-xl border border-ink-200 md:col-span-4">
            <picture>
              <source srcset="/OvalHeadshot.webp" type="image/webp" />
              <img
                src="/OvalHeadshot.png"
                alt="Walid Elsayed"
                loading="lazy"
                class="h-full w-full object-cover object-top"
              />
            </picture>
            <div class="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent"></div>
          </div>

          <!-- 02 medium -->
          <div class="group flex flex-col justify-between rounded-xl border border-ink-200 bg-surface-raised p-8 transition-colors duration-300 hover:border-accent md:col-span-6">
            <span class="font-mono text-xs text-accent-light">02</span>
            <div>
              <h3 class="mb-2 font-display text-2xl text-ink-950">Bilingual by default.</h3>
              <p class="leading-relaxed text-ink-700">
                English and Arabic. I build for the clients other developers can't reach — and the
                communities they serve.
              </p>
            </div>
          </div>

          <!-- 03 terracotta -->
          <div class="relative flex flex-col justify-between overflow-hidden rounded-xl bg-accent p-8 md:col-span-6">
            <span class="font-mono text-xs text-white/70">03</span>
            <div>
              <h3 class="mb-2 font-display text-2xl text-white">Performance is a feature.</h3>
              <p class="leading-relaxed text-white/85">
                Fast, accessible, and engineered to still feel current years from now — not just on
                launch day.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- ======================== CTA ======================== -->
    <section class="scroll-reveal border-t border-ink-200/60 bg-surface-sunken py-24 text-center sm:py-32">
      <Container>
        <h2 class="font-display text-4xl tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
          Ready to build?
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg text-ink-500">
          Currently available for freelance work and full-time roles. If you've got a project in
          mind, let's talk.
        </p>
        <div class="mt-10">
          <Button :to="{ name: 'contact' }" size="lg">Get in Touch</Button>
        </div>
      </Container>
    </section>
  </main>
</template>
