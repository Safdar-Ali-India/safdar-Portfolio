"use client";

import { useCallback, useState } from "react";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.09510031640759!3d12.953790614097319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b43e6d%3A0xf8dfc2e01ac4ecb!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709836800000!5m2!1sen!2sin";

const MAP_LINK = "https://www.google.com/maps/place/Bengaluru,+Karnataka";

/**
 * Avoids loading ~200KB+ of Google Maps JS until the user opts in.
 * Static placeholder keeps layout; iframe mounts only after click.
 */
export default function LazyGoogleMap({ className = "" }) {
  const [active, setActive] = useState(false);
  const loadMap = useCallback(() => setActive(true), []);

  return (
    <div
      className={`relative aspect-[16/11] min-h-[200px] overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-100/80 ring-1 ring-neutral-200/80 dark:border-white/10 dark:bg-night/40 dark:ring-white/10 sm:aspect-[16/10] sm:min-h-[220px] md:aspect-auto md:min-h-[260px] md:h-full lg:min-h-[min(100%,300px)] ${className}`}
    >
      {active ? (
        <iframe
          title="Bengaluru on Google Maps"
          src={MAP_EMBED_SRC}
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.12] sepia-[0.05] dark:opacity-[0.94]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-sky-50 via-neutral-50 to-emerald-50/80 px-4 text-center dark:from-sky-950/40 dark:via-night dark:to-emerald-950/30">
          <span
            className="h-4 w-4 rounded-full border-2 border-white bg-sky-500 shadow-[0_0_0_6px_rgba(14,165,233,0.22)] dark:border-night"
            aria-hidden
          />
          <p className="font-InterMedium text-sm text-neutral-700 dark:text-ink/85">Bengaluru, Karnataka, India</p>
          <button
            type="button"
            onClick={loadMap}
            className="rounded-xl border border-neutral-300/90 bg-white/95 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition-colors hover:bg-white dark:border-white/15 dark:bg-white/[0.08] dark:text-ink dark:hover:bg-white/[0.12]"
          >
            Load interactive map
          </button>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-500 underline underline-offset-2 hover:text-neutral-800 dark:text-ink/55 dark:hover:text-ink/90"
          >
            Open in Google Maps ↗
          </a>
        </div>
      )}
      {active ? (
        <span
          className="pointer-events-none absolute bottom-[18%] left-1/2 z-[1] h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-sky-500 shadow-[0_0_0_5px_rgba(14,165,233,0.22)] dark:border-night md:h-4 md:w-4 md:shadow-[0_0_0_6px_rgba(14,165,233,0.25)]"
          aria-hidden
        />
      ) : null}
    </div>
  );
}
