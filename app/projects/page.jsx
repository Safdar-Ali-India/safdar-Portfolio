"use client"

import React, { useState } from "react"
import Link from "next/link"

import BackToHomeLink from "../../components/BackToHomeLink"

import ProjectCard from "../../components/ProjectCard"
import Image from "next/image"

import { SparklesCore } from "../../components/ui/sparkles"

import tritonhomellc from "../../assets/tritonhomellc.png"
import independentmed from "../../assets/independentmed.png"
import metapeakmedia from "../../assets/metapeakmedia.png"
import smilinedentalpc from "../../assets/smilinedentalpc.png"
import firstclasspoolsnaples from "../../assets/firstclasspoolsnaples.png"
import adsclique from "../../assets/adsclique.png"
import empanadamama from "../../assets/empanadamama.png"
import dawntravel from "../../assets/dawntravel.png"
import acfp from "../../assets/acfp.png"
import wpstandard from "../../assets/wpstandard.png"
import sommetbeauty from "../../assets/sommetbeauty.png"
import waterboyz from "../../assets/waterboyz.png"
import freshsends from "../../assets/freshsends.png"
import theyuzu from "../../assets/theyuzu.png"

import msalonbeverlyhills from "../../assets/msalonbeverlyhills.png"
import cdi from "../../assets/cdi.png"
import fdl from "../../assets/fdl.png"
import hadith from "../../assets/hadith.png"
import mapmyrecipe from "../../assets/mapmyrecipe.png"
import powerrite from "../../assets/powerrite.png"
import restaurant from "../../assets/restaurant.png"
import swag from "../../assets/swag.png"
import weatherapp from "../../assets/weatherapp.png"

