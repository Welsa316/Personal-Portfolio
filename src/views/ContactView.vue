<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import { useSiteHead } from '@/composables/useSiteHead'

useSiteHead({
  title: 'Contact',
  description:
    'Get in touch with Walid Elsayed for web development projects, freelance work, or full-time opportunities. Based in New Orleans, available remote.',
})
</script>

<template>
  <section class="py-20 sm:py-24">
    <Container>
      <div class="grid gap-16 lg:grid-cols-5">
        <!-- Left column -->
        <div class="lg:col-span-2">
          <p class="eyebrow mb-4">Contact · New Orleans</p>
          <h1 class="mb-5 font-display text-4xl tracking-tight text-ink-950 sm:text-5xl">
            Get in Touch
          </h1>
          <p class="max-w-md text-pretty leading-relaxed text-ink-500">
            Have a project in mind, or just want to say hello?
            Fill out the form and I'll get back to you within a day or two.
          </p>

          <p class="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink-500">
            <span class="relative flex h-2 w-2" aria-hidden="true">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-60"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-accent-light"></span>
            </span>
            Currently available · replies in ~1 day
          </p>

          <div class="mt-8 space-y-4">
            <div class="flex items-start gap-3">
              <svg class="mt-0.5 h-5 w-5 shrink-0 text-accent-light" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <div>
                <p class="text-sm font-medium text-ink-700">Email</p>
                <a href="mailto:walidelsayed316@gmail.com" class="text-sm text-ink-500 hover:text-accent-light">walidelsayed316@gmail.com</a>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="mt-0.5 h-5 w-5 shrink-0 text-accent-light" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <div>
                <p class="text-sm font-medium text-ink-700">Location</p>
                <p class="text-sm text-ink-500">New Orleans, LA (Remote-friendly)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Container>
  </section>
</template>
