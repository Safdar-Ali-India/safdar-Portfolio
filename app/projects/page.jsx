"use client"

import React, { useState } from "react"
import Link from "next/link"

import { TbArrowBackUp } from "react-icons/tb"

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
    title: "The M Salon",
    location: "Beverly Hills",
    url: "msalonbeverlyhills.com",
    role: "Lead Front-end & WordPress Build",
    techStack: ["WordPress", "Vanilla JavaScript", "Custom Theme"],
    description: "Architected and developed site structure, custom theme and UI from scratch. Integrated salon services, gallery, blog, contact & newsletter modules. Ensured pixel-perfect design, smooth transitions and responsive behaviour.",
    outcome: "Delivered a high-end, brand-aligned site for a premium salon in Beverly Hills; the site's footer credits Adsclique Media.",
    imgLink: msalonbeverlyhills,
    liveLink: "https://msalonbeverlyhills.com",
  },
  {
    title: "Triton Home LLC",
    location: "",
    url: "tritonhomellc.com",
    role: "Full-site Build & Deploy",
    techStack: ["WordPress", "Vanilla JavaScript", "Custom Theme"],
    description: "Designed and built a custom WordPress theme to showcase broad range of homes, tailored for budget & lifestyle breakdowns. Developed hero-sections, listings, dynamic filtering, gallery/carousel for property features.",
    outcome: "Delivered a content-rich, visually appealing real-estate site that aligned with their premium brand positioning.",
    imgLink: tritonhomellc,
    liveLink: "https://tritonhomellc.com",
  },
  {
    title: "IndependentMed",
    location: "",
    url: "independentmed.com",
    role: "E-commerce/Equipment Site Build",
    techStack: ["WordPress", "WooCommerce"],
    description: "Built from scratch: custom WP theme tailored to medical-equipment e-commerce. Configured WooCommerce product/catalogue, checkout flows, shipping/payment integrations. Implemented UI/UX improvements specifically for equipment listing.",
    outcome: "Provided a scalable e-commerce platform for medical-equipment sales with user-friendly product browsing and checkout.",
    imgLink: independentmed,
    liveLink: "https://independentmed.com",
  },
  {
    title: "Metapeak Media",
    location: "",
    url: "metapeakmedia.com",
    role: "Brand-site Build",
    techStack: ["WordPress"],
    description: "Created full branding site for Metapeak (child company of Adsclique), built on WordPress. Custom design, content integration, mobile responsive build, and deployment.",
    outcome: "Delivered polished corporate web presence for U.S-based digital/media firm under the Adsclique umbrella.",
    imgLink: metapeakmedia,
    liveLink: "https://metapeakmedia.com",
  },
  {
    title: "SMI Line Dental PC",
    location: "",
    url: "smilinedentalpc.com",
    role: "Dental Practice Website",
    techStack: ["WordPress", "PHP", "Hostinger"],
    description: "Built site from ground up: structured service pages, team bios, appointment/contact modules. Set up hosting on Hostinger, theme customisation and maintenance hand-off.",
    outcome: "Delivered professional-looking web presence for dental practice with emphasis on trust and conversion.",
    imgLink: smilinedentalpc,
    liveLink: "https://smilinedentalpc.com",
  },
  {
    title: "First Class Pools Naples",
    location: "",
    url: "firstclasspoolsnaples.com",
    role: "Web Design & Development",
    techStack: ["WordPress", "Custom Theme"],
    description: "Designed and developed full site: hero imagery, services (pool builds, maintenance), galleries, CTAs. Ensured mobile usability and SEO basics for local business.",
    outcome: "Delivered a visually rich site for a pool-services company, focused on lead generation and showcasing work.",
    imgLink: firstclasspoolsnaples,
    liveLink: "https://firstclasspoolsnaples.com",
  },
  {
    title: "Adsclique Media",
    location: "",
    url: "adsclique.com",
    role: "Agency's Primary Website",
    techStack: ["WordPress", "PHP", "Gatsby", "Swiper"],
    description: "Created agency website from scratch: custom theme, dynamic sections (case studies, services, blog). Integrated Swiper (carousel/slider) for 'our work' section, built WordPress backend for client-editable content. Deployment, hosting setup, performance tuning.",
    outcome: "Built the online face of the agency where I worked as Senior Frontend Developer — showcasing our services, case studies, and brand identity.",
    imgLink: adsclique,
    liveLink: "https://adsclique.com",
  },
  {
    title: "Empanada Mama",
    location: "NYC",
    url: "empanadamama.com",
    role: "Design & Maintenance",
    techStack: ["Squarespace"],
    description: "Created site in Squarespace: menu sections, blog/news feed, event listings, responsive layout. Provided ongoing maintenance: updates, content changes, optimisations.",
    outcome: "Delivered stylish online presence for a Colombian restaurant & bar in NYC, enabling the client to manage menu updates and events easily.",
    imgLink: empanadamama,
    liveLink: "https://empanadamama.com",
  },
  {
    title: "Dawn Travel",
    location: "",
    url: "dawn.travel",
    role: "Selected Page Builds & Maintenance",
    techStack: ["Wix"],
    description: "Built key main pages (home page, cruises page) on Wix: crafted imagery-rich layouts, service highlights, call-to-actions. Maintained site: refreshed content, UX adjustments, ensured mobile friendliness.",
    outcome: "Helped luxury travel business maintain strong online first impression, focusing on premium tours, safaris, villas and cruises.",
    imgLink: dawntravel,
    liveLink: "https://dawn.travel",
  },
  {
    title: "ACFP Pizza",
    location: "",
    url: "acfp.com",
    role: "WordPress Site Build + Accessibility",
    techStack: ["WordPress", "Accessibility Standards"],
    description: "Built WordPress site for pizza company: homepage, menu, ordering link, about and contact. Executed accessibility enhancements (ARIA tags, keyboard navigation, semantic markup) to improve usability.",
    outcome: "Delivered both a visually appealing and accessibility-conscious web solution for a food service business.",
    imgLink: acfp,
    liveLink: "https://acfp.com",
  },
  {
    title: "WP Standard",
    location: "",
    url: "wpstandard.com",
    role: "E-commerce Shopify Build",
    techStack: ["Shopify", "Ruby on Rails"],
    description: "Developed collection page, blog page, product page templates, customised Shopify theme. Implemented UI/UX improvements for product browsing and storytelling for lifestyle brand.",
    outcome: "Elevated brand's online shopping experience for leather bags, improving UX for mobile and desktop alike.",
    imgLink: wpstandard,
    liveLink: "https://wpstandard.com",
  },
  {
    title: "Sommet Beauty",
    location: "",
    url: "sommetbeauty.com",
    role: "Shopify Build & Performance Optimisation",
    techStack: ["Shopify"],
    description: "Built site (home, product, collection, navigation) for luxury beauty-brand ecommerce. Focused on speed optimisation: asset management, lazy-loading, theme tweaks.",
    outcome: "Delivered a high-end, performance-tuned ecommerce site for premium beauty products.",
    imgLink: sommetbeauty,
    liveLink: "https://sommetbeauty.com",
  },
  {
    title: "Waterboyz Surf & Skate Shop",
    location: "",
    url: "waterboyz.com",
    role: "Shopify Site Build & Optimisation",
    techStack: ["Shopify"],
    description: "Built top navigation, product pages, implemented speed and UX improvements tailored for surf & skate culture audience. Ensured mobile performance and smooth browsing.",
    outcome: "Created an engaging ecommerce experience aligned with active/lifestyle branding.",
    imgLink: waterboyz,
    liveLink: "https://waterboyz.com",
  },
  {
    title: "FreshSends",
    location: "",
    url: "freshsends.com",
    role: "Shopify Site Work & Maintenance",
    techStack: ["Shopify"],
    description: "Developed 'Shop All' product listing page, managed filters, layout and theme styling. Carried out routine maintenance: theme updates, content changes, performance checks.",
    outcome: "Supported gift/flower ecommerce business with improved product listing UX and streamlined maintenance.",
    imgLink: freshsends,
    liveLink: "https://freshsends.com",
  },
  {
    title: "The Yuzu Co.",
    location: "",
    url: "theyuzu.co",
    role: "Shopify Build & Maintenance",
    techStack: ["Shopify"],
    description: "Created homepage, blog page, product pages; managed ongoing site maintenance. Styled theme to match brand's colourful, fresh identity and improved blog layout for story-telling.",
    outcome: "Delivered vibrant ecommerce platform for a juice brand with both commerce and content capabilities.",
    imgLink: theyuzu,
    liveLink: "https://theyuzu.co",
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

  return (
    <div className="bg-gray-50 dark:bg-black border border-black/[0.1] dark:border-white/[0.2] rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-all duration-300">
      {/* Project Image */}
      <div className="w-full h-48 relative overflow-hidden bg-neutral-200 dark:bg-neutral-800">
        <Image src={study.imgLink} alt={study.title} fill className="object-cover hover:scale-105 transition-transform duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-white">{study.title}</h3>
          {study.location && <span className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full text-neutral-600 dark:text-neutral-400">{study.location}</span>}
        </div>

        <a href={`https://${study.url}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-400 mb-3 block">
          {study.url}
        </a>

        <div className="mb-3">
          <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase mb-1">Role</p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{study.role}</p>
        </div>

        <div className="mb-3">
          <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1">
            {study.techStack.map((tech, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase mb-1">What I Did</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{study.description}</p>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase mb-1">Outcome</p>
          <p className={`text-sm text-neutral-600 dark:text-neutral-400 ${!showFullOutcome ? "line-clamp-2" : ""}`}>{study.outcome}</p>
          {study.outcome.length > 100 && (
            <button onClick={() => setShowFullOutcome(!showFullOutcome)} className="text-xs text-blue-500 hover:text-blue-400 mt-1">
              {showFullOutcome ? "Show Less" : "Read More"}
            </button>
          )}
        </div>

        <a href={study.liveLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-sm font-bold hover:opacity-80 transition-opacity">
          View Live Site →
        </a>
      </div>
    </div>
  )
}

export default function page() {
  return (
    <section>
      <div className="w-full absolute inset-0 lg:h-screen -z-10">
        <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#777" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 pb-20">
        <div className="relative mt-14">
          <h2 className=" text-center font-InterBold uppercase font-extrabold font-InterBlack dark:text-white light:text-black text-3xl">Projects</h2>
          <Link href={"/"}>
            <div className=" bg-neutral-700/10 rounded-md absolute -top-2 w-12 h-8 flex items-center justify-center ">
              <TbArrowBackUp className="dark:text-white light:text-black text-xl" />
            </div>
          </Link>
        </div>

        {/* Case Studies Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-4 dark:text-white light:text-black">Professional Case Studies</h3>

          {/* Disclaimer */}
          <div className="mb-8 p-4 bg-neutral-800/20 border border-neutral-700/30 rounded-lg max-w-4xl mx-auto">
            <p className="text-sm text-neutral-400 text-center">
              <span className="font-semibold text-neutral-300">Disclaimer:</span> I am not the owner of these websites. These projects were developed during my employment with various agencies and companies. All intellectual property rights belong to the respective clients and organizations.
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
          <h3 className="text-2xl font-bold text-center mb-8 dark:text-white light:text-black">Personal & Featured Projects</h3>

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
