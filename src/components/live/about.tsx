"use client";

import camera from "../../../public/assets/camera_black.svg";
import wheel from "../../../public/assets/wheel.svg";
import board from "../../../public/assets/board.svg";
import boxes from "../../../public/assets/boxes.svg";
import Image from "next/image";
const images = [
  { img: camera, alt: "camera" },
  { img: wheel, alt: "wheel" },
  { img: board, alt: "board" },
];
const About = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-10 overflow-hidden font-lily">
      <div className="hidden w-full gap-3 md:block">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="grid w-full grid-cols-6 justify-between">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Image
                key={idx}
                src={images[(index + idx) % images.length].img}
                alt={images[(index + idx) % images.length].alt}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="block w-full md:hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="grid w-full grid-cols-4 justify-between gap-4"
          >
            {Array.from({ length: 4 }).map((_, idx) => (
              <Image
                key={idx}
                src={images[(index + idx) % images.length].img}
                alt={images[(index + idx) % images.length].alt}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 flex w-2/3 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 bg-black p-5 text-white md:w-1/3">
        <Image
          src={boxes}
          alt="boxes"
          className="w-full rounded-tl-[40px] md:rounded-tl-[60px]"
        />
        <div className="w-full text-left font-kumar text-3xl text-white">
          About Us
        </div>
        <div className="text-justify font-kameron text-base md:text-lg">
          <span className="font-bold text-citrus-yellow">
            Citrus Hack&nbsp;
          </span>
          is a
          <span className="font-bold text-citrus-yellow">36-hour&nbsp;</span>
          hackathon and one of UC Riverside&apos;s largest hackathons. This
          year, we&apos;re celebrating our decade anniversary! Hackers get the
          opportunity to build a project to present to a panel of judges for
          prizes. Participants get the chance to attend workshops, network, and
          play games!
        </div>
      </div>
    </div>
  );
};

export default About;
