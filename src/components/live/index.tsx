import Landing from "./landing";
import About from "./about";
import Cursor from "./custom/cursor";
// import Schedule from "./schedule";
// import Tracks from "./tracks";
// import Sponsors from "./sponsors";
// import Team from "./team";
// import Committees from "./committees";
// import Judges from "./judges";
// import FAQ from "./faq";
// import Footer from "./footer";

const Live = () => {
  return (
    <>
      <Cursor />
      <div className="z-0 bg-citrus-gray">
        <Landing />
        <About />
        {/* 
      <Tracks />
      <Schedule />
      <Sponsors />
      <Team />
      <Committees />
      <Judges />
      <FAQ />
      <Footer /> */}
      </div>
    </>
  );
};

export default Live;
