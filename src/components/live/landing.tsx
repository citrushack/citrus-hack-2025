import Countdown from "@/components/ui/countdown";
import LandingAssets from "./landing-assets";
import TextStroke from "./text-stroke";
import CinemaLights from "./cinema-lights";
import Ticket from "./ticket";
import LOGO from "@/public/assets/logo/citrushack.svg";
import Image from "next/image";

const Landing = ({ complete }: { complete: boolean }) => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center pt-8 font-lily md:py-[2%]"
      id="home"
    >
      <div className="relative flex h-1/5 w-32 flex-col items-center justify-center text-white md:h-1/5 md:w-56">
        <Image src={LOGO} alt="Citrus Hack Logo" className="relative w-full" />
      </div>
      <div className="relative z-0 flex w-11/12 flex-col items-center gap-4 rounded-2xl border-[11px] border-black bg-citrus-beige px-5 py-10 font-lily md:w-2/3 md:border-[22px] md:py-14">
        <CinemaLights />
        <TextStroke
          title="The Golden Age of"
          color="text-outline-red text-center text-2xl text-citrus-yellow md:text-4xl"
          subColor="text-center text-2xl text-citrus-yellow md:text-4xl"
        />

        <div className="bg-beige text-outline-yellow w-11/12 rounded-2xl border-[6px] border-citrus-red-100 py-2 text-center text-5xl text-citrus-red-100 shadow-md md:w-3/4 md:text-8xl">
          Citrus Hack
        </div>

        <div className="mt-0 flex flex-col gap-1 text-center text-2xl md:mt-2 md:gap-4 md:text-4xl">
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
      {complete && (
        <>
          <div className="my-10 flex w-1/2 flex-wrap-reverse justify-center gap-5 md:my-16 md:w-3/5 md:gap-20 md:gap-y-14">
            <Ticket title="Volunteers" link="form/volunteer" />
            <Ticket title="Mentors" link="form/mentor" />
            <Ticket title="Dashboard" link="/user" />
          </div>

          <LandingAssets />
        </>
      )}
    </div>
  );
};

export default Landing;
