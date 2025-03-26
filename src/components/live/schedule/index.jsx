// "use client";
// import { useEffect, useState } from "react";

// import { api } from "@/utils/api";
// import Events from "./events";
import TextStroke from "../text-stroke";
import ComingSoon from "../coming-soon";
// import { Ellipsis } from "lucide-react";

const Schedule = () => {
  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const { items } = await api({
  //         url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
  //         method: "GET",
  //       });

  //       items.forEach((event) => {
  //         event.start = new Date(event.start.dateTime);
  //         event.end = new Date(event.end.dateTime);
  //         event.day = event.start.toLocaleString("en-US", {
  //           timeZone: "America/Los_Angeles",
  //           weekday: "long",
  //         });
  //       });

  //       setEvents(items);
  //     } catch (error) {
  //       console.error("Failed to fetch events", error);
  //     }
  //   };

  //   fetchEvents();
  // }, []);

  // const totalDays = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];

  return (
    <div className="my-[10%] flex flex-col">
      <div className="flex w-full flex-col items-center gap-6">
        <div
          id="schedule"
          className="w-3/4 rounded-lg border-4 border-black bg-citrus-beige p-5 pl-0 text-center font-lily md:w-2/5 md:pl-2"
        >
          <TextStroke
            title="Schedule"
            color="text-outline-red text-center text-5xl text-citrus-yellow md:text-9xl"
            subColor="text-center text-5xl text-citrus-yellow md:text-9xl"
          />
        </div>

        {/* <div className="p-4 text-center font-kameron text-xl text-white md:text-4xl">
          Pacific Standard Time (PST)
        </div> */}
        <div className="flex items-end gap-1 p-4 text-center font-kameron text-xl text-white md:text-4xl">
          Coming Soon
        </div>

        <div className="my-[3%] flex w-11/12 flex-col">
          <span className="my-1 h-0.5 w-full bg-white" />
          <span className="my-1 h-0.5 w-full bg-white" />
          <span className="my-1 h-1 w-full bg-white" />
        </div>
      </div>
      {/* <Events events={events} totalDays={totalDays} /> */}
      <ComingSoon />
      <div className="my-[5%] flex w-11/12 flex-col self-center">
        <span className="my-1 h-0.5 w-full bg-white" />
        <span className="my-1 h-0.5 w-full bg-white" />
        <span className="my-1 h-1 w-full bg-white" />
      </div>
    </div>
  );
};

export default Schedule;
