"use client";

import {
  StoryBentoImage,
  StoryBentoPortraitCenter,
  StoryBentoPortraitTile,
  StoryBentoVideo,
  StoryVideoSlot,
} from "./MediaSlot";
import { ABOUT_PHOTOS } from "../../lib/about-media-seo";
import { socialLinks } from "../../lib/social-links";

const sectionHeading = "font-InterBold font-extrabold text-lg text-neutral-950 dark:text-ink lg:text-xl";
const bodyProse = "font-InterMedium text-sm lg:text-lg leading-relaxed text-neutral-800 dark:text-ink";
const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const sectionLead = `mt-4 ${bodyProse}`;
const sectionMediaTop = "mt-10";
const belowFoldSection = "mb-28 w-full scroll-mt-24 [content-visibility:auto] [contain-intrinsic-size:auto_480px]";

/** Below-fold story sections — separate client chunk so hero LCP is not blocked by video logic. */
export default function AboutStorySections() {
  return (
    <>
      <section id="safdar-ali-youtube" aria-labelledby="s1-heading" className={belowFoldSection}>
        <h2 id="s1-heading" className={sectionHeading}>
          I create, code & share.
        </h2>
        <p className={`${sectionLead} max-w-2xl`}>
          Four years in, I&apos;ve shipped production UI at a Sequoia-backed startup, built 30+ projects, and kept AI in the
          loop as a force multiplier — not a crutch. My tutorials break down real engineering problems, not toy examples. My
          YouTube channel,{" "}
          <a
            href={`${socialLinks.youtube}?sub_confirmation=1`}
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            Safdar Ali Coding
          </a>
          , started as notes-to-self — React, Next.js, and TypeScript walkthroughs. Now it helps thousands of developers get
          unstuck.
        </p>
        <div className={`${sectionMediaTop} grid gap-6 sm:grid-cols-2`}>
          <StoryVideoSlot
            src="/about/clip-desk-loop.mp4"
            poster="/about/poster-desk-loop.webp"
            label="Recording a YouTube tutorial"
            aspectClass="aspect-[1600/963]"
            lazyVideo
          />
          <a
            href={`${socialLinks.youtube}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="block min-w-0 rounded-3xl transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:focus-visible:outline-emerald-400"
            aria-label="Safdar Ali Coding — open YouTube channel @safdarali_"
          >
            <StoryBentoImage
              src="/about/photo-cafe-laptop.webp"
              alt={ABOUT_PHOTOS[1].alt}
              aspectClass="aspect-[1600/963] w-full min-h-0"
            />
          </a>
        </div>
      </section>

      <section id="beyond-keyboard" aria-labelledby="s2-heading" className={belowFoldSection}>
        <h2 id="s2-heading" className={sectionHeading}>
          Beyond the keyboard.
        </h2>
        <p className={sectionLead}>
          Cricket, cycling, and slow mornings with strong chai. I move fast at work because I know how to genuinely switch off. You&apos;ll find me bowling on weekends, clocking kilometres on the bike, or rallying a group for a late-night barbecue. Small circle, real conversations — same energy I bring to team standups.
        </p>
        <div className={`${sectionMediaTop} grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:items-start`}>
          <div className="min-h-0 min-w-0 sm:col-start-1 sm:row-start-1">
            <StoryBentoVideo
              src="/about/clip-cricket-bowl.mp4"
              poster="/about/poster-cricket-bowl.webp"
              label="Bowling at the cricket ground"
              lazyVideo
            />
          </div>
          <div className="min-h-0 min-w-0 sm:col-start-2 sm:row-start-1">
            <StoryBentoImage src="/about/photo-swimming-pool.webp" alt={ABOUT_PHOTOS[2].alt} aspectClass="aspect-video" />
          </div>
          <div className="min-h-0 min-w-0 sm:col-start-1 sm:row-start-2">
            <StoryBentoPortraitTile
              src="/about/photo-sunglasses-sitting.webp"
              alt={ABOUT_PHOTOS[3].alt}
              objectPosition="object-top"
            />
          </div>
          <div className="min-h-0 min-w-0 sm:col-start-2 sm:row-start-2">
            <StoryBentoPortraitTile
              src="/about/photo-cycling.webp"
              alt={ABOUT_PHOTOS[4].alt}
              objectPosition="object-top"
            />
          </div>
          <div className="flex min-h-0 min-w-0 justify-center sm:col-span-2 sm:row-start-3">
            <StoryBentoPortraitCenter
              src="/about/photo-cube-teammates-bbq.webp"
              alt={ABOUT_PHOTOS[5].alt}
              width={899}
              height={1599}
            />
          </div>
        </div>
      </section>

      <section id="wander" aria-labelledby="s3-heading" className={belowFoldSection}>
        <h2 id="s3-heading" className={sectionHeading}>
          Wander often, wonder always.
        </h2>
        <p className={sectionLead}>
          Travel resets the mental model. Coorg for the mist and silence, the coast for perspective, Bengaluru&apos;s own pockets for everyday discoveries. I shoot on my phone, mostly — honest frames, no filters. The best ideas tend to arrive somewhere between a winding road and bad mobile signal.
        </p>
        <div
          className={`${sectionMediaTop} grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]`}
        >
          <StoryBentoImage
            src="/about/photo-pondicherry-beach.webp"
            alt={ABOUT_PHOTOS[6].alt}
            aspectClass="aspect-square w-full"
            plain
            className="lg:col-start-1 lg:row-start-1"
          />
          <StoryBentoImage
            src="/about/photo-wander-cafe.webp"
            alt={ABOUT_PHOTOS[7].alt}
            aspectClass="aspect-[1511/1600] w-full"
            plain
            className="lg:col-start-2 lg:row-start-1"
          />
          <StoryBentoImage
            src="/about/photo-wander-cycle.webp"
            alt={ABOUT_PHOTOS[8].alt}
            aspectClass="aspect-square w-full"
            plain
            className="lg:col-start-1 lg:row-start-2"
          />
          <StoryBentoImage
            src="/about/photo-airbnb-sunglasses.webp"
            alt={ABOUT_PHOTOS[9].alt}
            aspectClass="aspect-square w-full"
            plain
            className="lg:col-start-2 lg:row-start-2"
          />
          <StoryBentoVideo
            src="/about/clip-bike-riding.mp4"
            poster="/about/poster-bike-riding.webp"
            label="Bike riding clip"
            contain
            fillParent
            plain
            lazyVideo
            className="sm:col-span-2 sm:max-w-md sm:justify-self-center lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:h-full lg:min-h-0 lg:max-w-none lg:justify-self-stretch"
          />
        </div>
      </section>
    </>
  );
}
