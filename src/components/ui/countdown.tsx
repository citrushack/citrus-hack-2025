"use client";
import { useState, useEffect } from "react";
import data from "@/data/config";

interface digitProps {
  value: number;
  unit: string;
  classNames: {
    unit: string;
    digit: string;
    background: string;
  };
}

const Digits = ({ value, unit, classNames }: digitProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center last:hidden sm:last:flex md:gap-6">
      <div className={`font-lily text-lg ${classNames.unit}`}>{unit}</div>
      <div className="flex items-center gap-0 font-lily lg:!gap-0">
        {value
          .toString()
          .padStart(2, "0")
          .split("")
          .map((digit, index) => (
            <div key={index}>
              <div
                className={`flex items-center justify-center rounded ${classNames.background} bg-opacity-40 text-lg ${classNames.digit} lg:text-4xl`}
              >
                {digit}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

interface countdownProps {
  classNames: {
    unit: string;
    digit: string;
    background: string;
  };
}

const Countdown = ({ classNames }: countdownProps) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = data.end.getTime() - new Date().getTime();
      if (timeLeft <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({
          days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center font-bold">
      {Object.entries(countdown).map(([unit, value], index) => (
        <Digits key={index} unit={unit} value={value} classNames={classNames} />
      ))}
    </div>
  );
};

export default Countdown;
