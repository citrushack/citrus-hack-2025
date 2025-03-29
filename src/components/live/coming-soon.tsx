"use client";
import { motion } from "framer-motion";

import inner from "@/public/assets/inner.svg";
import outer from "@/public/assets/film.svg";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 py-16 md:py-5">
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="flex w-1/5 justify-center"
      >
        <Image src={outer} alt="film" />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute"
      >
        <Image src={inner} alt="wheel" />
      </motion.div>
    </div>
  );
};

export default ComingSoon;
