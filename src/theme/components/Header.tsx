import { BrandIcon, MoonIcon, SunIcon } from "../icons";

import { GrCloudDownload } from "react-icons/gr";
import { LuLanguages } from "react-icons/lu";

const Header = () => {
  return (
    <header className="w-full overflow-x-hidden h-[5rem] flex justify-center bg-opacity-70 dark:bg-opacity-70 fixed top-0 left-0 z-10 backdrop-blur-lg subpixel-antialiased">
      <nav className="w-full h-full flex items-center justify-between py-1 px-5 max-w-5xl xl:max-w-7xl">
        <div className="flex items-center gap-2">
          <BrandIcon className="text-sblue dark:text-sgreen" />
          <span className="dark:text-plight text-lg font-semibold text-pdark">
            Belenoc
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="w-auto h-7 px-4 font-medium flex items-center gap-2 bg-pdark text-plight rounded-3xl dark:text-pdark dark:bg-plight lg:h-10 lg:px-6 cursor-pointer active:scale-[1.1] transition-all duration-300 hover:scale-110 dark:hover:bg-sgreen dark:hover:text-pdark hover:bg-sblue hover:text-plight"
            href="https://drive.google.com/file/d/1PlQmWzk9O9r5OMo061xBBJl5y26vgoUT/view?usp=sharing"
            target="_blank"
          >
            <GrCloudDownload />
            <div className="flex items-center">
              <span className="hidden lg:flex">Download &nbsp;</span>
              <span>CV</span>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
