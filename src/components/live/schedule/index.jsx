import { api } from "@/utils/api";
import Events from "./events";
import TextStroke from "../text-stroke";

const Schedule = async () => {
  const { items } = await api({
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    method: "GET",
  });

  items.forEach((event) => {
    event.start = new Date(event.start.dateTime);
    event.end = new Date(event.end.dateTime);
    event.day = event.start.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      weekday: "long",
    });
  });

  const totalDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      <div className="flex w-full flex-col items-center">
        <div className="w-1/3 rounded-lg border-4 border-black bg-citrus-beige p-5 font-lily">
          <TextStroke
            title="Schedule"
            color="text-outline-red text-center text-2xl text-citrus-yellow md:text-9xl"
            subColor="text-center text-2xl text-citrus-yellow md:text-9xl"
          />
        </div>
        <div className="p-4 font-kameron text-4xl text-white">
          Pacific Standard Time (PST)
        </div>

        <div className="my-[5%] flex w-11/12 flex-col">
          <span className="my-1 h-0.5 w-full bg-white" />
          <span className="my-1 h-0.5 w-full bg-white" />
          <span className="my-1 h-1 w-full bg-white" />
        </div>
      </div>
      <Events events={items} totalDays={totalDays} />
      <div className="my-[5%] flex w-11/12 flex-col">
        <span className="my-1 h-0.5 w-full bg-white" />
        <span className="my-1 h-0.5 w-full bg-white" />
        <span className="my-1 h-1 w-full bg-white" />
      </div>
    </div>
  );
};

export default Schedule;
