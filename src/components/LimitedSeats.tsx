import React from "react";

export default function LimitedSeats() {
  return (
    <div className="h-[220px] flex-col justify-start items-center gap-10 inline-flex mt-36">
      <div className="w-[614px] text-center">
        <span className="text-[#f8f8f8] text-3xl font-semibold font-['Inter']">
          Secure your spot now! Limited seats available
        </span>
        <span className="text-[#f8f8f8] text-3xl font-semibold font-['Inter'] tracking-[3.30px]">
          .
        </span>
      </div>
      <div className="flex-col justify-start items-start gap-8 flex">
        <div className="w-[251px] px-8 py-4 bg-gradient-to-r from-[#700fe4] via-[#7d6ff4] to-[#51c0ff] rounded-lg shadow justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-white text-xl font-medium font-['Inter'] tracking-wide">
            Register Now!
          </div>
        </div>
        <div className="w-[251px] px-8 py-4 bg-gradient-to-r from-[#7d33d6] via-[#9740ed] to-[#51c0ff] rounded-lg shadow-inner border border-[#8a1ef0] justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-white text-xl font-medium font-['Inter'] tracking-wide">
            Request a call?
          </div>
        </div>
      </div>
    </div>
  );
}
