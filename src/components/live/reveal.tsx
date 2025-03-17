"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import left from "@/public/assets/curtainleft.svg";
import right from "@/public/assets/curtainright.svg";

const CurtainReveal = ({ onComplete }: { onComplete: () => void }) => {
  const [revealComplete, setRevealComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealComplete(true);
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-full w-1/3"
        initial={{ x: 0 }}
        animate={{ x: revealComplete ? "0%" : "-100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: revealComplete ? 2 : 0,
        }}
      >
        <Image
          src={left}
          alt="Left Curtain"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute right-0 top-0 h-full w-1/3"
        initial={{ x: 0 }}
        animate={{ x: revealComplete ? "0%" : "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: revealComplete ? 2 : 0,
        }}
      >
        <Image
          src={right}
          alt="Right Curtain"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default CurtainReveal;
