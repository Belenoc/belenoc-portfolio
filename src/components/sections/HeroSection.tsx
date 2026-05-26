"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import { MdOutgoingMail } from "react-icons/md";
import SocialLink from "@/components/ui/SocialLink";
import { motion } from "framer-motion";
import photo from "@/assets/personal-2.jpg";
import { ISocialLink } from "@/shared/models/global.interfaces";
import { useTranslation } from "@/hooks/useTranslation";

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

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="row-span-2 col-span-6 rounded-3xl bg-white dark:bg-raisin-black relative flex flex-col overflow-hidden xl:col-span-3 lg:items-end sm:flex-row shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800"
    >
      <Image
        className="absolute w-full h-full object-cover left-0 top-0"
        src={photo}
        alt="personal"
        title="Personal"
        width={4000}
        height={3000}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[2]" />
      <div className="w-full flex flex-col z-[3] absolute bottom-0 left-0 p-6 lg:p-8">
        <span className="text-3xl font-bold leading-tight text-white">
          {t("hero.name")}
        </span>
        <span className="text-lg font-medium text-white/80">
          {t("hero.title")}
        </span>
        <div className="flex flex-wrap items-center gap-2 mt-3 lg:gap-3">
          {socialLinks.map((link) => (
            <SocialLink key={link.href} {...link}>
              {link.children}
            </SocialLink>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
