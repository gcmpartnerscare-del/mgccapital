import React from "react";
import { CircleCheckBig } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseNIW = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <section className="py-20 px-4 md:px-10 bg-gray-50">
      <div className="md:px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full">
            <Slider {...settings}>
              <img
                src="https://img.freepik.com/premium-photo/african-couple-date_53876-671.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
                alt="Smart Path to US GreenCard"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
              <img
                src="https://img.freepik.com/premium-photo/travel-black-man-with-phone-airport-self-service-check-standing-terminal-holding-ticket-business-trip-smile-app-businessman-checking-international-flight-schedule-online_590464-149477.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
                alt="Smart Path to US GreenCard2"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
              <img
                src="https://img.freepik.com/premium-photo/broker-contract-man-house-with-client-meeting-consultation-advice-financial-advisor-with-black-person-talk-investment-savings-plan-budget-home-insurance-paper_590464-192416.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
                alt="Smart Path to US GreenCard3"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
            </Slider>
          </div>

          {/* EB2-NIW Pathway */}
          <div className="">
            <h3
              style={{ fontFamily: "Marcellus" }}
              className="text-3xl font-bold mb-4"
            >
              Why Choose EB2-NIW?
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>No Job Offer Required: </strong> Unlike other
              employment-based visas, the EB2-NIW visa doesn’t require a job
              offer or labor certification. If you qualify, you can
              self-petition for permanent residency.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Permanent Residency: </strong> The EB2-NIW visa offers the
              opportunity for U.S. Green Card status, allowing you to live,
              work, and settle in the United States permanently.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Spouse & Children Included: </strong> Your spouse and
              unmarried children under 21 years of age can also obtain permanent
              residency through your EB2-NIW petition.
            </p>
            <p className="text-gray-700">
              <strong>Faster Processing: </strong> EB2-NIW visas can have a
              quicker processing time compared to other immigration options,
              especially if you have an advanced degree or exceptional skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNIW;
