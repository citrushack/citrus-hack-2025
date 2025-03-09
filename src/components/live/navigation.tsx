"use client";

// import { signIn, useSession } from "next-auth/react";
// import Link from "next/link";
import { ITEMS } from "@/data/live/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  // const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`transition-width fixed left-3 top-1/2 z-[1000] flex w-14 -translate-y-1/2 list-none flex-col items-center justify-center gap-y-4 rounded-md bg-white p-2 font-rubiks text-citrus-red-200 shadow duration-200 hover:w-44`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <li>
        <Menu size={40} />
      </li>
      {ITEMS.map((item) => (
        <Link
          to={item.id}
          key={item.id}
          smooth={true}
          duration={500}
          spy={true}
          offset={100}
          activeClass="bg-citrus-red"
          className={`flex w-full origin-left transform cursor-pointer items-center rounded-md py-2 transition hover:translate-x-4 hover:scale-110 hover:bg-citrus-red hover:pl-2`}
        >
          <span className="ml-0 mr-4 flex-shrink-0">{item.icon}</span>
          <span
            className={`overflow-hidden whitespace-nowrap text-xl transition-[max-width,opacity] duration-300 ${isOpen ? "max-w-xs opacity-100" : "max-w-0 opacity-0"} `}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
