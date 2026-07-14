export interface Article {
  /** URL slug: /blog/{slug} */
  slug: string
  /** Visible H1 / display title */
  title: string
  /** <title> tag, ~55-60 chars, primary keyword near the front */
  metaTitle: string
  /** Meta description, ~150-160 chars */
  description: string
  /** One-line summary for the blog index card */
  excerpt: string
  /** Primary target keyword (used for reference, appears in H1 + body) */
  primaryKeyword: string
  /** Short editorial category label (mono kicker) */
  category: string
  /** YYYY-MM-DD */
  datePublished: string
  /** YYYY-MM-DD */
  dateModified: string
  /** Markdown body. Starts at H2 — the H1 is rendered from `title`. */
  body: string
}

// Every article shares one publish date for this batch. Kept as a constant so a
// future edit only touches one line.
const PUBLISHED = '2026-07-13'

export const articles: Article[] = [
  {
    slug: 'custom-website-vs-wix-small-business',
    title: 'Custom Website vs Wix: What a Small Business Actually Owns',
    metaTitle: 'Custom Website vs Wix for Small Business (Cost, Speed)',
    description:
      'Custom website vs Wix for a small business: who owns the site, what the fees add up to, and why a hand-built site loads faster. A New Orleans developer explains.',
    excerpt:
      'Who owns the site, what the fees add up to, and why a hand-built site loads faster than a builder.',
    primaryKeyword: 'custom website vs Wix',
    category: 'Ownership',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    body: `Most small business owners reach for Wix because it looks cheap and quick to start. The real question is not custom website vs Wix on day one. It is what you own on day 500, when you want to move hosts, sell the business, or rebuild. I build custom sites by hand in New Orleans, and I have helped owners move off builders. Here is the honest comparison.

## Who owns the site

Wix is a hosted platform. Your site runs on Wix servers, and you cannot download it to run somewhere else. Wix states this in its own help center: "the SaaS architecture does not support external hosting since it uses Wix's proprietary technology." So when you leave, you rebuild from zero.

A custom site works the other way. You get the code and the files. You can host them on any provider, and you can hand them to any developer later. That is the difference between renting a storefront and holding the deed.

## What happens when you stop paying

Cancel a Wix plan and the site reverts to a free Wix address like siteprefix.wixsite.com, with Wix ads shown on your pages. Wix confirms this: "your site address reverts to the free Wix URL and Wix ads appear on your site." Your content stays, but your clean address and professional look do not.

A custom site keeps running as long as you pay for hosting, which runs a few dollars a month. You can switch that hosting whenever you want, and nobody puts an ad on your homepage.

## Monthly rent vs a one-time build

Wix is a subscription. You pay every month for as long as the site exists, and Wix sets the price. A custom build is mostly one payment up front, then cheap hosting after that. Over five years the subscription total usually passes what a custom site would have cost. I break the numbers down in [what a small business website should cost](/blog/what-a-small-business-website-should-cost).

## Speed and local SEO

Builder platforms load shared JavaScript to run the editor and the app features behind your pages. That adds weight a hand-coded page never carries. Weight slows the first load, and Google measures loading with Core Web Vitals, which feed local search rankings. I go deeper in [website speed and local SEO](/blog/website-speed-local-seo-core-web-vitals).

A hand-built site ships only the code each page needs. My [SAHA Institute](/projects/saha-institute) build and the [OK Ice Cream](/projects/ok-ice-cream) shop site load quickly because there is no builder engine riding along.

## The comparison at a glance

| | Custom site | Wix |
|---|---|---|
| Own the code | Yes, you get the files | No, it only runs on Wix |
| Move to another host | Yes | No, the site cannot be exported |
| Cost shape | One-time build, then cheap hosting | Monthly subscription, forever |
| If you stop paying | Site keeps running on your host | Reverts to a free Wix URL with ads |
| Edit it yourself | Through a simple CMS or a developer | Drag and drop in the Wix editor |
| Best for | Owning the site as a real asset | A quick or temporary site |

## When Wix is the right call

If you need something online this week, on a tight budget, and you do not care about owning the code, Wix does the job. A weekend pop-up or a hobby page fits that shape. The trade is that you are renting, and the rent never stops.

## How I work

I build the site, you own the code and the domain, and there is no monthly rent on the software. If you want a site you actually hold, [tell me about your business](/contact) and I will lay out the plan. You can also compare the builders head to head in [Wix vs Squarespace vs a custom website](/blog/wix-vs-squarespace-vs-custom-website).

---

**About the author.** I'm Walid Elsayed, a web developer in New Orleans. I hand-build custom sites for small businesses, no templates and no page builders, so the owner keeps the code and the domain.

### Sources

- Wix Help Center, [Exporting or Embedding Your Wix Site Elsewhere](https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere)
- Wix Help Center, [Canceling a Wix Premium or Studio Plan](https://support.wix.com/en/article/canceling-a-wix-premium-plan)
- Google Search Central, [Understanding Core Web Vitals and Google search results](https://developers.google.com/search/docs/appearance/core-web-vitals)`,
  },
]

// Sorted newest first for the index; stable when dates match (keeps array order).
export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAdjacentArticles(slug: string): {
  prev: Article | null
  next: Article | null
} {
  const list = getAllArticles()
  const index = list.findIndex((a) => a.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? list[index - 1] : null,
    next: index < list.length - 1 ? list[index + 1] : null,
  }
}

/** Estimated reading time in whole minutes, floored at 1. ~200 words/min. */
export function getReadingTime(article: Article): number {
  const words = article.body.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

/** Human date, e.g. "July 13, 2026". Parsed as UTC to stay stable in SSG. */
export function formatArticleDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(Date.UTC(y, m - 1, d))
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
