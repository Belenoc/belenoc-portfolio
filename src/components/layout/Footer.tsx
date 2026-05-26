"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center max-w-5xl px-5 xl:max-w-7xl mb-8"
    >
      <div className="w-full bg-white dark:bg-raisin-black rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-5 shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800">
        <div className="flex flex-col items-center sm:items-start text-sm text-gray-500 dark:text-gray-400">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.powered")}</p>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <a
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            href="mailto:jesusgabo04@gmail.com"
            title="Email me"
          >
            <MdOutgoingMail />
          </a>
          <a
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            href="https://github.com/Belenoc"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            href="https://www.linkedin.com/in/belenoc/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
