"use client";

import { IExperienceCard } from "@/shared/models/global.interfaces";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink, LuX } from "react-icons/lu";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const LOGO_BRIGHT: Record<string, string> = {
  "Twilio": "brightness-0 invert",
  "Instaleap": "brightness-0 invert",
  "APG-Consulting": "brightness-0 invert",
};

interface ExperienceModalProps {
  experience: IExperienceCard;
  onClose: () => void;
}

const ExperienceModal = ({ experience, onClose }: ExperienceModalProps) => {
  const { t } = useTranslation();
  const {
    company_logo,
    company_name,
    position_name,
    dates,
    url_site,
    background_url,
    responsibilities,
  } = experience;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={background_url}
            alt=""
            width={4000}
            height={3000}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-200"
          >
            <LuX className="text-lg" />
          </button>

          <div className="relative z-[1] p-8 flex flex-col items-center text-center">
            <img
              className={`w-48 h-16 object-contain ${LOGO_BRIGHT[company_name] ?? ""}`}
              src={typeof company_logo === "string" ? company_logo : company_logo.src}
              alt={company_name}
            />

            <h3 className="text-xl font-bold text-white mt-6">{position_name}</h3>
            <span className="text-white/50 text-sm mt-1">{dates}</span>

            <div className="w-12 h-0.5 bg-white/10 rounded-full my-6" />

            <ul className="text-left text-white/80 text-sm space-y-3 leading-relaxed w-full">
              {responsibilities?.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sgreen shrink-0" />
                  <span>{t(r)}</span>
                </li>
              ))}
            </ul>

            <Link
              href={url_site}
              target="_blank"
              className="mt-6 py-2.5 px-6 bg-white/90 text-pdark font-medium rounded-full flex items-center gap-2 hover:bg-sgreen hover:scale-105 active:scale-95 transition-all duration-200 text-sm shadow-sm"
            >
              Visit {company_name}
              <LuExternalLink className="text-xs" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceModal;
