import React from "react";
// import background from "../assets/background.png"
import CallToActionView from "../views/CallToActionView";
import ContactView from "../views/ContactView";
import ProcessView from "../views/ProcessView";
import TestimonialsView from "../views/TestimonialsView";
import TrustView from "../views/TrustView";

function Home() {
  return (
    <div className="">
      {/* <div className="relative">
      <img className="bg-cover h-screen" src={background} alt="background" />
      <div className="container mx-auto px-4 absolute bottom-20 left-16">
        <h1 className="text-8xl font-extrabold">We<br /><span className="text-[#B8D4E1]">Capture</span><br />Moments.</h1>
      </div>
    </div> */}

      <div className="h-screen"></div>

      <TrustView />

      <TestimonialsView />

      <ProcessView />

      <ContactView />

      <CallToActionView />
    </div>
  );
}

export default Home;
