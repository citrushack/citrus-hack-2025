import Image from "next/image";
import prizeBlue from "@/public/assets/tracks/prizeBlue.svg";

interface MemberProps {
  name: string;
}

const TrackBlue: React.FC<MemberProps> = ({ name }) => {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Image
        src={prizeBlue}
        width={40}
        height={32}
        alt="prize"
        className="mx-0 sm:mx-2"
      />
      <div className="text-center font-kameron text-sm text-white sm:text-2xl">
        {name}
      </div>
      <Image
        src={prizeBlue}
        width={40}
        height={32}
        alt="prize"
        className="mx-0 scale-x-[-1] sm:mx-2"
      />
    </div>
  );
};

export default TrackBlue;
