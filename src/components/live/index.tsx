// "use client";

// import { useEffect, useState } from "react";
import Landing from "./landing";
import About from "./about";
import Navigation from "./navigation";
// import Cursor from "./custom/cursor";
// import Schedule from "./schedule";
// import Tracks from "./tracks";
import Sponsors from "./sponsors";
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
      <div className="z-0 overflow-hidden bg-gradient-to-r from-black via-red-900 to-black">
        {/* {!complete && !isMobile && <Landing complete={complete} />}
        {!isMobile && (
          <div className="absolute inset-0 z-20 flex h-full w-full items-center justify-center">
            <CurtainReveal onComplete={() => setComplete(true)} />
          </div>
        )}
        {complete && ( */}
        <>
          <Navigation />
          <Landing complete />
          <About />
          {/* <Tracks /> */}
          {/* <Keynote /> */}
          <Schedule />
          <Sponsors />
          {/* <Team /> */}
          {/* <Committees /> */}
          {/* 
    <Judges />
    */}
          <FAQ />
          <Footer />
        </>
        {/* )} */}
      </div>
    </>
  );
};

export default Live;
