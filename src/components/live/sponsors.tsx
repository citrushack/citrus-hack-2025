import Image from "next/image";

import screen from "@/public/assets/sponsors/screen.svg";
import curtain from "@/public/assets/sponsors/sponsorcurtain.svg";
import right from "@/public/assets/sponsors/rspotlight.svg";
import left from "@/public/assets/sponsors/lspotlight.svg";

const Sponsors = () => {
  return (
    <div className="relative my-[15%] flex h-full items-center justify-center">
      <Image src={curtain} alt="curtain" className="z-10 w-full" />
      <div className="absolute inset-0 z-0">
        <Image src={screen} alt="screen" className="w-full" />
        <Image
          src={left}
          alt="left spotlight"
          className="absolute left-6 top-24 w-fit"
        />
        <Image
          src={right}
          alt="right spotlight"
          className="absolute -right-5 top-0 w-fit rotate-6"
        />
      </div>
    </div>
  );
};

export default Sponsors;
