"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Seats from "@/public/assets/seats.svg";
// import CitrusCredits from "@/public/assets/rolliingcredits.svg";
import rolling from "@/public/assets/rolling.svg";

const LandingBottom = () => {
  return (
    <div className="relative mt-10 flex w-full flex-col">
      <Image src={Seats} alt="cinema seats" className="w-full" />

      {/* <div className="overflow-hidden w-full">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear"
          }}
          className="flex whitespace-nowrap"
        >
          <Image src={CitrusCredits} alt="cinema credits" className="w-full" />
          <Image src={CitrusCredits} alt="cinema credits" className="w-full" />
        </motion.div>
      </div> */}
      {/* <Image src={CitrusCredits} alt="cinema credits" className="w-full" /> */}
      <div className="relative w-full pb-4">
        <Image src={rolling} alt="cinema credits" className="absolute w-full" />
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          className="mt-8 whitespace-nowrap"
        >
          <span className="px-4 text-4xl font-bold tracking-wider text-white">
            CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS •
            CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS •
            CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS •
            CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS •
            CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS •
            CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS • CITRUS •
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingBottom;
