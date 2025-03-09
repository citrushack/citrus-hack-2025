import Image from "next/image";
import TicketComp from "@/public/assets/ticket.svg";
import Link from "next/link";

type TicketProps = {
  title: string;
  link: string;
};

export default function Ticket({ title, link }: TicketProps) {
  return (
    <Link href={link} className="scale-125">
      <div className="relative">
        <Image src={TicketComp} alt="Picture of the author" />
        <div
          className={`absolute inset-0 flex items-center justify-center font-kumar text-xl text-[#232323]`}
        >
          {title}
        </div>
      </div>
    </Link>
  );
}
