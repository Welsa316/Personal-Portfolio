<script setup lang="ts">
import type { Project } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <ProjectCard
      v-for="(project, i) in projects"
      :key="project.id"
      :project="project"
      class="scroll-reveal"
      :style="`transition-delay: ${i * 100}ms`"
    />
  </div>
</template>
