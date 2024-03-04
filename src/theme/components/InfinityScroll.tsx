'use client'

import { DevTools } from "../../shared/utils/global-utils";
import { IDevToolsElement } from "../../shared/models/global.interfaces";
import { motion } from "framer-motion";

const InfinityScroll = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full h-full relative inline-flex flex-nowrap bg-white dark:bg-raisin-black rounded-3xl items-center justify-between px-10 overflow-hidden"
    >
      <div className="absolute left-0 w-28 h-full bg-gradient-to-r from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]" />
      <div className="absolute right-0 w-28 h-full bg-gradient-to-l from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]" />
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {DevTools.map((tool: IDevToolsElement) => {
            return (
              <li key={tool.id} className="mx-8">
                <img
                  className={`w-14 h-14 grayscale object-fill hover:grayscale-0 ${tool?.className}`}
                  src={tool.icon}
                  alt={tool.name}
                  title={tool.name}
                />
              </li>
            );
          })}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {DevTools.map((tool: IDevToolsElement) => {
            return (
              <li key={tool.id} className="mx-8">
                <img
                  className={`w-14 h-14 grayscale object-fill hover:grayscale-0 ${tool?.className}`}
                  src={tool.icon}
                  alt={tool.name}
                  title={tool.name}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default InfinityScroll;
