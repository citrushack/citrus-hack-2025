"use client";

import { motion } from "framer-motion";
import TextStroke from "./text-stroke";
import Image from "next/image";
import filmSlate from "@/public/assets/filmSlate.svg";

const Keynote = () => {
  return (
    <div className="my-[10%] flex max-h-screen max-w-screen-2xl flex-col items-center justify-center p-4">
      <div
        id="keynote"
        className="flex w-3/4 flex-col gap-2 rounded-lg border-4 border-black bg-citrus-beige p-6 py-7 pl-0 text-center font-lily md:w-2/5 md:pl-2"
      >
        <TextStroke
          title="Keynote Speakers"
          color="text-outline-red text-center text-5xl text-white md:text-6xl"
          subColor="text-center text-5xl text-white md:text-6xl"
        />
        <div className="mt-5">
          <TextStroke
            title="EST. 2015"
            color="text-outline-red text-center text-5xl text-citrus-yellow md:text-3xl"
            subColor="text-center text-5xl text-citrus-yellow md:text-3xl"
          />
        </div>
      </div>
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className=""
      >
        <Image
          src={filmSlate}
          alt="film slate"
          className="scale mt-10 h-32 w-32 md:h-64 md:w-64"
        />
      </motion.div>
    </div>
  );
};

export default Keynote;
