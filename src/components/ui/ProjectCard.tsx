"use client";

import { IProjectCard } from "@/shared/models/global.interfaces";
import { ImStack } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  project_name,
  description,
  technologies,
  screenShot,
  demoLink,
  index,
}: IProjectCard) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative flex flex-col rounded-3xl bg-white dark:bg-raisin-black p-6 lg:p-8 overflow-hidden shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800 min-h-[320px]"
    >
      <div className="flex items-center gap-2.5 opacity-50 z-[1]">
        <ImStack className="text-sm" />
        <span className="font-semibold uppercase text-xs tracking-wider">
          Project
        </span>
      </div>

      {demoLink && (
        <Link
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="p-2 border border-gray-200 dark:border-gray-700 opacity-60 rounded-full absolute top-6 right-6 lg:top-8 lg:right-8 cursor-pointer hover:bg-sblue hover:text-white dark:hover:bg-sgreen dark:hover:text-pdark hover:opacity-100 transition-all duration-200 z-[1]"
          title={`${project_name} demo`}
        >
          <MdArrowOutward />
        </Link>
      )}

      <div className="flex flex-col gap-1.5 z-[1] mt-3">
        <h3 className="text-xl lg:text-2xl font-bold">{project_name}</h3>
        <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-full h-36 lg:h-44 overflow-hidden rounded-xl mt-auto">
        <Image
          className="object-cover object-top w-full h-full transition-all duration-500 group-hover:scale-105"
          src={screenShot}
          alt={project_name}
          title="Project screenshot"
          width={1080}
          height={720}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
