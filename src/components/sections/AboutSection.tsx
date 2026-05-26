"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Image from "next/image";
import { MdAutoGraph } from "react-icons/md";
import darkMap from "@/assets/darkMap.png";
import face from "@/assets/personal-3.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const pulseTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.015 }}
        className="row-span-1 col-span-6 rounded-3xl bg-white dark:bg-raisin-black relative flex flex-col overflow-hidden p-7 dark:bg-sgreen dark:text-pdark xl:col-span-3 lg:p-[35px] shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800 items-center justify-center"
      >
        <h2 className="text-2xl font-bold z-[1]">{t("about.title")}</h2>
        <p className="text-base w-full z-[1] text-center leading-relaxed mt-2 opacity-70">
          {t("about.bio")}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        className="row-span-1 col-span-3 rounded-3xl bg-white dark:bg-raisin-black relative flex flex-col overflow-hidden gap-2 items-center justify-center xl:col-span-1 shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800"
      >
        <p className="text-6xl lg:text-7xl z-[1] font-bold flex items-center gap-1">
          <span>+</span>
          <AnimatedCounter from={0} to={5} />
        </p>
        <p className="text-sm lg:text-base font-semibold opacity-70 z-[1]">
          {t("about.years")}
        </p>
        <MdAutoGraph className="w-full h-full absolute -right-10 -bottom-12 opacity-5 dark:opacity-10 p-5 z-[0]" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        className="row-span-1 col-span-3 rounded-3xl bg-white dark:bg-raisin-black overflow-hidden xl:col-span-2 flex items-center justify-center relative shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800"
      >
        <Image
          className="absolute w-full h-full object-cover z-[1]"
          src={darkMap}
          alt="Location"
          title="Location"
        />
        <div className="absolute inset-0 bg-pdark/80 z-[2]" />
        <Image
          className="w-16 h-16 object-cover z-[4] rounded-full ring-2 ring-white/30"
          src={face}
          alt="memoji"
          title="memoji"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={pulseTransition}
          className="w-24 h-24 bg-[#98d0ff] absolute z-[3] rounded-full opacity-30 border-2 border-white/50"
        />
        <div className="w-full h-10 backdrop-blur-md bg-black/30 absolute left-0 bottom-0 z-[4] flex items-center justify-center">
          <span className="text-xs font-medium text-plight/90">
            {t("about.location")}
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default AboutSection;
