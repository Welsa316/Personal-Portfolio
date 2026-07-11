<script setup lang="ts">
import { onMounted } from 'vue'
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
import Typewriter from '@/components/ui/Typewriter.vue'
import { getFeaturedProjects, categoryLabels } from '@/data/projects'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSiteHead } from '@/composables/useSiteHead'

useSiteHead({
  title: 'Home',
  description:
    'Walid Elsayed is a full-stack web developer and designer in New Orleans, building production-grade websites with Vue, React, and modern web technologies.',
})

// Home teases three; the /projects accordion is the full index.
const teaser = getFeaturedProjects().slice(0, 3)

useScrollReveal()

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

        <div class="relative z-20 px-5 pb-20">
          <h1 class="hero-animate massive-text font-hero select-none leading-[0.85]">
            <span class="block text-ink-950">
              <Typewriter text="WALID" :speed="80" cursor="" :initial-delay="200" />
            </span>
            <span class="block text-accent-light">
              <Typewriter text="ELSAYED" :speed="80" cursor="|" :initial-delay="700" />
            </span>
          </h1>
          <div class="hero-animate mt-4 flex flex-col gap-3">
            <p class="text-sm text-ink-500 font-light">— Web developer &amp; designer</p>
            <Button :to="{ name: 'projects' }" size="md">View My Work</Button>
          </div>
        </div>

        <div class="hero-animate absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
          <span class="text-[9px] uppercase tracking-[0.4em] text-ink-500 font-mono">Scroll down</span>
          <div class="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent opacity-30"></div>
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

        <div class="absolute bottom-24 left-0 z-20 px-10">
          <h1 class="hero-animate massive-text font-hero select-none leading-[0.85]">
            <span class="block text-ink-950">
              <Typewriter text="WALID" :speed="80" cursor="" :initial-delay="200" />
            </span>
            <span class="block text-accent-light">
              <Typewriter text="ELSAYED" :speed="80" cursor="|" :initial-delay="700" />
            </span>
          </h1>
          <div class="hero-animate mt-6 flex flex-row items-center gap-4">
            <p class="text-base text-ink-500 font-light">— Web developer &amp; designer</p>
            <Button :to="{ name: 'projects' }" size="md">View My Work</Button>
          </div>
        </div>

        <div class="hero-animate absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
          <span class="text-[9px] uppercase tracking-[0.4em] text-ink-500 font-mono">Scroll down</span>
          <div class="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent opacity-30"></div>
        </div>
      </div>
    </section>

    <!-- ======================== WHAT I DO ======================== -->
    <section class="bg-surface-sunken py-24 sm:py-32">
      <Container>
        <div class="scroll-reveal mb-4">
          <p class="font-mono text-xs tracking-[0.25em] text-accent-light uppercase mb-3">What I Do</p>
          <h2 class="font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Focused on craft, speed, and<br class="hidden sm:block" /> meaningful technology.
          </h2>
        </div>

        <div class="editorial-divider scroll-reveal mt-8 mb-0"></div>

        <div class="grid sm:grid-cols-3">
          <div
            v-for="(feat, i) in features"
            :key="feat.title"
            class="group scroll-reveal px-0 sm:px-8 py-10 rounded-xl transition-all duration-300 hover:bg-surface-raised hover:shadow-md"
            :class="[
              i === 0 ? 'sm:pl-4' : '',
              i === features.length - 1 ? 'sm:pr-4' : '',
              i < features.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-ink-200/60' : '',
            ]"
            :style="`transition-delay: ${i * 100}ms`"
          >
            <span class="font-display text-6xl sm:text-7xl text-accent-light/30 leading-none transition-colors duration-300 group-hover:text-accent-light/60">
              {{ feat.number }}
            </span>
            <h3 class="mt-4 font-display text-xl text-ink-950 transition-colors duration-300 group-hover:text-accent-light">
              {{ feat.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-500 transition-colors duration-300 group-hover:text-ink-700">
              {{ feat.description }}
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- ======================== FEATURED WORK (teaser) ======================== -->
    <section class="border-t border-ink-200/60 py-20 sm:py-28 lg:py-32">
      <Container>
        <div class="scroll-reveal mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
          <div>
            <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent-light">Featured</p>
            <h2 class="font-display text-4xl tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              Recent work, up close.
            </h2>
          </div>
          <Button :to="{ name: 'projects' }" variant="secondary">See All Work</Button>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <router-link
            v-for="(project, i) in teaser"
            :key="project.id"
            :to="{ name: 'project-detail', params: { id: project.id } }"
            class="group scroll-reveal block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            :style="`transition-delay: ${i * 100}ms`"
            :aria-label="`View ${project.title} project details`"
          >
            <!-- screenshot as a light print on the dark wall -->
            <div class="print-tile">
              <div class="flex items-center gap-1.5 px-3 py-2" style="background: #e7e2d8">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span>
              </div>
              <div class="relative aspect-[16/11] overflow-hidden bg-[#f4f1eb]">
                <img
                  v-if="project.desktopScreenshot"
                  :src="project.desktopScreenshot"
                  :alt="`${project.title} — website preview`"
                  loading="lazy"
                  class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div class="mt-4">
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
                {{ categoryLabels[project.category] }}
              </p>
              <h3 class="mt-1.5 font-display text-2xl text-ink-950 transition-colors duration-300 group-hover:text-accent-light">
                {{ project.title }}
              </h3>
            </div>
          </router-link>
        </div>
      </Container>
    </section>

    <!-- ======================== CTA ======================== -->
    <section class="bg-surface-sunken border-y border-ink-200/60 py-28 sm:py-36">
      <Container>
        <div class="text-center">
          <p class="scroll-reveal font-mono text-xs tracking-[0.25em] text-accent-light uppercase mb-4">
            Get in Touch
          </p>
          <h2 class="scroll-reveal font-display text-4xl tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
            Let's build something together
          </h2>
          <p class="scroll-reveal mx-auto mt-6 max-w-2xl text-lg text-ink-500 sm:text-xl" style="transition-delay: 100ms">
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

<style scoped>
.print-tile {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 22px 46px -24px rgba(0, 0, 0, 0.7);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
}
.group:hover .print-tile {
  transform: translateY(-4px);
  box-shadow: 0 30px 60px -22px rgba(0, 0, 0, 0.8);
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #c3bcac;
}
</style>
