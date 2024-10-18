import React from "react";

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <section className="w-full mx-auto max-md:mt-10">
      <div className="bg-gradient-to-r from-[#8A1BF0] via-[#9740EE] to-[#8BB0F9] p-[1px] rounded-[32px]">
        <div className="flex flex-col items-center px-8 pt-8 pb-14 bg-violet-950 rounded-[32px] min-h-[288px] max-md:px-5">
          <img
            loading="lazy"
            src={imageSrc}
            alt=""
            className="object-contain w-12 aspect-square"
          />
          <h3 className="mt-6 text-center text-xl font-semibold tracking-tighter text-stone-50 font-inter">
            {title}
          </h3>
          <p className="mt-4 text-center text-lg tracking-tight text-white font-inter">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
