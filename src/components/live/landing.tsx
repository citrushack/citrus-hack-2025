import Countdown from "@/components/ui/countdown";

const Landing = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative flex w-3/4 flex-col items-center gap-4 rounded-2xl border-[10px] border-black bg-citrus-beige p-5">
        <div className="absolute -top-[15%]">
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-citrus-red-200 text-white">
            <span className="h-4 w-4 rounded-full bg-gray-300" />
            LOGO
            <span className="h-4 w-4 rounded-full bg-gray-300" />
          </div>
        </div>
        <div className="text-4xl text-citrus-yellow">The Golden Age of</div>
        <div className="bg-beige w-3/4 rounded-2xl border-[6px] border-citrus-red-100 py-2 text-center text-7xl text-citrus-red-100 shadow-md">
          Citrus Hack
        </div>
        <div className="flex flex-col gap-4 text-4xl">
          <div className="text-center text-white">Released in</div>
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
    </div>
  );
};

export default Landing;
