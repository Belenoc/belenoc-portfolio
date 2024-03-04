"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { ISocialLink } from "@/shared/models/global.interfaces";
import Image from "next/image";
import { MdOutgoingMail } from "react-icons/md";
import React from "react";
import SocialLink from "./SocialLink";
import { motion } from "framer-motion";
import photo from "../../assets/personal-2.jpg";

const socialLinks: ISocialLink[] = [
  {
    href: "https://github.com/Belenoc",
    target: "_blank",
    rel: "noreferrer",
    title: "GitHub",
    icon: <FaGithub />,
    children: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/belenoc/",
    target: "_blank",
    rel: "noreferrer",
    title: "LinkedIn",
    icon: <FaLinkedin />,
    children: "LinkedIn",
  },
  {
    href: "mailto:jesusgabo04@gmail.com",
    title: "Email",
    icon: <MdOutgoingMail />,
    children: "Email",
  },
];

const PhotoWindow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="row-span-2 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden gap-10 justify-end p-6 dark:bg-pdark xl:col-span-3 lg:items-end sm:flex-row lg:p-10"
    >
      <div className="absolute bg-gradient-to-t from-dusky-alt to-transparent top-0 left-0 bottom-0 right-0 z-[2]"></div>
      <Image
        className="absolute w-full h-full object-cover left-0 top-0"
        src={photo}
        alt="personal"
        title="Personal"
        width={4000}
        height={3000}
        priority={true}
      />
      <div className="w-full flex flex-col z-[2] absolute bottom-0 left-0 leading-4 p-5 text-white">
        <span className="text-3xl font-bold leading-7">Jesús Beleño</span>
        <span className="text-lg font-medium leading-9">Systems Engineer</span>
        <div className="flex flex-wrap items-center gap-2 mt-1 lg:gap-3">
          {socialLinks.map((link, index) => {
            return (
              <SocialLink
                key={index} // Add the key prop here
                {...link}
              >
                {link.children}
              </SocialLink>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoWindow;
