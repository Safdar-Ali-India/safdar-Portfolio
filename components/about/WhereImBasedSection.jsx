import Link from "next/link"
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si"
import { socialLinks } from "../../lib/social-links"

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.09510031640759!3d12.953790614097319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b43e6d%3A0xf8dfc2e01ac4ecb!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709836800000!5m2!1sen!2sin"

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink"

const bodyProse = "font-InterMedium text-sm lg:text-lg leading-relaxed text-neutral-800 dark:text-ink"

const sectionHeading = "font-InterBold font-extrabold text-lg text-neutral-950 dark:text-ink lg:text-xl"

const tileBase =
  "group relative flex h-full min-h-[6.75rem] flex-col justify-between gap-2 rounded-2xl border p-3.5 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:focus-visible:outline-emerald-400 sm:min-h-[7rem] sm:p-4 lg:min-h-0"

/**
 * Bento social tile — column layout on small/medium cells (full handle),
 * horizontal row when the tile is wide enough (md+ in 2×2 panel).
 */
function SocialTile({ href, icon: Icon, handle, platform, className, iconClassName }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${tileBase} ${className}`}
      aria-label={`${platform}: ${handle}`}
    >
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}>
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block break-words font-InterBold text-[0.8125rem] leading-snug text-current sm:text-sm">
          {handle}
        </span>
        <span className="mt-1 block font-InterMedium text-[0.625rem] uppercase tracking-wide text-current opacity-80 sm:text-[0.6875rem]">
          {platform}
        </span>
      </span>
    </a>
  )
}

export default function WhereImBasedSection() {
  return (
    <section
      id="where-im-based"
      className="mb-28 w-full scroll-mt-24"
      aria-labelledby="where-heading"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,min(40rem,54vw))] lg:items-start lg:gap-12">
        <div className="max-w-xl">
          <h2 id="where-heading" className={sectionHeading}>
            Where I&apos;m based
          </h2>
          <p className={`mt-4 ${bodyProse}`}>
            I&apos;m in Bengaluru, India — coffee, midnight deploys, and all. Frontend engineer by day, content creator by night. Ping me via the{" "}
            <Link href="/contact" className={linkClass}>
              contact page
            </Link>{" "}
            or connect on any of the links below — no scraped bios, just my own feeds.
          </p>
        </div>

        {/* Map + 2×2: ~50/50 split so each tile is ~¼ of bento width × full height — not ¼ of entire article. */}
        <div className="grid min-h-0 min-w-0 grid-cols-1 items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="relative aspect-[16/11] min-h-[200px] overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-100/80 ring-1 ring-neutral-200/80 dark:border-white/10 dark:bg-night/40 dark:ring-white/10 sm:aspect-[16/10] sm:min-h-[220px] md:aspect-auto md:min-h-[260px] md:h-full lg:min-h-[min(100%,300px)]">
            <iframe
              title="Bengaluru on Google Maps"
              src={mapEmbedSrc}
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.12] sepia-[0.05] dark:opacity-[0.94]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <span
              className="pointer-events-none absolute bottom-[18%] left-1/2 z-[1] h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-sky-500 shadow-[0_0_0_5px_rgba(14,165,233,0.22)] dark:border-night md:h-4 md:w-4 md:shadow-[0_0_0_6px_rgba(14,165,233,0.25)]"
              aria-hidden
            />
          </div>

          <div className="grid min-h-0 min-w-0 grid-cols-2 grid-rows-2 gap-4 md:h-full md:min-h-[260px] md:auto-rows-[minmax(0,1fr)]">
            <SocialTile
              href={socialLinks.youtube}
              icon={SiYoutube}
              handle="@safdarali_"
              platform="YouTube"
              className="border-neutral-200/90 bg-neutral-100 text-neutral-950 hover:shadow-neutral-900/10 dark:border-white/10 dark:bg-neutral-800/55 dark:text-ink dark:hover:shadow-black/40"
              iconClassName="bg-white text-[#FF0000] shadow-sm ring-1 ring-neutral-200/80 dark:bg-neutral-900 dark:ring-white/10"
            />
            <SocialTile
              href={socialLinks.linkedin}
              icon={SiLinkedin}
              handle="safdarali25"
              platform="LinkedIn"
              className="border-neutral-200/80 bg-[#f3f4f6] text-neutral-950 hover:shadow-neutral-900/10 dark:border-white/10 dark:bg-[#1c1c1c] dark:text-ink dark:hover:shadow-black/40"
              iconClassName="bg-[#0A66C2] text-white shadow-sm"
            />
            <SocialTile
              href={socialLinks.github}
              icon={SiGithub}
              handle="Safdar-Ali-India"
              platform="GitHub"
              className="border-neutral-800 bg-neutral-950 text-white hover:shadow-neutral-900/35 dark:border-white/15 dark:bg-black dark:hover:shadow-black/50"
              iconClassName="bg-white/10 text-white ring-1 ring-white/20"
            />
            <SocialTile
              href={socialLinks.instagram}
              icon={SiInstagram}
              handle="codewithsafdar"
              platform="Instagram"
              className="border-transparent bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:shadow-orange-900/30"
              iconClassName="bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-[2px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
