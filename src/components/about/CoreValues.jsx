import { Activity } from "lucide-react";
import React from "react";
import { Element } from "react-scroll";
// import coreValuesImg from "/images/core-values.jpg"; // Replace with actual image path

const CoreValues = () => {
  return (
    <Element name="corevalues" className="w-full py-20 px-4 md:px-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="w-full space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <p className="bg-gray-100 rounded-full shadow py-1 px-3 font-semibold">
              <Activity />
            </p>
            <h3 className="text-gray-900">OUR CORE VALUES</h3>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Guided by Integrity, Driven by Innovation, Committed to You
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At GCM Partners, we uphold integrity as our compass — ensuring that
            every solution we deliver is transparent, ethical, and aligned with
            the interests of our clients and partners.
          </p>
          <p className="text-gray-700 text-lg">
            We believe in personalized excellence, discretion, and delivering
            unmatched value through strategic insight and expert guidance, personalized consultations, industry insights, trends and best legal practices.
          </p>
          <p className="text-gray-700 text-lg">
            Every move we make is client-first, future-proof, and globally
            conscious.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src="https://img.freepik.com/premium-photo/discussion-city-business-women-with-paperwork-planning-meeting-conversation-professional-corporate-team-people-town-with-documents-talking-communication-networking_590464-357434.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
            alt="Core values"
            className="w-full rounded-xl shadow-md min-h-[400px] object-cover"
          />
        </div>
      </div>
    </Element>
  );
};

export default CoreValues;
