"use client";

import React from "react";
import Link from "next/link";

import { TbArrowBackUp } from "react-icons/tb";

import ProjectCard from '../../components/ProjectCard';

import { SparklesCore } from "../../components/ui/sparkles";

import project1 from "../../assets/project1.png";
import cdi from "../../assets/cdi.png";
import fdl from "../../assets/fdl.png";
import hadith from "../../assets/hadith.png";
import mapmyrecipe from "../../assets/mapmyrecipe.png";
import powerrite from "../../assets/powerrite.png";
import restaurant from "../../assets/restaurant.png";
import swag from "../../assets/swag.png";
import weatherapp from "../../assets/weatherapp.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";

const projectData = [
    {
        title: "Fdl Beauty Bar",
        subtitle: "Attained a 400% surge in consultation bookings in 2 months via strategic use of search ads, social media, and targeted email marketing.",
        imgLink: fdl,
        codeLink: "https://www.fdlbeautybar.com/",
        liveLink: "https://www.fdlbeautybar.com/"
    },
    {
        title: "Map My Recipe",
        subtitle: "Recipe Book application developed using React. The application allows users to view a list of recipes, search for specific recipes, and view individual recipe details.",
        imgLink: mapmyrecipe,
        codeLink: "https://github.com/Safdar-Ali-India/Recipe-Book-application-using-React",
        liveLink: "https://map-my-recipe.vercel.app/"
    },
    {
        title: "Safdar Restaurant",
        subtitle: "This project showcases the development of a dynamic menu system for Safdar Restaurant, created using React. The application is built to filter and display menu items according to the selected meal time, providing users with a seamless and interactive experience.",
        imgLink: restaurant,
        codeLink: "https://github.com/Safdar-Ali-India/Safdar-restaurant",
        liveLink: "https://safdar-restaurant.vercel.app/"
    },
    {
        title: "Power Rite Electric Inc.",
        subtitle: "Doubled the conversion rate, cut CPA by 25%, securing high-quality leads for Pool and Lanai Lights business.",
        imgLink: powerrite,
        codeLink: "https://powerriteelectric.com",
        liveLink: "https://powerriteelectric.com"
    },
    {
        title: "Swag Brands",
        subtitle: "Achieved a 40% sales surge through digital channels with the highest ROAS growth of +172%.",
        imgLink: swag,
        codeLink: "https://www.swagbrands.com/",
        liveLink: "https://www.swagbrands.com/"
    },
    {
        title: "CDI25",
        subtitle: "From abstracts to landscapes and everything in between, we have the perfect piece of art to inspire your next interior design project. ",
        imgLink: cdi,
        codeLink: "https://www.cdi25.com/",
        liveLink: "https://www.cdi25.com/"
    },
    {
        title: "Safdar's Weather App",
        subtitle: "This project showcases the development of a fully-featured weather application using React. The application integrates with a weather API to fetch real-time weather data and presents it in a clean and user-friendly interface.",
        imgLink: weatherapp,
        codeLink: "https://github.com/Safdar-Ali-India/Safdar-s-Weather-app",
        liveLink: "https://safdar-s-weather-app.vercel.app/"
    },
    {
        title: " Hadith Generator",
        subtitle: "Explore the wisdom and teachings of the Prophet Muhammad (PBUH) with the Hadith Generator.",
        imgLink: hadith,
        codeLink: "https://github.com/Safdar-Ali-India/Hadith-Generator",
        liveLink: "https://hadith-generator-alpha.vercel.app/"
    },
];

export default function page() {
    return (
        <section>
            <div className="w-full absolute inset-0 lg:h-screen -z-10">
                <SparklesCore
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
                    <h2 className=" text-center font-InterBold uppercase font-extrabold font-InterBlack dark:text-white light:text-black text-3xl">
                        Projects
                    </h2>
                    <Link href={"/"}>
                        <div className=" bg-neutral-700/10 rounded-md absolute -top-2 w-12 h-8 flex items-center justify-center ">
                            <TbArrowBackUp className="dark:text-white light:text-black text-xl" />
                        </div>
                    </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-x-8">
                    {projectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            subtitle={project.subtitle}
                            imgLink={project.imgLink}
                            codeLink={project.codeLink}
                            liveLink={project.liveLink}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
