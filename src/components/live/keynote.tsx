"use client";

import { motion } from "framer-motion";
import TextStroke from "./text-stroke";
import Image from "next/image";
import { KEYNOTE } from "@/data/live/keynote";

const Keynote = () => {
  return (
    <div className="my-[10%] flex max-h-screen flex-col items-center gap-6 p-4">
      <div
        id="keynote"
        className="flex w-3/4 flex-col items-center rounded-lg border-4 border-black bg-citrus-beige p-0 py-7 pl-0 text-center font-lily *:gap-2 md:w-2/5 md:p-6 md:pl-2"
      >
        <TextStroke
          title="Keynote Speakers"
          color="text-outline-red text-center text-3xl text-white md:text-6xl"
          subColor="text-center text-3xl text-white md:text-6xl"
        />
        <div className="mt-3">
          <TextStroke
            title="Feature Presentations"
            color="text-outline-red text-center text-xl text-citrus-yellow md:text-3xl"
            subColor="text-center text-xl text-citrus-yellow md:text-3xl"
          />
        </div>
      </div>
      <div className="mt-3 grid w-full grid-cols-2 md:mt-[10vh] md:w-5/6 md:grid-cols-3">
        {KEYNOTE.map(({ name, title, img }, index) => (
          <motion.div
            key={index}
            className="my-4 gap-3 text-center font-rubiks text-white"
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className="relative mx-auto h-36 w-36 md:h-64 md:w-64"
              variants={{
                hover: {
                  scale: 1.05,
                  transition: { duration: 0.9 },
                },
              }}
            >
              <motion.div
                className="absolute -inset-0 rounded-full opacity-0"
                variants={{
                  hover: {
                    opacity: 0.7,
                    boxShadow: "0 0 25px 5px rgba(255, 215, 0, 0.7)",
                    transition: {
                      duration: 1.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  },
                }}
              />
              <Image
                src={img}
                alt={name}
                className="w-64 rounded-full border-2 border-citrus-yellow object-cover"
              />
            </motion.div>
            <div className="mt-2 text-center md:mt-4">
              <p className="text-lg md:text-2xl">{name}</p>
              <p className="text-base md:text-lg">{title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Keynote;
