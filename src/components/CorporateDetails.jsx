import React from "react";
import { Element } from "react-scroll";
import {
  Scale,
  ShieldCheck,
  LockKeyhole,
  LineChart,
  CheckCircle,
  Network,
} from "lucide-react";

const items = [
  {
    icon: <Scale className="text-primary w-8 h-8" />,
    title: "Legal & Regulatory Governance",
    description:
      "Compliance with international regulatory standards ensures that our services meet the highest legal, financial, and ethical benchmarks. We operate under stringent due diligence processes, continuously adapting to evolving cross-border investment laws.",
  },
  {
    icon: <ShieldCheck className="text-primary w-8 h-8" />,
    title: "Corporate Governance",
    description:
      "GCM Partners fosters transparency, leadership accountability, and strategic integrity across all operations. Our executive board follows a rigorous code of conduct that aligns with best-in-class global governance frameworks.",
  },
  {
    icon: <LockKeyhole className="text-primary w-8 h-8" />,
    title: "Data Privacy & Security",
    description:
      "We prioritize end-to-end encryption and GDPR-compliant data protection systems to ensure all client data remains confidential, secure, and never monetized. All systems are audited annually for security risks.",
  },
  {
    icon: <LineChart className="text-primary w-8 h-8" />,
    title: "Service Incline & Performance Analysis",
    description:
      "Backed by AI-led monitoring, we visualize operational growth and optimize client-facing services. This includes quarterly incline reviews and predictive analysis using our E.A.I.R.S model.",
  },
  {
    icon: <Network className="text-primary w-8 h-8" />,
    title: "Program Refferal Performance",
    description:
      "Our foundation of legal resilience and data integrity gives clients and partners the assurance they need when navigating complex global investment and citizenship structures. We represent a symbol of consistency and growth, backed by Data, predictive AI Model system and Expert Analysis",
  },
];

const CorporateDetails = () => {
  return (
    <Element
      name="CorporateDetails"
      className="w-full px-4 md:px-10 bg-gray-100 py-20"
    >
      <div className="md:px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Corporate Integrity & Transparency
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At GCM Partners, we maintain a governance structure designed to
            uphold compliance, security, transparency, and value across every
            client and partner interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 flex flex-col justify-between p-6 rounded-xl shadow-sm ${
                index === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>

              {/* Progress visual for service incline card */}
              {item.title.includes("Service Incline") && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-500 mb-2">
                    2025 Service Growth Overview
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary-600 h-2.5 rounded-full transition-all duration-700"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default CorporateDetails;
