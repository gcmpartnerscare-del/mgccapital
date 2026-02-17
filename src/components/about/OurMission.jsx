import React from "react";
import { Element } from "react-scroll";


const OurMission = () => {
  return (
    <Element name="mission" className="w-full py-20 px-4 md:px-10 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="w-full space-y-6">
          <p className="uppercase text-sm tracking-widest text-primary font-semibold">Our Purpose</p>
          <h2 style={{fontFamily: "Marcellus",}} className="text-4xl font-bold text-gray-900 leading-tight">
            Empowering Global Mobility
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To provide ethical, affordable, and empowering pathways to global mobility—so that more Africans can access international education, investment, lifestyle, and security options without compromise. 
          </p>
          <p className="text-gray-600 text-lg">
            We don't sell shortcuts. We Open doors to international opportunities.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src="https://img.freepik.com/premium-photo/palms-up-hands-group-multinational-people-african-latin-american-european-people-which-stay-together-circle_581879-7.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
            alt="GCM Partners mission"
            className="w-full rounded-xl shadow-md min-h-[400px] object-cover"
          />
        </div>
      </div>
    </Element>
  );
};

export default OurMission;
