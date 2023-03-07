import { Briefcase } from "lucide-react";
import React from "react";

const CallToActionView = () => {
  return (
    <div className="relative isolate mt-28 flex items-center py-20 after:absolute after:inset-0 after:-z-10 after:-skew-y-3 after:bg-gradient-to-l after:from-garm-blue-600 after:to-garm-blue-800 after:content-[''] md:mt-48 md:py-24">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center gap-8 px-4 sm:px-6 md:flex-row lg:px-8">
        <div>
          <h1 className="w-full text-2xl font-bold md:text-4xl">
            Want to check out <span className="text-garm-blue-100">more</span>{" "}
            of our work?
          </h1>
          <p className="text-garm-blue-100">
            Navigate to /portfolio to see even more projects.
          </p>
        </div>
        <div className="w-full">
          <button className="text-md ml-auto flex w-full items-center justify-center gap-4 rounded-md bg-garm-gold-700 px-6 py-3 font-medium text-black transition hover:scale-105 hover:bg-garm-gold-500 focus:scale-95 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 md:w-auto">
            <Briefcase className="h-5 w-5" />
            <p>See our previous projects</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionView;
