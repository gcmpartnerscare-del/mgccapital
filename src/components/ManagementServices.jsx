// components/services/ManagementServices.jsx
import React from "react";
import { Element } from "react-scroll";

const ManagementServices = () => {
  return (
    <Element
      name="management"
      className="w-full bg-gray-100 py-20 px-6 md:px-16"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <h2 style={{fontFamily:"Marcellus",}} className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Corporate Immigration & Strategic Management Services
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            At GCM Partners, our Management Services are focused on aligning
            operational frameworks with long-term strategic objectives for both
            clients and governments. We deliver solutions across compliance,
            reporting, program monitoring, and economic impact assessment.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-800 text-base">
            <li>Operational rollout and project lifecycle management</li>
            <li>Compliance reporting systems and procedural audit setup</li>
            <li>Program transparency assessments with risk indicators</li>
            <li>Client-facing workflow optimization for citizenship/residency initiatives</li>
            <li>End-to-end program logistics and management dashboards</li>
          </ul>
        </div>
        <div className="w-full">
          <img
            src="https://img.freepik.com/premium-photo/business-professionals-engaged-friendly-conversation-outdoor-stroll-urban-green-space_209190-177414.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
            alt="GCM Partners mission"
            className="w-full rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </Element>
  );
};

export default ManagementServices;
