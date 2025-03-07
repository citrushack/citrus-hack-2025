import Countdown from "@/components/ui/countdown";

import LandingBottom from "./landingassets";

const Landing = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-[5%]">
      <div className="relative flex w-3/4 flex-col items-center gap-4 rounded-2xl border-8 border-black bg-citrus-beige px-5 py-14 md:border-[15px]">
        <div className="absolute -top-[5.625%] sm:-top-[6.625%] md:-top-[10%] lg:-top-[11.45%]">
          <div className="relative flex h-16 w-16 flex-col items-center justify-center rounded-full bg-citrus-red-200 text-white md:h-32 md:w-32">
            <span className="absolute -left-4 h-1 w-1 rounded-full bg-gray-300 md:h-2 md:w-2" />
            <div>LOGO</div>
            <span className="absolute -right-4 h-1 w-1 rounded-full bg-gray-300 md:h-2 md:w-2" />
          </div>
        </div>
        <div className="text-outline-red text-center text-3xl text-citrus-yellow md:text-4xl">
          The Golden Age of
        </div>
        <div className="bg-beige text-outline-yellow w-11/12 rounded-2xl border-[6px] border-citrus-red-100 py-2 text-center text-6xl text-citrus-red-100 shadow-md md:w-3/4 md:text-8xl">
          Citrus Hack
        </div>
        <div className="flex flex-col gap-4 text-center text-2xl md:text-4xl">
          <div className="text-outline-red text-center text-white">
            Released in
          </div>
          <div>Winston Chung Hall</div>
          <div className="text-citrus-red-200">-- SHOW TIME --</div>
          <div>April 19-20 2025</div>
        </div>
        <Countdown
          classNames={{
            digit: "text-citrus-red-100",
            background: "bg-transparent",
            unit: "text-black",
          }}
        />
      </div>
      {/* <div className=" grid grid-cols-2 my-20 text-citrus-yellow justify-items-center w-1/5 gap-4">
        <div>participant</div>
        <div>participant</div>
        <div>participant</div>
        <div>participant</div>
      </div> */}
      <LandingBottom />
    </div>
  );
};

export default Landing;
