import Link from "next/link";
import {
  PiLinkSimpleThin,
  PiGithubLogoThin,
  PiLinkedinLogoThin,
  PiYoutubeLogoThin,
  PiInstagramLogoThin,
  PiTwitterLogoThin,
} from "react-icons/pi";
import { socialLinks } from "../lib/social-links";

const iconClass = "h-[1.35rem] w-[1.35rem] shrink-0";

const desktopLinks = [
  { href: socialLinks.linktree, label: "All links (Linktree)", Icon: PiLinkSimpleThin },
  { href: socialLinks.github, label: "GitHub profile", Icon: PiGithubLogoThin },
  { href: socialLinks.linkedin, label: "LinkedIn profile", Icon: PiLinkedinLogoThin },
  { href: socialLinks.youtube, label: "YouTube channel", Icon: PiYoutubeLogoThin },
  { href: socialLinks.instagram, label: "Instagram profile", Icon: PiInstagramLogoThin },
];

const mobileLinks = [
  { href: socialLinks.linktree, label: "All links (Linktree)", Icon: PiLinkSimpleThin },
  { href: socialLinks.github, label: "GitHub profile", Icon: PiGithubLogoThin },
  { href: socialLinks.linkedin, label: "LinkedIn profile", Icon: PiLinkedinLogoThin },
  { href: socialLinks.twitter, label: "X (Twitter) profile", Icon: PiTwitterLogoThin },
  { href: socialLinks.instagram, label: "Instagram profile", Icon: PiInstagramLogoThin },
  { href: socialLinks.youtube, label: "YouTube channel", Icon: PiYoutubeLogoThin },
];

function SocialIconLink({ href, label, Icon }) {
  return (
    <li className="list-none">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="inline-flex text-neutral-800 transition-opacity hover:opacity-80 dark:text-ink"
      >
        <Icon className={iconClass} aria-hidden />
      </Link>
    </li>
  );
}

export function SocialRailDesktop() {
  return (
    <ul
      className="social-rail flex flex-col items-center gap-10 list-none p-0 m-0"
      aria-label="Social and profile links"
    >
      {desktopLinks.map((item) => (
        <SocialIconLink key={item.label} {...item} />
      ))}
    </ul>
  );
}

export function SocialRailMobile() {
  return (
    <>
      <h2 className="lg:hidden inline-block text-neutral-600 dark:text-ink/80 text-xs font-InterBold uppercase font-bold my-10 tracking-wide">
        Socials
      </h2>
      <ul
        className="social-rail lg:hidden flex flex-row gap-x-10 justify-center list-none p-0 m-0"
        aria-label="Social and profile links"
      >
        {mobileLinks.map((item) => (
          <SocialIconLink key={item.label} {...item} />
        ))}
      </ul>
    </>
  );
}
