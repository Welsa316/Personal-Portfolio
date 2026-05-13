import { computed, type MaybeRefOrGetter, toValue } from 'vue'
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { SITE_URL, BASE_TITLE, DEFAULT_OG_IMAGE } from '@/config/constants'

interface HeadOptions {
  title?: MaybeRefOrGetter<string | undefined>
  description?: MaybeRefOrGetter<string | undefined>
  image?: MaybeRefOrGetter<string | undefined>
  type?: 'website' | 'article'
  schema?: MaybeRefOrGetter<Record<string, unknown> | undefined>
}

/**
 * Set per-page meta tags, OG, Twitter Card, canonical, and optional JSON-LD schema.
 * Works in both SSG (build-time) and client-side navigation.
 */
export function useSiteHead(options: HeadOptions = {}) {
  const route = useRoute()

  const fullTitle = computed(() => {
    const t = toValue(options.title)
    return t ? `${t} | ${BASE_TITLE}` : BASE_TITLE
  })

  const description = computed(
    () =>
      toValue(options.description) ||
      'Walid Elsayed is a full-stack web developer and designer in New Orleans, building production-grade websites with Vue, React, and modern web technologies.',
  )

  const image = computed(() => toValue(options.image) || DEFAULT_OG_IMAGE)
  const canonicalUrl = computed(() => `${SITE_URL}${route.path}`)
  const ogType = options.type ?? 'website'

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: ogType },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    link: [{ rel: 'canonical', href: canonicalUrl }],
    script: computed(() => {
      const s = toValue(options.schema)
      if (!s) return []
      return [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(s),
        },
      ]
    }) as any,
  })
}
