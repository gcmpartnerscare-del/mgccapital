import React from "react";
import { Element } from "react-scroll";
import { CircleCheckBig } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WhyChooseUs() {
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
  const reasons = [
    {
      header: "Global Expertise",
      desc: "Our team understands the nuances of migration systems across continents.",
    },
    {
      header: "Smart, Sensitive Guidance",
      desc: "We combine legal insight with human empathy. You’re never just a file to us.",
    },
    {
      header: "Strategic Global Network",
      desc: "From legal advisors to real estate developers and education specialists—we bring the world to your table.",
    },
    {
      header: "Transparency at Every Step",
      desc: "No hidden clauses, no unrealistic promises—just honest conversations and proven pathways.",
    },
  ];

  return (
    <Element name="whychooseus" className="py-20 px-4 md:px-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 items-center">
        <div className="grid gap-4">
          <div className="flex items-center gap-4 mb-4">
            <p className="bg-primary-50 rounded-full shadow py-1 px-3 font-semibold">
              <CircleCheckBig />
            </p>
            <h3 className="text-gray-900">TopRatedReasons</h3>
          </div>
          <div className="flex flex-col gap-4">
            <h2
              style={{ fontFamily: "Marcellus" }}
              className="text-2xl font-bold text-gray-900"
            >
              Why Choose GCM Partners?
            </h2>

            <p>
              Because we’re more than consultants—we’re companions on your journey.
              Whether you’re an entrepreneur expanding your frontier, a student mapping your academic future, or a family seeking safety and stability <strong>—GCM is here to help you move smart, not just move fast.</strong>
            </p>
            <ul className="space-y-2 max-w-4xl mt-3">
              {reasons.map((reason, index) => (
                <li
                  key={index}
                  className="text-base text-gray-700 leading-relaxed"
                >
                  {/* &rarr; */}
                  <span className="font-bold">{reason.header}:</span> {" "}
                  <span>{reason.desc}</span>
                </li>
              ))}
              <p className="font-bold text-lg pt-4">
                Live Local. Think Global. Belong Everywhere.
              </p>
            </ul>

          </div>
        </div>

        <div className="w-full">
          <Slider {...settings}>
            <img
              src="https://img.freepik.com/premium-photo/group-african-descent-business-people-meeting_53876-9969.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
              alt="Smart Path to US GreenCard3"
              className="w-full rounded-xl object-cover h-[400px] p-1 md:h-[500px]"
            />
            {/* <img
              src="https://img.freepik.com/premium-photo/business-colleagues-working-office_1048944-18725023.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80"
              alt="Smart Path to US GreenCard3"
              className="w-full rounded-xl object-cover h-[400px] p-1 md:h-[500px]"
            /> */}
            <img
              src="https://img.freepik.com/premium-photo/business-person-having-discussion-while-sitting-office_1048944-9004998.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
              alt="Smart Path to US GreenCard3"
              className="w-full rounded-xl object-cover h-[400px] p-1 md:h-[500px]"
            />
            
            <img
              src="https://img.freepik.com/premium-photo/people-portrait-friends-group-teamwork-project-design-collaboration-partnership-huddle-men-women-support-trust-creative-agency-together-from-community-startup_590464-377275.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
              alt="Smart Path to US GreenCard"
              className="w-full rounded-xl object-cover h-[400px] p-1 md:h-[500px]"
            />
          </Slider>
        </div>
      </div>
    </Element>
  );
}
