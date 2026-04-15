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
      'A production-ready marketing website for a local ice cream shop, focused on brand presentation, clear navigation, and mobile-first user experience. Designed to showcase products, location details, and drive in-store traffic through clean layout and optimized performance.',
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
      'A full-service restaurant website for a Japanese-Cajun fusion eatery in Metairie, LA. Features online ordering integration, responsive menu display, and location/hours information to drive dine-in and takeout traffic.',
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
      'An online education platform dedicated to teaching Islamic studies and Quran. Features structured coursework, interactive lessons, and progress tracking to support students in their learning journey.',
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
      'An educational platform for the SAHA Institute, providing tutoring services and structured learning programs. Features tutor profiles, course information, and a modern responsive design built to engage students and parents.',
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
    title: 'Campos Munos Law',
    description:
      'A bilingual website for an immigration law firm in the Greater New Orleans area. Designed to build client trust with a professional, approachable layout, clear service descriptions, and easy contact access in both English and Spanish.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    category: 'web',
    links: {},
    image: '/CamposMunos.jpg',
    featured: true,
    status: 'pending',
    iframeAllowed: false,
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
