"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.css";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: {
        mass: 0.9,
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="cursor z-100 flex items-center justify-center"
      variants={variants}
      animate="default"
    ></motion.div>
  );
};

export default Cursor;
