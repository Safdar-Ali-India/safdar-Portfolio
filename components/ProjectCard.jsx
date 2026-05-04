import React from "react";

import Image from "next/image";
import Link from "next/link";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const ProjectCard = ({ title, subtitle, imgLink, codeLink, liveLink }) => {
  const thumbAlt = `${title} — project preview`;
  const externalProps = (url) =>
    /^https?:\/\//i.test(url) ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-white/5 dark:bg-white/[0.04] dark:border-white/[0.12] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-ink">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-ink/80">
          {subtitle}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imgLink}
            height={1000}
            width={1000}
            className="border border-slate-900 h-60 w-full object-cover rounded-lg group-hover/card:shadow-xl"
            alt={thumbAlt}
            sizes="(max-width: 640px) 100vw, 30rem"
            loading="lazy"
            decoding="async"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6 md:mt-10 gap-3">
          <CardItem translateZ={20} className="inline-flex">
            <Link
              href={liveLink}
              {...externalProps(liveLink)}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold text-center hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              Try now →
            </Link>
          </CardItem>
          <CardItem translateZ={20} className="inline-flex">
            <Link
              href={codeLink}
              {...externalProps(codeLink)}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold text-center hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              View code →
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
