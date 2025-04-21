import { Badge } from "@/components/ui/badge";

const rooms: string[] = ["WCH 127", "WCH 110", "Bytes", "WCH 129", "WCH 138"];

const Rooms = (): React.ReactNode => {
  return (
    <div className="flex flex-col rounded-lg bg-citrus-red-100 p-4 text-white shadow-xl">
      <div className="pb-3 font-bebas" data-cy="rooms-title">
        🚪HACKROOMS
      </div>
      <div className="flex flex-wrap gap-3 text-center">
        {rooms.map((room: string, index: number) => (
          <Badge key={index}>{room}</Badge>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
