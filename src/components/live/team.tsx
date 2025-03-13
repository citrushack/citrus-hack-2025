"use client";

// import Title from "@/components/ui/title";
import { motion } from "framer-motion";
import { boardmembers } from "@/data/board";
import Image from "next/image";

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
        <p className="px-4 text-sm font-bold tracking-wider text-white sm:text-xl md:text-3xl lg:text-4xl">
          {"ROLLING CREDITS • ".repeat(40)}
        </p>
      </motion.div>

      <div className="relative mt-12 flex justify-center pb-1 text-center text-3xl font-bold text-white">
        <div className="relative flex items-end gap-2">
          <span className="leading-none">MEET</span>
          <span className="scale-y-125 text-5xl leading-none">THE</span>
          <span className="leading-none">TEAM</span>
          <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-white"></div>
        </div>
      </div>

      <div
        className="mx-auto grid w-5/6 place-content-center justify-center gap-x-32 sm:gap-x-28"
        id="team"
      >
        <div className="col-span-2 my-4 mt-12 grid grid-cols-2 gap-x-32 sm:col-span-4 sm:gap-x-28 lg:col-span-6">
          {boardmembers.slice(0, 2).map(({ name, role, img }) => (
            <motion.div
              key={name}
              className="text-center font-rubiks text-white"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={img}
                width={128}
                height={128}
                alt={name}
                className="mx-auto h-32 w-32 rounded-full"
              />
              <div>{role}</div>
              <div>{name}</div>
              <div></div>
            </motion.div>
          ))}
        </div>

        <div className="col-span-2 my-6 grid grid-cols-2 gap-x-32 sm:col-span-4 sm:grid-cols-4 sm:gap-x-28 lg:col-span-6">
          {boardmembers.slice(2).map(({ name, role, img }) => (
            <motion.div
              key={name}
              className="my-4 text-center font-rubiks text-white"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={img}
                width={128}
                height={128}
                alt={name}
                className="mx-auto h-32 w-32 rounded-full"
              />
              <div>{role}</div>
              <div>{name}</div>
              <div></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
