import React from "react";
import { Element } from "react-scroll";
// import visionImage from "/images/our-vision.jpg"; // Replace with your actual image path

const OurVision = () => {
  return (
    <Element name="vision" className="w-full py-20 px-4 md:px-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="w-full order-1 lg:order-2 space-y-6">
          <p className="uppercase text-sm tracking-widest text-primary font-semibold">Our Vision</p>
          <h2 style={{fontFamily: "Marcellus",}} className="text-4xl font-bold text-gray-900 leading-tight">
            Building A World Where Borders Don’t Limit Opportunity
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            GCM Partners envisions a world where access to global freedom, investment diversification,
            and second citizenship is not limited by geography — but defined by ambition and vision.
          </p>
          <p className="text-gray-700 text-lg">
            To provide ethical, and affordable guidance in global migration, citizenship, and investment—empowering access to international opportunities.
          </p>
          <p className="text-gray-700 text-lg">
            We aim to be the bridge that connects enterprising individuals and families to global
            mobility, financial security, and cross-border legacy planning through innovative programs and strategic partnerships.
          </p>
        </div>

        {/* Image */}
        <div className="w-full order-2 lg:order-1">
          <img
            src="https://img.freepik.com/free-photo/green-card-passport-arrangement-flat-lay_23-2149828135.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
            alt="GCM Partners vision"
            className="w-full rounded-xl shadow-md h-[400px] md:h-[500px] object-cover bg-gradient-to-t from-primary-600 to-primary-400"
          />
        </div>
      </div>
    </Element>
  );
};

export default OurVision;
