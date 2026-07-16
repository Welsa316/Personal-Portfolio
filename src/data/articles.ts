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
  /** Markdown body. Starts at H2. The H1 is rendered from `title`. */
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

## What a custom site does not do

Custom is not the answer for everyone, and it is worth being clear about that. A custom site does not update itself with a drag-and-drop editor unless I build a simple content manager into it, which I often do. It does not go live in an afternoon. And it asks for a real decision about the business, because you are investing in something you keep rather than swiping a card for a month of access. For a business that treats its website as a tool that earns, those are features. For a hobby page, they are overhead. Match the tool to the job.

## Common questions

### Can I move my Wix site to a custom site later?

You can, but not with a button. Wix does not let you export the site to run it elsewhere, so a developer rebuilds the design and moves your text and images across by hand. Your content and your domain come with you. The design gets recreated. The sooner you switch, the less there is to redo.

### Is a custom website worth it for a very small business?

If the website brings in customers, yes. You pay once and own it, instead of renting forever at a price the platform controls. If you only need a simple placeholder and the site will never really work for you, a builder is the cheaper fit and there is no shame in that.

### Who hosts a custom website?

You do, on any host you choose. A small static site runs on cheap or even free hosting, and you can switch providers whenever you want without rebuilding anything. That is the practical side of owning the code.

### Will a custom site rank better on Google than Wix?

It gives you more control over the things that help rankings, like speed and clean markup, which I cover in [website speed and local SEO](/blog/website-speed-local-seo-core-web-vitals). A builder can still rank, but it carries extra weight and hands you fewer levers to pull.

---

**About the author.** I'm Walid Elsayed, a web developer in New Orleans. I hand-build custom sites for small businesses, no templates and no page builders, so the owner keeps the code and the domain.

### Sources

