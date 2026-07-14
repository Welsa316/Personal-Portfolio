<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Container from '@/components/layout/Container.vue'
import Button from '@/components/ui/Button.vue'
import IconArrow from '@/components/ui/IconArrow.vue'
import { useSiteHead } from '@/composables/useSiteHead'
import { SITE_URL } from '@/config/constants'

type Platform = 'Wix' | 'Shopify' | 'Squarespace' | 'Other'

const platforms: Platform[] = ['Wix', 'Shopify', 'Squarespace', 'Other']

// Representative monthly plan prices as of July 2026. The visitor can edit any of
// these, so the tool never asserts a fixed price. Switching platform resets the
// monthly field to that platform's default.
const platformDefaults: Record<Platform, number> = {
  Wix: 27,
  Shopify: 29,
  Squarespace: 23,
  Other: 25,
}

const platform = ref<Platform>('Wix')
const monthlyCost = ref<number>(platformDefaults.Wix)
const years = ref<number>(3)
const storeOn = ref<boolean>(false)
const transactionFee = ref<number>(2.9)
const monthlySales = ref<number>(2000)
const customBuild = ref<number>(2500)
const hostingYearly = ref<number>(60)

// Reset the monthly figure to the picked platform's default when the visitor
// switches platform.
watch(platform, (p) => {
  monthlyCost.value = platformDefaults[p]
})

function num(v: unknown): number {
  const n = typeof v === 'number' ? v : parseFloat(String(v))
  return Number.isFinite(n) && n >= 0 ? n : 0
}

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})
function money(n: number): string {
  return usd.format(Math.round(n))
}

// Platform cost for one year: subscription plus store fees if selling online.
const platformPerYear = computed(() => {
  const subscription = num(monthlyCost.value) * 12
  const fees = storeOn.value
    ? (num(transactionFee.value) / 100) * num(monthlySales.value) * 12
    : 0
  return subscription + fees
})

const platformTotal = computed(() => platformPerYear.value * years.value)
const customTotal = computed(
  () => num(customBuild.value) + num(hostingYearly.value) * years.value,
)

// Positive means the custom build costs less over the chosen span.
const difference = computed(() => platformTotal.value - customTotal.value)
const savesWithCustom = computed(() => difference.value > 0)

// Year the running custom total drops below the running platform total.
// Crossover solves: platformPerYear * y = customBuild + hostingYearly * y.
const breakEvenYears = computed(() => {
  const denom = platformPerYear.value - num(hostingYearly.value)
  if (denom <= 0) return null
  return num(customBuild.value) / denom
})

const breakEvenMessage = computed(() => {
  const be = breakEvenYears.value
  if (be === null) return 'At these numbers the platform stays cheaper every year.'
  if (be <= 1) return 'A custom build costs less from the first year.'
  const yr = Math.ceil(be)
  if (yr > 5) return 'A custom build does not pay off within five years at these numbers.'
  return `A custom build costs less starting in year ${yr}.`
})

// Bar widths, scaled to whichever total is larger.
const maxTotal = computed(() => Math.max(platformTotal.value, customTotal.value, 1))
const platformBarWidth = computed(() => `${(platformTotal.value / maxTotal.value) * 100}%`)
const customBarWidth = computed(() => `${(customTotal.value / maxTotal.value) * 100}%`)

const fieldClass =
  'w-full rounded-xl border border-ink-200 bg-surface-raised py-3 text-sm text-ink-950 placeholder:text-ink-500 transition-colors focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50'

useSiteHead({
  rawTitle: 'Website Cost Calculator: Wix vs Custom Build Cost',
  description:
    'Free website cost calculator. Compare years of Wix, Shopify, or Squarespace subscription fees against a one-time custom build, and find the break-even year.',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Website Cost Calculator',
    description:
      'Compare the multi-year cost of a website builder subscription against a one-time custom build.',
    url: `${SITE_URL}/tools/website-cost-calculator`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    isAccessibleForFree: true,
    creator: {
      '@type': 'Person',
      name: 'Walid Elsayed',
      url: `${SITE_URL}/`,
    },
  },
})
</script>

