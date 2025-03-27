"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TrackBlue from "./TrackBlue";
import oscarTrophy from "@/public/assets/tracks/oscarTrophy.svg";
import wavyLine from "@/public/assets/tracks/wavyLine.svg";
import star from "@/public/assets/tracks/star.svg";
import prizeGold from "@/public/assets/tracks/prizeGold.svg";
import prizeSilver from "@/public/assets/tracks/prizeSilver.svg";
import prizeBronze from "@/public/assets/tracks/prizeBronze.svg";
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
        <div className="flex w-full items-center justify-center gap-2">
          <Image
            src={prizeGold}
            width={40}
            height={32}
            alt="prize"
            className="mx-2"
          />
          <div className="text-center font-kameron text-lg text-white sm:text-2xl">
            1st Place
          </div>
          <Image
            src={prizeGold}
            width={40}
            height={32}
            alt="prize"
            className="mx-2 scale-x-[-1]"
          />
        </div>

        <div className="flex w-full items-center justify-center gap-2">
          <Image
            src={prizeSilver}
            width={40}
            height={32}
            alt="prize"
            className="mx-2"
          />
          <div className="text-center font-kameron text-lg text-white sm:text-2xl">
            2nd Place
          </div>
          <Image
            src={prizeSilver}
            width={40}
            height={32}
            alt="prize"
            className="mx-2 scale-x-[-1]"
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-2">
        <Image
          src={prizeBronze}
          width={40}
          height={32}
          alt="prize"
          className="mx-2"
        />
        <div className="items-center text-center font-kameron text-lg text-white sm:text-2xl">
          3rd Place
        </div>
        <Image
          src={prizeBronze}
          width={40}
          height={32}
          alt="prize"
          className="mx-2 scale-x-[-1]"
        />
      </div>

      <TrackBlue name={"Most Cinematic"} />

      <div className="flex gap-4 sm:gap-16">
        <TrackBlue name={"Most Entertaining"} />
        <TrackBlue name={"Most Sustainable"} />
      </div>

      <div className="flex gap-4">
        <TrackBlue name={"Best UI/UX"} />
        <Image
          src={megaphone}
          width={40}
          height={32}
          alt="prize"
          className="mx-2 hidden w-1/4 sm:flex"
        />
        <TrackBlue name={"Best Hardware"} />
      </div>

      <div className="flex gap-4 sm:gap-16">
        <TrackBlue name={"Best Social Impact"} />
        <TrackBlue name={"Best Community"} />
      </div>
    </div>
  );
};

export default Tracks;
