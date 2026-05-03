import Link from "next/link"
import React from "react"
import BackToHomeLink from "../../components/BackToHomeLink"
import { TextGenerateEffect } from "../../components/ui/text-generate-effect"
import { SparklesCore } from "../../components/ui/sparkles"

const SITE = "https://safdarali.in"

export const metadata = {
  title: "About",
  description:
    "About Safdar Ali — Next.js and React developer in Bengaluru, India. Frontend engineer, YouTuber, and writer. Hire a frontend developer for India and remote work.",
  keywords: ["Safdar Ali YouTube", "React developer India", "Next.js developer Bengaluru", "Safdar Ali developer"],
  alternates: {
    canonical: `${SITE}/about`,
  },
  openGraph: {
    title: "About | Safdar Ali",
    url: `${SITE}/about`,
    description: "Bio, achievements, and how I work as a frontend developer and creator.",
  },
}

function page() {
  return (
    <div>
      <div className="w-full absolute inset-0 h-screen -z-10" aria-hidden="true">
        <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#777" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 pb-20">
        <div className="relative mt-14">
          <h1 className="text-center font-InterBold uppercase font-extrabold font-InterBlack dark:text-ink light:text-black text-3xl">
            About me
          </h1>
          <BackToHomeLink />
        </div>

        <div className="mt-10">
          <h2 className="font-bold font-InterBlack dark:text-ink light:text-black text-lg md:text-xl lg:text-2xl mb-8 text-center lg:mx-40">
            <TextGenerateEffect words="Passionate Frontend Developer and YouTuber from India 🇮🇳" />
          </h2>

          {/* TODO: add image when have a good one */}
          {/* <Image
            width={384}
            height={384}
            className="w-full h-96 rounded-xl object-cover"
            src={img}
            alt=""
          /> */}

          <h2 className="text-neutral-500 dark:text-ink/80 text-xs font-InterBold uppercase font-bold mt-10 tracking-wide">
            My story
          </h2>

          <p className="mb-9 mt-4 text-sm md:text-base lg:text-lg text-neutral-900 dark:text-ink">
            Hey there! I&apos;m Safdar Ali, a 25-year-old Frontend Developer and YouTuber from profession. I got into the world of coding early on and fell in love with the idea of creating things using code. With 4 years of experience in web development, I&apos;ve grown passionate about designing practical websites that cater to my clients&apos; needs.
          </p>

          <p className="mb-9 mt-4 text-sm md:text-base lg:text-lg text-neutral-900 dark:text-ink">
            To keep up with the latest trends and technologies in the field, I make sure I read articles trending and try to make content around them to maximize my reach. I also explore new tools and frameworks and stay active on tech Twitter & developer Discord communities.
          </p>

          <p className="mb-9 mt-4 text-sm md:text-base lg:text-lg text-neutral-900 dark:text-ink">
            What sets my method of website creation apart is my priority on finding creative but practical solutions rather than getting distracted by technical details. While some developers get caught up in deciding &quot;Which technology should I choose?&quot;, I focus on &quot;What problem needs solving?&quot;
          </p>

          <p className="mb-9 mt-4 text-sm md:text-base lg:text-lg text-neutral-900 dark:text-ink">
            Moreover, I make sure that the websites I develop not only look visually appealing but also offer a flawless user experience. Using advanced technologies such as Next.js allows me to deliver top-grade UX and eye-catching UI designs that go beyond expectations.
          </p>

          <h2 className="text-neutral-500 dark:text-ink/80 text-xs font-InterBold uppercase font-bold my-5 tracking-wide">Achievements</h2>
          <div className="font-InterMedium mt-3 text-sm lg:text-lg text-neutral-800 dark:text-ink light:text-slate-800">
            <ul>
              <li> 👨‍💻 Created 70+ coding tutorials on YouTube 🎥 </li>
              <li>🛠 Built 30+ projects using React and various CMS platforms</li>
              <li>💵 Earned my first $140 through freelancing</li>
              <li>🌟 Gained 5K+ followers on Blog & LinkedIn </li>
            </ul>
          </div>

          {/* desktop */}
          <div className="md:text-right md:block hidden">
            <h2 className="text-neutral-500 dark:text-ink/80 text-xs font-InterBold uppercase font-bold my-5 tracking-wide">
              Personality Traits
            </h2>
            <div className="font-InterMedium mt-3 text-sm lg:text-lg text-neutral-800 dark:text-ink light:text-slate-800">
              <ul>
                <li>Self-motivated, driven to achieve my goals 🚀</li>
                <li>Curious and always eager to learn new things 🧠</li>
                <li>Anti-Social, doesn&apos;t enjoy working with others 👤</li>
                <li>Small-circle, small group of like-minded people 🫂</li>
                <li>Open-minded, enjoy hearing different opinions 💬</li>
                <li>Detail-oriented, pay attention to the little things 🤓</li>
              </ul>
            </div>
          </div>

          {/* mobile */}
          <div className="md:text-right block md:hidden">
            <h2 className="text-neutral-500 dark:text-ink/80 text-xs font-InterBold uppercase font-bold my-5 tracking-wide">
              Personality Traits
            </h2>
            <div className="font-InterMedium mt-3 text-sm lg:text-lg text-neutral-800 dark:text-ink light:text-slate-800">
              <ul>
                <li>🚀 Self-motivated</li>
                <li>🧠 Curious</li>
                <li>👤 Anti-Social</li>
                <li>🫂 Small-circle</li>
                <li>💬 Open-minded</li>
                <li>🤓 Detail-oriented</li>
              </ul>
            </div>
          </div>

          <h2 className="text-neutral-500 dark:text-ink/80 text-xs font-InterBold uppercase font-bold my-5 tracking-wide">
            Hobbies & Interests
          </h2>
          <div className="font-InterMedium mt-3 text-sm lg:text-lg text-neutral-800 dark:text-ink light:text-slate-800">
            <ul>
              <li>📚 Enthusiastic reader of non-fiction and self-help books</li>
              <li>👨🏼‍💻 Love coding and building stuff out of code</li>
              <li>✍️ Consistent writer of general knowledge, practical tips and dev stuff</li>
              {/* <li>🎵 Music lover, compiling and sharing underrated hip-hop songs</li> */}
              {/* <li>🎨 Exploring the world of visual arts, with a particular interest in sketching</li> */}
            </ul>
          </div>

          <p className="mt-12 pt-8 border-t border-neutral-200 dark:border-white/15 text-sm md:text-base lg:text-lg text-neutral-900 dark:text-ink">
            For selected builds and case studies, see{" "}
            <Link
              href="/projects"
              className="underline font-semibold text-neutral-800 decoration-neutral-400 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink"
            >
              projects
            </Link>
            . To reach me, use the{" "}
            <Link
              href="/contact"
              className="underline font-semibold text-neutral-800 decoration-neutral-400 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink"
            >
              contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
