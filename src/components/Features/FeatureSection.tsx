import React from "react";
import FeatureGrid from "./FeatureGrid";

const FeatureSection: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center px-8 sm:px-16 lg:px-32 py-16 rounded-2xl bg-violet-950 bg-opacity-80 max-w-[949px] shadow-[0px_119px_33px_rgba(168,202,255,0)] max-md:px-5">
      <FeatureGrid />
    </main>
  );
};

export default FeatureSection;
