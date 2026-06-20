"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import logo from "../assets/logo.jpeg";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLink, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import DeferredSparkles from "./ui/DeferredSparkles";
import { getSpotlightPosts } from "../data/blog-posts";
import { featuredProjects } from "../data/featured-projects";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { dockPill, linkInline } from "../lib/ui-classes";
import { socialLinks } from "../lib/social-links";

const Contact = dynamic(() => import("./Contact"), { loading: () => null });

const DevLink = socialLinks.devto;

const DESKTOP_SOCIAL = [
  { href: socialLinks.linktree, label: "All links (Linktree)", Icon: FaLink, liClass: "icon link mt-10" },
  { href: socialLinks.github, label: "GitHub profile", Icon: FaGithub, liClass: "icon github my-10" },
  { href: socialLinks.linkedin, label: "LinkedIn profile", Icon: FaLinkedinIn, liClass: "icon linkedin my-10" },
  { href: socialLinks.youtube, label: "YouTube channel", Icon: FaYoutube, liClass: "icon dev" },
  { href: socialLinks.instagram, label: "Instagram profile", Icon: FaInstagram, liClass: "icon instagram my-10" },
];

const MOBILE_SOCIAL = [
  { href: socialLinks.linktree, label: "All links (Linktree)", Icon: FaLink, liClass: "icon link" },
  { href: socialLinks.github, label: "GitHub profile", Icon: FaGithub, liClass: "icon github" },
  { href: socialLinks.linkedin, label: "LinkedIn profile", Icon: FaLinkedinIn, liClass: "icon linkedin" },
  { href: socialLinks.twitter, label: "X (Twitter) profile", Icon: FaTwitter, liClass: "icon twitter" },
  { href: socialLinks.instagram, label: "Instagram profile", Icon: FaInstagram, liClass: "icon instagram" },
  { href: socialLinks.youtube, label: "YouTube channel", Icon: FaYoutube, liClass: "icon dev" },
];

function SocialIconLink({ href, label, Icon, liClass }) {
  return (
    <li className={`${liClass} list-none`}>
      <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <Icon aria-hidden="true" />
      </Link>
    </li>
  );
}

function SectionDivider() {
  return (
    <div className="my-10 md:my-14 max-w-6xl mx-auto px-1" aria-hidden="true">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-400/45 dark:via-white/20 to-transparent" />
    </div>
  );
}

function isExternalHref(href) {
  return href.startsWith("http");
}

