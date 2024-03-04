"use client";

import { IExperienceCard } from "@/shared/models/global.interfaces";
import Image from "next/image"; // Import the Image component from the appropriate package
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import React from "react";
import { motion } from "framer-motion";
import { useHover } from "@uidotdev/usehooks";

const ExperienceCard = ({
  id,
  company_logo,
  company_name,
  position_name,
  dates,
  url_site,
  background_url,
}: IExperienceCard) => {
  const [ref, hovering] = useHover();
  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="row-span-1 col-span-8 lg:row-span-2 lg:col-span-2 bg-white dark:bg-pdark rounded-3xl overflow-hidden relative flex flex-col py-14 items-center justify-between"
    >
      <div className="flex flex-col items-center">
        <Image
          className={`w-48 h-16 object-contain z-[1] ${
            company_name == "Tory-Tech" && "invert grayscale"
          }`}
          src={company_logo}
          alt={company_name}
          width={4000}
          height={3000}
        />
        <p className="text-center text-white mt-2 z-[1] font-medium">
          {position_name}
          <br />
          {dates}
        </p>
      </div>
      <Link
        className="py-2 px-4 bg-plight text-pdark font-medium rounded-lg flex items-center gap-2 z-[1] hover:bg-sgreen hover:scale-105 transition-all duration-300"
        href={url_site}
        target="_blank"
        title={`${company_name} website`}
      >
        <span>{company_name}</span>
        <LuExternalLink />
      </Link>
      <Image
        className={`w-full h-full object-cover absolute left-0 top-0 z-0 ${
          company_name == "APG-Consulting"
            ? "dark:opacity-30"
            : "dark:opacity-60"
        } transition-all duration-300 ${hovering && "scale-110"}`}
        src={background_url}
        alt={`${company_name}_bg`}
        width={4000}
        height={3000}
      />
    </motion.div>
  );
};

export default ExperienceCard;
