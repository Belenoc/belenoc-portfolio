"use client";

import { LuLanguages } from "react-icons/lu";
import { BrandIcon, MoonIcon, SunIcon } from "@/icons";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, lang, setLang } = useTranslation();

  return (
    <header className="w-full overflow-x-hidden h-[4.5rem] flex justify-center bg-white/70 dark:bg-pdark/70 fixed top-0 left-0 z-50 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 subpixel-antialiased">
      <nav className="w-full h-full flex items-center justify-between py-1 px-5 max-w-5xl xl:max-w-7xl">
        <div className="flex items-center gap-2">
          <BrandIcon className="text-sblue dark:text-sgreen text-xl" />
          <span className="dark:text-plight text-lg font-semibold text-pdark">
            Belenoc
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="w-9 h-9 flex items-center justify-center rounded-full text-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            title={lang === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
          >
            <LuLanguages />
          </button>
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full text-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
