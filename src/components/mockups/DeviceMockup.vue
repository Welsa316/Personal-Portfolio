<script setup lang="ts">
import type { Project } from '@/data/projects'
import MacBookFrame from './MacBookFrame.vue'
import IPhoneFrame from './IPhoneFrame.vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <!-- Desktop/tablet: overlapping layout, MacBook leaves room for phone on right -->
  <div class="hidden sm:block">
    <div class="relative pr-[10%]">
      <!-- MacBook -->
      <div class="w-full min-w-0">
        <MacBookFrame
          :demo-url="project.links.demo"
          :screenshot="project.desktopScreenshot"
          :iframe-allowed="project.iframeAllowed"
        />
      </div>

      <!-- iPhone — overlapping bottom-right, tucked next to laptop -->
      <div class="absolute bottom-[-8%] right-0 w-[22%] z-10">
        <IPhoneFrame
          :demo-url="project.links.demo"
          :screenshot="project.mobileScreenshot"
          :iframe-allowed="project.iframeAllowed"
        />
      </div>
    </div>
  </div>

  <!-- Mobile: stacked layout, centered -->
  <div class="sm:hidden flex flex-col items-center gap-10">
    <div class="w-full min-w-0 mx-auto">
      <MacBookFrame
        :demo-url="project.links.demo"
        :screenshot="project.desktopScreenshot"
        :iframe-allowed="project.iframeAllowed"
      />
    </div>
    <div class="w-[60%] min-w-0 mx-auto">
      <IPhoneFrame
        :demo-url="project.links.demo"
        :screenshot="project.mobileScreenshot"
        :iframe-allowed="project.iframeAllowed"
      />
    </div>
  </div>
</template>
