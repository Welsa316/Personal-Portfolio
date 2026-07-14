import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
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
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView.vue'),
    meta: {
      title: 'Blog',
      description:
        'Plain-spoken guides on owning your website, website builder fees, site speed, and hiring a local New Orleans web developer.',
    },
  },
  {
    path: '/blog/:slug',
    name: 'article',
    component: () => import('@/views/ArticleView.vue'),
    meta: { title: 'Article' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About',
      description:
        'About Walid Elsayed. Full-stack web developer and designer in New Orleans, building custom sites for small businesses without templates or page builders.',
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
