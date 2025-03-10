"use client";

import { useState } from "react";
import Status from "./status";
import Questions from "./questions";
import Confirmation from "./confirmation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import LOGO from "@/app/favicon.ico";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import filmTop from "@/public/assets/filmroll1.svg";
import filmLeft from "@/public/assets/filmroll2.svg";
import filmBottom from "@/public/assets/filmroll3.svg";

const Form = ({
  object,
  setObject,
  header,
  fields,
  onSubmit,
  statuses = {},
  bypass = false,
  packet = false,
}) => {
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState(
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1,
  );

  return (
    <div className="overflow-scroll-y flex h-full w-full flex-col items-center font-kumar">
      <div className="z-20 mt-4 flex w-full flex-row justify-end space-x-4 p-3">
        <Button variant="citrus" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button
          variant="citrus"
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
        >
          Sign Out
        </Button>
      </div>
      <div className="absolute inset-0 z-0 hidden h-full w-full md:block">
        <Image
          src={filmTop}
          alt="film top"
          className="absolute -left-4 -top-1/2 w-full max-w-none rotate-6 animate-[pulse_8s_infinite]"
        />
        <Image
          src={filmLeft}
          alt="film left"
          className="animate-[pulse_7s_infinite absolute -left-20 -top-[50%] -z-10 w-full max-w-none -rotate-[12deg]"
        />
        <Image
          src={filmBottom}
          alt="film bottom"
          className="animate-[pulse_9s_infinite absolute top-[150%] w-full max-w-none"
        />
      </div>
      <div className="flex w-10/12 flex-col items-center justify-start pb-12 pt-5 md:w-1/2 xl:w-1/3">
        <Image src={LOGO} className="z-20 m-4 w-1/4" alt="Logo" />
        <p className="z-20 m-0 w-full rounded-t bg-citrus-darkred px-4 py-4 text-xl font-semibold text-white">
          {header}
        </p>

        <div className="relative z-20 rounded-b bg-transparent p-8 font-kumar text-white backdrop-blur-3xl">
          <div className="grid grid-cols-1 gap-3">
            {state === 0 ? (
              <Status object={object} statuses={statuses} setState={setState} />
            ) : state === 1 ? (
              <Questions
                loading={loading}
                setLoading={setLoading}
                object={object}
                setObject={setObject}
                fields={fields}
                onSubmit={onSubmit}
                setState={setState}
                packet={packet}
              />
            ) : (
              <Confirmation />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
