import React from "react";
import { Link } from "react-router-dom";
import GreenCardPathways from "../components/programs/GreenCardPathways";
import { ArrowUpRightFromSquare } from "lucide-react";
import ServicesList from "./ServiceList";
import InvestmentPrograms from "./programs/InvestmentPrograms";

const InternationalMigration = ({ category }) => {
  

  return (
    <div className="px-4 md:px-10 py-8 font-sans bg-white">
      {/* Branding */}
      <div className="text-center">
        <h1
          style={{ fontFamily: "Marcellus" }}
          className="text-3xl font-bold mt-3 text-gray-800"
        >
          International Migration With GCM Partners
        </h1>
        <h2 className="text-lg font-semibold mb-3 text-gray-800">
          Global Residency and Citizenship Programs
        </h2>
      </div>
      <div className="my-5">
        <InvestmentPrograms category="CBI" />
        <InvestmentPrograms category="RBI" />
      </div>

      <GreenCardPathways />

      {/* Services */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8 items-center">
        <div className="w-full order-2 lg:order-1">
          <img
            src="https://img.freepik.com/free-photo/young-business-woman-phone-city-background_53876-104756.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="GCM Partners vision"
            className="w-full rounded-xl shadow-md h-[400px] md:h-[500px] object-cover bg-gradient-to-t from-primary-600 to-primary-400"
          />
        </div>
        <div className="">
          <h2
            style={{ fontFamily: "Marcellus" }}
            className="text-3xl font-semibold mb-3 text-gray-800"
          >
            Our Services Suite
          </h2>
          <p className="pb-4">
            World-Class Investment & Advisory Solutions to Global Mobility,
            Tailored for Your Migration Needs from Corporate Immigration &
            Strategic Management Services to Visa & Migration Consulting
          </p>

          <ServicesList />

          {/* CTA Buttons */}
          <div className="grid grid-cols-1 items-center md:flex gap-4 mt-8">
            <Link
              to="/about#seeourimpact"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
            >
              Explore Our Services <ArrowUpRightFromSquare size={16} />
            </Link>
            <Link
              to="/resources#consultation"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 border border-primary-600 text-primary-600 hover:text-primary-700 rounded-md hover:border-primary-700 transition"
            >
              Schedule Quick Consultation <ArrowUpRightFromSquare size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalMigration;
