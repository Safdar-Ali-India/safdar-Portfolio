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
import { usePathname } from "next/navigation";

import {
  PiHouseThin,
  PiCloudSunLight,
  PiMoonLight,
  PiBrainThin,
  PiPersonSimpleWalkThin,
  PiCodeThin,
  PiEnvelopeSimpleThin,
} from "react-icons/pi";

import { MAILTO_HREF } from "../lib/site";

/** Blog stays at /blog for SEO; dock stays minimal (no duplicate “writing” entry). */
export const generalLinks = [
  { href: "/", label: "Home", Icon: PiHouseThin },
  { href: "/about", label: "About", Icon: PiPersonSimpleWalkThin },
  { href: "/skills", label: "Skills", Icon: PiBrainThin },
  { href: "/projects", label: "Projects", Icon: PiCodeThin },
  {
    href: MAILTO_HREF,
    label: "Email Safdar Ali",
    Icon: PiEnvelopeSimpleThin,
    hideOnMobile: true,
    isMailto: true,
  },
];

function Navbar() {
  let mouseX = useMotionValue(Infinity);
  const pathname = usePathname();
  const navLinks =
    pathname === "/projects"
      ? generalLinks.filter((link) => !link.isMailto)
      : generalLinks;

  return (
    <nav aria-label="Main navigation" className="fixed z-50 bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 px-2 w-full max-w-[100vw] flex justify-center pointer-events-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex pointer-events-auto"
      >
        <div className="flex items-end h-[3.75rem] gap-1.5 sm:gap-2 px-3 sm:px-4 pb-1.5 mx-auto outline-0 rounded-2xl border border-neutral-200/90 bg-white/90 backdrop-blur-xl shadow-lg shadow-neutral-900/5 dark:border-white/[0.1] dark:bg-night/75 dark:shadow-black/50 dark:backdrop-blur-xl light:bg-slate-100/90">
          {navLinks.map((link) => {
            const wrapClass = link.hideOnMobile ? "hidden md:contents" : "";
            return (
              <div key={link.href} className={wrapClass}>
                <AppIcon
                  href={link.href}
                  isMailto={link.isMailto}
                  ariaLabel={link.label}
                  mouseX={mouseX}
                  Icon={link.Icon}
                />
              </div>
            );
          })}

          <hr className="h-10 w-px bg-neutral-200/90 dark:bg-white/15 mb-1 border-none shrink-0 self-end" aria-hidden="true" />

          <ThemeToggleNav mouseX={mouseX} />
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;

function AppIcon({ mouseX, Icon, href, isMailto, ariaLabel }) {
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
      style={{ width }}
      className="z-30 flex items-center justify-center rounded-full border border-neutral-300/80 bg-neutral-100/90 text-neutral-900 cursor-pointer aspect-square dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-ink dark:hover:bg-white/[0.1] transition-colors"
      aria-hidden="true"
    >
      <span className="text-[1.65rem] leading-none flex items-center justify-center">
        <Icon aria-hidden />
      </span>
    </motion.div>
  );

  const focusRing =
    "rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:focus-visible:outline-ink/70";

  if (isMailto) {
    return (
      <a href={href} aria-label={ariaLabel} className={focusRing}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={focusRing}>
      {inner}
    </Link>
  );
}

export function ThemeToggleNav({ mouseX }) {
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
      style={{ width }}
      className="z-30 flex items-center justify-center w-10 rounded-full cursor-pointer border border-neutral-300/80 bg-neutral-100/90 text-neutral-900 aspect-square py-3 mb-1 dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-ink dark:hover:bg-white/[0.1] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:focus-visible:outline-ink/70"
      aria-label={mounted ? `Switch to ${otherTheme} mode` : "Toggle color theme"}
      aria-pressed={mounted ? resolvedTheme === "dark" : undefined}
      onClick={() => setTheme(otherTheme)}
    >
      {resolvedTheme === "dark" ? (
        <PiMoonLight className="w-[50%] h-auto transition text-current" aria-hidden />
      ) : (
        <PiCloudSunLight className="w-[50%] h-auto transition text-current" aria-hidden />
      )}
    </motion.button>
  );
}
