import React from "react";
import RewardsImage from "./RewardsImage";

export default function Rewards({ className = "" }: FrameProps) {
  return (
    <div
      className={`font-inter flex w-full flex-col gap-y-20 pr-[1.5px] text-center ${className}`}
    >
      <div className="flex items-center justify-center pl-[1.5px]">
        <div className="text-center text-[50px] font-bold capitalize leading-[1.2] tracking-[0px] mix-blend-normal max-md:text-[36px]">
          <span>
            <span className="text-center text-[ghostwhite]">
              {"Our Exclusive bonus "}
            </span>
            <span className="bg-clip-text text-center text-transparent [background-image:linear-gradient(92deg,_#7f2ad0,_#8ea8ef)]">
              Rewards
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-grow flex-wrap items-center justify-center gap-x-8 gap-y-12 max-lg:gap-x-5 max-lg:gap-y-10 min-[939px]:flex-nowrap">
        <div className="bg-t-bg-ellipse-14image z-0 flex h-[450px] w-[450px] max-md:w-[300px] max-md:h-[300px] flex-shrink-0 flex-col items-center justify-center bg-cover bg-center p-[75px] max-md:p-[30px] text-center">
          <RewardsImage />
        </div>
        <div className="flex flex-col items-center justify-between gap-y-4 self-stretch text-center text-xl font-medium leading-[normal] tracking-[0.48px] text-white max-md:text-lg max-md:gap-y-3">
          <div className="flex w-[355px] max-md:w-[90%] items-center justify-center rounded-lg border border-solid border-x-[blueviolet] border-y-[blueviolet] px-8 py-[19px] max-md:py-4 [background-image:linear-gradient(97deg,_#7d33d733_5%,_#9740ee33_12%,_#51c1ff33)]">
            <div className="flex-grow text-center">Exclusive Resource Kit</div>
          </div>
          <div className="flex w-[355px] max-md:w-[90%] items-center justify-center rounded-lg border border-solid border-x-[blueviolet] border-y-[blueviolet] px-8 py-[19px] max-md:py-4 [background-image:linear-gradient(97deg,_#7d33d733_5%,_#9740ee33_12%,_#51c1ff33)]">
            <div className="flex-grow text-center">One-on-One Consultation</div>
          </div>
          <div className="flex w-[355px] max-md:w-[90%] items-center justify-center rounded-lg border border-solid border-x-[blueviolet] border-y-[blueviolet] px-8 py-[7px] max-md:py-3 [background-image:linear-gradient(97deg,_#7d33d733_5%,_#9740ee33_12%,_#51c1ff33)]">
            <div className="flex flex-grow items-center justify-center text-center">
              <p>Lifetime Access to Workshop Materials</p>
            </div>
          </div>
          <div className="flex w-[355px] max-md:w-[90%] items-center justify-center rounded-lg border border-solid border-x-[blueviolet] border-y-[blueviolet] px-8 py-[7px] max-md:py-3 [background-image:linear-gradient(97deg,_#7d33d733_5%,_#9740ee33_12%,_#51c1ff33)]">
            <div className="flex flex-grow items-center justify-center text-center">
              <p>Membership in a Design Community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FrameProps {
  className?: string;
}
