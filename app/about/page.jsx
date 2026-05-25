import dynamic from "next/dynamic"
import Link from "next/link"
import PageBackHeader from "../../components/PageBackHeader"
import AboutHeroImage from "../../components/about/AboutHeroImage"
import AboutPageJsonLd from "../../components/about/AboutPageJsonLd"
import { ABOUT_PAGE_URL, ABOUT_PHOTOS, absoluteMediaUrl } from "../../lib/about-media-seo"

const WhereImBasedSection = dynamic(() => import("../../components/about/WhereImBasedSection"), {
  loading: () => (
    <section className="mb-28 w-full min-h-[280px] animate-pulse rounded-2xl bg-neutral-200/40 dark:bg-white/[0.04]" aria-hidden />
  ),
})

const AboutStorySections = dynamic(() => import("../../components/about/AboutStorySections"), {
  loading: () => (
    <div className="mb-28 min-h-[480px] animate-pulse rounded-2xl bg-neutral-200/30 dark:bg-white/[0.03]" aria-hidden />
  ),
})

const heroPhoto = ABOUT_PHOTOS[0]

export const metadata = {
  title: "About Safdar Ali — Photos, Story & Bengaluru Life",
  description:
    "About Safdar Ali — frontend engineer at Cube, YouTuber, and React developer in Bengaluru. Photos, cricket, cycling, travel, and how to collaborate.",
  keywords: [
    "Safdar Ali",
    "Safdar Ali photos",
    "Safdar Ali images",
    "Safdar Ali developer",
    "Safdar Ali YouTube",
    "Safdar Ali Bengaluru",
    "React developer India",
    "Next.js developer Bengaluru",
    "frontend developer Cube",
  ],
  alternates: {
    canonical: ABOUT_PAGE_URL,
  },
  openGraph: {
    title: "About Safdar Ali — Photos & Story",
    url: ABOUT_PAGE_URL,
    description:
      "Photos and story of Safdar Ali — engineering, YouTube, cricket, cycling, and travel from Bengaluru.",
    type: "profile",
    images: [
      {
        url: absoluteMediaUrl(heroPhoto.path),
        width: heroPhoto.width,
        height: heroPhoto.height,
        alt: heroPhoto.alt,
      },
      {
        url: absoluteMediaUrl("/safdar-ali.jpg"),
        width: 1200,
        height: 1200,
        alt: "Safdar Ali — software engineer and Next.js developer in Bengaluru, India",
      },
      {
        url: "https://safdarali.in/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Safdar Ali — Frontend Engineer Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Safdar Ali — Photos & Story",
    description: "Photos and story of Safdar Ali — developer, YouTuber, Bengaluru.",
    images: [absoluteMediaUrl(heroPhoto.path)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
}

/** Same as `linkInline` on HomePage — global inline link treatment */
const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink"

/** Same as HomePage `dockPill` — primary CTAs */
const dockPill =
  "inline-flex items-center justify-center rounded-2xl border border-slate-400/60 bg-white/90 text-slate-900 backdrop-blur-md px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors hover:bg-neutral-50 dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-ink dark:hover:bg-white/[0.1] dark:hover:border-white/20"

/** Home hero body: `font-InterMedium text-sm lg:text-lg leading-relaxed` */
const bodyProse = "font-InterMedium text-sm lg:text-lg leading-relaxed text-neutral-800 dark:text-ink"

/** Projects / Skills / Blog route title */
const pageTitleClass =
  "text-center font-InterBold uppercase font-extrabold font-InterBlack text-neutral-950 dark:text-ink light:text-black text-3xl"

function page() {
  return (
    <>
      <AboutPageJsonLd />
      <link
        rel="preload"
        as="image"
        href="/about/photo-hero-desk-wide.webp"
        type="image/webp"
        fetchPriority="high"
      />
    <div className="relative pb-36 sm:pb-40">
      <article className="relative mx-auto max-w-6xl px-4 pt-12 sm:pt-16 lg:px-6">
        <PageBackHeader className="mb-12 mt-10 sm:mt-14" back="home">
          <h1 className={pageTitleClass}>About Safdar Ali</h1>
        </PageBackHeader>

        {/* Hero — lead title is h2 so the route keeps a single h1 (matches Projects / Blog pattern) */}
        <section aria-labelledby="about-hero-heading" className="mb-28 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="relative overflow-hidden rounded-3xl shadow-lg shadow-neutral-900/10 ring-1 ring-neutral-200/80 dark:shadow-black/40 dark:ring-white/15 lg:col-span-5">
            <AboutHeroImage
              src="/about/photo-hero-desk-wide.webp"
              alt={heroPhoto.alt}
              aspectClass="min-h-[280px] aspect-[4/5] sm:min-h-[360px]"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 id="about-hero-heading" className="font-extrabold font-InterBlack text-3xl leading-tight text-neutral-950 dark:text-ink">
              What I&apos;m about.
            </h2>
            <p className={`mt-5 ${bodyProse}`}>
              Hey — I&apos;m Safdar. Frontend engineer at Cube (Sequoia-backed), where I own the product UI across a data platform used by data and engineering teams at startups and scale-ups across the US and India. I ship with Next.js, React, and TypeScript — and I document the craft through 70+ tutorials on YouTube, watched by developers across India and beyond.
            </p>
            <p className={`mt-4 ${bodyProse}`}>
              Outside sprint boards, I&apos;m on a cricket ground, racking up kilometres on two wheels, hunting for the best food in Bengaluru, or somewhere in the hills with a camera in hand. I believe great engineers have full lives — it shows up in the work. If you&apos;re building something ambitious — at scale or from scratch — scroll down. I&apos;d love to connect.
            </p>
            <p className={`mt-4 ${bodyProse}`}>
              ChatGPT for real work from early 2023; from 2024, Claude, Cursor, and v0 are how I prototype and ship every week.
              In 2026, skipping that stack is the outlier.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200/80 bg-white/60 p-4 text-center dark:border-white/10 dark:bg-white/[0.04]">
                <p className="font-InterBlack text-2xl font-extrabold text-neutral-950 dark:text-ink">70+</p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-ink/60">YouTube Tutorials</p>
              </div>
              <div className="rounded-2xl border border-neutral-200/80 bg-white/60 p-4 text-center dark:border-white/10 dark:bg-white/[0.04]">
                <p className="font-InterBlack text-2xl font-extrabold text-neutral-950 dark:text-ink">30+</p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-ink/60">Projects Shipped</p>
              </div>
              <div className="rounded-2xl border border-neutral-200/80 bg-white/60 p-4 text-center dark:border-white/10 dark:bg-white/[0.04]">
                <p className="font-InterBlack text-2xl font-extrabold text-neutral-950 dark:text-ink">4 Yrs</p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-ink/60">Experience</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={dockPill}>
                Say hello →
              </Link>
              <Link href="/projects" className={dockPill}>
                View projects
              </Link>
            </div>
          </div>
        </section>

        <WhereImBasedSection />

        <AboutStorySections />

        <footer className="border-t border-neutral-200 pt-10 dark:border-white/15">
          <p className="mx-auto max-w-2xl text-center font-InterMedium text-sm leading-relaxed text-neutral-600 dark:text-ink/80">
            For selected builds and case studies,{" "}
            <Link href="/projects" className={linkClass}>
              see projects
            </Link>
            . To collaborate,{" "}
            <Link href="/contact" className={linkClass}>
              use the contact page
            </Link>
            .
          </p>
        </footer>
      </article>
    </div>
    </>
  )
}

export default page
