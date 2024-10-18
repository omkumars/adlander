import React from "react";
import FeatureCard from "./FeatureCard";

interface Feature {
  imageSrc: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/664d6cb0854a310e0711f7be51bc8627dca133ecfd9e0fa4b74aadff740909bd?placeholderIfAbsent=true&apiKey=19cc2024239743718216e13214f7c7f1",
    title: "Hands On Learning",
    description: "Dive into real-world projects and gain practical experience.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0abcedc1242c6dd92fa737daaaecd69a9217702b5853d8333371b6c6c00fde2e?placeholderIfAbsent=true&apiKey=19cc2024239743718216e13214f7c7f1",
    title: "Expert Guidance",
    description:
      "Learn from industry professionals with years of UX design expertise.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c64df6c4cc08e1f815b8097a0c8ac39b2618dd9a2b5daec938dd8b7e9e931b63?placeholderIfAbsent=true&apiKey=19cc2024239743718216e13214f7c7f1",
    title: "Community",
    description:
      "Network with like-minded individuals and build your professional circle.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cab7101c90246b5f018d6ab407a19adfffc8752d764a28854a669d5564622bc2?placeholderIfAbsent=true&apiKey=19cc2024239743718216e13214f7c7f1",
    title: "Portfolio Boost",
    description: "Dive into real-world projects and gain practical experience.",
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-[693px] mx-auto max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex flex-col w-6/12 max-md:w-full">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.slice(2, 4).map((feature, index) => (
            <div key={index} className="flex flex-col w-6/12 max-md:w-full">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