const caseStudies = [
  {
    title: "First Class Pools",
    location: "Pool Services",
    url: "firstclasspoolsnaples.com",
    role: "Web Design & Development",
    techStack: ["WordPress", "Custom Theme"],
    description: "Designed and developed full site: hero imagery, services (pool builds, maintenance), galleries, CTAs. Ensured mobile usability and SEO basics for local business.",
    outcome:
      "Delivered a visually rich site for a pool-services company, focused on lead generation and showcasing work. Site achieves sub-2s load time on mobile.",
    imgLink: firstclasspoolsnaples,
    liveLink: "https://firstclasspoolsnaples.com",
  },
  {
    title: "WP Standard",
    url: "wpstandard.com",
    location: "E-commerce Leather bags",
    role: "E-commerce Shopify Build",
    techStack: ["Shopify", "Ruby on Rails"],
    description: "Developed collection page, blog page, product page templates, customised Shopify theme. Implemented UI/UX improvements for product browsing and storytelling for lifestyle brand.",
    outcome:
      "Elevated brand's online shopping experience for leather bags, improving UX for mobile and desktop alike. Mobile conversion UX improved across all product pages.",
    imgLink: wpstandard,
    liveLink: "https://wpstandard.com",
  },
  {
    title: "Triton Home LLC",
    url: "tritonhomellc.com",
    location: "Real-estate",
    role: "Full-site Build & Deploy",
    techStack: ["WordPress", "Vanilla JavaScript", "Custom Theme"],
    description: "Designed and built a custom WordPress theme to showcase broad range of homes, tailored for budget & lifestyle breakdowns. Developed hero-sections, listings, dynamic filtering, gallery/carousel for property features.",
    outcome:
      "Delivered a content-rich, visually appealing real-estate site that aligned with their premium brand positioning. Dynamic filtering reduced bounce rate on listings.",
    imgLink: tritonhomellc,
    liveLink: "https://tritonhomellc.com",
  },
  {
    title: "Sommet Beauty",
    url: "sommetbeauty.com",
    location: "Luxury Beauty Products",
    role: "Shopify Build & Performance Optimisation",
    techStack: ["Shopify"],
    description: "Built site (home, product, collection, cart, navigation) for luxury beauty-brand ecommerce. Created custom cart page with seamless checkout flow. Focused on speed optimisation: asset management, lazy-loading, theme tweaks.",
    outcome:
      "Delivered a high-end, performance-tuned ecommerce site for premium beauty products with custom cart functionality. Page speed score improved to 90+ on PageSpeed Insights.",
    imgLink: sommetbeauty,
    liveLink: "https://sommetbeauty.com",
  },
  {
    title: "IndependentMed",
    location: "Medical Equpment",
    url: "independentmed.com", 
    role: "E-commerce/Equipment Site Build",
    techStack: ["WordPress", "WooCommerce"],
    description: "Built from scratch: custom WP theme tailored to medical-equipment e-commerce. Configured WooCommerce product/catalogue, checkout flows, shipping/payment integrations. Implemented UI/UX improvements specifically for equipment listing.",
    outcome:
      "Provided a scalable e-commerce platform for medical-equipment sales with user-friendly product browsing and checkout. Full WooCommerce catalogue of 200+ products launched.",
    imgLink: independentmed,
    liveLink: "https://independentmed.com",
  },
  {
    title: "Waterboyz",
    location: "Surf & Skate Shop",
    url: "waterboyz.com",
    role: "Shopify Site Build & Optimisation",
    techStack: ["Shopify"],
    description: "Built top navigation, product pages, implemented speed and UX improvements tailored for surf & skate culture audience. Ensured mobile performance and smooth browsing.",
    outcome: "Created an engaging ecommerce experience aligned with active/lifestyle branding. Mobile performance optimised for lifestyle audience.",
    imgLink: waterboyz,
    liveLink: "https://waterboyz.com",
  },
  {
    title: "Metapeak Media",
    location: "Media firm",
    url: "metapeakmedia.com",
    role: "Brand-site Build",
    techStack: ["WordPress"],
    description: "Created full branding site for Metapeak (child company of Adsclique), built on WordPress. Custom design, content integration, mobile responsive build, and deployment.",
    outcome: "Delivered polished corporate web presence for U.S-based digital/media firm under the Adsclique umbrella. Full brand web presence delivered in under 3 weeks.",
    imgLink: metapeakmedia,
    liveLink: "https://metapeakmedia.com",
  },
  {
    title: "Empanada Mama",
    url: "empanadamama.com",
    role: "Design & Maintenance",
    location: "Restaurant Website",
    techStack: ["Squarespace"],
    description: "Created site in Squarespace: menu sections, blog/news feed, event listings, responsive layout. Provided ongoing maintenance: updates, content changes, optimisations.",
    outcome:
      "Delivered stylish online presence for a Colombian restaurant in NYC, enabling the client to manage menu updates and events easily. Client self-manages content updates independently.",
    imgLink: empanadamama,
    liveLink: "https://empanadamama.com",
  },
  {
    title: "Smiline Dental",
    location: "Dentistry Practice",
    url: "smilinedentalpc.com",
    role: "Dental Practice Website",
    techStack: ["WordPress", "PHP", "Hostinger"],
    description: "Built site from ground up: structured service pages, team bios, appointment/contact modules. Set up hosting on Hostinger, theme customisation and maintenance hand-off.",
    outcome:
      "Delivered professional-looking web presence for dental practice with emphasis on trust and conversion. Site ranks on page 1 for local dental search terms.",
    imgLink: smilinedentalpc,
    liveLink: "https://smilinedentalpc.com",
  },
  {
    title: "FreshSends",
    url: "freshsends.com",
    location: "Gift & Flower Shop",
    role: "Shopify Site Work & Maintenance",
    techStack: ["Shopify"],
    description: "Developed 'Shop All' product listing page, managed filters, layout and theme styling. Carried out routine maintenance: theme updates, content changes, performance checks.",
    outcome:
      "Supported gift/flower ecommerce business with improved product listing UX and streamlined maintenance. Product listing UX improved across 100+ SKUs.",
    imgLink: freshsends,
    liveLink: "https://freshsends.com",
  },
  {
    title: "The M Salon",
    url: "msalonbeverlyhills.com",
    location: "Salon & Spa",
    role: "Lead Front-end & WordPress Build",
    techStack: ["WordPress", "Vanilla JavaScript", "Custom Theme"],
    description: "Architected and developed site structure, custom theme and UI from scratch. Integrated salon services, gallery, blog, contact & newsletter modules. Ensured pixel-perfect design, smooth transitions and responsive behaviour.",
    outcome:
      "Delivered a high-end, brand-aligned site for a premium salon in Beverly Hills; the site's footer credits Adsclique Media. Site credited in Beverly Hills salon's marketing collateral.",
    imgLink: msalonbeverlyhills,
    liveLink: "https://msalonbeverlyhills.com",
  },
  {
    title: "The Yuzu Co.",
    location: "E-commerce Juice Brand",
    url: "theyuzu.co",
    role: "Shopify Build & Maintenance",
    techStack: ["Shopify"],
    description: "Created homepage, blog page, product pages; managed ongoing site maintenance. Styled theme to match brand's colourful, fresh identity and improved blog layout for story-telling.",
    outcome:
      "Delivered vibrant ecommerce platform for a juice brand with both commerce and content capabilities. Blog and commerce running on unified Shopify platform.",
    imgLink: theyuzu,
    liveLink: "https://theyuzu.co",
  },
  {
    title: "Adsclique Media",
    location: "Digital Marketing Agency",
    url: "adsclique.com",
    role: "Agency's Primary Website",
    techStack: ["WordPress", "PHP", "Gatsby", "Swiper"],
    description: "Created agency website from scratch: custom theme, dynamic sections (case studies, services, blog). Integrated Swiper (carousel/slider) for 'our work' section, built WordPress backend for client-editable content. Deployment, hosting setup, performance tuning.",
    outcome:
      "Built the online face of the agency where I worked as Senior Frontend Developer — showcasing our services, case studies, and brand identity. Agency's primary web presence serving US market clients.",
    imgLink: adsclique,
    liveLink: "https://adsclique.com",
  },
  {
    title: "Dawn Travel",
    location: "Luxury Travel Agency",
    url: "dawn.travel",
    role: "Selected Page Builds & Maintenance",
    techStack: ["Wix"],
    description: "Built key main pages (home page, cruises page) on Wix: crafted imagery-rich layouts, service highlights, call-to-actions. Maintained site: refreshed content, UX adjustments, ensured mobile friendliness.",
    outcome:
      "Helped luxury travel business maintain strong online first impression, focusing on premium tours, safaris, villas and cruises. Premium travel UX maintained across luxury tour pages.",
    imgLink: dawntravel,
    liveLink: "https://dawn.travel",
  },
  {
    title: "ACFP Pizza",
    location: "Pizza Restaurant",
    url: "acfp.com",
    role: "WordPress Site Build + Accessibility",
    techStack: ["WordPress", "Accessibility Standards"],
    description: "Built WordPress site for pizza company: homepage, menu, ordering link, about and contact. Executed accessibility enhancements (ARIA tags, keyboard navigation, semantic markup) to improve usability.",
    outcome:
      "Delivered both a visually appealing and accessibility-conscious web solution for a food service business. Core pages meet accessibility best practices with strong automated audit scores.",
    imgLink: acfp,
    liveLink: "https://acfp.com",
  },
]

