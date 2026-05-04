"use client";

import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const placeholderClass =
  "flex min-h-[200px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300/90 bg-gradient-to-br from-amber-100/35 via-neutral-100/80 to-orange-950/15 px-4 py-10 text-center text-sm text-neutral-600 dark:border-white/15 dark:from-amber-900/25 dark:via-night dark:to-orange-950/30 dark:text-ink/60";

const frameBorder =
  "overflow-hidden rounded-2xl border border-neutral-200/90 dark:border-white/10";

const bentoFrame =
  "overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-100/30 dark:border-white/10 dark:bg-night/30";

/** Border + radius only (no tinted fill) — masonry tiles read cleaner on dark UI. */
const plainTileFrame =
  "overflow-hidden rounded-3xl border border-neutral-200/90 dark:border-white/10";

const videoSkeleton = "absolute inset-0 bg-neutral-900/25 animate-pulse dark:bg-neutral-800/40";

/** True when the element has a real box and overlaps the viewport (IO + Strict Mode fallback). */
function isLikelyVisible(el) {
  if (!el || typeof window === "undefined") return false;
  const r = el.getBoundingClientRect();
  if (r.width < 2 || r.height < 2) return false;
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const margin = 320;
  return r.bottom > -margin && r.top < vh + margin && r.right > -margin && r.left < vw + margin;
}

function useVideoInView(lazyVideo) {
  const ref = useRef(null);
  const [active, setActive] = useState(!lazyVideo);

  useLayoutEffect(() => {
    if (!lazyVideo) return;
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    const activate = () => {
      if (!cancelled) setActive(true);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          activate();
          io.disconnect();
        }
      },
      { root: null, rootMargin: "320px 0px 480px 0px", threshold: [0, 0.01] }
    );

    const flush = () => {
      if (cancelled) return;
      for (const entry of io.takeRecords()) {
        if (entry.isIntersecting) {
          activate();
          io.disconnect();
          return;
        }
      }
      if (isLikelyVisible(el)) {
        activate();
        io.disconnect();
      }
    };

    io.observe(el);
    flush();
    queueMicrotask(flush);
    let rafNested = 0;
    const raf1 = requestAnimationFrame(() => {
      flush();
      rafNested = requestAnimationFrame(flush);
    });
    const t0 = window.setTimeout(flush, 0);
    const t1 = window.setTimeout(flush, 150);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(rafNested);
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      io.disconnect();
    };
  }, [lazyVideo]);

  return { ref, active };
}

/** Muted loop clips: Safari/WebKit often needs explicit muted + play(). */
function tryPlayVideo(el) {
  if (!el) return;
  el.muted = true;
  void el.play().catch(() => {});
}

/** Warm, restrained media frame — add your MP4/JPEG under `/public/about/`. Original site copy only (no scraped assets). */
export function StoryVideoSlot({
  src,
  label,
  aspectClass = "aspect-video",
  intrinsic = false,
  capIntrinsicHeight = true,
  /** Defer loading until near viewport to avoid empty tiles and bandwidth on scroll. */
  /** Default off: IntersectionObserver + React Strict Mode made clips stay blank; set true to defer off-screen mounts. */
  lazyVideo = false,
}) {
  const [fallback, setFallback] = useState(false);
  const onErr = useCallback(() => setFallback(true), []);
  const { ref, active } = useVideoInView(lazyVideo);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    if (!active) return;
    tryPlayVideo(videoRef.current);
  }, [active, src]);

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
      <figure ref={ref} className={`relative ${frameBorder} bg-neutral-900/10 dark:bg-white/[0.04] w-full`}>
        {!active ? (
          <div className="min-h-[200px] w-full rounded-2xl bg-neutral-900/25 animate-pulse dark:bg-neutral-800/40" aria-hidden />
        ) : null}
        {active ? (
          <video
            ref={videoRef}
            src={src}
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            preload="metadata"
            className={`block h-auto w-full rounded-2xl object-contain contrast-[0.95] saturate-[0.92] ${cap}`}
            onError={onErr}
            onLoadedData={(e) => tryPlayVideo(e.currentTarget)}
            onCanPlay={(e) => tryPlayVideo(e.currentTarget)}
            onLoadedMetadata={(e) => tryPlayVideo(e.currentTarget)}
            aria-label={label}
          />
        ) : null}
      </figure>
    );
  }

  return (
    <figure ref={ref} className={`relative ${frameBorder} bg-neutral-900/20 dark:border-white/10 ${aspectClass}`}>
      {!active ? <div className={videoSkeleton} aria-hidden /> : null}
      {active ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full rounded-2xl object-cover contrast-[0.95] saturate-[0.92]"
          onError={onErr}
          onLoadedData={(e) => tryPlayVideo(e.currentTarget)}
          onCanPlay={(e) => tryPlayVideo(e.currentTarget)}
          onLoadedMetadata={(e) => tryPlayVideo(e.currentTarget)}
          aria-label={label}
        />
      ) : null}
    </figure>
  );
}

