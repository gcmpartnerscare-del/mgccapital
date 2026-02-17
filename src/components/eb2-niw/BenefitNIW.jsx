import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BenefitNIW = () => {
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
    <div className="py-20 px-4 md:px-10 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center bg-gray-100">
      <div>
        <div>
          <h2
            style={{ fontFamily: "Marcellus" }}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Key Benefits of the NIW Pathway
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Are you a Nigerian professional seeking a reliable, self-directed
            route to U.S. permanent residency?This quick decision guide helps
            you choose the most suitable U.S. high-skilled immigration pathway
            based on your profile — whether you're an academic, industry expert,
            or aspiring global contributor.
          </p>
        </div>

        <ul
          className="mt-4 grid grid-cols-1 md:grid-cols-2 
         gap-4"
        >
          <li className="bg-white/90 backdrop-blur-md border-l-4 border-primary-600 shadow-md p-3 md:p-4 rounded-md flex items-center gap-2 md:gap-4">
            No need for employer sponsorship self-petition for residency.
          </li>
          {/* <li className="bg-white/90 backdrop-blur-md border-l-4 border-primary-600 shadow-md p-3 md:p-4 rounded-md flex items-center gap-2 md:gap-4">
                {" "}
                 Self-petition directly to USCIS
              </li> */}
          <li className="bg-white/90 backdrop-blur-md border-l-4 border-primary-600 shadow-md p-3 md:p-4 rounded-md flex items-center gap-2 md:gap-4">
            {" "}
            Ideal for entrepreneurs, academics, and consultants
          </li>
          <li className="bg-white/90 backdrop-blur-md border-l-4 border-primary-600 shadow-md p-3 md:p-4 rounded-md flex items-center gap-2 md:gap-4">
            {" "}
            High flexibility in job choice post-approval
          </li>
          <li className="bg-white/90 backdrop-blur-md border-l-4 border-primary-600 shadow-md p-3 md:p-4 rounded-md flex items-center gap-2 md:gap-4">
            {" "}
            Quicker and simpler than traditional EB routes
          </li>
        </ul>
      </div>
      {/* Image */}
      <div className="w-full order-2 lg:order-1">
        <Slider {...settings}>
          <img
            src="https://img.freepik.com/premium-photo/back-people-couple-listen-broker-home-funeral-cover-life-policy-planning-relationship-meeting-serious-financial-advice-house-insurance-with-paperwork-contract_590464-467629.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="Smart Path to US GreenCard"
            className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
          />
          <img
            src="https://img.freepik.com/premium-photo/business-people-workplace-are-discussing-working-strategy-doing-business_35752-6594.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="Smart Path to US GreenCard2"
            className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
          />
          <img
            src="https://img.freepik.com/premium-photo/business-conversation_35752-6393.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="Smart Path to US GreenCard3"
            className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
          />
          <img
            src="https://img.freepik.com/free-photo/two-african-businessman-sitting-outside-cafe_1303-18495.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="Smart Path to US GreenCard3"
            className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
          />
        </Slider>
      </div>
    </div>
  );
};

export default BenefitNIW;
