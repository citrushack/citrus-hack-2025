"use client";

import Image from "next/image";
import TrackCard from "./TrackCard";
import oscarTrophy from "@/public/assets/tracks/oscarTrophy.svg";
import wavyLine from "@/public/assets/tracks/wavyLine.svg";
import star from "@/public/assets/tracks/star.svg";
import prizeGold from "@/public/assets/tracks/prizeGold.svg";
import prizeSilver from "@/public/assets/tracks/prizeSilver.svg";
import prizeBronze from "@/public/assets/tracks/prizeBronze.svg";
import prizeBlue from "@/public/assets/tracks/prizeBlue.svg";
import megaphone from "@/public/assets/tracks/megaphone.svg";

const Tracks = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center gap-10 overflow-hidden font-lily"
      id="tracks"
    >
      <Image
        src={oscarTrophy}
        width={96}
        height={96}
        alt="film slate"
        className="h-48 sm:h-96"
      />
      <div className="flex w-full max-w-screen-lg items-center justify-between">
        <Image
          src={wavyLine}
          width={64}
          height={128}
          alt="film slate"
          className="hidden w-1/4 px-2 sm:flex"
        />
        <Image
          src={star}
          width={40}
          height={32}
          alt="film slate"
          className="ml-8 sm:mr-4 sm:mt-24"
        />
        <div className="text-5xl text-white md:text-6xl lg:text-8xl">
          Tracks
        </div>
        <Image
          src={star}
          width={40}
          height={32}
          alt="film slate"
          className="mr-8 sm:mb-24 sm:ml-4"
        />

        <Image
          src={wavyLine}
          width={64}
          height={128}
          alt="film slate"
          className="hidden w-1/4 scale-x-[-1] px-2 sm:flex"
        />
      </div>

      <div className="flex w-full max-w-screen-lg gap-4">
        <TrackCard name={"1st Place"} imageSrc={prizeGold} />

        <TrackCard name={"2nd Place"} imageSrc={prizeSilver} />
      </div>

      <TrackCard name={"3rd Place"} imageSrc={prizeBronze} />

      <TrackCard name={"Most Cinematic"} imageSrc={prizeBlue} />

      <div className="flex gap-4 sm:gap-16">
        <TrackCard name={"Most Entertaining"} imageSrc={prizeBlue} />
        <TrackCard name={"Most Sustainable"} imageSrc={prizeBlue} />
      </div>

      <div className="flex gap-4">
        <TrackCard name={"Best UI/UX"} imageSrc={prizeBlue} />
        <Image
          src={megaphone}
          width={40}
          height={32}
          alt="prize"
          className="mx-2 hidden w-1/4 sm:flex"
        />
        <TrackCard name={"Best Hardware"} imageSrc={prizeBlue} />
      </div>

      <div className="flex gap-4 sm:gap-16">
        <TrackCard name={"Best Social Impact"} imageSrc={prizeBlue} />
        <TrackCard name={"Best Community"} imageSrc={prizeBlue} />
      </div>
    </div>
  );
};

export default Tracks;
