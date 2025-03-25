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
  return (
    <>
      {/* <Cursor /> */}
      <div className="z-0 bg-citrus-gray">
        <Navigation />
        <Landing />
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
