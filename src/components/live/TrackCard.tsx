import Image from "next/image";

interface MemberProps {
  name: string;
  imageSrc: string;
}

const TrackBlue: React.FC<MemberProps> = ({ name, imageSrc }) => {
  return (
    <div className="flex w-full items-center justify-center gap-1 sm:gap-4">
      <Image
        src={imageSrc}
        width={40}
        height={32}
        alt="prize"
        className="mx-0 sm:mx-2"
      />
      <div className="text-center font-kameron text-sm text-white sm:text-2xl">
        {name}
      </div>
      <Image
        src={imageSrc}
        width={40}
        height={32}
        alt="prize"
        className="mx-0 scale-x-[-1] sm:mx-2"
      />
    </div>
  );
};

export default TrackBlue;
