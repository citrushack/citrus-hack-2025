import Countdown from "@/components/ui/countdown";
import LandingAssets from "./landing-assets";
import TextStroke from "./text-stroke";

const Landing = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-20 md:py-[5%]">
      <div className="relative z-0 flex w-3/4 flex-col items-center gap-4 rounded-2xl border-[15px] border-black bg-citrus-beige px-5 py-10 md:border-[15px] md:py-14">
        <MarqueeLights />
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
          color="text-outline-red text-center text-3xl text-citrus-yellow md:text-4xl"
          subColor="text-center text-3xl text-citrus-yellow md:text-4xl"
        />

        <div className="bg-beige text-outline-yellow w-11/12 rounded-2xl border-[6px] border-citrus-red-100 py-2 text-center text-6xl text-citrus-red-100 shadow-md md:w-3/4 md:text-8xl">
          Citrus Hack
        </div>
        <div className="mt-2 flex flex-col gap-4 text-center text-2xl md:text-4xl">
          <TextStroke
            title="Released in"
            color={"text-outline-red text-center text-white text-5xl"}
            subColor="text-center text-white text-5xl"
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

const MarqueeLights = () => {
  const generateLights = () => {
    const lights = [];
    const topLightCount = 12;
    const sideLightCount = 8;

    for (let i = 0; i < topLightCount; i++) {
      lights.push(
        <div
          key={`top-${i}`}
          className="marquee-light"
          style={{
            top: 0,
            left: `${(i / (topLightCount - 1)) * 100}%`,
            animationDelay: `${i * 0.06}s`,
          }}
        />,
      );
    }

    for (let i = 0; i < topLightCount; i++) {
      lights.push(
        <div
          key={`bottom-${i}`}
          className="marquee-light"
          style={{
            bottom: 0,
            left: `${(i / (topLightCount - 1)) * 100}%`,
            animationDelay: `${i * 0.06}s`,
          }}
        />,
      );
    }

    for (let i = 0; i < sideLightCount; i++) {
      lights.push(
        <div
          key={`left-${i}`}
          className="marquee-light"
          style={{
            left: 0,
            top: `${((i + 1) / (sideLightCount + 1)) * 100}%`,
            animationDelay: `${(i + topLightCount) * 0.06}s`,
          }}
        />,
      );
    }

    // Right side lights
    for (let i = 0; i < sideLightCount; i++) {
      lights.push(
        <div
          key={`right-${i}`}
          className="marquee-light"
          style={{
            right: 0,
            top: `${((i + 1) / (sideLightCount + 1)) * 100}%`,
            animationDelay: `${(i + topLightCount + sideLightCount) * 0.06}s`,
          }}
        />,
      );
    }

    return lights;
  };

  return <div className="marquee-container">{generateLights()}</div>;
};
