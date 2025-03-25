import Image from "next/image";
import { SPOMSORS } from "@/data/live/sponsor";
import screen from "@/public/assets/sponsors/screen.svg";
import curtain from "@/public/assets/sponsors/sponsorcurtain.svg";
import right from "@/public/assets/sponsors/rspotlight.svg";
import left from "@/public/assets/sponsors/lspotlight.svg";

const Sponsors = () => {
  return (
    <div className="relative mb-[13%] flex h-full flex-col items-center justify-center">
      <div className="relative w-full">
        <Image
          src={curtain}
          alt="cinema curtain"
          className="absolute left-0 top-0 z-10 w-full"
        />
        <div className="relative z-0">
          <Image
            src={screen}
            alt="cinema screen"
            className="w-full rounded-lg shadow-2xl"
          />
          <Image
            src={left}
            alt="left spotlight"
            className="absolute -left-12 -top-12 w-1/4 -rotate-12 transform opacity-70"
          />
          <Image
            src={right}
            alt="right spotlight"
            className="absolute -right-12 -top-6 w-1/4 rotate-12 transform opacity-70"
          />
        </div>
      </div>
      <div className="z-10 flex w-full flex-wrap items-center justify-center space-x-8 space-y-4 rounded-xl p-6">
        {SPOMSORS.map(({ image, alt }, index) => (
          <div
            key={index}
            className="cursor-pointer transition-transform duration-500 hover:scale-105 hover:brightness-110"
          >
            <Image src={image} alt={alt} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