const projectData = [
  {
    title: "Fdl Beauty Bar",
    subtitle: "Attained a 400% surge in consultation bookings in 2 months via strategic use of search ads, social media, and targeted email marketing.",
    imgLink: fdl,
    codeLink: "https://www.fdlbeautybar.com/",
    liveLink: "https://www.fdlbeautybar.com/",
  },
  {
    title: "Map My Recipe",
    subtitle: "Recipe Book application developed using React. The application allows users to view a list of recipes, search for specific recipes, and view individual recipe details.",
    imgLink: mapmyrecipe,
    codeLink: "https://github.com/Safdar-Ali-India/Recipe-Book-application-using-React",
    liveLink: "https://map-my-recipe.vercel.app/",
  },
  {
    title: "Safdar Restaurant",
    subtitle: "This project showcases the development of a dynamic menu system for Safdar Restaurant, created using React. The application is built to filter and display menu items according to the selected meal time, providing users with a seamless and interactive experience.",
    imgLink: restaurant,
    codeLink: "https://github.com/Safdar-Ali-India/Safdar-restaurant",
    liveLink: "https://safdar-restaurant.vercel.app/",
  },
  {
    title: "Power Rite Electric Inc.",
    subtitle: "Doubled the conversion rate, cut CPA by 25%, securing high-quality leads for Pool and Lanai Lights business. Started by understanding the lighting industry intricacies, crafting tailored messaging for effective communication.",
    imgLink: powerrite,
    codeLink: "https://powerriteelectric.com",
    liveLink: "https://powerriteelectric.com",
  },
  {
    title: "Swag Brands",
    subtitle: "Achieved a 40% sales surge through digital channels with the highest ROAS growth of +172%. The Swag Brands website would love help promote your business with Promotions That Work.",
    imgLink: swag,
    codeLink: "https://www.swagbrands.com/",
    liveLink: "https://www.swagbrands.com/",
  },
  {
    title: "CDI25",
    subtitle: "From abstracts to landscapes and everything in between, we have the perfect piece of art to inspire your next interior design project. At Creative Displays and Designs, Inc., its easy for you to find all the finishing touches you need to complete your decorating and design projects.",
    imgLink: cdi,
    codeLink: "https://www.cdi25.com/",
    liveLink: "https://www.cdi25.com/",
  },
  {
    title: "Safdar's Weather App",
    subtitle: "This project showcases the development of a fully-featured weather application using React. The application integrates with a weather API to fetch real-time weather data and presents it in a clean and user-friendly interface.",
    imgLink: weatherapp,
    codeLink: "https://github.com/Safdar-Ali-India/Safdar-s-Weather-app",
    liveLink: "https://safdar-s-weather-app.vercel.app/",
  },
  {
    title: "Hadith Generator",
    subtitle: "Explore the wisdom and teachings of the Prophet Muhammad (PBUH) with the Hadith Generator. lets you read hadiths from the top Hadith Books while keeping track of your progress.",
    imgLink: hadith,
    codeLink: "https://github.com/Safdar-Ali-India/Hadith-Generator",
    liveLink: "https://hadith-generator-alpha.vercel.app/",
  },
]

