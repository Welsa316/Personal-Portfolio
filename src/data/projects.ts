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
    image: '/OKIceCream.svg',
    featured: true,
  },
  {
    id: 'ai-task-planner',
    title: 'AI Task Planner',
    description:
      'An intelligent task management app powered by LLM agents that automatically breaks down goals into actionable steps, prioritizes work, and adapts to your workflow.',
    tags: ['Vue.js', 'TypeScript', 'OpenAI', 'Tailwind CSS'],
    category: 'ai',
    links: {
      github: '#',
      demo: '#',
    },
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=1000&fit=crop',
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
    image: '/YamiHibachi.svg',
    featured: true,
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio Website',
    description:
      'This very portfolio — an editorial-style personal site built with Vue, Tailwind, and TypeScript. Designed for speed, clarity, and visual impact.',
    tags: ['Vue.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
    category: 'web',
    links: {
      github: '#',
      demo: '#',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop',
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
