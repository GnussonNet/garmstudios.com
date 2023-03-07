import React from "react";
import codic from "../assets/codic.png";
import drikk from "../assets/drikk.png";
import elon from "../assets/elon.png";
import fs from "../assets/fs.png";
import gomo from "../assets/gomo.png";
import obstecare from "../assets/obstecare.png";
import sws from "../assets/sws.png";
import vv from "../assets/vv.png";

const TrustView = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl items-center px-5 md:px-12 lg:px-16">
      <div className="text-center">
        <h1 className="within 500 fortune companies text-lg font-medium uppercase leading-6 text-garm-blue-100">
          Trusted by well-known companies
        </h1>
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-auto-fit-12 gap-4 pt-6 md:grid-cols-auto-fit-16 md:gap-6">
        <div className="cursor-pointer transition hover:scale-110 hover:saturate-0">
          <img className="max-h-12 md:max-h-16" src={codic} alt="logo" />
        </div>
        <div className="cursor-pointer transition hover:scale-110 hover:saturate-0">
          <img className="max-h-12 md:max-h-16" src={drikk} alt="logo" />
        </div>
        <div className="cursor-pointer transition hover:scale-110 hover:saturate-0">
          <img className="max-h-12 md:max-h-16" src={elon} alt="logo" />
        </div>
        <div className="cursor-pointer transition hover:scale-110 hover:saturate-0">
          <img className="max-h-12 md:max-h-16" src={fs} alt="logo" />
        </div>
        <div className="cursor-pointer transition hover:scale-110 hover:saturate-0">
          <img className="max-h-12 md:max-h-16" src={gomo} alt="logo" />
        </div>
        <div className="cursor-pointer transition hover:scale-110 hover:saturate-0">
          <img className="max-h-12 md:max-h-16" src={obstecare} alt="logo" />
        </div>
        <div className="cursor-pointer transition hover:scale-110 hover:saturate-0">
          <img className="max-h-12 md:max-h-16" src={sws} alt="logo" />
        </div>
        <div className="cursor-pointer transition hover:scale-110 hover:saturate-0">
          <img className="max-h-12 md:max-h-16" src={vv} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default TrustView;
