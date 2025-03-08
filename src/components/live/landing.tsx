import Countdown from "@/components/ui/countdown";
import LandingAssets from "./landing-assets";
import TextStroke from "./text-stroke";
import CinemaLights from "./cinema-lights";

const Landing = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-20 md:py-[5%]">
      <div className="relative z-0 flex w-3/4 flex-col items-center gap-4 rounded-2xl border-[10px] border-black bg-citrus-beige px-5 py-10 md:border-[22px] md:py-14">
        <CinemaLights />
        {/* <div className="absolute -top-[50%] left-0 w-full z-20">
          <Image src={cut} alt="cut" className="w-full" />
        </div> */}

        {/* <div className="absolute -top-[5.625%] sm:-top-[6.625%] md:-top-[10%] lg:-top-[11.45%]">
          <div className="relative flex h-16 w-16 flex-col items-center justify-center rounded-full bg-citrus-red-200 text-white md:h-32 md:w-32">
            <span className="absolute -left-4 h-1 w-1 rounded-full bg-gray-300 md:h-2 md:w-2" />
            <div>LOGO</div>
            <span className="absolute -right-4 h-1 w-1 rounded-full bg-gray-300 md:h-2 md:w-2" />
          </div>
        </div> */}
        <TextStroke
          title="The Golden Age of"
          color="text-outline-red text-center text-2xl text-citrus-yellow md:text-4xl"
          subColor="text-center text-2xl text-citrus-yellow md:text-4xl"
        />

        <div className="bg-beige text-outline-yellow w-11/12 rounded-2xl border-[6px] border-citrus-red-100 py-2 text-center text-6xl text-citrus-red-100 shadow-md md:w-3/4 md:text-8xl">
          Citrus Hack
        </div>
        <div className="mt-2 flex flex-col gap-4 text-center text-2xl md:text-4xl">
          <TextStroke
            title="Released in"
            color={
              "text-outline-red text-center text-white text-2xl md:text-5xl"
            }
            subColor="text-center text-white text-2xl md:text-5xl"
          />
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
      <LandingAssets />
    </div>
  );
};

export default Landing;
