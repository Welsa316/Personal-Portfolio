<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import Button from '@/components/ui/Button.vue'

const highlights = [
  'Computer Science student (3.85 GPA) building production-ready web and cloud systems',
  'Developed NLP pipeline extracting Arabic narrator chains with 90% matching accuracy',
  'Designing a full-stack restaurant ordering platform (Vue + Spring Boot) with authentication and database integration',
  'Deployed secure AWS site-to-site VPN and EC2 cloud infrastructure for business continuity',
  'Client-facing freelance developer focused on scalable, maintainable systems'
]
</script>

<template>
  <section class="py-20 sm:py-24">
    <Container narrow>
      <SectionHeader
        title="Resume"
        subtitle="A high-level summary. Download the full PDF for details."
      />

      <div class="mb-8">
        <Button href="#" size="lg">
          <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download Resume (PDF)
        </Button>
      </div>

      <div class="rounded-2xl border border-ink-200/60 bg-surface-raised p-8">
        <h3 class="font-display text-xl text-ink-950">Highlights</h3>
        <ul class="mt-5 space-y-3">
          <li
            v-for="(item, i) in highlights"
            :key="i"
            class="flex items-start gap-3 text-ink-600 opacity-0 animate-slide-in"
            :class="`stagger-${i + 1}`"
          >
            <span class="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
            <span class="text-sm leading-relaxed">{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-12 rounded-2xl border border-ink-200/60 bg-surface-sunken p-8 text-center">
        <p class="text-ink-500">
          Want to know more? Let's chat.
        </p>
        <div class="mt-4">
          <Button :to="{ name: 'contact' }" variant="secondary">Contact Me</Button>
        </div>
      </div>
    </Container>
  </section>
</template>
