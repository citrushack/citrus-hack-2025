"use client";

import { motion } from "framer-motion";
import { boardmembers } from "@/data/board";
import Image from "next/image";
import filmSlate from "@/public/assets/filmSlate.svg";
import Profile from "./profile";

const Team = () => {
  return (
    <div className="mt-20 overflow-hidden">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
        className="flex items-center whitespace-nowrap py-4 sm:py-6 md:py-8 lg:py-10"
      >
        <p className="px-4 font-kameron text-sm font-bold tracking-wider text-white sm:text-xl md:text-3xl lg:text-5xl">
          {"LIGHTS • CODE • ACTION • ".repeat(40)}
        </p>
      </motion.div>

      <div className="relative mt-12 flex justify-center pb-1 text-center text-3xl font-bold text-white">
        <div className="relative flex items-end justify-start gap-2">
          <span className="leading-none">MEET</span>
          <span className="scale-y-125 text-5xl leading-none">THE</span>
          <span className="leading-none">TEAM</span>
          <div className="absolute -bottom-2 left-0 right-0 h-px bg-white"></div>
        </div>
      </div>

      <div
        className="relative mx-auto grid w-5/6 place-content-center justify-center gap-x-32 sm:gap-x-28"
        id="team"
      >
        <div className="relative col-span-2 mt-12 grid grid-cols-1 gap-x-32 sm:col-span-4 sm:grid-cols-2 sm:gap-x-28 lg:col-span-6">
          {boardmembers.slice(0, 2).map(({ name, role, img }) => (
            <Profile key={name} name={name} role={role} image={img} />
          ))}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -right-16 top-4 hidden md:flex lg:-right-24 xl:-right-32 2xl:-right-40"
          >
            <Image src={filmSlate} width={128} height={128} alt="film slate" />
          </motion.div>
        </div>

        <div className="col-span-2 my-6 grid grid-cols-2 gap-x-32 sm:col-span-4 sm:grid-cols-3 sm:gap-x-28 md:grid-cols-4 lg:col-span-6">
          {boardmembers.slice(2).map(({ name, role, img }) => (
            <Profile key={name} name={name} role={role} image={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
