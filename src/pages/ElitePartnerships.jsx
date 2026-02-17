import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import { Element } from "react-scroll";
import DynamicPageHeader from "../components/common/DynamicPageHeader";
import {
  Handshake,
  Globe2,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";
import CorporateDetails from "../components/CorporateDetails";
import PartnershipWithMGC from "../components/PartnershipWithMGC";
import { Link } from "react-router-dom";
import PartnershipApplicationForm from "../components/forms/PartnershipApplicationForm";

const metrics = [
  {
    title: "40+ Strategic Alliances",
    desc: "Across finance, legal, private banking & immigration sectors globally.",
    span: true,
  },
  {
    title: "150+ HNWIs Onboarded Quarterly",
    desc: "Average of 150+ high-net-worth individuals referred and served each quarter.",
    span: false,
  },
  {
    title: "24-Month Average Yield Cycle",
    desc: "Clients realize returns or residency results within 18–24 months.",
    span: false,
  },
  {
    title: "Capital Facilitation",
    desc: "Across real estate, donations, and hybrid investment structures.",
    span: true,
  },
];

const ElitePartnership = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionName = location.hash.slice(1);
      scroller.scrollTo(sectionName, {
        duration: 700,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -100,
      });
    }
  }, [location]);
  return (
    <Element name="ElitePartnership" className="bg-white w-full">
      {/* Hero Header */}
      <DynamicPageHeader />

      <PartnershipWithMGC />

      {/* Why Partner With Us */}
      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="md:px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/diversity-people-talk-international-conference-partnership_53876-53619.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
                alt="Elite Partnership"
                className="rounded-lg shadow-md h-[450px] w-full object-cover"
              />
            </div>

            {/* Why Partner With GCM */}
            <div className="grid gap-6">
              <h3
                style={{ fontFamily: "Marcellus" }}
                className="text-3xl font-bold"
              >
                Why Partner With GCM?
              </h3>
              <p className="text-gray-700 max-w-4xl">
                At GCM Partners, we believe in partnerships that empower
                individuals, families, and businesses to access global
                citizenship, residency, and wealth diversification solutions.
                Our ecosystem is built on creating shared value for those who
                serve globally-minded clients.
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-800 text-base">
                <li>
                  Access premium EU citizenship pathways (e.g., Slovenia by
                  Repatriation)
                </li>
                <li>Assured Pathways to a U.S. Green Card</li>
                <li>Competitive commission structures</li>
                <li>Dedicated back-office legal and documentation support</li>
                <li>Fast client processing timelines</li>
                <li>Professional integrity, transparency, and global reach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:px-4">
          <div className="text-start">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Partners Gain
            </h3>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              With a footprint in the UAE, UK, Nigeria, St. Kitts, and Antigua,
              Our partners benefit from on-ground expertise, regional
              compliance, and localized growth opportunities.
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Join our global network of immigration professionals, legal
              advisors, consultants, and service providers helping clients
              access EU citizenship, second passports, and international wealth
              solutions.
            </p>
            {/* Final CTA Section */}
            <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
              <Link
                to="/elitepartnerships#ApplyNow"
                className="bg-primary-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-800 transition"
              >
                Become a Partner
              </Link>
              <Link
                to="/resources#consultation"
                className="bg-white border border-primary-700 text-primary-700 px-8 py-3 rounded-full font-semibold hover:bg-primary-700 hover:text-white transition"
              >
                Schedule a Quick Consultation
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
            <div className="bg-white p-4 rounded-lg shadow-soft flex flex-col gap-4 items-start border border-gray-200">
              <BriefcaseBusiness className="text-primary mt-1" />
              <p>
                <strong>Revenue Sharing:</strong> Tiered commission based on
                referral volume & yield type.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-soft flex flex-col gap-4 items-start border border-gray-200">
              <Globe2 className="text-primary mt-1" />
              <p>
                <strong>International Visibility:</strong> Co-branded campaign
                access and digital showcases.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-soft flex flex-col gap-4 items-start border border-gray-200">
              <Handshake className="text-primary mt-1" />
              <p>
                <strong>Exclusive Access:</strong> Preferred deals and
                investment packages for partner clients.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-soft flex flex-col gap-4 items-start border border-gray-200">
              <BarChart3 className="text-primary mt-1" />
              <p>
                <strong>Analytics Dashboard:</strong> View real-time status of
                referrals, returns, and progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence CTA
      <section className="h-[400px] relative flex flex-col items-center justify-center bg-[url(https://img.freepik.com/free-photo/silhouette-business-people-discussion-meeting-cityscape-team-concept_53876-146187.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80)] bg-cover bg-no-bg-no-repeat bg-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060d24] to-black opacity-50 z-10"></div>

        <div className="px-4 md:px-8 relative z-20">
          <div className="text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Global Network
            </p>
            <h3 className="text-3xl font-bold">
              Expanding Presence. Trusted Connections.
            </h3>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Join forces with GCM Partners and unlock a world of profitable,
              compliant, and forward-looking citizenship-by-investment
              strategies built for a globalized economy.
            </p>
            <Link
              to="/elitepartnerships#ApplyNow"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition block mt-8 w-max mx-auto"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section> */}

      {/* Partnership Metrics (Grid with Spanning Cards) */}
      {/* <section className="py-20 px-4 md:px-10 bg-white">
        <div className="md:px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">
              Impact in Numbers
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A snapshot of how we drive value across our partnerships —
              consistently, reliably, and globally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((item, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 shadow p-6 rounded-xl transition-all ${
                  item.span ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Corporate Details */}
      {/* <CorporateDetails /> */}

      <PartnershipApplicationForm />
    </Element>
  );
};

export default ElitePartnership;
