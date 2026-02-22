# Portfolio — Vue 3 + Vite + TypeScript

## Architecture Overview

This portfolio uses Vue 3 with `<script setup>` and TypeScript throughout, routed via Vue Router in history mode with lazy-loaded views for optimal code splitting. The layout follows a shell pattern: `App.vue` renders a persistent `Navbar` and `Footer` around a `<router-view>` with CSS page transitions. Styling is handled entirely by Tailwind CSS with a custom warm "ink + terracotta" palette, Instrument Serif / DM Sans typography loaded from Google Fonts, and a mobile-first responsive grid. Reusable UI primitives (`Button`, `SectionHeader`, `Container`) live under `src/components/ui/`, domain components under `projects/` and `contact/`, and layout chrome under `layout/`. Data is local (no backend) — `src/data/projects.ts` exports typed project objects consumed by views directly. The contact form validates client-side and logs to console as a stub. Route-level `meta.title` drives document titles via a global `beforeEach` guard. CSS-only `fadeUp`, `fadeIn`, and `slideIn` keyframes provide subtle entrance animations with stagger utility classes.

---

## Project File Tree

```
portfolio/
├── env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   └── placeholder-project.svg
└── src/
    ├── App.vue
    ├── main.ts
    ├── assets/
    │   └── main.css
    ├── components/
    │   ├── contact/
    │   │   └── ContactForm.vue
    │   ├── layout/
    │   │   ├── Container.vue
    │   │   ├── Footer.vue
    │   │   └── Navbar.vue
    │   ├── projects/
    │   │   ├── ProjectCard.vue
    │   │   └── ProjectGrid.vue
    │   └── ui/
    │       ├── Button.vue
    │       └── SectionHeader.vue
    ├── data/
    │   └── projects.ts
    ├── router/
    │   └── index.ts
    └── views/
        ├── AboutView.vue
        ├── ContactView.vue
        ├── HomeView.vue
        ├── NotFoundView.vue
        ├── ProjectsView.vue
        └── ResumeView.vue
```

---

## Setup & Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check and build for production
npm run build

# Preview production build locally
npm run preview
```

If Tailwind CSS is **not** already installed, run:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## Next Steps Checklist

- [ ] Replace "Your Name" and placeholder text with real content
- [ ] Add a real headshot/photo to the About page
- [ ] Replace `placeholder-project.svg` with real project screenshots
- [ ] Upload a real resume PDF to `/public/resume.pdf` and update the download link
- [ ] Wire the contact form to an email service (Resend, EmailJS, Formspree, or a serverless function)
- [ ] Add real GitHub/LinkedIn/social URLs in the Footer and Contact page
- [ ] Add project detail pages (`/projects/:id`) if you want deep-links
- [ ] Set up analytics (Plausible, Fathom, or Vercel Analytics)
- [ ] Deploy to Vercel / Netlify / Cloudflare Pages
- [ ] Add OG meta tags and a social image for link previews
- [ ] Consider adding dark mode toggle (Tailwind `darkMode: 'class'`)
