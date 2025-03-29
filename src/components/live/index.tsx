// "use client";

// import { useEffect, useState } from "react";
import Landing from "./landing";
import About from "./about";
import Navigation from "./navigation";
// import Cursor from "./custom/cursor";
// import Schedule from "./schedule";
// import Tracks from "./tracks";
// import Sponsors from "./sponsors";
// import Team from "./team/team";
// import Committees from "./committees";
// import Judges from "./judges";
import FAQ from "./faq";
import Footer from "./footer";
import Schedule from "./schedule";
import Keynote from "./keynote";

const Live = () => {
  // const [complete, setComplete] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkMobileBreakpoint = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };
  //   checkMobileBreakpoint();
  //   window.addEventListener("resize", checkMobileBreakpoint);

  //   return () => {
  //     window.removeEventListener("resize", checkMobileBreakpoint);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (isMobile) {
  //     setComplete(true);
  //   }
  // }, [isMobile]);
  return (
    <>
      {/* <Cursor /> */}
      <div className="z-0 bg-citrus-gray">
        <Navigation />
        <Landing complete />
        <About />
        <Keynote />
        {/* <Tracks /> */}
        <Schedule />
        {/* <Team /> */}
        {/* <Committees /> */}
        {/* <Sponsors />
      <Judges /> */}

        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Live;
