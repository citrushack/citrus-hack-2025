import smallRoller from "@/public/assets/smallRoller.svg";
import Image from "next/image";
import chair from "@/public/assets/chair.svg";
import bigRoller from "@/public/assets/bigRoller.svg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import popChair from "@/public/assets/popChair.svg";
import rollerCorner from "@/public/assets/cornerRoller.svg";
const Footer = () => {
  return (
    <div className="relative flex gap-2 py-2 font-lily text-3xl text-white">
      <Image
        src={smallRoller}
        alt="smallRoller"
        className="absolute max-lg:bottom-[80%] max-lg:left-[60%] md:w-1/12 lg:bottom-[90%] lg:left-[40%]"
      />

      <div className="px-10 max-sm:hidden md:w-1/6 lg:w-1/3">
        <Image
          src={bigRoller}
          alt="bigRoller"
          className="absolute left-[20%] top-[40%] sm:w-1/12 md:w-1/6"
        />
      </div>
      <div className="absolute left-[37%] top-[74%] z-20 flex rotate-[-40deg] space-x-5 max-sm:hidden">
        <FaInstagram size={45} />
        <FaLinkedin size={45} />
        <FaEnvelope size={45} />
      </div>
      <div className="relative w-full">
        <div className="absoulte left-[40%] top-[20%] w-1">
          <Image src={popChair} alt="popChair" className="" />
        </div>

        <Image
          src={chair}
          alt="chair"
          className="flex w-full items-end justify-end justify-items-end"
        />

        <div className="absolute flex w-fit max-sm:left-[60%] max-sm:top-[75%] max-sm:text-xs md:left-[70%] md:top-[82%] md:text-xs lg:left-[70%] lg:top-[82%] lg:text-2xl">
          <div className="rotate-[-40deg]">
            CitrusHack Original Production
            <div className="text-center">
              Made with <span className="text-orange-500">🧡</span>
            </div>
          </div>
          <Image
            src={rollerCorner}
            alt="rollerCorner"
            className="absolute max-lg:right-[30%] max-lg:top-[25%] max-md:left-[61%] max-sm:hidden md:left-[48%] md:top-[130%] md:w-[80%] lg:left-[45%] lg:top-[118%] lg:w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
