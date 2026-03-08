export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: 'web' | 'ai' | 'other'
  links: {
    github?: string
    demo?: string
  }
  image: string
  featured: boolean
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
  },
  {
    id: 'daris',
    title: 'Daris',
    description:
      'An online education platform dedicated to teaching Islamic studies and Quran. Features structured coursework, interactive lessons, and progress tracking to support students in their learning journey.',
    tags: ['Vue.js', 'Bootstrap', 'JavaScript', 'Responsive Design'],
    category: 'web',
    links: {
      demo: '#',
    },
    image: '/Daris.jpg',
    featured: true,
  },
  {
    id: 'campos-munos-law',
    title: 'Campos Munos Law',
    description:
      'A bilingual website for an immigration law firm in the Greater New Orleans area. Designed to build client trust with a professional, approachable layout, clear service descriptions, and easy contact access in both English and Spanish.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    category: 'web',
    links: {
      demo: '#',
    },
    image: '/CamposMunos.jpg',
    featured: true,
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects
  return projects.filter((p) => p.category === category)
}
