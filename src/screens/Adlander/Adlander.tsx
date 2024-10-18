import React from "react";
import "./style.css";
import "../../index.css";
import FeatureSection from "../../components/Features/FeatureSection";
import Schedule from "../../components/Schedule";
import Rewards from "../../components/Rewards/Rewards";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer/Footer";
import Mentor from "../../components/Mentor";
import Testimonials from "../../components/Testimonial/Testimonials";
import Attend from "../../components/Attend/Attend";
import LimitedSeats from "../../components/LimitedSeats";
import ChooseUs from "../../components/ChooseUs/ChooseUs";

export const Adlander = (): JSX.Element => {
  return (
    <>
      <div className="body px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="text-center">
          <p className="super-heading mb-6 md:mb-8 lg:mb-12">
            Master the Art of User Experience Design with
          </p>
        </div>
        <div className="text-center">
          <h1 className="heading mb-16 md:mb-24 lg:mb-36">
            UX Design Intensive Workshop
          </h1>
        </div>
        <div className="text-center mb-24">
          <h1 className="sub-heading">
            Can You Be A <span className="sub-heading-span">UX Designer?</span>
          </h1>
        </div>

        <div>
          <img src="https://res.cloudinary.com/dnltrumxv/image/upload/v1729167478/jhzoifvzontjeifyryr7.png" />
        </div>

        <div className="mb-16 md:mb-24 lg:mb-36 mt-16 md:mt-24 lg:mt-36 text-center">
          <h1 className="sub-heading">
            Why <span className="sub-heading-span">Choose</span> Us
          </h1>
        </div>
        <ChooseUs />
        <LimitedSeats />
        <div className="mb-16 md:mb-24 lg:mb-36 mt-16 md:mt-24 lg:mt-36 text-center">
          <h1 className="sub-heading">
            What To <span className="sub-heading-span">Expect</span> From This
            Workshop
          </h1>
        </div>
        <FeatureSection />
        <div className="mb-16 md:mb-24 lg:mb-36 mt-16 md:mt-24 lg:mt-36 text-center">
          <h1 className="sub-heading">
            15-Day <span className="sub-heading-span">Schedule</span> Of
            Workshop
          </h1>
        </div>
        <Schedule />
        <Rewards />
        <div className="mb-16 md:mb-24 lg:mb-36 mt-16 md:mt-24 lg:mt-36 text-center">
          <h1 className="sub-heading">
            Who Should <span className="sub-heading-span">Attend</span> This
            Workshop
          </h1>
        </div>
        <Attend />
        <div className="mb-16 md:mb-24 lg:mb-36 mt-16 md:mt-24 lg:mt-36 text-center">
          <h1 className="sub-heading">
            What Our <span className="sub-heading-span">Learners</span> Say
            About Us
          </h1>
        </div>
        <Testimonials />
        <div className="mb-16 md:mb-24 lg:mb-36 mt-16 md:mt-24 lg:mt-36 text-center">
          <h1 className="sub-heading">
            Meet Your <span className="sub-heading-span">Mentor</span>
          </h1>
        </div>
        <Mentor />
        <Faq />
        <Footer />
      </div>
    </>
  );
};