<template>
  <div>
    <!-- Header -->
    <section class="pt-14 pb-8 sm:pt-20 sm:pb-10">
      <Container>
        <p class="eyebrow mb-4">Free Tool</p>
        <h1 class="max-w-3xl text-balance font-display text-4xl leading-[1.02] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
          Website Cost Calculator
        </h1>
        <p class="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-700">
          Compare years of platform subscription fees against a one-time custom build. Enter your own
          numbers to see the total and the year a custom site becomes cheaper.
        </p>
      </Container>
    </section>

    <!-- Calculator -->
    <section class="pb-16 sm:pb-24">
      <Container>
        <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <!-- Inputs -->
          <div class="rounded-card border border-ink-200 bg-surface-raised p-6 shadow-card sm:p-8">
            <h2 class="font-display text-2xl text-ink-950">Your numbers</h2>

            <!-- Platform -->
            <fieldset class="mt-6">
              <legend class="mb-2.5 block font-mono text-xs uppercase tracking-[0.18em] text-ink-600">
                Platform
              </legend>
              <div class="flex flex-wrap gap-2">
                <label v-for="p in platforms" :key="p">
                  <input
                    type="radio"
                    name="platform"
                    :value="p"
                    v-model="platform"
                    class="peer sr-only"
                  />
                  <span
                    class="inline-flex cursor-pointer items-center rounded-full border border-ink-300 px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-ink-400 hover:text-ink-950 peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-accent-light peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface"
                  >
                    {{ p }}
                  </span>
                </label>
              </div>
            </fieldset>

            <!-- Monthly plan cost -->
            <div class="mt-6">
              <label for="monthly-cost" class="mb-1.5 block text-sm font-medium text-ink-700">
                Monthly plan cost
              </label>
              <div class="relative">
                <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-500">$</span>
                <input
                  id="monthly-cost"
                  v-model.number="monthlyCost"
                  type="number"
                  min="0"
                  step="1"
                  inputmode="decimal"
                  :class="[fieldClass, 'pl-8 pr-4']"
                />
              </div>
              <p class="mt-1.5 text-xs text-ink-500">What you pay the platform each month.</p>
            </div>

            <!-- Years -->
            <div class="mt-6">
              <label for="years" class="mb-1.5 flex items-baseline justify-between text-sm font-medium text-ink-700">
                <span>Years to compare</span>
                <span class="font-mono text-ink-950">{{ years }} {{ years === 1 ? 'year' : 'years' }}</span>
              </label>
              <input
                id="years"
                v-model.number="years"
                type="range"
                min="1"
                max="5"
                step="1"
                class="w-full cursor-pointer rounded-full accent-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              />
            </div>

            <!-- Store toggle -->
            <div class="mt-6 border-t border-ink-200/70 pt-6">
              <label class="inline-flex cursor-pointer items-center gap-3">
                <input type="checkbox" v-model="storeOn" class="peer sr-only" />
                <span
                  class="relative h-6 w-11 shrink-0 rounded-full bg-ink-300 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-ink-950 after:transition-transform peer-checked:bg-accent peer-checked:after:translate-x-5 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface"
                ></span>
                <span class="text-sm font-medium text-ink-700">I sell online through this platform</span>
              </label>

              <div v-if="storeOn" class="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label for="transaction-fee" class="mb-1.5 block text-sm font-medium text-ink-700">
                    Transaction fee
                  </label>
                  <div class="relative">
                    <input
                      id="transaction-fee"
                      v-model.number="transactionFee"
                      type="number"
                      min="0"
                      step="0.1"
                      inputmode="decimal"
                      :class="[fieldClass, 'pl-4 pr-8']"
                    />
                    <span class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-ink-500">%</span>
                  </div>
                </div>
                <div>
                  <label for="monthly-sales" class="mb-1.5 block text-sm font-medium text-ink-700">
                    Monthly sales
                  </label>
                  <div class="relative">
                    <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-500">$</span>
                    <input
                      id="monthly-sales"
                      v-model.number="monthlySales"
                      type="number"
                      min="0"
                      step="50"
                      inputmode="decimal"
                      :class="[fieldClass, 'pl-8 pr-4']"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Custom build -->
            <div class="mt-6 border-t border-ink-200/70 pt-6">
              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <label for="custom-build" class="mb-1.5 block text-sm font-medium text-ink-700">
                    Custom build price
                  </label>
                  <div class="relative">
                    <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-500">$</span>
                    <input
                      id="custom-build"
                      v-model.number="customBuild"
                      type="number"
                      min="0"
                      step="50"
                      inputmode="decimal"
                      :class="[fieldClass, 'pl-8 pr-4']"
                    />
                  </div>
                  <p class="mt-1.5 text-xs text-ink-500">One-time cost to build the site.</p>
                </div>
                <div>
                  <label for="hosting" class="mb-1.5 block text-sm font-medium text-ink-700">
                    Hosting and domain, per year
                  </label>
                  <div class="relative">
                    <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-500">$</span>
                    <input
                      id="hosting"
                      v-model.number="hostingYearly"
                      type="number"
                      min="0"
                      step="5"
                      inputmode="decimal"
                      :class="[fieldClass, 'pl-8 pr-4']"
                    />
                  </div>
                  <p class="mt-1.5 text-xs text-ink-500">Yearly running cost of a custom site.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Results -->
          <div class="rounded-card border border-ink-200 bg-surface-raised p-6 shadow-card sm:p-8">
            <h2 class="font-display text-2xl text-ink-950">Over {{ years }} {{ years === 1 ? 'year' : 'years' }}</h2>

            <!-- Bars -->
            <div class="mt-6 space-y-6">
              <div>
                <div class="mb-2 flex items-baseline justify-between gap-4">
                  <span class="text-sm font-medium text-ink-700">{{ platform }} subscription</span>
                  <span class="font-mono text-base text-ink-950">{{ money(platformTotal) }}</span>
                </div>
                <div class="h-3 w-full overflow-hidden rounded-full bg-surface-sunken" role="presentation">
                  <div
                    class="h-full rounded-full bg-ink-400 transition-[width] duration-500 ease-out"
                    :style="{ width: platformBarWidth }"
                  ></div>
                </div>
              </div>

              <div>
                <div class="mb-2 flex items-baseline justify-between gap-4">
                  <span class="text-sm font-medium text-ink-700">Custom build</span>
                  <span class="font-mono text-base text-ink-950">{{ money(customTotal) }}</span>
                </div>
                <div class="h-3 w-full overflow-hidden rounded-full bg-surface-sunken" role="presentation">
                  <div
                    class="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
                    :style="{ width: customBarWidth }"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Difference -->
            <div
              class="mt-8 rounded-card border p-5"
              :class="savesWithCustom ? 'border-success/40 bg-success/5' : 'border-ink-300 bg-surface-sunken'"
            >
              <p class="font-mono text-xs uppercase tracking-[0.18em] text-ink-600">
                {{ savesWithCustom ? 'You save with a custom build' : `Platform is cheaper over ${years} ${years === 1 ? 'year' : 'years'}` }}
              </p>
              <p class="mt-1 font-display text-4xl leading-none text-ink-950 sm:text-5xl">
                {{ money(Math.abs(difference)) }}
              </p>
              <p class="mt-3 text-sm leading-relaxed text-ink-700">{{ breakEvenMessage }}</p>
            </div>

            <p class="mt-4 text-xs leading-relaxed text-ink-500">
              These figures are estimates. Platform pricing changes, so check the current plan before you
              decide. The platform total is your monthly plan across the years, plus store fees if you sell
              online. The custom total is the build price plus yearly hosting and domain.
            </p>

            <!-- Article links -->
            <p class="mt-5 text-sm leading-relaxed text-ink-600">
              The reasoning behind these numbers is in
              <router-link
                :to="{ name: 'article', params: { slug: 'what-a-small-business-website-should-cost' } }"
                class="text-accent-light underline underline-offset-2 hover:text-accent"
              >what a small business website should cost</router-link>
              and
              <router-link
                :to="{ name: 'article', params: { slug: 'website-builder-transaction-fees-compared' } }"
                class="text-accent-light underline underline-offset-2 hover:text-accent"
              >website builder transaction fees compared</router-link>.
            </p>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-8 rounded-card border border-ink-300 bg-surface-sunken p-8 sm:p-10 lg:mt-10">
          <p class="eyebrow mb-3">Work with me</p>
          <h2 class="font-display text-3xl leading-tight text-ink-950 sm:text-4xl">
            Want a real quote? Get in touch.
          </h2>
          <p class="mt-3 max-w-xl text-pretty leading-relaxed text-ink-700">
            Every business is different. Tell me what you need and I will price it straight, then hand you a
            site you own.
          </p>
          <Button :to="{ name: 'contact' }" size="lg" class="mt-6">
            Get in touch
            <IconArrow class="ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  </div>
</template>
