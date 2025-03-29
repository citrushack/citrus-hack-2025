"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FilmProps {
  imageSrc: string;
  duration?: number;
  count?: number;
}

export default function film({
  imageSrc,
  duration = Infinity,
  count = 100,
}: FilmProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        }}
      >
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="shrink-0">
            <Image src={imageSrc} alt="nice" className="my-16" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
