import { useState, useEffect } from "react";

const Events = ({ events, totalDays }) => {
  const [selectedDay, setSelectedDay] = useState(() =>
    new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      weekday: "long",
    }),
  );

  const [currentHour, setCurrentHour] = useState(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "2-digit",
      hour12: false,
    }),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          hour12: false,
        }),
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const currentDay = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "long",
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto grid w-11/12 grid-cols-7 items-center justify-between bg-citrus-beige text-base lg:w-10/12">
        {totalDays.map((day) => (
          <button
            key={day}
            className={`m-2 mx-1 flex justify-center p-2 font-bebas text-lg duration-300 hover:bg-citrus-darkred hover:text-white focus:outline-none lg:text-2xl ${
              selectedDay === day
                ? "bg-citrus-darkred text-white"
                : "bg-transparent text-black"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            <span className="hidden sm:block">{day}</span>
            <span className="block sm:hidden">{day.slice(0, 3)}</span>
          </button>
        ))}
      </div>
      <div
        id="schedule"
        className="mt-6 h-full w-11/12 font-kumar text-white lg:w-10/12"
      >
        {events.filter(({ day }) => day === selectedDay).length === 0 ? (
          <div className="flex flex-row justify-center p-5 text-lg font-semibold">
            No events available
          </div>
        ) : (
          <>
            <div className="my-4 grid w-full grid-cols-4 border-b border-white py-4 md:my-8 lg:text-4xl">
              <p className="flex w-full justify-center">Time</p>
              <p className="flex w-full justify-center">Event</p>
              <p className="flex w-full justify-center">Type</p>
              <p className="flex w-full justify-center">Location</p>
            </div>
            {events
              .filter(({ day }) => day === selectedDay)
              .map(({ start, summary, description, location }, index) => {
                const eventHour = new Date(start).toLocaleTimeString("en-US", {
                  timeZone: "America/Los_Angeles",
                  hour: "2-digit",
                  hour12: false,
                });
                return (
                  <div
                    key={index}
                    className={`font-workSans grid h-24 w-full grid-cols-4 items-center justify-center border-b-2 border-white bg-citrus-darkred/50 px-4 text-xs font-semibold md:text-xl 2xl:text-2xl ${
                      selectedDay === currentDay &&
                      new Date().toLocaleString("en-US", {
                        timeZone: "America/Los_Angeles",
                        weekday: "long",
                      }) &&
                      currentHour === eventHour
                        ? "text-citrus-yellow"
                        : ""
                    }`}
                  >
                    <div className="flex w-11/12 items-center justify-center pr-8 md:w-full">
                      <div className="mr-2 flex w-2 justify-center md:w-4">
                        {currentHour === eventHour &&
                          selectedDay === currentDay && (
                            <span className="mb-1 h-1.5 w-1.5 rounded-full bg-citrus-yellow md:h-3 md:w-3" />
                          )}
                      </div>
                      <p className="text-center">
                        {new Date(start).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          timeZone: "America/Los_Angeles",
                        })}
                      </p>
                    </div>
                    <p className="flex h-full w-full items-center justify-center border-white px-3 text-center md:border-l md:px-8 lg:justify-center">
                      {summary}
                    </p>
                    <p className="flex h-full w-full items-center justify-center border-white px-6 md:border-l md:px-8 lg:justify-center">
                      {description}
                    </p>
                    <p className="flex h-full w-full items-center justify-start border-white px-6 md:border-l md:px-8 lg:justify-center">
                      {location}
                    </p>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