- Wix Help Center, [Exporting or Embedding Your Wix Site Elsewhere](https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere)
- Wix Help Center, [Canceling a Wix Premium or Studio Plan](https://support.wix.com/en/article/canceling-a-wix-premium-plan)
- Google Search Central, [Understanding Core Web Vitals and Google search results](https://developers.google.com/search/docs/appearance/core-web-vitals)`,
  },
  {
    slug: 'do-you-own-your-shopify-store',
    title: 'Do You Actually Own Your Shopify Store?',
    metaTitle: 'Do You Actually Own Your Shopify Store? (2026)',
    description:
      'Do you own your Shopify store? What you control, what stays locked to Shopify, the fee for skipping Shopify Payments, and what you can actually export.',
    excerpt:
      'You own your data and your brand. The storefront, the theme, and the hosting stay with Shopify. Where the line sits.',
    primaryKeyword: 'do you own your Shopify store',
    category: 'Ownership',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    body: `Shopify makes selling online quick, which is why so many small shops start there. Then a harder question shows up. Do you own your Shopify store, or are you renting it? The answer is some of both. You own your brand and your customer list. The store itself runs on Shopify's servers and follows Shopify's rules. I build custom online stores, and I have watched owners get surprised by where that line sits.

## What you actually control

You own your products, your customer records, and your order history. Shopify lets you export products, customers, and orders as CSV files, so you can take that data with you. If you registered your own domain, you own it and can point it anywhere. That part is real ownership, and it matters.

## What stays locked to Shopify

Your storefront is built with Shopify's theme system, written in a templating language called Liquid. That theme runs on Shopify and nowhere else. Move to another platform and the design does not come with you. The apps that add features are subscriptions from other companies, and they stop the day you leave. Shopify is a hosted service, so the store lives on Shopify's infrastructure, not yours.

## The fee most owners miss

Shopify sells its own payment processor, Shopify Payments. Use it and you pay the card rate for your plan. On the Basic plan that rate is 2.9% plus 30 cents per online transaction, as of July 2026. Use a different payment gateway and Shopify adds its own transaction fee on top of what your processor already charges. Switch to Shopify Payments and that extra fee goes away. The design nudges you to keep checkout inside Shopify. I break the numbers down in [website builder transaction fees compared](/blog/website-builder-transaction-fees-compared).

## What you can take with you

- Product, customer, and order data, exported as CSV
- Your domain, if you own the registration
- Your brand and your written content, which you can rebuild anywhere

## What you cannot take

- The theme, since Liquid only runs on Shopify
- The apps, which are third-party subscriptions
- The hosting, which is Shopify's

## Own vs rent, side by side

| | Custom store | Shopify |
|---|---|---|
| Hosting | Yours, movable | Shopify's servers |
| Storefront code | Yours to keep | Liquid theme, Shopify only |
| Product and customer data | Yours | Exportable as CSV |
| Extra transaction fee | None | Added if you skip Shopify Payments |
| Monthly cost | Cheap hosting | Plan fee plus app subscriptions |
| Leaving the platform | Move the whole site | Rebuild the storefront |

## When Shopify makes sense

If you sell a large catalog and want inventory, shipping labels, and checkout handled for you, Shopify does heavy lifting a small custom build would take months to match. A busy store with hundreds of products is a fair fit. The trade is the monthly fees and a storefront you cannot move.

## The ownership test

Ask one question. If this platform doubled its price tomorrow, could I move without rebuilding? On Shopify you keep your data and rebuild the store. On a custom store you move the whole thing. For a restaurant taking orders, I lay out a lower-fee path in [restaurant online ordering without commission fees](/blog/restaurant-online-ordering-no-commission-fees), and you can see a live build in my [Yami Hibachi](/projects/yami-hibachi) project.

Want a store you fully hold? [Tell me what you sell](/contact) and I will map out the build.

## The lock-in builds up quietly

No one signs up for Shopify planning to be stuck. It happens in small steps. You pick a theme and customize it, so now the design lives in Liquid. You add three apps for reviews, shipping, and email, and each is another monthly bill tied to the platform. Your product photos, descriptions, and customer notes all sit inside Shopify's system. A year in, the store works, and moving it means recreating the theme, replacing the apps, and re-testing checkout somewhere new. The data exports cleanly. The store you built around it does not. That gap is the real cost of a hosted platform, and it is worth seeing before you are deep in it.

## Common questions

### Can I export my Shopify store to another platform?

You can export your product, customer, and order data as CSV files, and you can take your domain if you own it. What does not move is the storefront. The Liquid theme runs only on Shopify, so the design gets rebuilt wherever you land.

### Does Shopify own my customer list?

No. You can export your customers, so the list is yours. The store runs on Shopify's servers, but the relationship with your customers belongs to you, which is why keeping your own record of it matters.

### How do I avoid Shopify's extra transaction fee?

Use Shopify Payments as your processor. The extra transaction fee applies only when you route payments through a different gateway. That is the trade Shopify offers: use its processor and skip the surcharge.

### Is Shopify worth it for a small store?

If you sell a real catalog and want inventory, shipping, and checkout handled for you, it earns its keep. For a handful of products or a restaurant taking orders, a custom setup connected straight to a processor is often cheaper and gives you more to own.

### Do I own my Shopify theme?

You can download your theme files, but they are written in Liquid and run only on Shopify. So you hold a copy you cannot use anywhere else. Move platforms and the design has to be rebuilt, even though you technically have the files.

---

**About the author.** I'm Walid Elsayed, a web developer in New Orleans. I hand-build custom sites and stores for small businesses so the owner keeps the code, the data, and the domain.

### Sources

- Shopify, [Pricing plans](https://www.shopify.com/pricing) (card rates and plan fees, accessed July 2026)
- Shopify Help Center, [Third-party transaction fees](https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/third-party-transaction-fees)`,
  },
  {
    slug: 'wix-vs-squarespace-vs-custom-website',
    title: 'Wix vs Squarespace vs a Custom Website',
    metaTitle: 'Wix vs Squarespace vs Custom Website (2026)',
    description:
      'Wix vs Squarespace vs a custom website: ownership, transaction fees, speed, and lock-in compared. An honest take for a small business site.',
    excerpt:
      'Two builders and a hand-built site, compared on ownership, fees, speed, and what happens when you leave.',
    primaryKeyword: 'Wix vs Squarespace vs custom website',
    category: 'Comparisons',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    body: `If you are picking a platform for a small business, the choice usually comes down to Wix vs Squarespace vs a custom website. The two builders are easy to start. A custom site takes more up front and gives you more to keep. I build custom sites in New Orleans, so I have a side in this, but I will lay out the trade honestly.

## The three models

Wix and Squarespace are hosted builders. You rent software, drag pieces around, and the company runs everything on its servers. A custom website is code that belongs to you. It runs on any host, and any developer can pick it up later. One is a monthly rental. The other is an asset you own.

## Ownership and lock-in

This is the real split. Wix does not let you export your site to run it somewhere else. Its own help center says "the SaaS architecture does not support external hosting." Squarespace lets you export some content, like blog posts and pages, but not the full design, so a move still means a rebuild. A custom site hands you the code and the files, and you can leave whenever you want.

There is a quieter cost too. Cancel a Wix plan and the site drops to a free Wix address with Wix ads on your pages. A hosted builder needs an active subscription to stay online. A custom site only needs cheap hosting you control.

## The fee picture

Squarespace is clearer than most on selling fees. On its current plans, physical-product sales carry no Squarespace transaction fee. Digital products and memberships do carry one, from 7% on the entry plan down to 0% on the top plan, as of July 2026. Those are separate from the payment processor fee that Stripe or PayPal charges on every sale. Wix runs on a monthly subscription, and the plan price is the main line to watch. I compare selling fees across platforms in [website builder transaction fees compared](/blog/website-builder-transaction-fees-compared).

## Speed

Both builders load shared code to run their editors and features. That weight slows the first paint, and page speed feeds local search rankings through Core Web Vitals. A hand-built site ships only what the page needs. My [SAHA Institute](/projects/saha-institute) build runs on a lean custom stack and loads fast for that reason.

## The full comparison

| | Custom site | Wix | Squarespace |
|---|---|---|---|
| Own the code | Yes | No | No |
| Export and self-host | Yes | No | Content only, not the design |
| Cost shape | One-time build, cheap hosting | Monthly subscription | Monthly subscription |
| Platform selling fee | None | Subscription-based | 0% on physical (current plans), fee on digital |
| If you stop paying | Site stays on your host | Reverts to free URL with ads | Subscription needed to stay online |
| Editing | CMS or a developer | Drag and drop | Drag and drop |
| Best for | Owning the site long term | A fast, cheap start | Design-led sites with light selling |

## Which one to pick

Pick Wix if you want the cheapest, fastest start and you do not mind renting. Pick Squarespace if design matters and you sell a little, since its templates look sharp out of the box. Pick a custom site if the website is a real part of the business and you want to own it, move it, and keep it fast. I go deeper on the builder trade in [custom website vs Wix](/blog/custom-website-vs-wix-small-business), and on budget in [what a small business website should cost](/blog/what-a-small-business-website-should-cost).

Not sure which fits your business? [Send me a note](/contact) and I will tell you straight, even if that answer is a builder.

## How to decide in ten minutes

Answer three questions and the choice usually falls out. First, will this website earn money, or is it a brochure? If it earns, ownership and speed matter more, which points to custom. Second, how long do you plan to run it? A site you will keep for years favors a one-time build over rent that never stops. Third, do you need to move or sell it later? If yes, a builder that cannot be exported is a bad starting point. There is no single right answer for every business. There is a right answer for yours once you know what the site is for.

## Common questions

### Which is best for SEO, Wix, Squarespace, or custom?

A custom site gives you the most control over speed and clean markup, which are the parts of SEO you can actually influence on the page. Both builders can rank, and plenty do, but they load extra code and give you fewer levers. I explain the speed side in [website speed and local SEO](/blog/website-speed-local-seo-core-web-vitals).

### Can I switch from Wix to Squarespace easily?

No. Neither platform lets you move a full site into the other. You rebuild the design and move your content by hand. That is true for any move off a hosted builder, which is the argument for owning your site from the start.

### Is Squarespace cheaper than a custom website?

Cheaper on day one, more expensive over several years, because the subscription never ends. Add up the monthly fee across five years and compare it to a one-time build. I run that math in [what a small business website should cost](/blog/what-a-small-business-website-should-cost).

### Do Wix and Squarespace charge selling fees?

Squarespace charges no transaction fee on physical products on its current plans, and a fee on digital products that drops as you move up plans. Wix runs mainly on its subscription. Your payment processor charges its own card rate on both. Details are in [website builder transaction fees compared](/blog/website-builder-transaction-fees-compared).

---

**About the author.** I'm Walid Elsayed, a web developer in New Orleans. I hand-build custom sites for small businesses, no templates and no page builders, so the owner keeps the code and the domain.

### Sources

- Wix Help Center, [Exporting or Embedding Your Wix Site Elsewhere](https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere)
- Wix Help Center, [Canceling a Wix Premium or Studio Plan](https://support.wix.com/en/article/canceling-a-wix-premium-plan)
- Squarespace Help Center, [Transaction fees and payment processing rates](https://support.squarespace.com/hc/en-us/articles/27853679334157-Transaction-fees-and-payment-processing-rates)`,
  },
  {
    slug: 'what-a-small-business-website-should-cost',
    title: 'What a Small Business Website Should Cost',
    metaTitle: 'What a Small Business Website Should Cost (2026)',
    description:
      'What a small business website should cost: builder subscriptions vs a one-time custom build, and the real total you pay over five years. A plain breakdown.',
    excerpt:
      'Subscriptions vs a one-time build, and the total you actually pay over five years. The math most sales pages skip.',
    primaryKeyword: 'small business website cost',
    category: 'Budget',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    body: `The honest answer to small business website cost is that how you pay matters as much as how much you pay. There are two shapes. You rent a builder every month for as long as the site exists, or you pay once for a custom build and then pay a little for hosting. The sticker on a builder looks small. The total over a few years is the number that matters. I build custom sites in New Orleans, so here is the math the sales pages skip.

## The two ways to pay

A website builder is a subscription. The monthly fee is low, and it never ends. Miss a payment and the site goes down or drops to a free branded address. A custom build is a one-time cost. After that you pay for hosting, which can be a few dollars a month or even free on a small static site, plus a domain that runs about 10 to 20 dollars a year.

## What a builder costs over five years

Take one published example. Shopify's Basic plan is 29 dollars a month on annual billing, as of July 2026. Over five years that is 1,740 dollars in plan fees alone, before you add a single app or pay a cent of card processing. Most stores add paid apps, and each one is another monthly line. The plan fee is the floor, not the ceiling.

Other builders follow the same shape. The monthly number is small on its own and large once you multiply it by sixty months and add the extras.

## What a custom site costs

A custom build is one payment for the design and the code. After launch, your running costs are hosting and a domain. You own the files, so you can switch hosts to chase a better price, and nobody adds an ad to your homepage. The build costs more on day one than a month of Wix. It stops costing you a monthly plan fee after that.

## Five-year total, side by side

| Cost over 5 years | Builder (Shopify Basic, annual) | Custom site |
|---|---|---|
| Plan or platform fee | About 1,740 dollars | None |
| Apps and add-ons | Extra, monthly | Little to none |
| Hosting | Included in the plan | A few dollars a month, sometimes free |
| Domain | Often extra | About 10 to 20 dollars a year |
| Build | None | One-time |
| Do you own it | No | Yes |

The point is not that a custom site is always cheaper on paper. It is that the builder keeps charging, and the custom site does not. Once the plan fees pass the cost of a build, you are paying rent on something you will never own. Card processing fees on sales sit on top of all of this, which I cover in [website builder transaction fees compared](/blog/website-builder-transaction-fees-compared).

## What drives the price of a custom build

- How many pages and features the site needs
- Whether you sell online or just show information
- Custom design versus a clean, simple layout
- Languages, if you need more than one

A small marketing site like my [OK Ice Cream](/projects/ok-ice-cream) build is on the lighter end. A platform with logins and coursework like [Daris](/projects/daris) is more involved and costs more to build. The scope sets the price.

## What you should not pay for

You should not pay a monthly fee to keep your own website online when a custom site needs only cheap hosting. You should not pay for page-builder software you can never move or sell. If a site is core to how the business earns, owning it is worth the higher day-one cost. I make the ownership case in full in [custom website vs Wix](/blog/custom-website-vs-wix-small-business).

## A simple rule

Add up the builder's monthly cost over five years. If a custom build costs less than that total, and you get to own it, the choice makes itself. Want a real number for your project? [Tell me what you need](/contact) and I will quote it straight.

## Where the money actually goes on a custom build

When you pay for a custom site, most of the cost is time, not software. It goes into understanding the business, designing pages that fit it, writing the code, making it fast, and testing it on real phones. A simple marketing site is a few days of that work. A site with logins, a booking system, or online ordering is more. The reason it feels expensive next to a monthly plan is that you are seeing the whole cost at once instead of spread thin across years of rent. The thing you get for it is an asset with your name on it.

## Common questions

### Why do custom websites cost more up front?

You are paying for design and code built around your business, and you keep the result. A builder splits a smaller cost across monthly fees that never end, so it feels cheaper while quietly costing more over time.

### Are there ongoing costs with a custom website?

Yes, but they are small. You pay for hosting, which can be a few dollars a month or free on a light static site, and a domain at roughly 10 to 20 dollars a year. There is no platform plan fee.

### Is a cheap template ever the right call?

For a placeholder page with little traffic and no real role in the business, yes. Spend the least you can. Once the site starts bringing in customers, owning it becomes worth the higher day-one cost.

### How much should a small business website cost?

It depends on scope, so anyone quoting a flat number sight unseen is guessing. A simple site costs less than one with accounts, booking, or a store. The useful comparison is not the sticker, it is the five-year total against a builder subscription.

---

**About the author.** I'm Walid Elsayed, a web developer in New Orleans. I hand-build custom sites for small businesses, no templates and no page builders, so the owner keeps the code and the domain.

### Sources

- Shopify, [Pricing plans](https://www.shopify.com/pricing) (Basic plan fee, accessed July 2026)`,
  },
  {
    slug: 'website-speed-local-seo-core-web-vitals',
    title: 'Website Speed and Local SEO: Why Core Web Vitals Matter',
    metaTitle: 'Website Speed and Local SEO: Core Web Vitals',
    description:
      'Website speed and local SEO: how bloated templates hurt Core Web Vitals and local rankings, and how a lean custom site loads fast. A plain guide for owners.',
    excerpt:
      'How template bloat drags down Core Web Vitals and your local rankings, and what a fast site does differently.',
    primaryKeyword: 'website speed and local SEO',
    category: 'Speed & SEO',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    body: `Website speed and local SEO are tied together more than most owners realize. Google measures how fast your pages load and react, and those measurements feed into search rankings. When a template or a page builder loads a pile of extra code, your pages get slower, and slow pages can lose ground in local results. I build lean custom sites in New Orleans, and speed is one of the first things I tune.

## What Core Web Vitals measure

Google groups page speed into three numbers called Core Web Vitals. Each has a threshold for a good score, measured at the 75th percentile of real visits.

| Metric | What it measures | Good score |
|---|---|---|
| LCP | How fast the main content paints | Under 2.5 seconds |
| INP | How fast the page reacts to a tap or click | Under 200 milliseconds |
| CLS | How much the layout jumps while loading | Under 0.1 |

LCP is Largest Contentful Paint. INP is Interaction to Next Paint, which replaced the older First Input Delay metric in March 2024. CLS is Cumulative Layout Shift. Pass all three and Google marks the page as a good experience.

## Why speed feeds local SEO

Core Web Vitals are part of Google's page experience signals, which help decide rankings. Speed is not the biggest factor. Content that matches what a person searched for still matters most. Speed works as a tie-breaker. When two local businesses have similar pages, the faster one has an edge. In a city like New Orleans, where a handful of shops compete for the same "near me" searches, that edge is worth having.

There is a plainer reason too. A visitor on a phone with a weak signal will leave a slow page before it loads. A fast page keeps them, and Google notices when people stay.

## How templates and builders add weight

Page builders load shared JavaScript and CSS to run their editors and their features. Your page carries that weight whether it uses those features or not. Heavy themes stack on sliders, tracking scripts, and fonts you never asked for. Each one pushes LCP later and can make the page slow to react, which hurts INP. Layout that loads in pieces makes the page jump, which is CLS.

## What a fast site does differently

A hand-built site ships only the code the page needs. No builder engine rides along. Images are sized and compressed. Fonts load without blocking the text. The layout holds its place so nothing jumps. My [SAHA Institute](/projects/saha-institute) build runs on a lean stack and loads quickly because there is nothing extra to download. The [OK Ice Cream](/projects/ok-ice-cream) shop site is built the same way, which helps it show up for local searches in New Orleans.

## How to check your own site

Run your page through Google's PageSpeed Insights. It reports your Core Web Vitals from real visitor data and flags what is slowing you down. If your LCP is over 2.5 seconds or the page jumps as it loads, there is room to fix. Often the culprit is a heavy theme or a stack of apps.

## The local takeaway

If you serve a local area, a fast site is part of showing up in search, not a nice extra. A slow template can quietly cost you the top of the map results. If you would rather hire local, I compare that path in [hiring a New Orleans web developer vs a template](/blog/new-orleans-web-developer-vs-template), and I make the ownership case in [custom website vs Wix](/blog/custom-website-vs-wix-small-business).

Want to know why your site is slow? [Send me the link](/contact) and I will tell you what is dragging it down.

## The usual causes of a slow site

Most slow small business sites share the same few problems. A heavy theme loads sliders and scripts the page never uses. Images go up at full camera resolution instead of sized for the web, so a single photo weighs several megabytes. A stack of third-party widgets for chat, reviews, and tracking each add their own load. And fonts block the text from showing until they finish downloading. None of these are exotic. They are the default state of a builder site that nobody tuned. A hand-built site avoids them by only including what the page needs, and that is most of the speed battle right there.

## Common questions

### Does site speed really affect Google rankings?

Yes. Core Web Vitals are part of Google's page experience signals. Speed is not the biggest factor, so a fast page with weak content still loses to a slow page with the answer someone wants. Between two similar pages, the faster one has the edge.

### What is a good LCP score?

Under 2.5 seconds, measured at the 75th percentile of real visits. That means most of your visitors should see the main content within 2.5 seconds. Between 2.5 and 4 seconds needs work, and over 4 is poor.

### How do I make my website faster?

Cut scripts and widgets you do not use, size and compress your images, and load fonts so they do not block text. On a builder that means trimming apps and picking a lighter theme. On a custom site it is built in from the start.

### What tool checks Core Web Vitals?

Google's PageSpeed Insights reports your scores from real visitor data and lists what is slowing the page down. Google Search Console shows the same Core Web Vitals across your whole site over time.

### Does image size affect Core Web Vitals?

Yes, a lot. An oversized image is often the largest element on the page, so it drives your LCP directly. Sizing and compressing images for the web, and serving modern formats, is one of the quickest speed wins there is.

---

**About the author.** I'm Walid Elsayed, a web developer in New Orleans. I hand-build fast custom sites for small businesses and tune them to pass Core Web Vitals.

### Sources

- Google Search Central, [Understanding Core Web Vitals and Google search results](https://developers.google.com/search/docs/appearance/core-web-vitals)
- web.dev, [Web Vitals](https://web.dev/articles/vitals) (LCP, INP, and CLS thresholds)`,
  },
  {
    slug: 'website-builder-transaction-fees-compared',
    title: 'Website Builder Transaction Fees Compared',
    metaTitle: 'Website Builder Transaction Fees Compared (2026)',
    description:
      'Website builder transaction fees compared: Shopify, Wix, and Squarespace. What each platform adds on top of card processing, verified and dated for 2026.',
    excerpt:
      'Shopify, Wix, and Squarespace: the fee each platform takes on top of card processing, verified and dated.',
    primaryKeyword: 'website builder transaction fees',
    category: 'Fees',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    body: `When you sell on a website builder, you often pay two cuts on every sale, not one. Website builder transaction fees are the part people miss, because they get quoted the low monthly price and never see the per-sale math. Here is what Shopify, Wix, and Squarespace actually take, checked against their own pages in July 2026, and how a custom site avoids the extra cut.

## Two fees, not one

Every online sale has a payment processing fee. That is the card rate charged by a processor like Stripe, PayPal, or the platform's own payment tool, usually a percentage plus a flat few cents. Some builders add a second fee on top, their own transaction fee, just for selling on their platform. The processing fee is unavoidable. The platform fee is the one worth shopping.

## Shopify

Shopify charges a card rate through its own tool, Shopify Payments. On the Basic plan that rate is 2.9% plus 30 cents per online transaction, dropping to 2.7% and 2.5% on the higher plans, as of July 2026. If you use a different payment gateway instead of Shopify Payments, Shopify adds its own transaction fee on top of your processor's rate. Use Shopify Payments and that extra fee is waived. The setup pushes you toward keeping checkout inside Shopify. I cover the ownership side of this in [do you actually own your Shopify store](/blog/do-you-own-your-shopify-store).

## Squarespace

Squarespace is clearer than most. On its current plans, physical-product sales carry no Squarespace transaction fee. Digital products and memberships do carry one, and it drops as you move up the plans: 7% on Basic, 5% on Core, 1% on Plus, and 0% on Advanced, as of July 2026. All of that is separate from the card rate your processor charges on each sale.

## Wix

Wix runs on a monthly subscription, and the plan price is the main cost to track. When you sell, your payment processor takes its card rate on each order. Check Wix's current plan page for any plan-specific selling costs before you commit, since the plans change.

## The comparison

| Platform | Card processing | Extra platform fee | Checked |
|---|---|---|---|
| Shopify | 2.9% + 30¢ on Basic, lower on higher plans, via Shopify Payments | Added if you use another gateway, waived with Shopify Payments | Jul 2026 |
| Squarespace | Your processor's rate | 0% on physical (current plans), 7% down to 0% on digital by plan | Jul 2026 |
| Wix | Your processor's rate | Mainly the plan fee | Check plan page |
| Custom site | Your processor's rate (e.g. Stripe) | None | n/a |

## What this means for a small shop

On low volume the monthly plan hurts more than the per-sale fee. As sales grow, the per-sale cut becomes the bigger line, and a percentage of every order adds up fast. A shop doing real numbers pays attention to both. The platform fee is money leaving on top of the card rate you already owe.

## The lower-fee path

A custom site connects straight to a processor like Stripe or Square. You pay that processor's card rate and nothing extra to a platform sitting in the middle. There is no gateway surcharge and no plan tier deciding your cut. For a restaurant, this is the difference between keeping your margin and handing a slice to an app, which I break down in [restaurant online ordering without commission fees](/blog/restaurant-online-ordering-no-commission-fees). You can see a live restaurant build in my [Yami Hibachi](/projects/yami-hibachi) project.

Want to keep more of each sale? [Tell me what you sell](/contact) and I will show you a setup with no platform markup.

## A worked example on 100 orders

Say you take 100 orders at 40 dollars each, so 4,000 dollars in sales. Card processing at about 2.9% plus 30 cents runs roughly 146 dollars across those orders, and you owe that no matter where you sell. Now add a platform layer. A builder gateway surcharge or a digital-goods transaction fee stacks on top of that 146, and on some platforms and plans it is a meaningful second bite. On a custom site connected straight to a processor, there is no second bite. You pay the processing and keep the rest. The exact figures depend on your plan and your product, so read them off the platform's own page, but the shape holds: one fee is unavoidable, the other is a choice.

## Common questions

### What is the difference between a transaction fee and a processing fee?

The processing fee is the card rate a payment processor charges on every sale, usually a percentage plus a few cents. The transaction fee is an extra cut the platform takes just for selling on it. The first is unavoidable. The second depends on the platform and plan you pick.

### Does Shopify charge a fee if I use PayPal?

Shopify adds its own transaction fee when you use a gateway other than Shopify Payments, which includes some outside options. Using Shopify Payments waives that extra fee. You still pay the card processing rate either way.

### Can I avoid platform selling fees entirely?

Yes, on a custom site that connects straight to a processor like Stripe or Square. There is no platform sitting in the middle taking a cut, so you pay only the processor's card rate.

### Which builder has the lowest selling fees?

It depends on what you sell. Squarespace charges no transaction fee on physical products on its current plans. Shopify waives its extra fee if you use Shopify Payments. The lowest of all is no platform fee, which is what a direct custom setup gives you.

---

**About the author.** I'm Walid Elsayed, a web developer in New Orleans. I build custom sites and stores that connect straight to a payment processor, so the owner keeps more of every sale.

### Sources

- Shopify, [Pricing plans](https://www.shopify.com/pricing) (card rates by plan, accessed July 2026)
- Shopify Help Center, [Third-party transaction fees](https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/third-party-transaction-fees)
- Squarespace Help Center, [Transaction fees and payment processing rates](https://support.squarespace.com/hc/en-us/articles/27853679334157-Transaction-fees-and-payment-processing-rates)`,
  },
  {
    slug: 'new-orleans-web-developer-vs-template',
    title: 'Hiring a New Orleans Web Developer vs Using a Template',
    metaTitle: 'New Orleans Web Developer vs a Website Template',
    description:
      'Hiring a New Orleans web developer vs using a template: local knowledge, a site you own, and faster pages that rank. What a template cannot match.',
    excerpt:
      'Local knowledge, a person to call, a site you own, and pages built to rank. What a template leaves on the table.',
    primaryKeyword: 'New Orleans web developer',
    category: 'Local',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    body: `A template is cheap and quick, so it is tempting. Before you buy one, it is worth knowing what hiring a New Orleans web developer gives you that a template cannot. I build sites here in the city, so I have seen where templates leave local businesses stuck. Here is the honest side-by-side.

## What a template gives you

A template is a pre-made layout you fill with your own text and photos. It is cheap, it is fast to start, and it works for a simple page. If you need a basic online presence this weekend and nothing more, a template does the job. That is the whole pitch, and it is a fair one for the right business.

## What a local developer gives you

You get a site built around your business instead of a layout built for everyone. You get a person to call when something breaks, not a help forum and a ticket number. You get the code, so the site is yours to keep and move. And you get someone who knows the local market. A shop that lives on French Quarter foot traffic needs different things than a firm serving clients across the state. I built [Campos Muños Law](/projects/campos-munos-law) for a New Orleans firm working in two languages, and [OK Ice Cream](/projects/ok-ice-cream) for a local shop that needed to be easy to find. Neither fit a stock template.

## The local SEO a template forgets

Showing up in local search takes setup that templates leave to you. Your name, address, and phone number have to be consistent and marked up so Google trusts them. Local business structured data helps you appear in the map results. Pages have to load fast, because speed feeds local rankings through Core Web Vitals, which I explain in [website speed and local SEO](/blog/website-speed-local-seo-core-web-vitals). A template hands you an empty theme and wishes you luck. A local developer wires this in for your area from the start.

## Side by side

| | New Orleans developer | Template |
|---|---|---|
| Built for your business | Yes, around your goals | A generic layout |
| Someone to call | A person who knows your site | A help forum |
| Own the code | Yes | Depends on the platform |
| Local SEO setup | Done for your area | Left to you |
| Speed | Tuned to load fast | Carries theme weight |
| Cost | Higher up front | Cheap each month |

## The cost, honestly

A developer costs more on day one. A template costs less to start and keeps charging every month. Over a few years the gap narrows, and the developer-built site is the one you actually own. If the website brings in customers, paying once for something you keep beats renting a layout forever. I lay out the ownership math in [custom website vs Wix](/blog/custom-website-vs-wix-small-business).

## Who each is for

Pick a template if you need a placeholder page and cost is the only thing that matters. Hire a developer if the site is part of how the business earns, if you want it to rank locally, and if you want to own it. For a New Orleans business that depends on being found, the second path pays off.

Thinking about a site for your business here in the city? [Reach out](/contact) and I will tell you honestly whether you need a custom build or not.

## What working with a local developer actually looks like

Hiring local is about more than the code. It is about how the work goes. I can meet you, look at the business, and understand who you serve before I design a single page. When you want a change, you message one person who knows your site, not a queue. If something breaks the week of a big event, it gets fixed that day. And because I live here, I know what a New Orleans customer sees when they search, from the tourist looking for a place to eat to the resident checking hours. A template cannot give you any of that. It gives you a layout and a login. The rest is on you.

## Common questions

### Is a template cheaper than hiring a developer?

Cheaper on day one, and it keeps charging every month. A developer costs more up front, and you own the result instead of renting it. Over a few years the gap narrows, and only one of the two leaves you with something you keep.

### Can a developer help my site rank locally?

Yes. Local search takes setup that templates leave undone: consistent name and address details, local business structured data, and fast pages. A developer wires that in for your area from the start.

### What if I already have a template site?

A developer can rebuild it as a site you own and move your content across. If the template is doing its job and you are happy renting, there is no rush. If it is slow or you want to own it, that is the time to switch.

### How do I choose a web developer in New Orleans?

Look at real sites they have built for local businesses, ask whether you will own the code and the domain, and check that they build for speed and local search. You want someone who hands you the keys, not someone who keeps them.

### Does hiring local cost more than an overseas freelancer?

Sometimes the rate is higher. What you get back is someone in your time zone who knows the local market and answers when you call. For a site that matters to the business, that access and that local knowledge are usually worth the difference.

---

**About the author.** I'm Walid Elsayed, a web developer in New Orleans. I hand-build custom sites for local businesses, set up for local search and built to load fast.

### Sources

- Google Search Central, [Understanding Core Web Vitals and Google search results](https://developers.google.com/search/docs/appearance/core-web-vitals)`,
  },
  {
    slug: 'bilingual-websites-small-business',
    title: 'Bilingual Websites for Small Business',
    metaTitle: 'Bilingual Websites for Small Business (EN/ES/AR)',
    description:
      'Bilingual websites for small business: reaching Spanish and Arabic speakers, why translation plugins fall short, and how a custom build handles two languages.',
    excerpt:
      'Reaching Spanish and Arabic speakers, why translate plugins fall short, and what a real two-language site needs.',
    primaryKeyword: 'bilingual websites for small business',
    category: 'Bilingual',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    body: `A second language on your site opens the door to customers who would otherwise scroll past. Bilingual websites for small business are not a luxury feature. For a lot of local businesses, the second language is where the next customers are. I build sites in English with Spanish and Arabic, so I have seen what a real bilingual build does that a quick translate button does not.

## Who you reach with a second language

Spanish is the most spoken language other than English in the United States. More than 40 million people speak it at home, according to the Census Bureau's American Community Survey. If your customers include Spanish speakers and your site is English only, you are asking part of your market to work harder to buy from you. Arabic-speaking communities are smaller but underserved, and a site in their language stands out fast. A law firm, a clinic, a school, or a restaurant can all reach further with the right second language.

## Why translate plugins fall short

The quick fix is an auto-translate widget that machine-translates your pages on the fly. It looks easy and it reads rough. Machine translation gets tone and legal or medical terms wrong, which is a real problem when trust is on the line. It also does little for search. Google ranks pages, and an on-the-fly translation usually lives at one URL with no proper signals, so the translated version rarely ranks for anyone searching in that language.

## What a real bilingual site needs

Done right, each language gets its own real content and its own address. You tell Google about the versions with hreflang, the method it documents for pointing search engines at localized pages. That is how a Spanish page shows up for a Spanish search. The copy is written or checked by a person, not a machine, so it reads like a native speaker wrote it. A language switch lets visitors move between versions without losing their place.

## Arabic and right-to-left

Arabic reads right to left, and that is not a font setting. The whole layout mirrors. Menus, buttons, and text alignment flip, and the design has to hold together in both directions. Most plugins break here. A custom build handles it properly. I built [Daris](/projects/daris), a platform for Islamic studies and Quran, with Arabic in mind, and the layout works in both directions.

## Plugin vs a built-in bilingual site

| | Translate plugin | Built-in bilingual site |
|---|---|---|
| Translation quality | Machine, often rough | Real, human-checked copy |
| Search for each language | Weak, usually one URL | Real URLs with hreflang |
| Right-to-left for Arabic | Usually breaks the layout | Built to mirror correctly |
| Speed | Extra script to load | No extra weight |
| Control over wording | Limited | Full |

## A real example

I built [Campos Muños Law](/projects/campos-munos-law) as an English and Spanish site for a New Orleans immigration firm serving clients across the country. Clients read the services in the language they think in, and the firm reaches people an English-only site would miss. That is the point of doing it right instead of bolting on a widget. If you are weighing a custom build against a template, I compare those in [hiring a New Orleans web developer vs a template](/blog/new-orleans-web-developer-vs-template).

Serving customers in more than one language? [Tell me who you want to reach](/contact) and I will build the site to reach them.

## How a bilingual site is put together

The clean way to build two languages is to give each one its own set of pages at its own web address, then connect them. A visitor lands on the version that matches their language, and a switch in the header lets them flip to the other. Behind the scenes, hreflang tags tell Google which page is which language so the right one shows up in search. The menus, buttons, and everything a person clicks are translated too, down to the last label. Done this way, each language feels like a site built for that reader, because it is. A widget that machine-translates on the fly cannot reach that bar, and search engines treat it accordingly.

## Common questions

### Are auto-translate plugins good enough for a business site?

For a rough gist, maybe. For trust and for search, no. Machine translation gets tone and specific terms wrong, which is a real problem for a law firm or a clinic, and the translated pages rarely rank because they usually lack their own address and signals.

### Does adding a second language help SEO?

Yes, when each language has its own real pages and hreflang tags. Then those pages can rank for searches in that language, which an English-only site never reaches. A translate widget does little for search.

### Can you build right-to-left sites for Arabic?

Yes. Arabic reads right to left, and the whole layout mirrors, which goes well past the text. Menus, alignment, and buttons all flip, and the design has to hold together in both directions. I built [Daris](/projects/daris) with that in mind.

### Which second language should my business add?

Follow your customers. Spanish reaches the largest non-English audience in the United States by far. If your community includes Arabic speakers or another language, that is where a second version stands out most, since fewer competitors bother.

### How much more does a bilingual website cost?

More than a single-language site, since there is a second set of pages to build and real translation to place. It costs far less than two separate sites, though, because the design and the code are shared across both languages. You are paying mainly for the extra content, not a whole second build.

---

**About the author.** I'm Walid Elsayed, a web developer in New Orleans. I build bilingual sites in English with Spanish and Arabic, including right-to-left layouts, so businesses reach more of their community.

### Sources

- U.S. Census Bureau, [Language Use](https://www.census.gov/topics/population/language-use.html)
- U.S. Census Bureau, [Language Use in the United States (American Community Survey report)](https://www.census.gov/content/dam/Census/library/publications/2022/acs/acs-50.pdf)
- Google Search Central, [Tell Google about localized versions of your page](https://developers.google.com/search/docs/specialty/international/localized-versions)`,
  },
  {
    slug: 'restaurant-online-ordering-no-commission-fees',
    title: 'Restaurant Online Ordering Without Commission Fees',
    metaTitle: 'Restaurant Online Ordering, No Commission Fees',
    description:
      'Restaurant online ordering without commission fees: how delivery apps take 15 to 30% per order, and how ordering on your own site keeps that margin.',
    excerpt:
      'Delivery apps take 15 to 30% per order. Ordering on your own site keeps that margin and the customer.',
    primaryKeyword: 'restaurant online ordering without commission fees',
    category: 'Restaurants',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    body: `Third-party delivery apps are easy to sign up for and expensive to live with. If you want restaurant online ordering without commission fees eating your margin, the answer is to take orders on your own site. I build restaurant sites in New Orleans, including online ordering, so here is the plain version of why direct beats the apps on cost.

## What the delivery apps really cost

DoorDash, Uber Eats, and Grubhub charge restaurants a commission on every order. Depending on the plan and how much visibility you want, that commission commonly runs from 15% to 30% per order. Higher tiers buy better placement in the app and cost more. On a thin restaurant margin, handing over a quarter or a third of an order is the difference between a good week and a flat one.

## The math on a single order

Take a 30 dollar order. At a 30% commission, the app keeps 9 dollars. At 15%, it keeps 4.50. Now take that same order on your own site through a card processor at about 2.9% plus 30 cents. That costs you a little over a dollar. The gap is money that stays in your kitchen instead of leaving with the app. I break down processing rates across platforms in [website builder transaction fees compared](/blog/website-builder-transaction-fees-compared).

## Ordering on your own site

Your own ordering page connects straight to a payment processor like Stripe or Square. You pay the card rate and nothing else. There is no commission and no middle layer. You also keep the customer. When someone orders through an app, the app owns that relationship and the data. When they order from your site, the email and the repeat business are yours. That is the ownership side, and it works the same way I describe for stores in [do you actually own your Shopify store](/blog/do-you-own-your-shopify-store).

## What you keep, what you give up

The apps are not worthless. They bring reach and they handle drivers, which is real work you would otherwise arrange yourself. Direct ordering saves the commission but leaves delivery to you, whether that means pickup only, your own driver, or a flat-fee delivery service. It is a trade between reach and margin.

| | Third-party delivery app | Your own ordering |
|---|---|---|
| Cost per order | 15% to 30% commission | Card processing only, about 2.9% + 30¢ |
| Customer data | The app keeps it | You keep it |
| Your brand | The app's listing | Your own site |
| Delivery | Handled by the app | Pickup, your driver, or a flat-fee service |
| Best for | Reach and delivery labor | Margin and repeat customers |

## A path that fits most restaurants

Many restaurants run both. They keep a listing on one app for reach and push regulars to order direct, where the food costs the same and the restaurant keeps more. Put the ordering link on your site, your receipts, and your window, and the repeat orders move to the channel you own. My [Yami Hibachi](/projects/yami-hibachi) build takes orders on the restaurant's own site for that reason, and the [OK Ice Cream](/projects/ok-ice-cream) shop keeps its ordering close to home too.

Want ordering on your own site instead of renting it from an app? [Tell me about your restaurant](/contact) and I will set it up.

## How to move regulars to direct ordering

The apps are good at reach. You are better at loyalty, and that is where direct ordering wins. The move is simple and it takes repetition. Put the ordering link on your website, print it on receipts and takeout bags, and stick a small sign at the register. Mention it when regulars come in. Offer a reason to order direct, like a small discount or a free side, since even a dollar off beats handing 30% to an app. Over a few months the customers who order from you every week shift to the channel you own, and the app becomes what it should be, a way for new people to find you rather than the toll booth on every sale.

## Common questions

### How much do delivery apps charge restaurants?

Commonly 15% to 30% per order, depending on the plan and how much visibility you buy. Higher tiers get better placement in the app and cost more. Some plans add fees for marketing and promotions on top of the base commission.

### Is direct ordering cheaper than DoorDash or Uber Eats?

Yes. On your own site you pay only the card processing rate, about 2.9% plus 30 cents per order, instead of a 15% to 30% commission. On a 30 dollar order that is a little over a dollar versus several dollars.

### Can I still offer delivery without the apps?

Yes. Options include pickup only, your own driver, or a flat-fee delivery service that charges a set amount instead of a percentage. You keep the order and the customer either way.

### Do I need Shopify to take restaurant orders?

No. A custom ordering page connects straight to a processor like Stripe or Square, with no platform commission and no monthly store plan. That is usually a better fit for a restaurant than a full store platform.

### Are third-party delivery commissions negotiable?

The tiers are mostly set by plan, though high-volume restaurants sometimes get custom terms. The dependable way to lower your effective fee is to move repeat orders to your own site, where there is no commission at all. The app then earns its cut only on the new customers it actually brings you, which is a fairer trade than paying it on every regular.

---

**About the author.** I'm Walid Elsayed, a web developer in New Orleans. I build restaurant sites with online ordering that connects straight to a payment processor, so the kitchen keeps its margin.

### Sources

- DoorDash for Merchants, [Partnership Plans and Pricing](https://get.doordash.com/en-us/products/marketplace)
- Uber Eats, [Pricing for Merchants](https://merchants.ubereats.com/us/en/pricing/)
- Grubhub for Restaurants, [Pricing](https://get.grubhub.com/pricing/)`,
  },
  {
    slug: 'own-your-domain-code-and-data',
    title: 'Owning Your Domain, Code, and Data: A Small Business Guide',
    metaTitle: 'Own Your Domain, Code, and Data: A Small Biz Guide',
    description:
      'Own your domain, code, and data: a small business guide to avoiding platform lock-in. What ownership means, why it matters, and how to check who holds yours.',
    excerpt:
      'The three things every business should hold, how lock-in happens, and a checklist to confirm the site is really yours.',
    primaryKeyword: 'own your domain, code, and data',
    category: 'Ownership',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    body: `Most small business owners find out what they do not own at the worst time, when they try to leave a platform or an agency stops answering. If you own your domain, code, and data, you can move anywhere and lose nothing. If you do not, you are stuck. I build sites that hand the owner all three, so here is the plain guide to what to hold and how to check.

## The three things to own

A website is really three assets. The domain is your address. The code is the site itself. The data is your customers and content. Own all three and the site is yours to move, sell, or rebuild on your terms. Miss one and someone else holds part of your business.

## Your domain

The domain is the easiest to lose and the easiest to protect. Register it in your own name, in an account you control, and keep the login. When an agency or a builder registers the domain for you under their account, they hold your address. If you part ways, getting it back can be slow or messy. Buy the domain yourself, or make sure it sits in your account, and you always keep the keys.

## Your code

The code is the site's design and everything that makes it work. On a custom build you get the files, and any developer can host them or pick up the work later. On a hosted builder the code runs only on that platform. Wix says so plainly in its help center: "the SaaS architecture does not support external hosting." That means the site cannot move, and leaving means a rebuild. I cover that trade in [custom website vs Wix](/blog/custom-website-vs-wix-small-business). When you own the code, no single company can hold your site hostage.

## Your data

Your data is your customer list, your orders, and your content. Some platforms let you export it. Shopify, for example, lets you download products, customers, and orders as CSV files, which I get into in [do you actually own your Shopify store](/blog/do-you-own-your-shopify-store). Others make it hard to get your information out in a usable form. Before you commit to any platform, find out exactly what you can export and in what format. If the answer is unclear, treat that as a warning.

## How lock-in happens

Lock-in is rarely a single decision. It builds up. The builder registers your domain. The design lives in a theme that only runs on their servers. Your customer data sits in a system with no clean export. None of it looks like a trap on day one. Then the price goes up or the service slips, and you learn that moving means starting over. The cost of ownership question is the same one I ask in [what a small business website should cost](/blog/what-a-small-business-website-should-cost).

## The ownership checklist

- Is the domain registered in your name, in an account you control?
- Do you have the code, or does it only run on one platform?
- Can you export your customers, orders, and content in a usable format?
- If the platform doubled its price tomorrow, could you leave without rebuilding?

## Owned vs locked in

| | You own it | Locked to a platform |
|---|---|---|
| Domain | In your name, you hold the login | Registered by someone else |
| Code | You have the files, host anywhere | Runs only on the platform |
| Data | Yours, exportable | Export limited or unclear |
| Leaving | Switch hosts, keep everything | Rebuild from scratch |

I build with all three in the owner's hands. My [SAHA Institute](/projects/saha-institute) and [Daris](/projects/daris) builds are custom sites the owners hold outright, code and content included.

Not sure who holds your domain, code, or data right now? [Send me your site](/contact) and I will tell you where you stand.

## What to ask before you sign anything

Before you hire an agency or sign up for a platform, get four answers in writing. Will the domain be registered in my name, in my account? Will I receive the code and be free to host it anywhere? Can I export my customers, orders, and content, and in what format? And if we part ways, what exactly do I walk away with? A good answer is specific and confident. A vague answer, or one that treats these as strange questions, tells you where you would stand later. This is not about distrust. It is about knowing who holds the keys before you need them, because the moment you need them is the worst time to find out.

## Common questions

### How do I know if I own my domain?

Check that it is registered in your own name, in a registrar account you control, and that you hold the login and the email on file. If an agency set it up under their account, they hold your address, and you should move it into your own name.

### What happens to my website if my web agency disappears?

If you own the domain, the code, and the data, you hand it to any other developer and carry on. If the agency holds those, you can be locked out of your own site. That is the whole reason to sort out ownership at the start.

### Can I get my data off a website builder?

Sometimes. Some platforms export your content and customers cleanly, and some make it hard to get anything usable out. Check the export options before you commit, not after, so you are not trapped by a decision you made on day one.

### What does it mean to own your website?

It means three things are in your hands: the domain as your address, the code as the site itself, and the data as your customers and content. Hold all three and you can move, sell, or rebuild on your terms. Miss one and you have handed someone else control.

---

**About the author.** I'm Walid Elsayed, a web developer in New Orleans. I hand-build custom sites for small businesses so the owner keeps the domain, the code, and the data, with nothing locked to a platform.

### Sources

- Wix Help Center, [Exporting or Embedding Your Wix Site Elsewhere](https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere)
- Shopify Help Center, [Export or import with CSV files](https://help.shopify.com/en/manual/products/import-export)`,
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

export interface FaqItem {
  question: string
  answer: string
}

/**
 * Reduce a short slice of Markdown to plain text for JSON-LD answer fields.
 * Unwraps links to their label, drops bold/italic/code markers, and collapses
 * whitespace so a multi-line answer becomes one clean sentence group.
 */
function markdownToPlainText(md: string): string {
  return md
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // [label](url) -> label
    .replace(/\*\*([^*]+)\*\*/g, '$1') // **bold** -> bold
    .replace(/\*([^*]+)\*/g, '$1') // *italic* -> italic
    .replace(/`([^`]+)`/g, '$1') // `code` -> code
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Extract the question/answer pairs from an article's "Common questions"
 * section. Questions are the H3 headings inside it; the answer is the prose
 * that follows each heading up to the next H3. The section itself ends at the
 * next H2 or a horizontal rule (which precedes the author note and sources).
 * Returns [] when an article has no FAQ section.
 */
export function getArticleFaqs(article: Article): FaqItem[] {
  const start = article.body.match(/^##\s+Common questions\s*$/im)
  if (!start || start.index === undefined) return []

  const afterHeading = article.body.slice(start.index + start[0].length)
  const end = afterHeading.match(/\n(?:##\s|---)/)
  const section = end && end.index !== undefined ? afterHeading.slice(0, end.index) : afterHeading

  const faqs: FaqItem[] = []
  for (const chunk of section.split(/^###\s+/m)) {
    const trimmed = chunk.trim()
    if (!trimmed) continue
    const breakAt = trimmed.indexOf('\n')
    const question = (breakAt === -1 ? trimmed : trimmed.slice(0, breakAt)).trim()
    const answer = breakAt === -1 ? '' : markdownToPlainText(trimmed.slice(breakAt + 1))
    if (question && answer) faqs.push({ question, answer })
  }
  return faqs
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
