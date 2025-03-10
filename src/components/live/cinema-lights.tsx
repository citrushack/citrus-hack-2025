"use client";
import { useState, useEffect } from "react";

const CinemaLights = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getResponsiveCounts = () => {
    if (windowWidth < 480) {
      return { topLightCount: 8, sideLightCount: 12, offset: 96.5 };
    } else if (windowWidth < 768) {
      return { topLightCount: 8, sideLightCount: 8, offset: 98.5 };
    } else {
      return { topLightCount: 12, sideLightCount: 8, offset: 98.5 };
    }
  };
  const generateLights = () => {
    const lights = [];
    const { topLightCount, sideLightCount, offset } = getResponsiveCounts();

    for (let i = 0; i < topLightCount; i++) {
      const leftPosition = `${(i / (topLightCount - 1)) * offset}%`;
      lights.push(
        <div
          key={`top-${i}`}
          className="absolute h-2 w-2 animate-light-blink rounded-full bg-amber-200 shadow-lg md:h-2.5 md:w-2.5"
          style={{
            top: 0,
            left: `calc(${leftPosition} + 3px)`,
            boxShadow: "0 0 10px 2px rgba(255, 204, 0, 0.7)",
            animationDelay: `${i * 0.06}s`,
          }}
        />,
      );
    }

    for (let i = 0; i < topLightCount; i++) {
      const leftPosition = `${(i / (topLightCount - 1)) * offset}%`;
      lights.push(
        <div
          key={`bottom-${i}`}
          className="absolute h-2 w-2 animate-light-blink rounded-full bg-amber-200 shadow-lg md:h-2.5 md:w-2.5"
          style={{
            bottom: 0,
            left: `calc(${leftPosition} + 3px)`,
            boxShadow: "0 0 10px 2px rgba(255, 204, 0, 0.7)",
            animationDelay: `${-i * 0.06}s`,
          }}
        />,
      );
    }

    for (let i = 0; i < sideLightCount; i++) {
      const topPosition = `${((i + 1) / (sideLightCount + 1)) * 100}%`;
      lights.push(
        <div
          key={`left-${i}`}
          className="absolute h-2 w-2 animate-light-blink rounded-full bg-amber-200 shadow-lg md:h-2.5 md:w-2.5"
          style={{
            left: 0,
            top: topPosition,
            boxShadow: "0 0 10px 2px rgba(255, 204, 0, 0.7)",
            animationDelay: `${-i * 0.06}s`,
          }}
        />,
      );
    }

    for (let i = 0; i < sideLightCount; i++) {
      const topPosition = `${((i + 1) / (sideLightCount + 1)) * 100}%`;
      lights.push(
        <div
          key={`right-${i}`}
          className="absolute h-2 w-2 animate-light-blink rounded-full bg-amber-200 shadow-lg md:h-2.5 md:w-2.5"
          style={{
            right: 0,
            top: topPosition,
            boxShadow: "0 0 10px 2px rgba(255, 204, 0, 0.7)",
            animationDelay: `${i * 0.06}s`,
          }}
        />,
      );
    }

    return lights;
  };

  return (
    <div className="absolute -bottom-2.5 -left-2.5 -right-2.5 -top-2.5 z-10 md:-bottom-4 md:-left-4 md:-right-4 md:-top-4">
      {generateLights()}
    </div>
  );
};

export default CinemaLights;
