<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { marked } from 'marked'
import Container from '@/components/layout/Container.vue'
import IconArrow from '@/components/ui/IconArrow.vue'
import {
  getArticleBySlug,
  getAdjacentArticles,
  getArticleFaqs,
  getReadingTime,
  formatArticleDate,
} from '@/data/articles'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSiteHead } from '@/composables/useSiteHead'
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/config/constants'

useScrollReveal()

const route = useRoute()
const router = useRouter()

const article = computed(() => getArticleBySlug(route.params.slug as string))
const adjacent = computed(() => getAdjacentArticles(route.params.slug as string))

if (!article.value && typeof window !== 'undefined') {
  router.replace({ name: 'not-found' })
}

// Markdown -> HTML at render time. marked.parse is synchronous here, so the output
// lands in the vite-ssg prerendered static HTML. External links get target/rel;
// the click handler below keeps internal links on the SPA router.
const renderedBody = computed(() => {
  const a = article.value
  if (!a) return ''
  const html = marked.parse(a.body, { async: false, gfm: true }) as string
  return html.replace(
    /<a href="(https?:\/\/[^"]+)"/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer"',
  )
})

// Keep same-origin links inside the SPA instead of triggering a full reload.
function onProseClick(e: MouseEvent) {
  const target = (e.target as HTMLElement)?.closest('a')
  if (!target) return
  const href = target.getAttribute('href') || ''
  if (href.startsWith('/') && !target.hasAttribute('target')) {
    e.preventDefault()
    router.push(href)
  }
}

useSiteHead({
  rawTitle: () => article.value?.metaTitle,
  description: () => article.value?.description,
  image: DEFAULT_OG_IMAGE,
  type: 'article',
  schema: () => {
    const a = article.value
    if (!a) return undefined

    const articleUrl = `${SITE_URL}/blog/${a.slug}`

    const blogPosting = {
      '@type': 'BlogPosting',
      headline: a.title,
      description: a.description,
      datePublished: a.datePublished,
      dateModified: a.dateModified,
      author: {
        '@type': 'Person',
        name: 'Walid Elsayed',
        url: `${SITE_URL}/`,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Walid Elsayed',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: DEFAULT_OG_IMAGE,
        },
      },
      image: DEFAULT_OG_IMAGE,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': articleUrl,
      },
      keywords: a.primaryKeyword,
    }

    const breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: a.title, item: articleUrl },
      ],
    }

    // FAQPage is emitted only when the article renders a "Common questions"
    // section, so the structured data matches what a visitor actually sees.
    const faqs = getArticleFaqs(a)
    const faqPage =
      faqs.length > 0
        ? {
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          }
        : undefined

    return {
      '@context': 'https://schema.org',
      '@graph': [blogPosting, breadcrumb, ...(faqPage ? [faqPage] : [])],
    }
  },
})
</script>

<template>
  <article v-if="article">
    <!-- Back link -->
    <div class="pt-8 pb-2 sm:pt-10">
      <Container narrow>
        <router-link
          :to="{ name: 'blog' }"
          class="group inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-950"
        >
          <svg class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M5 12l5-5M5 12l5 5" />
          </svg>
          All Articles
        </router-link>
      </Container>
    </div>

    <!-- Header -->
    <header class="pt-8 pb-8 sm:pt-10">
      <Container narrow>
        <div class="scroll-reveal">
          <p class="eyebrow mb-4">{{ article.category }}</p>
          <h1 class="text-balance font-display text-4xl leading-[1.05] tracking-tight text-ink-950 sm:text-5xl">
            {{ article.title }}
          </h1>
          <div class="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-ink-500">
            <time :datetime="article.datePublished">{{ formatArticleDate(article.datePublished) }}</time>
            <span aria-hidden="true" class="text-ink-300">/</span>
            <span>{{ getReadingTime(article) }} min read</span>
            <span aria-hidden="true" class="text-ink-300">/</span>
            <span>Walid Elsayed</span>
          </div>
        </div>
        <div class="editorial-divider scroll-reveal mt-8" style="transition-delay: 100ms"></div>
      </Container>
    </header>

    <!-- Body -->
    <Container narrow>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="article-prose scroll-reveal" v-html="renderedBody" @click="onProseClick"></div>
    </Container>

    <!-- Contact CTA -->
    <section class="mt-4 pb-4">
      <Container narrow>
        <div class="scroll-reveal rounded-card border border-ink-300 bg-surface-sunken p-8 sm:p-10">
          <p class="eyebrow mb-3">Work with me</p>
          <h2 class="font-display text-3xl leading-tight text-ink-950 sm:text-4xl">
            Want a site you actually own?
          </h2>
          <p class="mt-3 max-w-xl text-pretty leading-relaxed text-ink-700">
            I hand-build fast custom sites for small businesses in New Orleans and beyond. You keep
            the code and the domain.
          </p>
          <router-link
            :to="{ name: 'contact' }"
            class="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-dark px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-[color,background-color,box-shadow,transform] hover:bg-accent hover:shadow-glow hover:-translate-y-0.5"
          >
            Start a project
            <IconArrow />
          </router-link>
        </div>
      </Container>
    </section>

    <!-- Prev/Next -->
    <section class="border-t border-ink-200/60 py-12">
      <Container narrow>
        <div class="scroll-reveal flex items-center justify-between gap-6">
          <router-link
            v-if="adjacent.prev"
            :to="{ name: 'article', params: { slug: adjacent.prev.slug } }"
            class="group flex max-w-[45%] items-center gap-3 text-ink-500 transition-colors hover:text-ink-950"
          >
            <svg class="h-5 w-5 shrink-0 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M5 12l5-5M5 12l5 5" />
            </svg>
            <div class="text-left">
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">Previous</p>
              <p class="text-sm font-medium">{{ adjacent.prev.title }}</p>
            </div>
          </router-link>
          <div v-else></div>

          <router-link
            v-if="adjacent.next"
            :to="{ name: 'article', params: { slug: adjacent.next.slug } }"
            class="group flex max-w-[45%] items-center gap-3 text-right text-ink-500 transition-colors hover:text-ink-950"
          >
            <div>
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">Next</p>
              <p class="text-sm font-medium">{{ adjacent.next.title }}</p>
            </div>
            <svg class="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M19 12l-5-5M19 12l-5 5" />
            </svg>
          </router-link>
          <div v-else></div>
        </div>
      </Container>
    </section>
  </article>
