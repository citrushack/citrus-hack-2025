"use client";
import Image from "next/image";
import redCarpet from "@/public/assets/redCarpet.svg";
import chair from "@/public/assets/chair.svg";
import popChair from "@/public/assets/popChair.svg";
import rollerCorner from "@/public/assets/cornerRoller.svg";
import { Instagram, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import smallRoller from "@/public/assets/smallRoller.svg";
import bigRoller from "@/public/assets/bigRoller.svg";

const Footer = () => {
  return (
    <div className="relative flex py-0 font-lily text-white">
      <div className="">
        <Image
          src={bigRoller}
          alt="Big Roller"
          className="absolute left-1/3 top-1/2 max-sm:hidden md:w-1/6"
        />
      </div>

      <div className="relative w-full justify-items-end">
        <Image src={redCarpet} alt={redCarpet} className="w-fit" />
      </div>
      <div className="">
        <Image
          src={chair}
          alt={chair}
          className="absolute max-sm:left-1/2 max-sm:top-[35%] max-sm:h-[45%] max-sm:w-[45%] md:left-1/2 md:top-1/3 md:h-[50%] md:w-[50%] lg:left-2/3 lg:top-1/3 lg:w-fit"
        />
      </div>
      <div>
        <Image
          src={popChair}
          alt={popChair}
          className="absolute w-[25%] max-sm:left-[55%] max-sm:top-1/3 lg:left-[60%] lg:top-1/3"
        />
      </div>
      <div>
        <Image
          src={rollerCorner}
          alt={rollerCorner}
          className="absolute overflow-hidden max-sm:bottom-0 max-sm:right-0 max-sm:h-[10%] max-sm:w-[10%] md:top-[88%] md:h-[12%] md:w-[12%] lg:left-[88%] lg:top-[88%]"
        />
      </div>

      <div className="absolute max-sm:-right-1 max-sm:bottom-[7%] max-sm:text-xxs md:left-[80%] md:top-[85%] md:text-xs lg:left-[80%] lg:top-[83%] lg:text-xl">
        <div className="rotate-[-40deg] text-center">
          Made with <span className="text-orange-500">🧡</span>
          <div className="text-center">By the Citrus Hack Team</div>
        </div>
      </div>

      <div className="absolute w-fit py-1 text-center max-sm:bottom-1 max-sm:right-1/3 max-sm:text-xxs md:bottom-0 md:right-1/3 md:text-xl lg:bottom-0 lg:left-[40%]">
        🍊 <br />A Citrus Hack Original Production
      </div>

      <div className="absolute z-20 flex rotate-[-40deg] space-x-5 max-sm:bottom-1/4 max-sm:left-1/3 md:left-[40%] md:top-[80%] lg:left-1/2 lg:top-[80%]">
        <Link target="_blank" href="https://www.instagram.com/citrushack_ucr/">
          <Instagram className="duration-300 hover:scale-105 max-sm:h-5 max-sm:w-5 md:h-8 md:w-8 lg:h-12 lg:w-12" />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/citrushack/">
          <Linkedin className="duration-300 hover:scale-105 max-sm:h-5 max-sm:w-5 md:h-8 md:w-8 lg:h-12 lg:w-12" />
        </Link>
        <Link
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&to=citrushack@gmail.com"
        >
          <Mail className="duration-300 hover:scale-105 max-sm:h-5 max-sm:w-5 md:h-8 md:w-8 lg:h-12 lg:w-12" />
        </Link>
      </div>

      <div>
        <Image
          src={smallRoller}
          alt={smallRoller}
          className="absolute max-md:h-[10%] max-md:w-[10%] max-sm:left-[58%] max-sm:top-[30%] max-sm:h-[10%] max-sm:w-[10%] md:bottom-[60%] md:left-[60%] lg:bottom-[60%] lg:left-[60%] lg:h-[12%] lg:w-[12%]"
        />
      </div>
    </div>
  );
};

export default Footer;
