export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  category: 'web' | 'ai' | 'other'
  links: {
    github?: string
    demo?: string
  }
  image: string
  featured: boolean
  status: 'live' | 'offline' | 'pending'
  iframeAllowed: boolean
  role?: string
  year?: string
  client?: string
  desktopScreenshot?: string
  mobileScreenshot?: string
}

export const projects: Project[] = [
  {
    id: 'ok-ice-cream',
    title: 'OK Ice Cream Shop',
    description:
      'A marketing site for a local ice cream shop. Built mobile-first to show off the flavors and make the shop easy to find.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'Responsive Design'],
    category: 'web',
    links: {
      github: 'https://github.com/Ax3lJD/OKIcecreamshop',
      demo: 'https://okicecreamshop.com/',
    },
    image: '/OKIceCream.jpg',
    featured: true,
    status: 'live',
    iframeAllowed: false,
    desktopScreenshot: '/screenshots/ok-desktop.jpg',
    mobileScreenshot: '/screenshots/ok-mobile.jpg',
  },
  {
    id: 'yami-hibachi',
    title: 'Yami Hibachi & Poboy',
    description:
      'A restaurant site for a Japanese-Cajun spot in Metairie, LA. Online ordering and a responsive menu, with hours and location up front.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    category: 'web',
    links: {
      demo: 'https://yamihibachipoboys.com/home',
    },
    image: '/YamiHibachi.jpg',
    featured: true,
    status: 'live',
    iframeAllowed: false,
    desktopScreenshot: '/screenshots/yami-desktop.jpg',
    mobileScreenshot: '/screenshots/yami-mobile.jpg',
  },
  {
    id: 'daris',
    title: 'Daris',
    description:
      'An online platform for teaching Islamic studies and Quran. Structured coursework and interactive lessons, with progress tracking built in.',
    tags: ['Vue.js', 'Bootstrap', 'JavaScript', 'Responsive Design'],
    category: 'web',
    links: {
      demo: 'https://daris.education',
    },
    image: '/Daris.jpg',
    featured: true,
    status: 'live',
    iframeAllowed: false,
    desktopScreenshot: '/screenshots/daris-desktop.jpg',
    mobileScreenshot: '/screenshots/daris-mobile.jpg',
  },
  {
    id: 'saha-institute',
    title: 'SAHA Institute for Learning',
    description:
      'A site for the SAHA Institute\'s tutoring programs. Tutor profiles and course details in a clean, responsive layout for students and parents.',
    tags: ['Vue.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
    category: 'web',
    links: {
      demo: 'https://sahainstituteforlearning.com',
    },
    image: '/SAHAInstitute.png',
    featured: true,
    status: 'live',
    iframeAllowed: false,
    desktopScreenshot: '/screenshots/saha-desktop.jpg',
    mobileScreenshot: '/screenshots/saha-mobile.jpg',
  },
  {
    id: 'campos-munos-law',
    title: 'Campos Muños Law',
    description:
      'A bilingual (English/Spanish) site for a New Orleans immigration law firm serving clients in all 50 states. Clear service breakdowns and easy contact in either language.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    category: 'web',
    links: {
      demo: 'https://camulaw.com',
    },
    image: '/CamposMunos.jpg',
    featured: true,
    status: 'live',
    iframeAllowed: false,
    desktopScreenshot: '/screenshots/camulaw-desktop.jpg',
    mobileScreenshot: '/screenshots/camulaw-mobile.jpg',
  },
]

export const categoryLabels: Record<Project['category'], string> = {
  web: 'Web Development',
  ai: 'AI / Machine Learning',
  other: 'Other',
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectsByCategory(category: Project['category'] | 'all'): Project[] {
  if (category === 'all') return projects
  return projects.filter((p) => p.category === category)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getAdjacentProjects(id: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.id === id)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
