'use client'

import React from "react";
import { motion } from "framer-motion";

interface TitleHeaderProps {
  title: string;
  subtitle: string;
}

const TitleHeader = ({ title, subtitle }: TitleHeaderProps) => {
  return (
    <header className="w-full flex flex-col gap-2 text-center mt-7">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.3 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-sblue dark:text-sgreen"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.3 }}
        viewport={{ once: true }}
        className="opacity-70"
      >
        {subtitle}
      </motion.p>
    </header>
  );
};

export default TitleHeader;
