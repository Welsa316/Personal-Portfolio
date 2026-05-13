import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router/routes'
import { projects } from './data/projects'
import './assets/main.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior() {
      return { top: 0, behavior: 'smooth' }
    },
  },
  () => {
    // App-level setup runs on both SSG and client.
    // Head management is handled inside each view via useSiteHead.
  },
)

// Enumerate all routes vite-ssg should pre-render at build time.
// This file is read at build time only — ignored on the client.
export function includedRoutes(_paths: string[]) {
  // Static routes plus dynamic /projects/:id for every known project.
  const staticRoutes = ['/', '/projects', '/about', '/contact']
  const projectRoutes = projects.map((p) => `/projects/${p.id}`)
  return [...staticRoutes, ...projectRoutes]
}
