"use client";

import { ITEMS } from "@/data/live/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <motion.div
        className="left-4 top-1/2 z-[1000] hidden -translate-y-1/2 flex-col items-center justify-center gap-y-3 rounded-xl bg-black/80 p-3 font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out md:fixed md:flex"
        animate={{ width: isOpen ? "180px" : "60px" }}
        initial={{ width: "60px" }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex w-full items-center justify-center py-1">
          {!isOpen ? (
            <Menu size={32} className="text-white" />
          ) : (
            <motion.p
              className="overflow-hidden whitespace-nowrap font-semibold text-red-500"
              animate={{ opacity: isOpen ? 1 : 0 }}
              initial={{ opacity: 0 }}
            >
              SHOWTIME
            </motion.p>
          )}
        </div>
        <div className="h-px w-full bg-citrus-lightgray" />
        <div className="mr-1 flex w-full flex-col items-center">
          {ITEMS.map(({ name, id, icon }, index) => (
            <Scroll
              to={id}
              key={index}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="bg-red-800 rounded-lg"
              className="w-full"
            >
              <motion.div
                className="relative flex w-full cursor-pointer items-center overflow-hidden rounded-md p-2 transition-colors duration-300 hover:bg-citrus-darkred"
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
                whileHover={{ scale: 1.05 }}
              >
                <span className="flex-shrink-0 text-white">{icon}</span>
                <motion.span
                  className="ml-3 overflow-hidden whitespace-nowrap text-lg"
                  animate={{
                    maxWidth: isOpen ? "120px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {name}
                </motion.span>

                {isHovered === index && isOpen && (
                  <motion.div
                    className="pointer-events-none absolute left-0 top-0 h-full w-full bg-white opacity-0"
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{
                      opacity: [0, 0.2, 0],
                      x: ["-100%", "100%", "100%"],
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                )}
              </motion.div>
            </Scroll>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ width: isDropdownOpen ? "180px" : "60px" }}
        initial={{ width: "60px" }}
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <div
          className={`fixed top-2 z-50 m-3 cursor-pointer rounded-lg bg-black/80 px-3 py-2 text-white shadow-lg drop-shadow backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden ${
            isDropdownOpen ? "w-32" : "w-10"
          }`}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex items-center justify-between">
            {isDropdownOpen ? (
              <X className="cursor-pointer text-white transition-colors duration-200" />
            ) : (
              <Menu className="cursor-pointer text-white transition-colors duration-200" />
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
                    className="flex w-full items-center rounded-md duration-300"
                  >
                    <motion.div
                      className="relative flex w-full cursor-pointer items-center overflow-hidden rounded-md p-2 transition-colors duration-300 hover:bg-citrus-darkred"
                      onHoverStart={() => setIsHovered(index)}
                      onHoverEnd={() => setIsHovered(null)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="flex-shrink-0 text-xs text-white">
                        {icon}
                      </span>
                      <motion.span
                        className="ml-3 overflow-hidden whitespace-nowrap text-xs"
                        animate={{
                          maxWidth: isDropdownOpen ? "120px" : "0px",
                          opacity: isDropdownOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {name}
                      </motion.span>
                      {isHovered === index && isDropdownOpen && (
                        <motion.div
                          className="pointer-events-none absolute left-0 top-0 h-full w-full bg-white opacity-0"
                          initial={{ opacity: 0, x: "-100%" }}
                          animate={{
                            opacity: [0, 0.2, 0],
                            x: ["-100%", "100%", "100%"],
                          }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />
                      )}
                    </motion.div>
                  </Scroll>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
