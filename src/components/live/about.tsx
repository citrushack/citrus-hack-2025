"use client";

import { motion } from "framer-motion";
import Title from "@/components/ui/title";

const About = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="relative flex h-screen items-center justify-center overflow-hidden"
      id="about"
    >
      <motion.div
        className="absolute h-64 w-64 rounded-full bg-gradient-to-r from-citrus-yellow to-citrus-yellow/10 blur-3xl"
        variants={pulseVariants}
        animate="pulse"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        className="z-10 text-center"
      >
        <motion.div variants={titleVariants}>
          <Title>Coming Soon</Title>
        </motion.div>
        <motion.p
          className="mt-6 text-lg tracking-wider text-white md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Something amazing is in the works
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