export default function HomePage({ spotlightPosts: spotlightPostsProp }) {
  const spotlightPosts = spotlightPostsProp ?? getSpotlightPosts();
  return (
    <>
      <div className="max-w-5xl mx-auto px-5">
        <div className="w-full absolute inset-0 h-screen -z-10" aria-hidden="true">
          <DeferredSparkles
            id="tsparticles-home"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={80}
            className="w-full h-full"
            particleColor="#777"
          />
        </div>

        <div className="mt-20 lg:mt-28">
          <section className="lg:flex lg:flex-row" aria-label="Introduction">
            <div className="lg:w-11/12">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-x-4">
                <Image
                  width={300}
                  height={300}
                  priority
                  className="w-16 h-16 rounded-full object-cover shrink-0 ring-1 ring-neutral-200 dark:ring-white/15"
                  src={logo}
                  alt="Safdar Ali — Next.js and React developer, Bengaluru, India"
                />
                <div className="min-w-0">
                  <h1 className="font-extrabold font-InterBlack text-neutral-950 dark:text-ink text-3xl leading-tight">
                    Hi, I&apos;m Safdar Ali
                  </h1>
                  <p className="text-neutral-600 dark:text-ink/85 text-sm mt-2">
                    <span aria-label="Social handle">@safdarali</span>
                    <span className="text-neutral-400 dark:text-ink/45"> · </span>
                    Bengaluru, India
                  </p>
                </div>
              </div>

              <div className="mt-8 max-w-3xl space-y-5">
                <p className="text-neutral-800 dark:text-ink font-InterMedium text-sm lg:text-lg leading-relaxed">
                  I ship fast, accessible product UI with Next.js and React—for product teams that care about performance,
                  scale, and experience. Today: Frontend UI at Cube (Sequoia-backed); earlier Adsclique Media, Sujanix, and
                  Tech Mahindra. I document what I build — 70+ tutorials on React, Next.js, and TypeScript, watched by developers
                  across India.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href="/projects" className={dockPill}>
                    View projects
                  </Link>
                  <Link href="/contact" className={dockPill}>
                    Get in touch
                  </Link>
                </div>

                <div>
                  <h2 className="text-neutral-600 dark:text-ink/80 text-xs font-InterBold uppercase font-bold tracking-wide mb-3">
                    BY THE NUMBERS
                  </h2>
                  <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-neutral-200/80 bg-white/60 p-4 text-center dark:border-white/10 dark:bg-white/[0.04]">
                      <p className="font-InterBlack text-2xl font-extrabold text-neutral-950 dark:text-ink">70+</p>
                      <p className="mt-1 text-xs text-neutral-500 dark:text-ink/60">YouTube Tutorials</p>
                    </div>
                    <div className="rounded-2xl border border-neutral-200/80 bg-white/60 p-4 text-center dark:border-white/10 dark:bg-white/[0.04]">
                      <p className="font-InterBlack text-2xl font-extrabold text-neutral-950 dark:text-ink">30+</p>
                      <p className="mt-1 text-xs text-neutral-500 dark:text-ink/60">Projects Shipped</p>
                    </div>
                    <div className="rounded-2xl border border-neutral-200/80 bg-white/60 p-4 text-center dark:border-white/10 dark:bg-white/[0.04]">
                      <p className="font-InterBlack text-2xl font-extrabold text-neutral-950 dark:text-ink">4 Yrs</p>
                      <p className="mt-1 text-xs text-neutral-500 dark:text-ink/60">Experience</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-neutral-200/80 px-3 py-1 text-xs text-neutral-600 dark:border-white/15 dark:text-ink/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden w-1/12 my-10 ml-auto lg:flex justify-center">
              <ul
                className="social-rail text-lg wrapper list-none p-0 m-0 text-neutral-800 dark:text-ink"
                aria-label="Social and profile links"
              >
                {DESKTOP_SOCIAL.map((item) => (
                  <SocialIconLink key={item.label} {...item} />
                ))}
              </ul>
            </div>

            <div className="">
              <h2 className="lg:hidden inline-block text-neutral-600 dark:text-ink/80 text-xs font-InterBold uppercase font-bold my-10 tracking-wide">
                Socials
              </h2>
              <ul
                className="social-rail text-lg wrapper lg:hidden flex flex-row gap-x-10 justify-center list-none p-0 m-0 text-neutral-800 dark:text-ink"
                aria-label="Social and profile links"
              >
                {MOBILE_SOCIAL.map((item) => (
                  <SocialIconLink key={item.label} {...item} />
                ))}
              </ul>
            </div>
          </section>

          <SectionDivider />

          <section className="mt-2 lg:mt-4" aria-labelledby="featured-heading">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <h2 id="featured-heading" className="text-xl font-bold text-neutral-950 dark:text-ink">
                Featured projects
              </h2>
              <Link href="/projects" className={`${dockPill} shrink-0 text-xs sm:text-sm`}>
                All projects →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((proj) => (
                <FeaturedProjectCard key={proj.title} {...proj} />
              ))}
            </div>
          </section>

          <SectionDivider />

          <section className="max-w-3xl mx-auto" aria-labelledby="articles-heading">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <h2 id="articles-heading" className="text-xl font-bold text-neutral-950 dark:text-ink">
                Articles &amp; tutorials
              </h2>
              <Link href="/blog" className={`${dockPill} shrink-0 text-xs sm:text-sm`}>
                All articles →
              </Link>
            </div>
            <p className="text-sm text-neutral-600 dark:text-ink/75 mb-8 max-w-xl leading-relaxed">
              Case studies and guides on{" "}
              <Link href="/blog" className={linkInline}>
                safdarali.in
              </Link>
              ; more on{" "}
              <Link href={DevLink} className={linkInline} target="_blank" rel="noopener noreferrer">
                DEV
              </Link>{" "}
              and{" "}
              <Link
                href="https://medium.com/@safdaralii"
                className={linkInline}
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </Link>
              .
            </p>
            <div>
              {spotlightPosts.map((blog) => {
                const external = isExternalHref(blog.href);
                const linkProps = external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <article
                    key={blog.href}
                    className="my-8 p-4 rounded-2xl border border-slate-300/80 bg-white/70 dark:border-white/[0.1] dark:bg-white/[0.04]"
                  >
                    <div className="border border-neutral-400 dark:border-white/15 rounded-full w-fit px-2 py-1 flex items-center">
                      <span className="text-xs text-neutral-700 dark:text-ink/80">{blog.date}</span>
                    </div>

                    <div className="flex gap-x-4 my-4">
                      <div>
                        <Link
                          href={blog.href}
                          className="hover:underline dark:decoration-white/35"
                          {...linkProps}
                        >
                          <h3 className="font-InterBold font-extrabold lg:text-xl text-lg mb-2 text-neutral-950 dark:text-ink">
                            {blog.title}
                          </h3>
                        </Link>
                        <p className="text-xs text-neutral-600 dark:text-ink/65">{blog.reactions}</p>
                      </div>
                    </div>

                    <p className="text-neutral-700 dark:text-ink/80 text-sm max-w-3xl">{blog.subTitle}</p>

                    <Link
                      href={blog.href}
                      className={`${dockPill} mt-5 w-fit text-xs`}
                      {...linkProps}
                    >
                      Read article →
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          <SectionDivider />

          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
