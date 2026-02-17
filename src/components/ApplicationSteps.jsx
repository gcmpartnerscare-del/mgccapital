import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const tabs = [
  { label: "Citizenship Programs", value: "cbi" },
  { label: "Residency Programs", value: "rbi" },
];

const cbiSteps = [
  {
    step: "01",
    title: "Citizenship Eligibility Check",
    description:
      "Ensure you meet all requirements for the investment citizenship program.",
  },
  {
    step: "02",
    title: "Preparation of documents",
    description:
      "Prepar of documents in accordance with legislation of the state, which was chosen for immigration.",
  },
  {
    step: "03",
    title: "Submit Required Documents",
    description:
      "Submit all legal and financial documents for review.",
  },
  {
    step: "04",
    title: "Approval & Passport Issuance",
    description:
      "Once approved, receive your new passport without residency requirements.",
  },
];

const rbiSteps = [
  {
    step: "01",
    title: "Residency Eligibility Check",
    description:
      "Confirm eligibility and available investment routes for residency.",
  },
  {
    step: "02",
    title: "Application for a Permit",
    description:
      "Prepare required documents for obtaining a residence permit",
  },
  {
    step: "03",
    title: "Make Qualifying Investment",
    description: "Fulfill the investment criteria set by the program country.",
  },
  {
    step: "04",
    title: "Get Residency Permit Issued",
    description: "Receive your official residency permit and ID card.",
  },
];

const ApplicationSteps = () => {
  const [activeTab, setActiveTab] = useState("cbi");
  const activeSteps = activeTab === "cbi" ? cbiSteps : rbiSteps;

  return (
    <section className="py-10 px-4 md:px-10 w-full bg-white">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Global Mobility and Access is now easier than ever
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          With our platform, obtaining your Second Citizenship or a Residency Permit becomes a seamless, streamlined process with ease in service, integrity, fairness and transparency.
        </p>

        <div className="bg-white p-2 md:p-6 rounded-lg shadow-sm grid grid-cols-1 gap-6">
        {/* <div className="bg-white p-2 md:p-6 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-3 gap-6"> */}
          <div className="">
          {/* <div className="lg:col-span-2"> */}
            <div className="flex gap-4 justify-center md:justify-normal mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  className={`px-8 py-3 rounded-sm text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.value
                      ? "bg-primary-600 text-white shadow-md"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-50 shadow-sm"
                  }`}
                  onClick={() => setActiveTab(tab.value)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <h3 className="text-lg font-semibold mb-2">
                  {activeTab === "cbi"
                    ? "Citizenship"
                    : "Residency"}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {activeTab === "cbi"
                    ? "The Citizenship Programs allows eligible individuals to obtain a second citizenship"
                    : "The Residency Programs offers a pathway to secure long-term residency rights through qualifying economic contributions, demonstrated exceptional abilities or proven substantial benefits that merit national interest."}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {activeSteps.map((step) => (
                    <div
                      key={step.step}
                      className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:shadow-md transition"
                    >
                      <div className="w-8 h-8 rounded-md bg-white text-primary-800 flex items-center justify-center text-sm font-bold mb-2">
                        {step.step}
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:flex mt-6 gap-4 items-center">
                  <Link
                  to={"/globalresidency-citizenship#onboardingform"}
                  className="block w-full md:w-max text-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
                >
                  Register Now
                </Link>
                <Link
                  to={"/resources#consultation"}
                  className="block w-full md:w-max text-center px-6 py-3 border border-primary-600 text-primary-600 rounded-md hover:border-primary-800 hover:text-primary-800 transition"
                >
                  Schedule Constltation
                </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* <div className="flex items-center justify-center">
            <div
              className="w-full h-full min-h-[400px] bg-cover bg-center bg-gray-100 rounded-lg flex items-center justify-center transition-all duration-500"
              style={{
                backgroundImage:
                  activeTab === "cbi"
                    ? "url('https://img.freepik.com/free-photo/multiethnic-business-team-watching-presentation_74855-2061.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80')"
                    : "url('https://img.freepik.com/free-photo/business-colleagues-studying-reports_74855-1139.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80')",
              }}
            >
              <Link
              style={{fontFamily: "Marcellus",}}
                to={"/resources#consultation"}
                className="text-3xl bg-white p-2 px-4 rounded-lg font-bold text-primary-700"
              >
                {activeTab.toUpperCase()} Consultation
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ApplicationSteps;
