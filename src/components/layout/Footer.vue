<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-ink-200/60 bg-surface-sunken">
    <div class="mx-auto max-w-6xl px-6 py-12">
      <div class="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <p class="font-display text-2xl tracking-tight text-ink-700">
          Walid<span class="text-accent-light">Elsayed</span>
        </p>

        <nav aria-label="Footer" class="flex items-center gap-6">
          <router-link
            :to="{ name: 'projects' }"
            class="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950"
          >
            Projects
          </router-link>
          <router-link
            :to="{ name: 'blog' }"
            class="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950"
          >
            Blog
          </router-link>
          <router-link
            :to="{ name: 'about' }"
            class="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950"
          >
            About
          </router-link>
          <router-link
            :to="{ name: 'contact' }"
            class="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950"
          >
            Contact
          </router-link>
        </nav>

        <div class="flex items-center gap-6">
          <a
            href="mailto:walidelsayed316@gmail.com"
            class="-m-2.5 p-2.5 text-ink-600 transition-[color,transform] hover:-translate-y-0.5 hover:text-ink-950"
            aria-label="Email"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>
      </div>

      <div class="mt-8 flex flex-col items-center gap-1 text-center">
        <p class="text-sm text-ink-700">Designed &amp; built by hand in New Orleans.</p>
        <p class="font-mono text-xs text-ink-500">
          &copy; {{ currentYear }} Walid Elsayed · Vue&nbsp;3 + Tailwind&nbsp;CSS
        </p>
      </div>
    </div>
  </footer>
</template>
