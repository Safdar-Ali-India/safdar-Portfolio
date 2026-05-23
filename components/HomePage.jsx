"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PiEnvelopeSimpleThin, PiPersonSimpleWalkThin } from "react-icons/pi";
import logo from "../assets/logo.jpeg";
import Image from "next/image";
import Contact from "./Contact";
import DeferredSparkles from "./ui/DeferredSparkles";
import { blogPosts } from "../data/blog-posts";
import { featuredProjects } from "../data/featured-projects";

/** Matches floating dock: pill, border, blur — readable on night canvas */
const dockPill =
  "inline-flex items-center justify-center rounded-2xl border border-slate-400/60 bg-white/90 text-slate-900 backdrop-blur-md px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors hover:bg-neutral-50 dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-ink dark:hover:bg-white/[0.1] dark:hover:border-white/20";

const linkInline =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";

function SectionDivider() {
  return (
    <div className="my-10 md:my-14 max-w-6xl mx-auto px-1" aria-hidden="true">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-400/45 dark:via-white/20 to-transparent" />
    </div>
  );
}

const GithubLink = "https://github.com/Safdar-Ali-India";
const LinkedInLink = "https://www.linkedin.com/in/safdarali25/";
const InstagramLink = "https://www.instagram.com/codewithsafdar";
const DevLink = "https://dev.to/safdarali25";
const YoutubeLink = "https://www.youtube.com/@safdarali_";
const TwitterLink = "https://twitter.com/safdarali___";
const LinkTree = "https://linktr.ee/safdaralii";

