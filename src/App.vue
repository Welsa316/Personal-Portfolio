<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <a
      href="#main"
      class="sr-only rounded-full font-mono text-xs uppercase tracking-wider focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent-dark focus:px-5 focus:py-2 focus:text-white"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main" tabindex="-1" class="flex-1 focus:outline-none">
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
.page-enter-active {
  animation: pageEnter 0.4s ease-out;
}
.page-leave-active {
  animation: pageFade 0.2s ease-in reverse;
}

@keyframes pageEnter {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pageFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
