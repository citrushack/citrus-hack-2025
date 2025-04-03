"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import ticket from "@/public/assets/ticket2.svg";

const AboutCard = ({ text }: { text: ReactNode }) => {
  return (
    <motion.div
      className="md:w-30 md:h-30 relative h-28 w-28 lg:h-48 lg:w-48"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.div
        className="relative z-0 flex h-full items-center justify-center text-sm font-bold text-citrus-yellow md:text-3xl"
        animate={{
          scale: [1, 1.05, 1],
          textShadow: [
            "0 0 5px #FFA500",
            "0 0 20px #FFA500",
            "0 0 5px #FFA500",
          ],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Image
          src={ticket}
          alt="ticket"
          className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 scale-110"
        />
        {text}
      </motion.div>
      <div className="absolute inset-0 w-fit rounded bg-gradient-to-br from-transparent to-black/30" />
    </motion.div>
  );
};

export default AboutCard;
