"use client";
import Image from "next/image";
import { Instagram, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

import smallRoller from "@/public/assets/smallRoller.svg";
import chair from "@/public/assets/chair.svg";
import bigRoller from "@/public/assets/bigRoller.svg";
import popChair from "@/public/assets/popChair.svg";
import rollerCorner from "@/public/assets/cornerRoller.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative flex gap-2 py-0 font-lily text-white">
      <Image
        src={smallRoller}
        alt="Small Roller"
        className="absolute hidden overflow-hidden max-lg:bottom-[80%] max-lg:left-[60%] max-sm:bottom-[150%] max-sm:left-[60%] sm:bottom-[98%] sm:left-[45%] md:block md:w-[13%] lg:bottom-[90%] lg:left-[40%]"
      />

      <div className="px-10 max-sm:hidden md:w-1/6 lg:w-1/3">
        <Image
          src={bigRoller}
          alt="Big Roller"
          className="absolute left-[20%] top-[40%] sm:w-[20%] md:w-1/6"
        />
      </div>

      <div className="relative w-full">
        <div className="absolute max-lg:bottom-[80%] max-lg:left-[40%] max-lg:w-1/3 lg:bottom-[75%] lg:left-[40%] lg:w-1/3">
          <Image src={popChair} alt="Pop Chair" className="" />
        </div>

        <div className="relative">
          <Image src={chair} alt="Chair" className="w-full" />
        </div>
        <div className="absolute right-1/2 top-[72%] z-20 flex rotate-[-40deg] space-x-5 md:top-2/3">
          <Link
            target="_blank"
            href="https://www.instagram.com/citrushack_ucr/"
          >
            <Instagram className="h-6 w-6 duration-300 hover:scale-105 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/citrushack/">
            <Linkedin className="h-6 w-6 duration-300 hover:scale-105 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          </Link>
          <Link
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&to=citrushack@gmail.com"
          >
            <Mail className="h-6 w-6 duration-300 hover:scale-105 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          </Link>
        </div>

        <div className="absolute bottom-0 w-fit translate-x-9 py-1 text-center text-xs md:translate-x-1/2 md:text-2xl">
          🍊 <br />A CitrusHack Original Production
        </div>

        <div className="absolute right-[1%] top-[78%] flex w-fit text-xs sm:top-[70%] md:left-[70%] md:top-[82%] md:text-2xl lg:left-[70%] lg:top-[80%]">
          <div className="rotate-[-40deg] text-center">
            Made with <span className="text-orange-500">🧡</span>
            <div className="text-center">By the Citrus Hack Team</div>
          </div>
        </div>

        <Image
          src={rollerCorner}
          alt="Corner Roller"
          className="absolute -bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default Footer;
