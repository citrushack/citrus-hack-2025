"use client";

import { ITEMS } from "@/data/live/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";


const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <div
        className={`transition-width fixed left-3 top-1/2 z-[1000] hidden w-14 -translate-y-1/2 list-none flex-col items-center justify-center gap-y-4 rounded-md bg-white p-2 font-rubiks text-citrus-red-200 shadow duration-200 hover:w-44 md:flex`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <li>
          <Menu size={32} />
        </li>
        {ITEMS.map(({ name, id, icon }, index) => (
          <Scroll
            to={id}
            key={index}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="bg-citrus-red"
            className={`flex w-full items-center rounded-md`}
          >
            <motion.div
              className="relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md p-0.5 transition hover:translate-x-0 hover:scale-105 hover:bg-citrus-red hover:px-2"
              initial={{ y: 0 }}
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeOut",
                },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="mx-4 flex-shrink-0">{icon}</span>
              <span
                className={`w-full overflow-hidden whitespace-nowrap text-xl transition-all duration-300 ${isOpen ? "max-w-xs opacity-100" : "max-w-0 opacity-0"}`}
              >
                {name}
                {isHovered && (
                  <motion.div
                    className="absolute left-0 top-0 h-full w-full bg-white opacity-0"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      x: ["-100%", "100%", "100%"],
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                )}
              </span>
            </motion.div>
          </Scroll>
        ))}
      </div>

      <div
        className={`fixed top-2 z-50 m-3 cursor-pointer rounded-lg bg-white px-3 py-2 text-black drop-shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          isDropdownOpen ? "w-32" : "w-10"
        }`}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        <div className="flex items-center justify-between">
          {isDropdownOpen ? (
            <X className="cursor-pointer text-black transition-colors duration-200" />
          ) : (
            <Menu className="cursor-pointer text-black transition-colors duration-200" />
          )}
        </div>

        <div
          className={`ml-2 overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="mt-2 flex flex-col gap-2 p-0">
            {ITEMS.map(({ name, id, icon }, index) => (
              <div
                key={index}
                className={`transform transition-all duration-300 ease-in-out ${
                  isDropdownOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
              >
                <Scroll
                  to={id}
                  key={index}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="bg-citrus-red"
                  className="flex w-full items-center gap-2 rounded-md p-1 transition-colors duration-200"
                >
                  <span className="text-lg text-black">{icon}</span>
                  <span className="font-medium">{name}</span>
                </Scroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