function CaseStudyCard({ study, index }) {
  const [showFullOutcome, setShowFullOutcome] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const descId = `case-study-${index}-description`
  const outcomeId = `case-study-${index}-outcome`

  const imageBlock = (
    <div className="relative h-48 w-full cursor-pointer overflow-hidden bg-neutral-200 dark:bg-neutral-800">
      <Image
        src={study.imgLink}
        alt={`${study.title} — case study preview`}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        decoding="async"
      />
    </div>
  )

  return (
    <article className="bg-gray-50 dark:bg-white/[0.04] border border-black/[0.1] dark:border-white/[0.1] rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-neutral-400/10 dark:hover:shadow-white/5 transition-all duration-300">
      {study.liveLink ? (
        <a
          href={study.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-t-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          aria-label={`${study.title} — open live site (new tab)`}
        >
          {imageBlock}
        </a>
      ) : (
        <div className="block rounded-t-xl" aria-label={`${study.title} — preview`}>
          {imageBlock}
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-ink">{study.title}</h3>
          <div className="flex gap-2">
            {study.date && (
              <span className="text-xs px-2 py-1 text-center bg-neutral-200 dark:bg-white/[0.08] rounded-full text-neutral-800 dark:text-ink/90">
                {study.date}
              </span>
            )}
            {study.location && (
              <span className="text-xs px-2 text-center py-1 bg-neutral-200 dark:bg-white/[0.08] rounded-full text-neutral-600 dark:text-ink/75">
                {study.location}
              </span>
            )}
          </div>
        </div>

        <div className="mb-3">
          <p className="text-xs font-semibold text-neutral-500 dark:text-ink/60 uppercase mb-1">Role</p>
          <p className="text-sm text-neutral-700 dark:text-ink/90">{study.role}</p>
        </div>

        <div className="mb-3">
          <p className="text-xs font-semibold text-neutral-500 dark:text-ink/60 uppercase mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1">
            {study.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-neutral-200 dark:bg-white/[0.08] rounded text-neutral-700 dark:text-ink/85"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <p className="text-xs font-semibold text-neutral-500 dark:text-ink/60 uppercase mb-1">What I Did</p>
          <p id={descId} className={`text-sm text-neutral-600 dark:text-ink/80 ${!showFullDescription ? "line-clamp-4" : ""}`}>
            {study.description}
          </p>
          {study.description.length > 120 && (
            <button
              type="button"
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-xs text-neutral-600 hover:text-gray-300 mt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 rounded"
              aria-expanded={showFullDescription}
              aria-controls={descId}
            >
              {showFullDescription ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-neutral-500 dark:text-ink/60 uppercase mb-1">Outcome</p>
          <p id={outcomeId} className={`text-sm text-neutral-600 dark:text-ink/80 ${!showFullOutcome ? "line-clamp-2" : ""}`}>
            {study.outcome}
          </p>
          {study.note ? <p className="mt-2 text-xs text-neutral-500 dark:text-ink/65">{study.note}</p> : null}
          {study.outcome.length > 80 && (
            <button
              type="button"
              onClick={() => setShowFullOutcome(!showFullOutcome)}
              className="text-xs text-neutral-600 hover:text-gray-300 mt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 rounded"
              aria-expanded={showFullOutcome}
              aria-controls={outcomeId}
            >
              {showFullOutcome ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        <div className="mt-auto">
          {study.liveLink ? (
            <a
              href={study.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-black px-4 py-2 text-center text-sm font-bold text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:bg-white dark:text-black"
            >
              View live site →
            </a>
          ) : (
            <span className="block w-full cursor-not-allowed rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-center text-sm font-semibold text-neutral-500 dark:border-white/15 dark:bg-white/[0.06] dark:text-ink/50">
              No public demo
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function page() {
  return (
    <section>
      <div className="w-full absolute inset-0 lg:h-screen -z-10" aria-hidden="true">
        <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#777" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 pb-20">
        <div className="relative mt-14">
          <h1 className="text-center font-InterBold uppercase font-extrabold font-InterBlack dark:text-ink light:text-black text-3xl">
            Projects
          </h1>
          <BackToHomeLink />
        </div>

        {/* Case Studies Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-4 dark:text-ink light:text-black">Professional Case Studies</h2>

          {/* Disclaimer */}
          <div className="mb-8 p-4 bg-neutral-800/20 border border-neutral-700/30 rounded-lg max-w-4xl mx-auto">
            <p className="text-sm text-neutral-600 dark:text-ink/80 text-center">
              <span className="font-semibold text-neutral-800 dark:text-ink">Disclaimer:</span> I am not the owner of these
              websites. These projects were developed during my employment with various agencies and companies. All
              intellectual property rights belong to the respective clients and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} index={index} />
            ))}
          </div>
        </div>

        {/* Original Projects Section */}
        <div className="mt-20">
          <h2
            id="featured-projects"
            className="text-2xl font-bold text-center mb-8 dark:text-ink light:text-black scroll-mt-24"
          >
            Personal & Featured Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-x-8">
            {projectData.map((project, index) => (
              <ProjectCard key={index} title={project.title} subtitle={project.subtitle} imgLink={project.imgLink} codeLink={project.codeLink} liveLink={project.liveLink} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
