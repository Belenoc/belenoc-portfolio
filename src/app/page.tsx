import { Experiences, Projects } from "@/shared/utils/global-utils";
import {
  IExperienceCard,
  IProjectCard,
} from "@/shared/models/global.interfaces";

import AboutMeWindow from "@/theme/components/AboutMeWindow";
import ExperienceCard from "@/theme/components/ExperienceCard";
import Footer from "@/theme/components/Footer";
import Header from "../theme/components/Header";
import InfintyScroll from "@/theme/components/InfinityScroll";
import PhotoWindow from "@/theme/components/PhotoWindow";
import ProjectCard from "@/theme/components/ProjectCard";
import TitleHeader from "@/theme/components/TitleHeader";

export default function Home() {
  return (
    <div className="w-ful select-none text-midnight flex flex-col items-center subpixel-antialiased dark:text-noon scroll-smooth gap-5 lg:gap-10 mb-10">
      <Header />
      <main className="w-full flex flex-col gap-10 items-center max-w-5xl px-5 xl:max-w-7xl mt-[9rem]">
        <section className="w-full grid auto-rows-[192px] grid-cols-6 gap-4">
          <PhotoWindow />
          <AboutMeWindow />
        </section>
        <TitleHeader
          title={"Experience"}
          subtitle={"A little about my professional career"}
        />
        <section className="w-full grid auto-rows-[260px] grid-cols-8 gap-4">
          {Experiences.map((experience: IExperienceCard) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </section>
        <TitleHeader
          title={"Technologies"}
          subtitle={"The technologies I've been working with lately"}
        />
        <section className="w-full h-40 max-w-5xl xl:max-w-7xl text-base">
          <InfintyScroll />
        </section>
        <TitleHeader
          title={"Projects"}
          subtitle={
            "Here are some projects I've worked on in the past few years."
          }
        />
        <section className='w-full grid auto-rows-[380px] lg:auto-rows-[140px] grid-cols-8 gap-4'>
          {Projects.map((project: IProjectCard) => {
            return <ProjectCard key={project.id} {...project} />
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}


