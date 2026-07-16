<script setup lang="ts">
import { onMounted } from 'vue'
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
import Typewriter from '@/components/ui/Typewriter.vue'
import SelectedWorksAccordion from '@/components/projects/SelectedWorksAccordion.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSiteHead } from '@/composables/useSiteHead'
import { SITE_URL } from '@/config/constants'

useSiteHead({
  title: 'Home',
  description:
    'Walid Elsayed is a web developer and designer in New Orleans. He hand-builds fast, custom websites for small businesses. No templates, no monthly rent.',
  // Site identity for local search. Modeled as a service-area business: no
  // street address, since there is no public storefront. Only truthful, known
  // fields are listed here — no phone, price, or rating is invented.
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: 'Walid Elsayed',
    url: SITE_URL,
    description:
      'Walid Elsayed is a New Orleans web developer who hand-builds fast, custom websites for small businesses and remote clients. No templates, no monthly rent.',
    telephone: '+1-504-230-9499',
    areaServed: { '@type': 'AdministrativeArea', name: 'Greater New Orleans area' },
    knowsLanguage: ['English', 'Arabic', 'Spanish'],
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Walid Elsayed',
      url: `${SITE_URL}/`,
    },
  },
})

useScrollReveal()

const features = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Fast, custom sites hand-built for your business, not dragged out of a page builder. Sharp on every screen.',
  },
  {
    number: '02',
    title: 'AI Where It Helps',
    description:
      'I use AI only where it actually helps, like smarter search or less busywork. No hype.',
  },
  {
    number: '03',
    title: 'Built to Last',
    description:
      'Reusable building blocks so your site stays consistent and quick to update as your business grows.',
  },
]

const portraitUrl = '/OvalHeadshot.png'

