"use client";

import { Children, isValidElement, useEffect, useRef, useState } from "react";

const BREAKPOINT = {
  sm: {
    scroller: "sm:mx-0 sm:snap-none sm:overflow-visible sm:px-0 sm:pb-0",
    item: "sm:w-auto sm:shrink sm:max-w-none",
    controls: "sm:hidden",
  },
  md: {
    scroller: "md:mx-0 md:snap-none md:overflow-visible md:px-0 md:pb-0",
    item: "md:w-auto md:shrink md:max-w-none",
    controls: "md:hidden",
  },
};

/** Grid/flex placement on children must live on the snap wrapper (the real grid item). */
function layoutClassesFromChild(child) {
  if (!isValidElement(child) || typeof child.props.className !== "string") return "";
  return child.props.className
    .split(/\s+/)
    .filter(Boolean)
    .filter((token) =>
      /(^|:)(col|row)-(span|start|end)-/.test(token) ||
      /(^|:)(justify-self-|self-|max-w-|min-h-|h-full|min-w-0|justify-center)/.test(token) ||
      /(^|:)flex$/.test(token)
    )
    .join(" ");
}

/**
 * Horizontal snap row on small screens, with equal-height cards and
 * previous / next controls. From `from` up it follows the layout in className.
 */
export default function MobileSnapCarousel({
  label,
  className = "",
  itemClassName = "",
  children,
  from = "md",
  align = "stretch",
}) {
  const scrollerRef = useRef(null);
  const items = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const count = items.length;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const slides = [...el.children];
      const left = el.scrollLeft;
      let nearest = 0;
      let best = Infinity;
      slides.forEach((slide, i) => {
        const distance = Math.abs(slide.offsetLeft - left);
        if (distance < best) {
          best = distance;
          nearest = i;
        }
      });
      setIndex(nearest);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [count]);

  const go = (next) => {
    const el = scrollerRef.current;
    const slide = el?.children[next];
    if (!el || !slide) return;
    const left = slide.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft;
    el.scrollTo({ left, behavior: "smooth" });
  };

  const bp = BREAKPOINT[from] ?? BREAKPOINT.md;
  const alignClass = align === "start" ? "items-start" : "items-stretch";

  return (
    <div>
      <div
        ref={scrollerRef}
        className={`-mx-1 flex ${alignClass} snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-px-1 px-1 pb-1 no-scrollbar ${bp.scroller} ${className}`}
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        {items.map((child, i) => {
          const lifted = layoutClassesFromChild(child);
          return (
            <div
              key={child.key ?? i}
              className={`flex w-[86%] shrink-0 snap-start ${bp.item} ${itemClassName} ${lifted}`}
            >
              <div className="h-full w-full min-w-0">{child}</div>
            </div>
          );
        })}
      </div>

      {count > 1 ? (
        <div className={`mt-3 flex items-center justify-center gap-2 ${bp.controls}`}>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-lg text-neutral-900 disabled:opacity-30 dark:border-white/20 dark:bg-white/[0.06] dark:text-ink"
            aria-label={`Previous ${label}`}
            disabled={index === 0}
            onClick={() => go(index - 1)}
          >
            <span aria-hidden="true">‹</span>
          </button>

          {count <= 8 ? (
            <div className="flex items-center gap-1" role="tablist" aria-label={`${label} position`}>
              {items.map((child, i) => (
                <button
                  key={child.key ?? i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${label} ${i + 1} of ${count}`}
                  className="inline-flex h-11 w-6 items-center justify-center"
                  onClick={() => go(i)}
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all ${
                      i === index ? "w-4 bg-neutral-900 dark:bg-ink" : "w-1.5 bg-neutral-400 dark:bg-white/30"
                    }`}
                  />
                </button>
              ))}
            </div>
          ) : (
            <p className="min-w-[4.5rem] text-center text-xs font-medium text-neutral-600 dark:text-ink/70" aria-live="polite">
              {index + 1} / {count}
            </p>
          )}

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-lg text-neutral-900 disabled:opacity-30 dark:border-white/20 dark:bg-white/[0.06] dark:text-ink"
            aria-label={`Next ${label}`}
            disabled={index === count - 1}
            onClick={() => go(index + 1)}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
