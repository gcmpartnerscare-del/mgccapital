import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import EligibilityCards from "./EligibilityCards";

const pathways = [
  {
    name: "EB-2 NIW",
    audience: "Professionals with advanced degrees or exceptional ability",
    pros: [
      "No employer needed",
      "Strong fit for self-starters",
      "High approval rate",
    ],
    cons: "Must show national importance of your work",
  },
  {
    name: "EB-1A",
    audience: "Globally recognized experts, innovators, or award-winners",
    pros: ["Fast-track green card", "No job offer needed"],
    cons: "High evidence threshold",
  },
  {
    name: "EB-1B",
    audience: "Academic researchers with job offers from U.S. institutions",
    pros: ["Ideal for scholars", "Faster processing"],
    cons: "Requires a U.S. job offer",
  },
  {
    name: "O-1 Visa",
    audience: "Tech, arts, and business talents with proven success",
    pros: ["Good entry point", "Builds EB-1 or NIW profile"],
    cons: "Temporary, not permanent",
  },
];

export default function EligibilityNIW() {
  return (
    <Element
      name="eligibility"
      className="bg-white py-20 px-4 md:px-10 text-gray-800 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="flex flex-col">
          <h2
            style={{ fontFamily: "Marcellus" }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Eligibility Requirements for the EB2-NIW Program
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            To qualify for the U.S. National Interest Waiver (NIW), applicants
            must demonstrate exceptional ability or advanced degrees and prove
            their work substantially benefits the national interest.
          </p>
          <Link
            to={"/globalresidency-citizenship#onboardingform"}
            className="bg-primary-700 text-white w-max px-8 py-3 rounded-full font-semibold hover:bg-primary-800 transition"
          >
            Get Started
          </Link>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-600 text-lg ">
            At GCM Partners, we specialize in helping ambitious professionals, innovators, researchers, and entrepreneurs unlock permanent residency in the United States through the prestigious EB-2 National Interest Waiver (NIW) Program. We understand the importance of global access, career mobility, and long-term security. That’s why we’ve curated a fully supported, transparent application pathway — backed by world-class attorneys and a dedicated processing team — to make your American dream a reality.
          </p>
          
        </div>
      </div>
      <EligibilityCards />
    </Element>
  );
}
