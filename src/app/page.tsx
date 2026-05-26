import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TechSection from "@/components/sections/TechSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <div className="w-full select-none text-midnight flex flex-col items-center subpixel-antialiased dark:text-noon scroll-smooth gap-5 lg:gap-10 mb-10">
      <Header />
      <main className="w-full flex flex-col gap-10 items-center max-w-5xl px-5 xl:max-w-7xl mt-[9rem]">
        <section className="w-full grid auto-rows-[192px] grid-cols-6 gap-4">
          <HeroSection />
          <AboutSection />
        </section>
        <ExperienceSection />
        <TechSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
