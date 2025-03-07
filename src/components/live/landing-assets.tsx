"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Seats from "@/public/assets/seats.svg";
import rolling from "@/public/assets/rolling.svg";

const LandingAssets = () => {
  return (
    <div className="relative mt-10 flex w-full flex-col">
      <Image src={Seats} alt="cinema seats" className="w-full" />
      <div className="relative z-10 w-full overflow-hidden">
        <Image
          src={rolling}
          alt="cinema credits"
          className="absolute h-full w-full object-cover"
        />
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
            {"CITRUS • ".repeat(40)}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingAssets;
