<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import IconArrow from '@/components/ui/IconArrow.vue'
import { getAllArticles, getReadingTime, formatArticleDate } from '@/data/articles'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSiteHead } from '@/composables/useSiteHead'
import { SITE_URL } from '@/config/constants'

useScrollReveal()

const posts = getAllArticles()

useSiteHead({
  title: 'Blog',
  description:
    'Plain-spoken guides on owning your website, builder fees, site speed, and hiring a local developer. Written by Walid Elsayed, a New Orleans web developer.',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Walid Elsayed Blog',
    url: `${SITE_URL}/blog`,
    description:
      'Guides on website ownership, website builder fees, site speed, and small business web development.',
    author: {
      '@type': 'Person',
      name: 'Walid Elsayed',
      url: `${SITE_URL}/`,
    },
  },
})
</script>

<template>
  <section class="py-20 sm:py-28 lg:py-32">
    <Container>
      <header class="scroll-reveal mb-12 max-w-2xl sm:mb-16">
        <p class="eyebrow mb-4">Writing · New Orleans</p>
        <h1 class="text-balance font-hero text-5xl font-bold uppercase leading-[0.95] tracking-tight text-ink-950 sm:text-6xl">
          The Blog
        </h1>
        <p class="mt-5 text-pretty text-lg leading-relaxed text-ink-500">
          Straight talk on owning your website, what builders really cost, and how to make a small
          business site fast. No hype, no filler.
        </p>
      </header>

      <ul class="scroll-reveal grid gap-6 md:grid-cols-2">
        <li v-for="post in posts" :key="post.slug">
          <router-link
            :to="{ name: 'article', params: { slug: post.slug } }"
            class="article-card group flex h-full flex-col rounded-card border border-ink-300 bg-surface-raised p-6 sm:p-7"
            :aria-label="`Read ${post.title}`"
          >
            <div class="mb-4 flex items-center gap-3">
              <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
                {{ post.category }}
              </span>
              <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
                {{ getReadingTime(post) }} min read
              </span>
            </div>

            <h2 class="text-balance font-display text-2xl leading-tight text-ink-950 sm:text-3xl">
              {{ post.title }}
            </h2>

            <p class="mt-3 text-pretty leading-relaxed text-ink-700">
              {{ post.excerpt }}
            </p>

            <div class="mt-6 flex items-center justify-between border-t border-ink-200/60 pt-4">
              <time :datetime="post.datePublished" class="font-mono text-xs text-ink-500">
                {{ formatArticleDate(post.datePublished) }}
              </time>
              <span class="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-700 transition-colors group-hover:text-accent-light">
                Read
                <IconArrow class="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </Container>
  </section>
</template>

<style scoped>
.article-card {
  transition:
    border-color 0.3s ease,
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.article-card:hover {
  transform: translateY(-4px);
  border-color: theme('colors.accent.DEFAULT');
  box-shadow: 0 18px 40px -24px rgba(0, 0, 0, 0.75);
}
.article-card:focus-visible {
  outline: none;
  border-color: theme('colors.accent.DEFAULT');
  box-shadow: 0 0 0 2px theme('colors.accent.DEFAULT');
}
</style>
