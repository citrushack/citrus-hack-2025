import smallRoller from "@/public/assets/smallRoller.svg";
import Image from "next/image";
import chair from "@/public/assets/chair.svg";
import bigRoller from "@/public/assets/bigRoller.svg";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import popChair from "@/public/assets/popChair.svg";
import rollerCorner from "@/public/assets/cornerRoller.svg";
const Footer = () => {
  return (
    <div className="relative flex gap-2 py-2 font-lily text-white">
      <Image
        src={smallRoller}
        alt="smallRoller"
        className="absolute max-lg:bottom-[80%] max-lg:left-[60%] max-sm:bottom-[150%] max-sm:left-[60%] sm:bottom-[98%] sm:left-[45%] md:w-[13%] lg:bottom-[90%] lg:left-[40%]"
      />

      <div className="px-10 max-sm:hidden md:w-1/6 lg:w-1/3">
        <Image
          src={bigRoller}
          alt="bigRoller"
          className="absolute left-[20%] top-[40%] sm:w-[20%] md:w-1/6"
        />
      </div>

      <div className="absolute left-[37%] top-[74%] z-20 flex rotate-[-40deg] space-x-5 max-sm:hidden">
        <Instagram size={45} />
        <Linkedin size={45} />
        <Mail size={45} />
      </div>
      <div className="relative w-full">
        <div className="absolute max-lg:bottom-[80%] max-lg:left-[40%] max-lg:w-1/3 lg:bottom-[75%] lg:left-[40%] lg:w-1/3">
          <Image src={popChair} alt="popChair" className="" />
        </div>

        <Image
          src={chair}
          alt="chair"
          className="flex w-full items-end justify-end justify-items-end"
        />

        <div className="absolute flex w-fit max-sm:left-[60%] max-sm:top-[75%] max-sm:text-xs sm:top-[70%] md:left-[70%] md:top-[82%] md:text-xs lg:left-[70%] lg:top-[82%] lg:text-2xl">
          <div className="rotate-[-40deg]">
            CitrusHack Original Production
            <div className="text-center">
              Made with <span className="text-orange-500">🧡</span>
            </div>
          </div>
          <Image
            src={rollerCorner}
            alt="rollerCorner"
            className="absolute max-lg:left-[50%] max-lg:top-[50%] max-lg:w-[71%] max-md:left-[61%] max-md:w-[81%] max-sm:left-[40%] max-sm:top-[150%] max-sm:w-[30%] sm:-top-[120%] sm:left-[30%] sm:-my-6 sm:w-1/6 md:left-[48%] md:top-[130%] md:w-[80%] lg:left-[45%] lg:top-[40%] lg:-my-0 lg:w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
