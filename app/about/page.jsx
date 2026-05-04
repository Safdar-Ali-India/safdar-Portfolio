import Link from "next/link"
import BackToHomeLink from "../../components/BackToHomeLink"
import { SparklesCore } from "../../components/ui/sparkles"
import {
  StoryBentoImage,
  StoryBentoPortraitCenter,
  StoryBentoPortraitTile,
  StoryBentoVideo,
  StoryImageSlot,
  StoryVideoSlot,
} from "../../components/about/MediaSlot"
import WhereImBasedSection from "../../components/about/WhereImBasedSection"

const SITE = "https://safdarali.in"

export const metadata = {
  title: "About",
  description: "About Safdar Ali — frontend engineer at Cube, YouTuber, Bengaluru. Create & code, life beyond the keyboard, travel—and how to collaborate.",
  keywords: ["Safdar Ali YouTube", "React developer India", "Next.js developer Bengaluru", "Safdar Ali developer", "frontend developer Cube"],
  alternates: {
    canonical: `${SITE}/about`,
  },
  openGraph: {
    title: "About | Safdar Ali",
    url: `${SITE}/about`,
    description: "Story-led about page: engineering, creativity, Bengaluru life, travel, and highlights.",
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

/** Home blog card titles / in-page section headings */
const sectionHeading = "font-InterBold font-extrabold text-lg text-neutral-950 dark:text-ink lg:text-xl"

/** Projects / Skills / Blog route title */
const pageTitleClass =
  "text-center font-InterBold uppercase font-extrabold font-InterBlack text-neutral-950 dark:text-ink light:text-black text-3xl"

/** Every story section: same bottom margin, anchor offset, full article width */
const sectionBlock = "mb-28 w-full scroll-mt-24"

/** First body paragraph after an in-page `sectionHeading` */
const sectionLead = `mt-4 ${bodyProse}`

/** Space before media grids below section intro */
const sectionMediaTop = "mt-10"

function page() {
  return (
    <div className="relative pb-36 sm:pb-40">
      <div className="pointer-events-none fixed inset-0 -z-10 h-screen w-full" aria-hidden="true">
        <SparklesCore
          id="aboutsparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="h-full w-full"
          particleColor="#777"
        />
      </div>

      <article className="relative mx-auto max-w-6xl px-4 pt-12 sm:pt-16 lg:px-6">
        <header className="relative mb-12 mt-10 sm:mt-14">
          <h1 className={pageTitleClass}>About</h1>
          <BackToHomeLink />
        </header>

        {/* Hero — lead title is h2 so the route keeps a single h1 (matches Projects / Blog pattern) */}
        <section aria-labelledby="about-hero-heading" className="mb-28 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="relative overflow-hidden rounded-3xl shadow-lg shadow-neutral-900/10 ring-1 ring-neutral-200/80 dark:shadow-black/40 dark:ring-white/15 lg:col-span-5">
            <StoryImageSlot
              priority
              src="/about/photo-hero-desk-wide.jpeg"
              alt="Safdar at his desk with monitors, keyboard, and coding setup indoors"
              caption=""
              aspectClass="min-h-[280px] aspect-[4/5] sm:min-h-[360px]"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 id="about-hero-heading" className="font-extrabold font-InterBlack text-3xl leading-tight text-neutral-950 dark:text-ink">
              What I&apos;m about.
            </h2>
            <p className={`mt-5 ${bodyProse}`}>
              Hey — I&apos;m Safdar. Frontend engineer at Cube (Sequoia-backed), where I own the product UI across a data platform used by engineering teams globally. I ship with Next.js, React, and TypeScript — and I document the craft through 70+ tutorials on YouTube, watched by developers across India and beyond.
            </p>
            <p className={`mt-4 ${bodyProse}`}>
              Outside sprint boards, I&apos;m on a cricket ground, racking up kilometres on two wheels, hunting for the best food in Bengaluru, or somewhere in the hills with a camera in hand. I believe great engineers have full lives — it shows up in the work. If you&apos;re building something ambitious — at scale or from scratch — scroll down. I&apos;d love to connect.
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

        {/* Section 1 */}
        <section id="create-code-share" aria-labelledby="s1-heading" className={sectionBlock}>
          <h2 id="s1-heading" className={sectionHeading}>
            I create, code & share.
          </h2>
          <p className={`${sectionLead} max-w-2xl`}>
            Four years in, I&apos;ve shipped production UI at a Sequoia-backed startup, built 30+ projects across React and various CMS platforms, and published weekly tutorials that break down real engineering problems — not toy examples. The YouTube channel started as notes-to-self. Now it helps thousands of developers get unstuck.
          </p>
          <div className={`${sectionMediaTop} grid gap-6 sm:grid-cols-2`}>
            <StoryVideoSlot src="/about/clip-desk-loop.mp4" label="Recording a YouTube tutorial" aspectClass="aspect-[1600/963]" />
            <StoryImageSlot src="/about/photo-cafe-laptop.png" alt="Safdar Ali Coding YouTube channel banner: wide dark art with channel title, subscribe graphic, and social links" caption="YouTube banner — 1600×963" aspectClass="aspect-[1600/963] w-full min-h-0" />
          </div>
        </section>

        {/* Section 2 — same width as article (no inner max-w-5xl) */}
        <section id="beyond-keyboard" aria-labelledby="s2-heading" className={sectionBlock}>
          <h2 id="s2-heading" className={sectionHeading}>
            Beyond the keyboard.
          </h2>
          <p className={sectionLead}>
            Cricket, cycling, and slow mornings with strong chai. I move fast at work because I know how to genuinely switch off. You&apos;ll find me bowling on weekends, clocking kilometres on the bike, or rallying a group for a late-night barbecue. Small circle, real conversations — same energy I bring to team standups.
          </p>
          <div className={`${sectionMediaTop} grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:items-start`}>
            <div className="min-h-0 min-w-0 sm:col-start-1 sm:row-start-1">
              <StoryBentoVideo src="/about/clip-cricket-bowl.mp4" label="Bowling at the cricket ground" />
            </div>
            <div className="min-h-0 min-w-0 sm:col-start-2 sm:row-start-1">
              <StoryBentoImage
                src="/about/photo-swimming-pool.jpg"
                alt="Safdar at the swimming pool, water and deck in frame"
                aspectClass="aspect-video"
              />
            </div>
            <div className="min-h-0 min-w-0 sm:col-start-1 sm:row-start-2">
              <StoryBentoPortraitTile
                src="/about/photo-sunglasses-sitting.jpg"
                alt="Safdar sitting outdoors wearing sunglasses, relaxed portrait"
                objectPosition="object-top"
              />
            </div>
            <div className="min-h-0 min-w-0 sm:col-start-2 sm:row-start-2">
              <StoryBentoPortraitTile
                src="/about/photo-cycling.jpg"
                alt="Safdar cycling in Bengaluru, daylight ride"
                objectPosition="object-top"
              />
            </div>
            <div className="flex min-h-0 min-w-0 justify-center sm:col-span-2 sm:row-start-3">
              <StoryBentoPortraitCenter
                src="/about/photo-cube-teammates-bbq.jpg"
                alt="Cube teammates gathered for a barbecue, grilling and group moment"
                width={899}
                height={1599}
              />
            </div>
          </div>
        </section>

        {/* Section 3 — same width as article (no inner max-w-2xl) */}
        <section id="wander" aria-labelledby="s3-heading" className={sectionBlock}>
          <h2 id="s3-heading" className={sectionHeading}>
            Wander often, wonder always.
          </h2>
          <p className={sectionLead}>
            Travel resets the mental model. Coorg for the mist and silence, the coast for perspective, Bengaluru&apos;s own pockets for everyday discoveries. I shoot on my phone, mostly — honest frames, no filters. The best ideas tend to arrive somewhere between a winding road and bad mobile signal.
          </p>
          <div className={`${sectionMediaTop} grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]`}>
            <StoryBentoImage
              src="/about/photo-pondicherry-beach.jpg"
              alt="Pondicherry beach, sand and shoreline"
              aspectClass="aspect-square w-full"
              plain
              className="lg:col-start-1 lg:row-start-1"
            />
            <StoryBentoImage
              src="/about/photo-wander-cafe.jpg"
              alt="Café interior, warm light and tables"
              aspectClass="aspect-[1511/1600] w-full"
              plain
              className="lg:col-start-2 lg:row-start-1"
            />
            <StoryBentoImage
              src="/about/photo-wander-cycle.jpg"
              alt="Cycle outdoors, square crop"
              aspectClass="aspect-square w-full"
              plain
              className="lg:col-start-1 lg:row-start-2"
            />
            <StoryBentoImage
              src="/about/photo-airbnb-sunglasses.jpg"
              alt="Safdar standing in an Airbnb wearing sunglasses"
              aspectClass="aspect-square w-full"
              plain
              className="lg:col-start-2 lg:row-start-2"
            />
            <StoryBentoVideo
              src="/about/clip-bike-riding.mp4"
              label="Bike riding clip"
              contain
              fillParent
              plain
              className="sm:col-span-2 sm:max-w-md sm:justify-self-center lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:h-full lg:min-h-0 lg:max-w-none lg:justify-self-stretch"
            />
          </div>
        </section>

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
  )
}

export default page
