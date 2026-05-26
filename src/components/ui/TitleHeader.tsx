"use client";

import { motion } from "framer-motion";

interface TitleHeaderProps {
  title: string;
  subtitle?: string;
}

const TitleHeader = ({ title, subtitle }: TitleHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-start gap-1"
    >
      <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default TitleHeader;
