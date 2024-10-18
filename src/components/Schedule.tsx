import React from "react";

export default function Schedule({ className = "" }: FrameProps) {
  const scheduleData = [
    { day: "Day 1-2", className: "Introduction to UX Design" },
    { day: "Day 3-4", className: "Research and Analysis" },
    { day: "Day 5-6", className: "Ideation and Prototyping" },
    { day: "Day 7-8", className: "Hands-On UI Design Session" },
    { day: "Day 9-10", className: "Interaction Design" },
    { day: "Day 11-12", className: "Animation in UX" },
    { day: "Day 13-15", className: "Project Presentations" },
  ];

  return (
    <div className={`flex flex-col w-full px-4 md:px-16 ${className} mb-24`}>
      <div className="font-inter flex flex-grow flex-col gap-y-6 text-center text-xl text-white">
        {scheduleData.map((schedule, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center w-full gap-y-4"
            >
              <div className="flex-shrink-0 w-1/3 font-bold capitalize leading-[1.2] tracking-[0px] rounded-lg p-5 text-center [background-image:linear-gradient(90deg,_#ffffff33,_#ffffff33),linear-gradient(90deg,_#302863,_#302863)]">
                {schedule.day}
              </div>
              <div className="flex-grow rounded-lg border border-solid border-x-[blueviolet] border-y-[blueviolet] px-8 py-[19px] text-center [background-image:linear-gradient(97deg,_#7d33d733_5%,_#9740ee33_12%,_#51c1ff33)]">
                {schedule.className}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface FrameProps {
  className?: string;
}
