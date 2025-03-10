"use client";
import camera1 from "@/public/assets/camera1.svg";
import film1 from "@/public/assets/bigwheel.svg";
import film2 from "@/public/assets/wheel2.svg";
import board from "@/public/assets/board.svg";
import boxes from "@/public/assets/boxes.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Card from "./about-card";

const About = () => {
  return (
    <div
      id="about"
      className="relative mt-8 flex min-h-screen w-full justify-between overflow-hidden font-lily text-white md:mt-2"
    >
      <div className="container mx-auto flex w-full flex-col-reverse items-center justify-center gap-8 px-4 pt-0 md:flex-row">
        <motion.div
          className="flex-col items-center md:flex md:w-1/3"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 overflow-visible rounded-lg border-4 border-citrus-yellow p-1 shadow-lg shadow-citrus-yellow/30"
            whileHover={{ rotate: 0 }}
            initial={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="grid grid-cols-3 gap-5 p-2 text-center lg:grid-cols-2">
              <Card text={"400 \n Hackers"} />
              <Card text={"50+ \n Projects"} />
              <Card text={"10 \n Years"} />
              <Card text={"2k+ \n Prizes"} />
              <Card text={"15+ \n Workshops"} />
              <Card text={"36 \n Hours"} />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex w-full items-center justify-center md:w-1/3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative hidden aspect-square w-full items-center justify-center p-4 md:flex">
            <motion.div
              initial={{ opacity: 0.4, scale: 1 }}
              animate={{ opacity: 0.7, scale: 1.1 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
              className="absolute left-[85%] z-0 h-[150%] w-[150%] -translate-x-1/2 rounded bg-gradient-to-b from-citrus-yellow/15 to-transparent opacity-50 blur-lg"
            />

            <motion.p
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute left-[28%] top-6 w-[16%]"
            >
              <Image src={film2} alt="film 2" />
            </motion.p>
            <motion.p
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute right-[32%] top-2 w-[19%]"
            >
              <Image src={film1} alt="film 1" />
            </motion.p>
            <Image src={camera1} alt="camera" className="w-[55%]" />
            <div className="absolute bottom-12 h-10 w-60 rounded bg-citrus-red-200 opacity-70 blur-lg" />
          </div>
        </motion.div>
        <motion.div
          className="z-50 w-full overflow-hidden rounded-lg border-2 border-citrus-yellow bg-gradient-to-b from-gray-900 to-black shadow-xl shadow-citrus-yellow/20 md:w-1/3"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative h-6 bg-citrus-yellow">
            <div className="absolute bottom-0 left-0 right-0 flex h-3 justify-between">
              {Array.from({ length: 20 }).map((_, idx) => (
                <div key={idx} className="h-3 w-2 bg-black"></div>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-kumar text-3xl text-citrus-yellow md:text-5xl">
                ABOUT US
              </h2>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <Image
                  src={board}
                  alt="clapperboard"
                  className="h-16 w-16 md:h-20 md:w-20"
                />
              </motion.div>
            </div>
            <Image
              src={boxes}
              alt="boxes"
              className="mb-6 w-full rounded-lg border border-gray-800"
            />
            <div className="space-y-4 text-justify font-kameron text-base md:text-xl">
              <p>
                <span className="font-bold text-citrus-yellow">
                  Citrus Hack{" "}
                </span>
                is a
                <span className="font-bold text-citrus-yellow"> 36-hour </span>
                hackathon and one of UC Riverside&apos;s largest hackathons.
                This year, we&apos;re celebrating our{" "}
                <span className="font-bold text-citrus-yellow">
                  decade anniversary
                </span>
                !
              </p>
              <p>
                Hackers get the opportunity to build a project to present to a
                panel of judges for prizes. Participants get the chance to
                attend workshops, network, and play games!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
