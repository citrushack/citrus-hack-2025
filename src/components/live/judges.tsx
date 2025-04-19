"use client";
import { motion } from "framer-motion";
import { boardmembers } from "@/data/live/board";
import Image from "next/image";
import filmSlate from "@/public/assets/filmSlate.svg";
import Profile from "./team/profile";
import { JUDGES } from "@/data/live/judges";
const Judges = () => {
  return (
    <div id="judges" className="mt-20 w-full overflow-hidden">
      <div className="relative mt-12 flex justify-center pb-1 text-center text-3xl font-bold text-white">
        <div className="relative flex items-end justify-start gap-2">
          <span className="leading-none">MEET</span>
          <span className="scale-y-125 text-5xl leading-none">THE</span>
          <span className="leading-none">JUDGES</span>
          <div className="absolute -bottom-2 left-0 right-0 h-px bg-white"></div>
        </div>
      </div>

      <div className="relative mx-auto flex w-full flex-col items-center">
        <div className="relative mt-5 grid w-full grid-cols-2 gap-6 md:w-1/2 md:grid-cols-2 md:gap-10">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -right-16 top-4 hidden md:flex lg:-right-24 xl:-right-32 2xl:-right-40"
          >
            <Image src={filmSlate} width={128} height={128} alt="film slate" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10">
          {JUDGES.map(({ name, role, img }) => (
            <Profile key={name} name={name} role={role} image={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Judges;
