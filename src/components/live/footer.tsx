import smallRoller from "@/public/assets/smallRoller.svg";
import Image from "next/image";
import chair from "@/public/assets/chair.svg";
import bigRoller from "@/public/assets/bigRoller.svg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative flex gap-2 py-2 font-lily text-3xl text-white">
      <Image
        src={smallRoller}
        alt="smallRoller"
        className="absolute bottom-[90%] left-[40%]"
      />

      <div className="w-1/3 px-10">
        <Image
          src={bigRoller}
          alt="bigRoller"
          className="absolute left-[20%] top-[40%]"
        />
      </div>
      <div className="absolute left-[37%] top-[74%] z-20 flex rotate-[-40deg] space-x-5">
        <FaInstagram size={45} />
        <FaLinkedin size={45} />
        <FaEnvelope size={45} />
      </div>
      <div className="relative w-full">
        <Image
          src={chair}
          alt="chair"
          className="flex w-full items-end justify-end justify-items-end"
        />

        <div className="absolute left-[70%] top-[80%] flex w-fit rotate-[-40deg] text-xl">
          <div>
            CitrusHack Original Production
            <div className="text-center">
              Made with <span className="text-orange-500">🧡</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
