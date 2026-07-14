# SEO audit and structured data pass

Date: 2026-07-14
Scope: structured data (JSON-LD), local SEO, and an on-page audit of titles,
meta, canonicals, headings, images, internal links, sitemap, robots, and the
mobile viewport. Build system is vite-ssg, so every route is prerendered to
static HTML and the JSON-LD ships in the page source.

## What was added

### 1. Site identity schema on the home page

A `ProfessionalService` node is emitted on `/` through `useSiteHead`. It is
modeled as a service-area business: there is no `address`, because there is no
public storefront. Only truthful, known fields are included.

- `name`: Walid Elsayed
- `url`: https://walidelsayed.com
- `description`: plain-voice summary of the service
- `areaServed`: New Orleans, Louisiana, plus "Remote clients"
- `knowsLanguage`: English, Arabic, Spanish
- `founder`: Person "Walid Elsayed", `@id` shared with the existing Person node
  in `index.html` (`#person`), `sameAs` https://github.com/Welsa316

No phone number, street address, price range, or aggregate rating is invented.
Those are listed as TODOs below. The node uses `@id` `#business` so it does not
collide with the existing `#person` and `#website` nodes shipped in
`index.html`.

### 2. FAQPage schema on blog articles

Each article body has a "Common questions" section (H3 question, prose answer).
A parser in `src/data/articles.ts` (`getArticleFaqs`) extracts those pairs and
`ArticleView.vue` emits a `FAQPage` node. The FAQ content is visible on the
page, so it qualifies for FAQ rich results. 45 questions across the 10 articles.

### 3. BreadcrumbList schema

- Articles: Home > Blog > Article
- Project detail pages: Home > Projects > Project

Both are emitted alongside the existing per-page schema inside a single
`@graph`, so each page still ships one page-specific JSON-LD script plus the
site-wide Person/WebSite graph from `index.html`.

### 4. Image alt text

The project screenshots in the projects bento grid (`ProjectsView.vue`) and the
home "Selected Works" preview (`SelectedWorksAccordion.vue`) used `alt=""`. They
now use a descriptive alt (`"<Project> website screenshot"`). The links wrapping
them already carry an `aria-label`, which takes precedence for screen readers,
so there is no double-announcement; the change is purely an image-SEO gain. The
project-detail device mockups already had descriptive alt text.

## Audit findings

### Passing, no change needed

- **Titles**: every route sets a unique `<title>` via `useSiteHead`. Articles
  use a length-tuned `rawTitle` (metaTitle).
- **Meta descriptions**: present and unique on every route, including 404.
- **Canonical**: `useSiteHead` sets a per-path canonical. Verified in the built
  HTML that unhead dedupes against the static tag in `index.html`, so each page
  ships exactly one canonical pointing at its own path (no leftover `/`).
- **Open Graph / Twitter**: present and deduped per page (one of each tag).
- **Sitemap**: `public/sitemap.xml` lists all 20 routes (home, projects, 5
  project details, about, contact, blog, 10 articles). Complete.
- **robots.txt**: allows all, names AI crawlers explicitly, points at the
  sitemap. Good.
- **Mobile viewport**: `<meta name="viewport" content="width=device-width,
  initial-scale=1.0">` is present in `index.html`.
- **Internal linking**: articles cross-link heavily to each other, to projects,
  and to `/contact`. Nav and footer expose Projects, Blog, About, Contact.
- **NAP consistency**: name "Walid Elsayed" and area "New Orleans, LA" match
  across the footer, contact page, `index.html` Person schema, `llms.txt`, and
  the new ProfessionalService node.

### Flagged, not changed (subjective or risky)

- **Two H1 elements on the home page**: the hero renders a mobile layout and a
  desktop layout in the DOM at once, one hidden with `md:hidden` / `hidden
  md:block`. Both contain the same "WALID ELSAYED" H1, so there are two H1s in
  the markup (one always CSS-hidden). Modern Google tolerates this, but
  collapsing to a single H1 would need a hero refactor. Left as is.
- **Home page has no direct in-body link to `/blog`**: the blog is reachable
  from the nav and footer, so this is minor. A "Latest writing" teaser on the
  home page would strengthen internal linking to the new content. Left as a copy
  and design decision for Walid.

## TODOs that need Walid's input

These were deliberately not invented, to keep the schema truthful.

1. **Phone number**: add `telephone` to the ProfessionalService node once a
   business line exists, and match it exactly on the Google Business Profile.
2. **Social profiles (`sameAs`)**: only GitHub is known. Add LinkedIn, X, or any
   other public profiles so search engines can connect the identity.
3. **Exact service area**: currently New Orleans, LA plus "Remote clients."
   Confirm the precise cities or radius Walid wants to serve so `areaServed`
   matches the Google Business Profile service area.
