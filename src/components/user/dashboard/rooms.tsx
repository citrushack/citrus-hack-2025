import { Badge } from "@/components/ui/badge";

const rooms: string[] = ["WCH 127", "WCH 110", "WCH 130", "Byte", "WCH 129"];

const Rooms = (): React.ReactNode => {
  return (
    <div className="justify-items-center rounded-lg bg-citrus-red-100 p-3 text-white shadow-xl">
      <div className="p-2 font-bebas" data-cy="rooms-title">
        🚪HACKROOMS
      </div>
      <div className="flex gap-3">
        {rooms.map((room: string, index: number) => (
          <Badge key={index}>{room}</Badge>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
