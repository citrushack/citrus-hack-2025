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
          transition: { duration: 0.3, ease: "easeOut" },
        }}
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
        </div>
      </motion.div>
    </Link>
  );
}
