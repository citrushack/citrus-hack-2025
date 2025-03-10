"use client";

import { motion } from "framer-motion";

const AboutCard = ({ text }: { text: string }) => {
  return (
    <motion.div
      className="relative h-28 w-28 rounded border-2 border-dashed border-gray-700 bg-gray-900 md:h-40 md:w-40"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.div
        className="flex h-full items-center justify-center text-base font-bold text-citrus-yellow md:text-3xl"
        animate={{
          scale: [1, 1.1, 1],
          textShadow: [
            "0 0 5px #FFA500",
            "0 0 20px #FFA500",
            "0 0 5px #FFA500",
          ],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        {text}
      </motion.div>
      <div className="absolute inset-0 rounded bg-gradient-to-br from-transparent to-black/30" />
    </motion.div>
  );
};

export default AboutCard;