</template>

<style scoped>
/* Hand-styled prose using the Warm Charcoal tokens. Targets v-html output via
   :deep(). Measure held near 68ch for comfortable reading. */
.article-prose {
  max-width: 68ch;
  color: theme('colors.ink.700');
  font-size: 1.0625rem;
  line-height: 1.75;
}

.article-prose :deep(p) {
  margin: 1.25em 0;
}

.article-prose :deep(h2) {
  margin: 2em 0 0.6em;
  font-family: theme('fontFamily.display');
  font-size: 1.9rem;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: theme('colors.ink.950');
}

.article-prose :deep(h3) {
  margin: 1.6em 0 0.5em;
  font-family: theme('fontFamily.display');
  font-size: 1.4rem;
  line-height: 1.2;
  color: theme('colors.ink.900');
}

.article-prose :deep(a) {
  color: theme('colors.accent.light');
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  transition: color 0.2s ease;
}
.article-prose :deep(a:hover) {
  color: theme('colors.accent.DEFAULT');
}

.article-prose :deep(strong) {
  color: theme('colors.ink.900');
  font-weight: 600;
}

.article-prose :deep(ul),
.article-prose :deep(ol) {
  margin: 1.25em 0;
  padding-left: 1.4em;
}
.article-prose :deep(ul) {
  list-style: none;
}
.article-prose :deep(ul) > li {
  position: relative;
}
.article-prose :deep(ul) > li::before {
  content: '';
  position: absolute;
  left: -1.1em;
  top: 0.7em;
  height: 6px;
  width: 6px;
  border-radius: 9999px;
  background: theme('colors.accent.DEFAULT');
}
.article-prose :deep(ol) {
  list-style: decimal;
}
.article-prose :deep(li) {
  margin: 0.4em 0;
  padding-left: 0.2em;
}

.article-prose :deep(blockquote) {
  margin: 1.5em 0;
  border-left: 2px solid theme('colors.accent.DEFAULT');
  padding: 0.2em 0 0.2em 1.2em;
  color: theme('colors.ink.600');
  font-style: italic;
}

.article-prose :deep(hr) {
  margin: 2.5em 0 2em;
  border: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    rgb(74 63 48 / 0.6),
    rgb(196 93 62 / 0.35) 32%,
    transparent 88%
  );
}

/* Comparison tables: scroll on small screens, tokenized borders and header. */
.article-prose :deep(table) {
  width: 100%;
  margin: 1.75em 0;
  border-collapse: collapse;
  font-size: 0.95rem;
  display: block;
  overflow-x: auto;
}
.article-prose :deep(thead) {
  background: theme('colors.surface.sunken');
}
.article-prose :deep(th) {
  text-align: left;
  padding: 0.7em 0.9em;
  font-family: theme('fontFamily.mono');
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: theme('colors.ink.800');
  border: 1px solid theme('colors.ink.300');
}
.article-prose :deep(td) {
  padding: 0.7em 0.9em;
  vertical-align: top;
  color: theme('colors.ink.700');
  border: 1px solid theme('colors.ink.300');
}
.article-prose :deep(tbody tr:nth-child(even)) {
  background: theme('colors.surface.raised');
}

.article-prose :deep(h2 + p),
.article-prose :deep(h3 + p) {
  margin-top: 0.4em;
}
</style>