/** Fisher–Yates shuffle, then take n (used client-only after mount). */
function pickRandomPosts(posts, n) {
  const copy = [...posts];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

export default function HomePage() {
  /** Same first three on server + first client paint; then replace with random three in the browser. */
  const [spotlightPosts, setSpotlightPosts] = useState(() => blogPosts.slice(0, 3));

  useEffect(() => {
    setSpotlightPosts(pickRandomPosts(blogPosts, 3));
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        media="print"
        onLoad={(e) => {
          e.currentTarget.media = "all";
        }}
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </noscript>

      <div className="max-w-5xl mx-auto px-5">
        <div className="w-full absolute inset-0 h-screen -z-10" aria-hidden="true">
          <DeferredSparkles
            id="tsparticles-home"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
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
                  across India.{" "}
                  <Link href="/projects" className={linkInline}>
                    Browse projects
                  </Link>{" "}
                  for case studies, or{" "}
                  <Link href="/about" className={linkInline}>
                    about
                  </Link>{" "}
                  for the full background.
                </p>

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

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className={`${dockPill} inline-flex h-11 w-11 shrink-0 items-center justify-center p-0`}
                    aria-label="Contact — hire or collaborate"
                    title="Contact"
                  >
                    <PiEnvelopeSimpleThin className="h-[1.65rem] w-[1.65rem] shrink-0" aria-hidden />
                  </Link>
                  <Link
                    href="/about"
                    className={`${dockPill} inline-flex h-11 w-11 shrink-0 items-center justify-center p-0`}
                    aria-label="About — background and story"
                    title="About"
                  >
                    <PiPersonSimpleWalkThin className="h-[1.65rem] w-[1.65rem] shrink-0" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden w-1/12 my-10 ml-auto lg:flex justify-center">
              <ul
                className="social-rail text-lg wrapper list-none p-0 m-0 text-neutral-800 dark:text-ink"
                aria-label="Social and profile links"
              >
                <li className="icon link mt-10 list-none">
                  <Link href={LinkTree} target="_blank" rel="noopener noreferrer" aria-label="All links (Linktree)">
                    <span aria-hidden="true">
                      <i className="fas fa-link " />
                    </span>
                  </Link>
                </li>
                <li className="icon github my-10 list-none">
                  <Link href={GithubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                    <span aria-hidden="true">
                      <i className="fab fa-github " />
                    </span>
                  </Link>
                </li>
                <li className="icon linkedin my-10 list-none">
                  <Link href={LinkedInLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                    <span aria-hidden="true">
                      <i className="fab fa-linkedin-in " />
                    </span>
                  </Link>
                </li>
                <li className="icon dev list-none">
                  <Link href={YoutubeLink} target="_blank" rel="noopener noreferrer" aria-label="YouTube channel">
                    <span aria-hidden="true">
                      <i className="fab fa-youtube " />
                    </span>
                  </Link>
                </li>
                <li className="icon instagram my-10 list-none">
                  <Link href={InstagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
                    <span aria-hidden="true">
                      <i className="fab fa-instagram " />
                    </span>
                  </Link>
                </li>
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
                <li className="icon link list-none">
                  <Link href={LinkTree} target="_blank" rel="noopener noreferrer" aria-label="All links (Linktree)">
                    <span aria-hidden="true">
                      <i className="fas fa-link " />
                    </span>
                  </Link>
                </li>
                <li className="icon github list-none">
                  <Link href={GithubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                    <span aria-hidden="true">
                      <i className="fab fa-github " />
                    </span>
                  </Link>
                </li>
                <li className="icon linkedin list-none">
                  <Link href={LinkedInLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                    <span aria-hidden="true">
                      <i className="fab fa-linkedin-in " />
                    </span>
                  </Link>
                </li>
                <li className="icon twitter list-none">
                  <Link href={TwitterLink} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) profile">
                    <span aria-hidden="true">
                      <i className="fab fa-twitter " />
                    </span>
                  </Link>
                </li>
                <li className="icon instagram list-none">
                  <Link href={InstagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
                    <span aria-hidden="true">
                      <i className="fab fa-instagram " />
                    </span>
                  </Link>
                </li>
                <li className="icon dev list-none">
                  <Link href={YoutubeLink} target="_blank" rel="noopener noreferrer" aria-label="YouTube channel">
                    <span aria-hidden="true">
                      <i className="fab fa-youtube " />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <SectionDivider />

          <section className="mt-2 lg:mt-4" aria-labelledby="featured-heading">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <h2 id="featured-heading" className="text-xl font-bold text-neutral-950 dark:text-ink">
                Featured projects
              </h2>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                
                <Link href="/projects" className={`${dockPill} shrink-0 text-xs sm:text-sm`}>
                  All projects →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((proj) => (
                <article
                  key={proj.title}
                  className="flex flex-col rounded-2xl border border-slate-400/55 bg-white/90 backdrop-blur-md overflow-hidden shadow-sm dark:border-white/[0.1] dark:bg-white/[0.04]"
                >
                  <div className="relative h-44 w-full bg-neutral-200 dark:bg-neutral-800">
                    <Image
                      src={proj.imgLink}
                      alt={`${proj.title} — project screenshot`}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 33vw"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1 gap-3">
                    <h3 className="font-bold text-lg text-neutral-950 dark:text-ink leading-snug">{proj.title}</h3>
                    <p className="text-sm text-neutral-700 dark:text-ink/75 flex-1">{proj.subT}</p>
                    <div className="flex flex-col gap-2 mt-1">
                      <Link
                        href={proj.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${dockPill} w-full justify-center text-xs py-2`}
                      >
                        Live demo
                      </Link>
                      <Link
                        href={proj.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${dockPill} w-full justify-center text-xs py-2`}
                      >
                        Source code
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <SectionDivider />

          <section className="max-w-3xl mx-auto" aria-labelledby="articles-heading">
            <h2 id="articles-heading" className="text-center text-xl font-bold text-neutral-950 dark:text-ink mb-2">
              Articles &amp; tutorials
            </h2>
            <p className="text-center text-sm text-neutral-600 dark:text-ink/75 mb-8 max-w-xl mx-auto leading-relaxed">
              Deep dives on{" "}
              <Link href={DevLink} className={linkInline} target="_blank" rel="noopener noreferrer">
                DEV
              </Link>{" "}
              (Next.js, open source, AI tooling) and longer tutorials on{" "}
              <Link
                href="https://medium.com/@safdaralii"
                className={linkInline}
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </Link>
              . More writing on the{" "}
              <Link href="/blog" className={linkInline}>
                blog
              </Link>
              . Explore shipped work on the{" "}
              <Link href="/projects" className={linkInline}>
                projects page
              </Link>
              .
            </p>
            <div>
              {spotlightPosts.map((blog) => (
                <article
                  key={blog.title}
                  className="my-8 p-4 rounded-2xl border border-slate-300/80 bg-white/70 dark:border-white/[0.1] dark:bg-white/[0.04]"
                >
                  <div className="border border-neutral-400 dark:border-white/15 rounded-full w-fit px-2 py-1 flex items-center">
                    <span className="text-xs text-neutral-700 dark:text-ink/80">{blog.date}</span>
                  </div>

                  <div className="flex gap-x-4 my-4">
                    <div>
                      <Link href={blog.href} className="hover:underline dark:decoration-white/35" target="_blank" rel="noopener noreferrer">
                        <h3 className="font-InterBold font-extrabold lg:text-xl text-lg mb-2 text-neutral-950 dark:text-ink">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-neutral-600 dark:text-ink/65">{blog.reactions}</p>
                    </div>
                  </div>

                  <p className="text-neutral-700 dark:text-ink/80 text-sm max-w-3xl">{blog.subTitle}</p>

                  <Link href={blog.href} target="_blank" rel="noopener noreferrer" className={`${dockPill} mt-5 w-fit text-xs`}>
                    Read article →
                  </Link>
                </article>
              ))}
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
