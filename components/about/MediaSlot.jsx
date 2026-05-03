"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

const placeholderClass =
  "flex min-h-[200px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300/90 bg-gradient-to-br from-amber-100/35 via-neutral-100/80 to-orange-950/15 px-4 py-10 text-center text-sm text-neutral-600 dark:border-white/15 dark:from-amber-900/25 dark:via-night dark:to-orange-950/30 dark:text-ink/60";

const frameBorder =
  "overflow-hidden rounded-2xl border border-neutral-200/90 dark:border-white/10";

const bentoFrame =
  "overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-100/30 dark:border-white/10 dark:bg-night/30";

/** Border + radius only (no fill tint) — masonry tiles read cleaner on dark UI. */
const plainTileFrame =
  "overflow-hidden rounded-3xl border border-neutral-200/90 dark:border-white/10";

/** Warm, restrained media frame — add your MP4/JPEG under `/public/about/`. Original site copy only (no scraped assets). */
export function StoryVideoSlot({ src, label, aspectClass = "aspect-video", intrinsic = false, capIntrinsicHeight = true }) {
  const [fallback, setFallback] = useState(false);
  const onErr = useCallback(() => setFallback(true), []);

  if (fallback) {
    return (
      <figure className={`${frameBorder} bg-neutral-900/20 dark:bg-night/40 ${intrinsic ? "min-h-[200px] w-full" : aspectClass}`}>
        <div className={intrinsic ? placeholderClass : `${placeholderClass} h-full`}>
          <span className="font-medium dark:text-ink/80">{label}</span>
          <span className="mt-2 max-w-xs text-xs opacity-90">Place MP4 at {src}</span>
        </div>
      </figure>
    );
  }

  if (intrinsic) {
    const cap = capIntrinsicHeight ? "max-h-[min(85vh,920px)]" : "";
    return (
      <figure className={`${frameBorder} bg-neutral-900/10 dark:bg-white/[0.04] w-full`}>
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`block h-auto w-full rounded-2xl object-contain contrast-[0.95] saturate-[0.92] ${cap}`}
          onError={onErr}
          aria-label={label}
        />
      </figure>
    );
  }

  return (
    <figure className={`relative ${frameBorder} bg-neutral-900/20 dark:border-white/10 ${aspectClass}`}>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full rounded-2xl object-cover contrast-[0.95] saturate-[0.92]"
        onError={onErr}
        aria-label={label}
      />
    </figure>
  );
}

