import React from "react";
import { Element } from "react-scroll";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhoWeServe = ({
  data = [],
  elementName = "WhoWeServe",
  title,
  subtitle,
}) => {
  return (
    <Element name={elementName} className="w-full bg-white py-20">
      <div className="px-4 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            {title || "Who We Serve"}
          </p>
          <h2
            style={{ fontFamily: "Marcellus" }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            {subtitle ||
              "Tailored Citizenship & Investment for Every Stakeholder"}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-300 ease p-4 rounded-xl hover:shadow-soft border border-gray-100"
            >
              <div className="overflow-hidden h-full flex flex-col justify-between group">
                <img
                  src={item.img || item.imgSrc || "/images/placeholder.jpg"}
                  alt={item.title || item.ttle}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-400 transition-all duration-300 ease mb-3">
                  {item.title || item.ttle}
                </h3>
                <p className="text-gray-600 text-base">
                  {item.desc || item.servDesc}
                </p>
                <Link
                  to={"/resources#consultation"}
                  className="mt-2 text-primary-900 group-hover:text-primary-400 transition-all duration-300 ease flex items-center font-medium"
                >
                  Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center flex-col md:flex-row justify-center mt-8 gap-6">
          <Link
          to={"/resources#consultation"}
          className="w-full md:w-max text-center px-6 py-3 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition"
        >
          {title}
        </Link>

        <Link
          to={"/globalresidency-citizenship#onboardingform"}
          className="border-primary-800 border w-max px-8 py-3 rounded-full font-semibold hover:border-primary-600 hover:bg-primary-600 transition duration-200 hover:text-white"
        >
          Get Started Now 
        </Link>
        </div>
      </div>
    </Element>
  );
};

export default WhoWeServe;
