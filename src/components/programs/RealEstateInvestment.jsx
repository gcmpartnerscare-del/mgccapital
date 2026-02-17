import React from "react";
import programs from "../../data/programs";
import { Element } from "react-scroll";
import { Activity } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RealEstateInvestment({ category }) {

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



  const { heading, description, highlights } = programs[category].realEstate;

  return (
    <Element
      name="realEstateInvestment"
      className="py-20 bg-gray-50 px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
    >
      {/* Real Estate Investment */}
      <div className="">
        <div className="flex items-center gap-4 mb-4">
          <p className="bg-gray-50 rounded-full shadow py-1 px-3 font-semibold">
            <Activity />
          </p>
          <h3 className="text-gray-900">Real Estate Investment</h3>
        </div>
        <h2
          style={{ fontFamily: "Marcellus" }}
          className="text-4xl font-semibold mb-6"
        >
          {heading}
        </h2>
        <div className="max-w-2xl mb-4 grid gap-3">
          {description.map((desc, idx) => (
            <p key={idx} className="">
              {desc}
            </p>
          ))}
        </div>
        <ul className="grid gap-2">
          {highlights.map((point, idx) => (
            <li key={idx}>✔ {point}</li>
          ))}
        </ul>
      </div>

      {/* Image */}
          <div className="w-full">
            <Slider {...settings}>
              <img
                src="https://img.freepik.com/free-photo/new-home-keys-plan-table-with-defocused-couple_23-2148814388.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
                alt="Real Estate Investment"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
              <img
                src="https://img.freepik.com/premium-photo/financial-advisor-talking-senior-couple-home_1339860-2177.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
                alt="Real Estate Investment2"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
              <img
                src="https://img.freepik.com/free-photo/black-couple-buy-new-house_53876-20680.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
                alt="Real Estate Investment3"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
              <img
                src="https://img.freepik.com/premium-photo/happy-black-man-portrait-business-meeting-with-office-teamwork-management-workflow-support-startup-success-smile-motivation-mature-leadership-manager-collaboration-workshop_590464-133475.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
                alt="Real Estate Investment3"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
            </Slider>
          </div>
    </Element>
  );
}
