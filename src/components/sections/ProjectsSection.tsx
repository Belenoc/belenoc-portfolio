"use client";

import { Projects } from "@/shared/utils/global-utils";
import { IProjectCard } from "@/shared/models/global.interfaces";
import ProjectCard from "@/components/ui/ProjectCard";
import TitleHeader from "@/components/ui/TitleHeader";
import { useTranslation } from "@/hooks/useTranslation";

const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleHeader
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />
      <section className="w-full grid grid-cols-12 gap-4 auto-rows-auto">
        {Projects.map((project: IProjectCard) => (
          <div
            key={project.id}
            className={`col-span-12 min-h-[320px] ${
              project.index === 1
                ? "lg:col-span-6 lg:row-span-2"
                : "lg:col-span-3"
            }`}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </section>
    </>
  );
};

export default ProjectsSection;
