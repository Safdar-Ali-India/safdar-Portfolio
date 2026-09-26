'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  PiHouseThin,
  PiCloudSunLight,
  PiMoonLight,
  PiBrainThin,
  PiPersonSimpleWalkThin,
  PiCodeThin,
} from "react-icons/pi";

export const generalLinks = [
  { href: "/", label: "Home", Icon: PiHouseThin },
  { href: "/about", label: "About", Icon: PiPersonSimpleWalkThin },
  { href: "/skills", label: "Skills", Icon: PiBrainThin },
  { href: "/projects", label: "Projects", Icon: PiCodeThin },
];

function Navbar() {
  const mouseX = useMotionValue(Infinity);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const sync = () => setCompact(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed z-[60] bottom-[max(0.75rem,env(safe-area-inset-bottom))] md:bottom-8 left-1/2 -translate-x-1/2 px-3 w-full max-w-[100vw] flex justify-center pointer-events-none"
    >
      <motion.div
        onMouseMove={(e) => {
          if (!compact) mouseX.set(e.pageX);
        }}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex pointer-events-auto max-w-full"
      >
        <div className="flex items-center h-14 gap-1.5 px-2 mx-auto rounded-2xl border border-neutral-200/90 bg-white/95 backdrop-blur-xl shadow-lg shadow-neutral-900/10 dark:border-white/[0.14] dark:bg-night/95 dark:shadow-black/40 sm:h-[3.75rem] sm:items-end sm:gap-2 sm:px-4 sm:pb-1.5">
          {generalLinks.map((link) => (
            <AppIcon key={link.href} href={link.href} ariaLabel={link.label} mouseX={mouseX} Icon={link.Icon} compact={compact} />
          ))}

          <hr className="h-8 sm:h-10 w-px bg-neutral-200/90 dark:bg-white/15 sm:mb-1 border-none shrink-0" aria-hidden="true" />

          <ThemeToggleNav mouseX={mouseX} compact={compact} />
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;

function AppIcon({ mouseX, Icon, href, ariaLabel, compact }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [50, 140, 50]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const inner = (
    <motion.div
      ref={ref}
      style={compact ? undefined : { width }}
      className={`z-30 flex items-center justify-center rounded-full border border-neutral-300/80 bg-neutral-100/90 text-neutral-900 cursor-pointer dark:border-white/[0.12] dark:bg-white/[0.08] dark:text-ink dark:hover:bg-white/[0.1] transition-colors ${compact ? "h-11 w-11" : "aspect-square"}`}
      aria-hidden="true"
    >
      <span className="text-[1.65rem] leading-none flex items-center justify-center">
        <Icon aria-hidden />
      </span>
    </motion.div>
  );

  const focusRing =
    "rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:focus-visible:outline-ink/70";

  return (
    <Link href={href} aria-label={ariaLabel} className={focusRing}>
      {inner}
    </Link>
  );
}

export function ThemeToggleNav({ mouseX, compact }) {
  const { resolvedTheme, setTheme } = useTheme();
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.button
      type="button"
      ref={ref}
      style={compact ? undefined : { width }}
      className={`z-30 flex items-center justify-center rounded-full cursor-pointer border border-neutral-300/80 bg-neutral-100/90 text-neutral-900 dark:border-white/[0.12] dark:bg-white/[0.08] dark:text-ink dark:hover:bg-white/[0.1] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:focus-visible:outline-ink/70 ${compact ? "h-11 w-11" : "mb-1 aspect-square w-10 py-3"}`}
      aria-label={mounted ? `Switch to ${otherTheme} mode` : "Toggle color theme"}
      aria-pressed={mounted ? resolvedTheme === "dark" : undefined}
      onClick={() => setTheme(otherTheme)}
    >
      {mounted ? (
        resolvedTheme === "dark" ? (
          <PiMoonLight className="w-[50%] h-auto transition text-current" aria-hidden />
        ) : (
          <PiCloudSunLight className="w-[50%] h-auto transition text-current" aria-hidden />
        )
      ) : (
        <span className="w-[50%] aspect-square" aria-hidden />
      )}
    </motion.button>
  );
}
