"use client";

import InfinityScroll from "@/components/ui/InfinityScroll";
import TitleHeader from "@/components/ui/TitleHeader";
import { useTranslation } from "@/hooks/useTranslation";

const TechSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleHeader
        title={t("tech.title")}
        subtitle={t("tech.subtitle")}
      />
      <section className="w-full h-52 max-w-5xl xl:max-w-7xl text-base">
        <InfinityScroll />
      </section>
    </>
  );
};

export default TechSection;
