"use client";

import "animate.css";

import AnimatedCounter from "./AnimatedCounter";
import Image from "next/image";
import { MdAutoGraph } from "react-icons/md";
import React from "react";
import darkMap from "../../assets/darkMap.png";
import face from "../../assets/personal-3.jpg";
import { motion } from "framer-motion";

const AboutMeWindow = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="row-span-1 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 p-7 dark:bg-sgreen dark:text-pdark xl:col-span-3 lg:p-[35px]"
      >
        <h2 className="text-2xl font-bold z-[1]">About</h2>
        <p className=" text-base w-full  z-[1] text-justify">
          <span className="font-semibold">Passionate systems engineer</span>{" "}
          <span className="opacity-70">excelling in </span>
          <span className="font-semibold">cutting-edge web development</span>{" "}
          <span className="opacity-70">and </span>
          <span className="font-semibold">software support for startups.</span>{" "}
          <span className="opacity-70">
            Proficient in diverse technologies and frameworks, leveraging
            extensive expertise and a proven track record of{" "}
          </span>
          <span className="font-semibold">innovative problem-solving.</span>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="row-span-1 col-span-3 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 items-center justify-center dark:bg-raisin-black xl:col-span-1"
      >
        <p className="text-7xl z-[1] font-bold flex items-center gap-1">
          <span>+</span>
          <AnimatedCounter from={0} to={4} />
        </p>
        <p className=" text-base font-semibold max-w-fit opacity-70 z-[1]">
          Years of experience
        </p>
        <MdAutoGraph className="w-full h-full absolute -right-10 -bottom-12 opacity-5 dark:opacity-10 p-5 z-[0]" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="row-span-1 col-span-3 rounded-3xl bg-white dark:bg-raisin-black overflow-hidden border-2 border-transparent xl:col-span-2 flex items-center justify-center relative"
      >
        <Image
          className="absolute w-full h-full object-cover z-[1]"
          src={darkMap}
          alt="Location"
          title="Location"
        />
        <div className="absolute inset-0 bg-pdark opacity-80 z-[2]"></div>
        <Image className="w-16 h-16 object-cover z-[4] rounded-full" src={face} alt="memoji" title="memoji" />
        <div className="w-24 h-24 bg-[#98d0ff] absolute z-[3] rounded-full bg-opacity-30 border-2 border-white animate__animated animate__pulse animate__infinite infinite animate__fast" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-10 backdrop-blur-sm absolute left-0 bottom-0 z-[4] flex items-center justify-center text-left text-opacity-70"
        >
          <span className="text-xs font-medium text-plight">
            From Bogotá D.C, CO 🇨🇴
          </span>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutMeWindow;
