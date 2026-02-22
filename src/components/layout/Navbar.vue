<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const mobileOpen = ref(false)

const navLinks = [
  { name: 'Home', to: { name: 'home' } },
  { name: 'Projects', to: { name: 'projects' } },
  { name: 'About', to: { name: 'about' } },
  { name: 'Contact', to: { name: 'contact' } },
  { name: 'Resume', to: { name: 'resume' } },
]

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-ink-200/60 bg-surface/80 backdrop-blur-md"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <!-- Logo -->
      <RouterLink
        :to="{ name: 'home' }"
        class="font-display text-2xl tracking-tight text-ink-950"
        @click="closeMobile"
      >
        Walid<span class="text-accent">Elsayed</span>
      </RouterLink>

      <!-- Desktop nav -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.name">
          <RouterLink
            :to="link.to"
            class="link-underline text-sm font-medium tracking-wide text-ink-700 transition-colors hover:text-ink-950"
            active-class="!text-accent after:!w-full"
          >
            {{ link.name }}
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md"
          >
            Hire Me
          </RouterLink>
        </li>
      </ul>

      <!-- Mobile hamburger -->
      <button
        class="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="sr-only">Menu</span>
        <div class="flex flex-col gap-1.5">
          <span
            class="block h-0.5 w-6 bg-ink-950 transition-all duration-300"
            :class="mobileOpen ? 'translate-y-2 rotate-45' : ''"
          />
          <span
            class="block h-0.5 w-6 bg-ink-950 transition-all duration-300"
            :class="mobileOpen ? 'opacity-0' : ''"
          />
          <span
            class="block h-0.5 w-6 bg-ink-950 transition-all duration-300"
            :class="mobileOpen ? '-translate-y-2 -rotate-45' : ''"
          />
        </div>
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="absolute inset-x-0 top-full border-b border-ink-200 bg-surface px-6 pb-6 pt-2 shadow-lg md:hidden"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="link in navLinks" :key="link.name">
            <RouterLink
              :to="link.to"
              class="block rounded-lg px-4 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-950"
              active-class="!text-accent !bg-accent/5"
              @click="closeMobile"
            >
              {{ link.name }}
            </RouterLink>
          </li>
          <li class="mt-2">
            <RouterLink
              :to="{ name: 'contact' }"
              class="block rounded-full bg-accent px-5 py-3 text-center text-base font-semibold text-white"
              @click="closeMobile"
            >
              Hire Me
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.mobile-menu-enter-active {
  animation: slideDown 0.25s ease-out;
}
.mobile-menu-leave-active {
  animation: slideDown 0.2s ease-in reverse;
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
