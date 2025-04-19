"use client"
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

      <div className="relative mx-auto mt-10 flex w-full flex-col items-center">
        <div className="grid w-1/2 grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
          {JUDGES.map(({ name, role, img }) => (
            <Profile key={name} name={name} role={role} image={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Judges;
