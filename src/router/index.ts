import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { getProjectById } from '@/data/projects'

const SITE_URL = 'https://walidelsayed.com'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home',
      description:
        'Walid Elsayed is a full-stack web developer and designer in New Orleans, building production-grade websites with Vue, React, and modern web technologies.',
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/ProjectsView.vue'),
    meta: {
      title: 'Projects',
      description:
        'Featured projects by Walid Elsayed including restaurant websites, educational platforms, and bilingual law firm sites built with Vue, React, and Tailwind CSS.',
    },
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: () => import('@/views/ProjectDetailView.vue'),
    meta: { title: 'Project' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About',
      description:
        'About Walid Elsayed — computer science student and web developer focused on clean architecture, performance, and long-term maintainability for client projects.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact',
      description:
        'Get in touch with Walid Elsayed for web development projects, freelance work, or full-time opportunities. Based in New Orleans, available remote.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '404', description: 'Page not found.' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

const BASE_TITLE = 'Walid Elsayed — Portfolio'
const DEFAULT_DESCRIPTION =
  'Walid Elsayed is a full-stack web developer and designer in New Orleans, building production-grade websites with Vue, React, and modern web technologies.'

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

router.beforeEach((to) => {
  let pageTitle = to.meta.title as string | undefined
  let description = (to.meta.description as string | undefined) ?? DEFAULT_DESCRIPTION
  let ogImage = `${SITE_URL}/og-image.jpg`

  if (to.name === 'project-detail' && to.params.id) {
    const project = getProjectById(to.params.id as string)
    if (project) {
      pageTitle = project.title
      description = `${project.title} — ${project.description.slice(0, 140)}`
      ogImage = `${SITE_URL}${project.image}`
    }
  }

  const fullTitle = pageTitle ? `${pageTitle} | ${BASE_TITLE}` : BASE_TITLE
  const canonicalUrl = `${SITE_URL}${to.path}`

  document.title = fullTitle
  setMeta('description', description)
  setCanonical(canonicalUrl)

  // Open Graph
  setMeta('og:title', fullTitle, 'property')
  setMeta('og:description', description, 'property')
  setMeta('og:url', canonicalUrl, 'property')
  setMeta('og:image', ogImage, 'property')
  setMeta('og:type', to.name === 'project-detail' ? 'article' : 'website', 'property')

  // Twitter
  setMeta('twitter:title', fullTitle)
  setMeta('twitter:description', description)
  setMeta('twitter:image', ogImage)
})

export default router
