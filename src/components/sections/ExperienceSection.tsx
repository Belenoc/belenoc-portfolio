"use client";

import { useState } from "react";
import { Experiences } from "@/shared/utils/global-utils";
import { IExperienceCard } from "@/shared/models/global.interfaces";
import ExperienceCard from "@/components/ui/ExperienceCard";
import ExperienceModal from "@/components/ui/ExperienceModal";
import TitleHeader from "@/components/ui/TitleHeader";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const ExperienceSection = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<IExperienceCard | null>(null);

  return (
    <>
      <TitleHeader
        title={t("experience.title")}
        subtitle={t("experience.subtitle")}
      />
      <section className="w-full grid grid-cols-12 gap-4 auto-rows-auto">
        <div className="col-span-12 lg:col-span-6 lg:row-span-2 min-h-[260px]">
          <ExperienceCard {...Experiences[0]} onSelect={setSelected} />
        </div>
        <div className="col-span-12 lg:col-span-3 min-h-[260px]">
          <ExperienceCard {...Experiences[1]} onSelect={setSelected} />
        </div>
        <div className="col-span-12 lg:col-span-3 min-h-[260px]">
          <ExperienceCard {...Experiences[2]} onSelect={setSelected} />
        </div>
        <div className="col-span-12 lg:col-span-3 min-h-[260px]">
          <ExperienceCard {...Experiences[3]} onSelect={setSelected} />
        </div>
        <div className="col-span-12 lg:col-span-3 min-h-[260px]">
          <ExperienceCard {...Experiences[4]} onSelect={setSelected} />
        </div>
        <div className="col-span-12 min-h-[200px]">
          <ExperienceCard {...Experiences[5]} onSelect={setSelected} />
        </div>
      </section>
      <AnimatePresence>
        {selected && (
          <ExperienceModal
            experience={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ExperienceSection;
