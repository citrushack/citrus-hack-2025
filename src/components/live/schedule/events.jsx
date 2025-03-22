"use client";
import { useState } from "react";

const Events = ({ events, totalDays }) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0].start)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Monday",
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto grid w-10/12 grid-cols-7 items-center justify-between bg-citrus-beige text-base">
        {totalDays.map((day) => (
          <button
            key={day}
            className={`m-2 flex justify-center p-2 font-bebas text-2xl focus:outline-none ${
              selectedDay === day
                ? "bg-citrus-darkred text-white"
                : "bg-transparent text-black"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="mt-6 h-full w-10/12 bg-citrus-darkred/50 font-kumar text-white">
        {events.filter(({ day }) => day === selectedDay).length == 0 ? (
          <div className="flex flex-row justify-center p-5 text-lg font-semibold">
            No events Available
          </div>
        ) : (
          <>
            {events
              .filter(({ day }) => day === selectedDay)
              .map(({ start, summary, description, location }, index) => (
                <div
                  key={index}
                  className="font-workSans grid w-full grid-cols-4 items-center justify-center px-4 py-8 text-lg font-semibold"
                >
                  <p>
                    {new Date(start).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "America/Los_Angeles",
                    })}
                  </p>
                  <p className="flex w-full justify-center">{summary}</p>
                  <p className="flex justify-center">
                    {description.split("\n")[0].substr(1)}
                  </p>
                  <p className="flex justify-center">{location}</p>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
