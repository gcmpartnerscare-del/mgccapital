import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animationlib";
import { Activity, BarChart2, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Sample Data
const steps = [
  {
    id: 1,
    title: "Sign Up & Provide Your Full Application Details",
    description:
      "This helps us understand your unique needs & preferences based on your profile. It also helps us attain qualifications for specified program application.",
  },
  {
    id: 2,
    title: "Program Recommendation & Finalization",
    description:
      "We help recommend the best Citizenship or Residency programs that offer the lowest cost and highest ROI tailored to your goals.",
  },
  {
    id: 3,
    title: "Complete Application & Payment",
    description:
      "Proceed with payment after program selection. Our team then identifies necessary documentation and legal checkpoints to ensure a smooth process.",
  },
  {
    id: 4,
    title: "Processing & Passport Approval",
    description:
      "Our experts help accelerate your file generation. Sit back while we handle the paperwork and deliver your passport or residency permit swiftly.",
  },
];

const ApplicationProcess = () => {
  return (
    <Element name="applicationSteps" className="w-full">
      <section className="bg-white py-20 px-4 md:px-10 text-gray-900">
        <div className="mb-16 flex flex-col lg:flex-row gap-8 justify-between">
          <div className="grid">
            <div className="flex items-center gap-4 mb-4">
              <p className="bg-white rounded-full shadow py-1 px-3 font-semibold">
                <Activity />
              </p>
              <h3 className="text-gray-900">START TODAY</h3>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl leading-tight">
              Simplified Application, Powerful Results
            </h2>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-6 max-w-xl">
            <p className="text-gray-600 mt-4 text-lg ">
              4 Steps to a New Life with Our Citizenship & Residency by
              Investment Programs! Gain access to visa-free travel, global
              mobility, and international security through a seamless,
              expert-led process.
            </p>
            <Link to={"/globalresidency-citizenship#onboardingform"} className="bg-primary-700 text-white w-max px-8 py-3 rounded-full font-semibold hover:bg-primary-800 transition">
              Get Started
            </Link>
          </div>
        </div>

        {/* Application Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Impact Application Card */}
          <div className="rounded-xl shadow-lg overflow-hidden col-span-1 md:col-span-2 xl:col-span-1 flex flex-col justify-between gap-4 bg-primary-700 text-white p-4">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-white" />
              <p className="text-sm font-medium">Easy 4 step Application Process</p>
            </div>

            <div className="flex-grow flex pt-6 pb-4 lg:p-0 items-end">
              <h4 className="text-2xl font-bold text-white leading-tight">
                Reduction in Application Processing Time
              </h4>
            </div>

            <p className="text-sm text-gray-200">
              Our advanced analytics and streamlined processes have led to
              significant efficiency gains, reducing the average time for
              application processing by 29% over the last quarter.
            </p>
          </div>

          {/* Application Steps */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col items-center"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center  gap-2 text-primary-700 font-semibold">
                  <CheckCircle size={18} />
                  Step {index + 1}
                </div>
                <h3
                  style={{ fontFamily: "Marcellus" }}
                  className="text-2xl font-bold"
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ApplicationProcess;

/*

<motion.div
  key={step.id}
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col items-center"
>
  <div className="relative w-full h-96">
    <img
      src={step.image}
      alt={step.title}
      className="object-cover w-full h-full rounded-xl"
    />
  </div>
  <div className="p-6 space-y-3">
    <div className="flex items-center  gap-2 text-primary-700 font-semibold">
      <CheckCircle size={18} />
      Step {index + 1}
    </div>
    <h3
      style={{ fontFamily: "Marcellus" }}
      className="text-3xl font-bold"
    >
      {step.title}
    </h3>
    <p className="text-sm text-gray-600">{step.description}</p>
  </div>
</motion.div>

*/
