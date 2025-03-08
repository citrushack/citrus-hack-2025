import Image from "next/image";
import { Kumar_One } from "next/font/google";
import TicketComp from "@/public/assets/ticket.svg";
import Link from "next/link";

const kumarOne = Kumar_One({ subsets: ["latin"], weight: "400" });

interface TicketProps {
  title: string;
  link: string;
}

export default function Ticket({ title, link }: TicketProps) {
  return (
    <Link href={link} className="scale-125">
      <div className="relative">
        <Image src={TicketComp} alt="Picture of the author" />
        <div
          className={`text-l absolute inset-0 flex items-center justify-center text-[#232323] ${kumarOne.className}`}
        >
          {title}
        </div>
      </div>
    </Link>
  );
}
