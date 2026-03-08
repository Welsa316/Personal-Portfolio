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
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&h=1000&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&h=1000&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=1000&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&h=1000&fit=crop',
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
