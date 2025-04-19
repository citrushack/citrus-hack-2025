import Image from "next/image";

interface FilmProps {
  imageSrc: string;
  count?: number;
}

export default function film({ imageSrc, count = 100 }: FilmProps) {
  return (
    <div className="relative my-16 w-full overflow-hidden">
      <div className="flex w-max">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="shrink-0">
            <Image src={imageSrc} alt="nice" className="my-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
