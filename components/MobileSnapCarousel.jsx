"use client";

import { Children, useEffect, useRef, useState } from "react";

/**
 * Horizontal snap row on small screens, with equal-height cards and
 * previous / next controls. From md up it follows the layout in className.
 */
export default function MobileSnapCarousel({ label, className = "", itemClassName = "", children }) {
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

  return (
    <div>
      <div
        ref={scrollerRef}
        className={`-mx-1 flex items-stretch snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-px-1 px-1 pb-1 no-scrollbar md:mx-0 md:snap-none md:overflow-visible md:px-0 md:pb-0 ${className}`}
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        {items.map((child, i) => (
          <div key={child.key ?? i} className={`flex w-[86%] shrink-0 snap-start md:w-auto md:shrink ${itemClassName}`}>
            <div className="h-full w-full">{child}</div>
          </div>
        ))}
      </div>

      {count > 1 ? (
        <div className="mt-3 flex items-center justify-center gap-2 md:hidden">
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