onMounted(() => {
  // Both hero layouts (mobile + desktop) live in the DOM at once; the hidden one is
  // display:none. Filter to the visible layout via offsetParent so its stagger
  // indices start at 0 — otherwise the desktop hero waited ~750ms behind the hidden
  // mobile copies and read as a blank hero on load.
  const heroEls = Array.from(
    document.querySelectorAll<HTMLElement>('.hero-animate'),
  ).filter((el) => el.offsetParent !== null)
  heroEls.forEach((el, i) => {
    setTimeout(() => el.classList.add('revealed'), 90 + i * 110)
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
        <div class="hero-animate absolute inset-0 flex items-end justify-center">
          <picture>
            <source srcset="/OvalHeadshot.webp" type="image/webp" />
            <img
              :src="portraitUrl"
              alt="Walid Elsayed, web developer in New Orleans"
              width="800"
              height="792"
              fetchpriority="high"
              class="h-[85%] w-auto max-w-none object-cover object-top"
            />
          </picture>
        </div>

        <!-- Bottom gradient so text is readable — confined to lower portion -->
        <div class="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-surface via-surface/90 to-transparent pointer-events-none"></div>

        <div class="relative z-20 px-6 pb-20">
          <h1 class="hero-animate massive-text font-hero select-none leading-[0.85]">
            <span class="block text-ink-950">
              <Typewriter text="WALID" :speed="80" cursor="" :initial-delay="200" />
            </span>
            <span class="block text-accent-light">
              <Typewriter text="ELSAYED" :speed="80" cursor="|" :initial-delay="700" />
            </span>
          </h1>
          <div class="hero-animate mt-4 flex flex-col gap-3">
            <p class="text-sm text-ink-500 font-light">Web developer &amp; designer</p>
            <Button :to="{ name: 'projects' }" size="md">View My Work</Button>
          </div>
        </div>

        <div class="hero-animate absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
          <span class="text-[9px] uppercase tracking-[0.4em] text-ink-500 font-mono">Scroll down</span>
          <div class="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent opacity-30 animate-scroll-hint"></div>
        </div>
      </div>

      <!-- Desktop hero (overlapping absolute layout) -->
      <div class="hidden md:block">
        <div class="hero-animate absolute right-0 top-0 h-full w-[50vw] lg:w-[45vw] z-10 flex items-center justify-center">
          <picture>
            <source srcset="/OvalHeadshot.webp" type="image/webp" />
            <img
              :src="portraitUrl"
              alt="Walid Elsayed, web developer in New Orleans"
              width="800"
              height="792"
              fetchpriority="high"
              class="h-[85%] w-auto max-w-none object-cover object-top"
            />
          </picture>
        </div>

        <div class="absolute inset-x-0 bottom-24 z-20">
          <div class="mx-auto max-w-6xl px-6">
            <h1 class="hero-animate massive-text font-hero select-none leading-[0.85]">
              <span class="block text-ink-950">
                <Typewriter text="WALID" :speed="80" cursor="" :initial-delay="200" />
              </span>
              <span class="block text-accent-light">
                <Typewriter text="ELSAYED" :speed="80" cursor="|" :initial-delay="700" />
              </span>
            </h1>
            <div class="hero-animate mt-6 flex flex-row items-center gap-4">
              <p class="text-base text-ink-500 font-light">Web developer &amp; designer</p>
              <Button :to="{ name: 'projects' }" size="md">View My Work</Button>
            </div>
          </div>
        </div>

        <div class="hero-animate absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
          <span class="text-[9px] uppercase tracking-[0.4em] text-ink-500 font-mono">Scroll down</span>
          <div class="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent opacity-30 animate-scroll-hint"></div>
        </div>
      </div>
    </section>

    <!-- ======================== WHAT I DO ======================== -->
    <section class="bg-surface-sunken py-24 sm:py-32">
      <Container>
        <div class="scroll-reveal mb-4">
          <p class="eyebrow mb-3">What I Do</p>
          <h2 class="max-w-2xl text-balance font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Custom-built to last.
          </h2>
        </div>

        <div class="editorial-divider scroll-reveal mb-0 mt-8"></div>

        <div class="grid gap-4 sm:grid-cols-3">
          <div
            v-for="feat in features"
            :key="feat.title"
            class="group scroll-reveal rounded-card px-6 py-10 transition-[background-color,box-shadow,transform,color] duration-300 hover:-translate-y-0.5 hover:bg-surface-raised hover:shadow-card"
          >
            <span class="font-display text-6xl leading-none text-accent-light/30 transition-colors duration-300 group-hover:text-accent-light/60 sm:text-7xl">
              {{ feat.number }}
            </span>
            <h3 class="mt-4 font-display text-xl text-ink-950 transition-colors duration-300 group-hover:text-accent-light">
              {{ feat.title }}
            </h3>
            <p class="mt-3 text-pretty text-sm leading-relaxed text-ink-500 transition-colors duration-300 group-hover:text-ink-700">
              {{ feat.description }}
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- ======================== SELECTED WORKS (accordion teaser) ======================== -->
    <section class="border-t border-ink-200/60 py-20 sm:py-28 lg:py-32">
      <Container>
        <div class="scroll-reveal mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-14">
          <div>
            <p class="eyebrow mb-4">Selected Works</p>
            <h2 class="text-balance font-display text-4xl tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              A few favorites.
            </h2>
          </div>
          <Button :to="{ name: 'projects' }" variant="secondary">See All Work</Button>
        </div>

        <div class="scroll-reveal">
          <SelectedWorksAccordion :limit="3" />
        </div>
      </Container>
    </section>

    <!-- ======================== CTA ======================== -->
    <section class="bg-surface-sunken border-y border-ink-200/60 py-28 sm:py-36">
      <Container>
        <div class="text-center">
          <p class="eyebrow scroll-reveal mb-4">Available for work</p>
          <h2 class="scroll-reveal text-balance font-display text-4xl tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
            Let's build something together
          </h2>
          <p class="scroll-reveal mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink-500 sm:text-xl" style="transition-delay: 100ms">
            I'm currently available for freelance work and full-time roles.
            If you have a project in mind, let's talk.
          </p>
          <div class="scroll-reveal mt-10" style="transition-delay: 200ms">
            <Button :to="{ name: 'contact' }" size="lg">Get in Touch</Button>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>