export function StoryImageSlot({ src, alt, caption, aspectClass = "aspect-[4/3]", priority = false }) {
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
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding="async"
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
          loading="lazy"
          decoding="async"
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
        loading="lazy"
        decoding="async"
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
  /** Set true only for above-the-fold LCP tiles; default defers with lazy loading. */
  priority = false,
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
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding="async"
        className={`object-cover contrast-[0.97] saturate-[0.93] ${objectPosition}`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={() => setFallback(true)}
      />
    </figure>
  );
}

function BentoVideoInner({ src, label, onErr, className }) {
  const vRef = useRef(null);
  useLayoutEffect(() => {
    tryPlayVideo(vRef.current);
  }, [src]);
  return (
    <video
      ref={vRef}
      src={src}
      autoPlay
      muted
      defaultMuted
      loop
      playsInline
      preload="metadata"
      className={className}
      onError={onErr}
      onLoadedData={(e) => tryPlayVideo(e.currentTarget)}
      onCanPlay={(e) => tryPlayVideo(e.currentTarget)}
      onLoadedMetadata={(e) => tryPlayVideo(e.currentTarget)}
      aria-label={label}
    />
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
  lazyVideo = false,
}) {
  const [fallback, setFallback] = useState(false);
  const onErr = useCallback(() => setFallback(true), []);
  const shell = plain ? plainTileFrame : bentoFrame;
  const extra = className ? ` ${className}` : "";
  const { ref, active } = useVideoInView(lazyVideo);

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
      /* `h-full` + only absolutely positioned video collapses to 0px on auto-height grid rows — min height keeps a real box. */
      return (
        <figure
          ref={ref}
          className={`relative ${shell} h-full min-h-[min(55vw,300px)] w-full min-w-0 overflow-hidden bg-neutral-950 dark:bg-black sm:min-h-[320px]${extra}`}
        >
          {!active ? <div className={videoSkeleton} aria-hidden /> : null}
          {active ? (
            <BentoVideoInner
              src={src}
              label={label}
              onErr={onErr}
              className="absolute inset-0 h-full w-full object-cover contrast-[0.95] saturate-[0.92]"
            />
          ) : null}
        </figure>
      );
    }
    return (
      <figure ref={ref} className={`relative ${shell} aspect-[478/850] w-full overflow-hidden bg-neutral-950 dark:bg-black${extra}`}>
        {!active ? <div className={videoSkeleton} aria-hidden /> : null}
        {active ? (
          <BentoVideoInner
            src={src}
            label={label}
            onErr={onErr}
            className="absolute inset-0 h-full w-full object-cover contrast-[0.95] saturate-[0.92]"
          />
        ) : null}
      </figure>
    );
  }

  return (
    <figure ref={ref} className={`relative ${shell} ${aspectClass} w-full${extra}`}>
      {!active ? <div className={videoSkeleton} aria-hidden /> : null}
      {active ? (
        <BentoVideoInner
          src={src}
          label={label}
          onErr={onErr}
          className="absolute inset-0 h-full w-full object-cover contrast-[0.95] saturate-[0.92]"
        />
      ) : null}
    </figure>
  );
}

/**
 * Portrait tile: full column width, 9×16, max-height clamp (no narrow “pillars” + empty center gap).
 */
export function StoryBentoPortraitTile({ src, alt, objectPosition = "object-top", priority = false }) {
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
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding="async"
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
export function StoryBentoPortraitCenter({ src, alt, width = 899, height = 1599, priority = false }) {
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
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding="async"
        sizes="(max-width: 640px) 92vw, 45vw"
        className="block h-auto w-auto max-w-full object-contain object-center contrast-[0.97] saturate-[0.93] max-h-[min(42vh,360px)] sm:max-h-[min(46vh,420px)] md:max-h-[min(50vh,480px)]"
        style={{ width: "auto", height: "auto" }}
        onError={() => setFallback(true)}
      />
    </figure>
  );
}
