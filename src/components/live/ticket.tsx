"use client";

// import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TicketComp from "@/public/assets/ticket.svg";
import Link from "next/link";

type TicketProps = {
  title: string;
  link: string;
};

export default function Ticket({ title, link }: TicketProps) {
  // const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={link} className="w-full md:w-5/6">
      <motion.div
        className="relative flex cursor-pointer items-center justify-center overflow-hidden"
        initial={{ y: 0 }}
        animate={{
          y: [0, -5, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeOut",
          },
        }}
        whileHover={{
          scale: 1.05,
          y: -10,
          boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        // onHoverStart={() => setIsHovered(true)}
        // onHoverEnd={() => setIsHovered(false)}
      >
        <Image
          src={TicketComp}
          alt="Picture of the Ticket"
          className="w-full md:w-5/6"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center font-kumar text-sm text-[#232323] md:text-lg lg:text-2xl`}
        >
          {title}
          {/* {isHovered && (
              <motion.div 
                className="absolute top-0 left-0 w-full h-96 bg-white opacity-0"
                initial={{ opacity: 0, x: "-80%" }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  x: ["-100%", "100%", "100%"],
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            )} */}
        </div>
      </motion.div>
    </Link>
  );
}
