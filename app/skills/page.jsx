import Link from "next/link";
import React from "react";
import Image from "next/image";
import BackToHomeLink from "../../components/BackToHomeLink";
import DeferredSparkles from "../../components/ui/DeferredSparkles";

import * as assets from "../../assets";

const SITE = "https://safdarali.in";

export const metadata = {
  title: "Skills",
  description:
    "Tech stack and tools Safdar Ali uses: Next.js, React, TypeScript, Tailwind CSS, WordPress, Git, Figma, and more. Frontend developer Bengaluru.",
  alternates: {
    canonical: `${SITE}/skills`,
  },
  openGraph: {
    title: "Skills | Safdar Ali",
    url: `${SITE}/skills`,
    description: "Skills and tools for modern frontend and web development.",
  },
};

const skills = [
  {
    imageUrl: assets.html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: assets.css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: assets.javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: assets.typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: assets.react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: assets.nextjs,
    name: "Next.js",
    type: "Frontend",
  },
   { imageUrl: assets.wordpres,
    name: "Wordpres",
    type: "Frontend",
  },
  {
    imageUrl: assets.tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: assets.bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  // {
  //   imageUrl: assets.nodejs,
  //   name: "Node.js",
  //   type: "Backend",
  // },
  {
    imageUrl: assets.redux,
    name: "Redux",
    type: "Frontend",
  },
  {
    imageUrl: assets.materialui,
    name: "Material ui",
    type: "Frontend",
  },
  {
    imageUrl: assets.git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: assets.github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: assets.firebase,
    name: "Firebase",
    type: "Database",
  },
  {
    imageUrl: assets.webpack,
    name: "Webpack",
    type: "Module Bundler",
  },
  {
    imageUrl: assets.figma,
    name: "Figma",
    type: "Design",
  },
  {
    imageUrl: assets.npm,
    name: "NPM",
    type: "Package Manager",
  },
  {
    imageUrl: assets.jira,
    name: "Jira",
    type: "Project Management Tool ",
  },
  {
    imageUrl: assets.vscode,
    name: "Visual Studio Code",
    type: "Code Editor",
  },
];

function page() {
  return (
    <div className="lg:h-screen">
      <div className="w-full absolute inset-0 h-screen -z-10" aria-hidden="true">
          <DeferredSparkles
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#777"
          />
        </div>
      <div className="relative max-w-5xl mx-auto px-4 pb-20">
        <div className="relative mt-14">
          <h1 className="text-center font-InterBold uppercase font-extrabold font-InterBlack dark:text-ink light:text-black text-3xl">
            Skills
          </h1>
          <BackToHomeLink />
        </div>

        <div className="lg:mt-48 md:mt-30">
          <ul className="mt-16 flex flex-wrap md:gap-x-16 gap-x-8 gap-y-8 justify-center items-center list-none p-0 m-0" aria-label="Technologies and tools">
            {skills &&
              skills.map((skill) => (
                <li className="block-container w-20 h-20 bg-white dark:bg-white rounded-xl list-none" key={skill.name}>
                  <div className="btn-back rounded-xl" aria-hidden="true" />
                  <div className="btn-front rounded-xl flex justify-center items-center border border-slate-800" title={`${skill.name} (${skill.type})`}>
                    <Image
                      src={skill.imageUrl}
                      alt={`${skill.name}, ${skill.type}`}
                      width={40}
                      height={40}
                      className="w-1/2 h-1/2 object-contain animate-fade-in"
                      sizes="40px"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default page;