export function StoryImageSlot({ src, alt, caption, aspectClass = "aspect-[4/3]" }) {
  const [fallback, setFallback] = useState(false);

  if (fallback) {
    return (
      <figure className="overflow-hidden rounded-2xl">
        <div className={`${placeholderClass} ${aspectClass}`}>
          <span className="font-medium dark:text-ink/80">{caption || alt}</span>
          <span className="mt-2 max-w-xs text-xs opacity-90">Place image at {src}</span>
        </div>
      </figure>
    );
  }

  return (
    <figure className={`relative ${frameBorder} ${aspectClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover contrast-[0.97] saturate-[0.93]"
        sizes="(max-width:768px) 100vw, 45vw"
        onError={() => setFallback(true)}
      />
    </figure>
  );
}

/**
 * Image keeps its natural aspect ratio (width/height hint layout; override with style for responsive width).
 * Tweak `width`/`height` to match your file’s pixels to reduce layout shift.
 */
export function StoryImageNatural({
  src,
  alt,
  caption,
  width = 1600,
  height = 1067,
  figureClassName = "",
  fillCell = false,
}) {
  const [fallback, setFallback] = useState(false);

  if (fallback) {
    return (
      <figure className={`${frameBorder} ${figureClassName} ${fillCell ? "relative min-h-[240px] h-full w-full" : ""}`}>
        <div className={`${placeholderClass} min-h-[200px]`}>
          <span className="font-medium dark:text-ink/80">{caption || alt}</span>
          <span className="mt-2 max-w-xs text-xs opacity-90">Place image at {src}</span>
        </div>
      </figure>
    );
  }

  if (fillCell) {
    return (
      <figure
        className={`relative ${frameBorder} ${figureClassName} h-full min-h-[220px] w-full overflow-hidden bg-neutral-100/40 dark:bg-white/[0.06]`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-1 contrast-[0.97] saturate-[0.93]"
          sizes="(max-width: 768px) 100vw, 45vw"
          onError={() => setFallback(true)}
        />
      </figure>
    );
  }

  return (
    <figure className={`${frameBorder} ${figureClassName}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="h-auto w-full contrast-[0.97] saturate-[0.93]"
        style={{ width: "100%", height: "auto" }}
        onError={() => setFallback(true)}
      />
    </figure>
  );
}

/** Bento tile: fixed aspect box + object-cover (bitmap aspect preserved; edges may crop). */
export function StoryBentoImage({
  src,
  alt,
  aspectClass = "aspect-[4/5]",
  objectPosition = "object-center",
  plain = false,
  className = "",
}) {
  const [fallback, setFallback] = useState(false);
  const shell = plain ? plainTileFrame : bentoFrame;
  const figureClass = `relative ${shell} ${aspectClass} w-full ${className}`.trim();

  if (fallback) {
    return (
      <figure className={figureClass}>
        <div className={placeholderClass}>
          <span className="font-medium dark:text-ink/80">{alt}</span>
          <span className="mt-2 max-w-xs text-xs opacity-90">Place image at {src}</span>
        </div>
      </figure>
    );
  }

  return (
    <figure className={`${figureClass} bg-neutral-100 dark:bg-neutral-950`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover contrast-[0.97] saturate-[0.93] ${objectPosition}`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={() => setFallback(true)}
      />
    </figure>
  );
}

export function StoryBentoVideo({
  src,
  label,
  aspectClass = "aspect-video",
  contain = false,
  /** With `contain`, fill a grid cell (e.g. `row-span-2`) instead of fixed aspect-[478/850] height. */
  fillParent = false,
  plain = false,
  className = "",
}) {
  const [fallback, setFallback] = useState(false);
  const onErr = useCallback(() => setFallback(true), []);
  const shell = plain ? plainTileFrame : bentoFrame;
  const extra = className ? ` ${className}` : "";

  if (fallback) {
    return (
      <figure className={`relative ${shell} ${contain ? "min-h-[200px] w-full" : `${aspectClass} w-full`}${extra}`}>
        <div className={placeholderClass}>
          <span className="font-medium dark:text-ink/80">{label}</span>
          <span className="mt-2 max-w-xs text-xs opacity-90">Place MP4 at {src}</span>
        </div>
      </figure>
    );
  }

  if (contain) {
    if (fillParent) {
      return (
        <figure className={`relative ${shell} h-full min-h-0 w-full overflow-hidden bg-neutral-950 dark:bg-black${extra}`}>
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover contrast-[0.95] saturate-[0.92]"
            onError={onErr}
            aria-label={label}
          />
        </figure>
      );
    }
    /* Portrait clip (e.g. 478×850): fixed aspect + cover—use fillParent beside row-spanned squares to avoid a tall row gap. */
    return (
      <figure className={`relative ${shell} aspect-[478/850] w-full overflow-hidden bg-neutral-950 dark:bg-black${extra}`}>
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover contrast-[0.95] saturate-[0.92]"
          onError={onErr}
          aria-label={label}
        />
      </figure>
    );
  }

  return (
    <figure className={`relative ${shell} ${aspectClass} w-full${extra}`}>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover contrast-[0.95] saturate-[0.92]"
        onError={onErr}
        aria-label={label}
      />
    </figure>
  );
}

/**
 * Portrait tile: full column width, 9×16, max-height clamp (no narrow “pillars” + empty center gap).
 */
export function StoryBentoPortraitTile({ src, alt, objectPosition = "object-top" }) {
  const [fallback, setFallback] = useState(false);

  if (fallback) {
    return (
      <figure
        className={`relative ${bentoFrame} aspect-[9/16] w-full max-h-[min(40vh,360px)] overflow-hidden sm:max-h-[min(42vh,380px)]`}
      >
        <div className={placeholderClass}>
          <span className="font-medium dark:text-ink/80">{alt}</span>
          <span className="mt-2 max-w-xs text-xs opacity-90">Place image at {src}</span>
        </div>
      </figure>
    );
  }

  return (
    <figure
      className={`relative ${bentoFrame} aspect-[9/16] w-full max-h-[min(40vh,360px)] overflow-hidden sm:max-h-[min(42vh,380px)]`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover contrast-[0.97] saturate-[0.93] ${objectPosition}`}
        sizes="(max-width: 640px) 100vw, 45vw"
        onError={() => setFallback(true)}
      />
    </figure>
  );
}

const portraitHeroFrame =
  "overflow-hidden rounded-3xl border border-neutral-200/90 dark:border-white/10";

/** Tall portrait: intrinsic 899×1599 (tweak props), object-contain + max-height — never squashed to a wide box. */
export function StoryBentoPortraitCenter({ src, alt, width = 899, height = 1599 }) {
  const [fallback, setFallback] = useState(false);

  if (fallback) {
    return (
      <figure className={`mx-auto w-fit max-w-full ${portraitHeroFrame} px-6 py-10`}>
        <div className={placeholderClass}>
          <span className="font-medium dark:text-ink/80">{alt}</span>
          <span className="mt-2 max-w-xs text-xs opacity-90">Place image at {src}</span>
        </div>
      </figure>
    );
  }

  return (
    <figure className={`mx-auto w-fit max-w-full ${portraitHeroFrame}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 640px) 92vw, 45vw"
        className="block h-auto w-auto max-w-full object-contain object-center contrast-[0.97] saturate-[0.93] max-h-[min(42vh,360px)] sm:max-h-[min(46vh,420px)] md:max-h-[min(50vh,480px)]"
        style={{ width: "auto", height: "auto" }}
        onError={() => setFallback(true)}
      />
    </figure>
  );
}
