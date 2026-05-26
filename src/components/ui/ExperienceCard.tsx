"use client";

import { IExperienceCard } from "@/shared/models/global.interfaces";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { motion } from "framer-motion";

interface ExperienceCardProps extends IExperienceCard {
  onSelect: (exp: IExperienceCard) => void;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { onSelect, ...experience } = props;
  const {
    id,
    company_logo,
    company_name,
    position_name,
    dates,
    url_site,
    background_url,
  } = experience;

  const LOGO_BRIGHT: Record<string, string> = {
    "Twilio": "brightness-0 invert",
    "Instaleap": "brightness-0 invert",
    "APG-Consulting": "brightness-0 invert",
  };

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      layout
      className="group w-full h-full bg-white dark:bg-raisin-black rounded-3xl overflow-hidden relative flex flex-col shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800 cursor-pointer"
      onClick={() => onSelect(experience)}
    >
      <div className="flex flex-col items-center justify-center flex-1 px-5 py-10 relative z-[2]">
        <img
          className={`w-44 h-14 object-contain transition-all duration-300 ${LOGO_BRIGHT[company_name] ?? ""}`}
          src={typeof company_logo === "string" ? company_logo : company_logo.src}
          alt={company_name}
        />
        <p className="text-center text-white/90 mt-3 font-medium text-sm leading-relaxed">
          {position_name}
          <br />
          <span className="text-white/60 text-xs">{dates}</span>
        </p>
        <Link
          className="mt-4 py-2 px-5 bg-white/90 text-pdark font-medium rounded-full flex items-center gap-2 hover:bg-sgreen hover:scale-105 active:scale-95 transition-all duration-200 text-sm shadow-sm"
          href={url_site}
          target="_blank"
          title={`${company_name} website`}
          onClick={(e) => e.stopPropagation()}
        >
          <span>{company_name}</span>
          <LuExternalLink className="text-xs" />
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70 z-[1]" />
      <Image
        className="w-full h-full object-cover absolute left-0 top-0 z-0 transition-all duration-500 group-hover:scale-110"
        src={background_url}
        alt={`${company_name}_bg`}
        width={4000}
        height={3000}
      />
    </motion.div>
  );
};

export default ExperienceCard;
