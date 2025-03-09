import Landing from "./landing";
import About from "./about";
import Navigation from "./navigation";
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
      <div className="bg-citrus-gray">
        <Navigation />
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
