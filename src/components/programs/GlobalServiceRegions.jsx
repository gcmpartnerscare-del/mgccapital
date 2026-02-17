import React from "react";
import ImmigrationInvestment from "./ImmigrationInvestment";
import FAQItem from "../../ui/FAQItem";
import { regionsData } from "../../data/regionsData";
import { Link } from "react-router-dom";

const GlobalServiceRegions = () => {
  return (
    <>
      <ImmigrationInvestment category="CBI" />
      <section className="px-4 md:px-10 py-12">
        {Object.entries(regionsData).map(([key, regionInfo], regionIndex) => (
          <div key={key} className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <div className="mb-6">
                  <h2 style={{ fontFamily: "Marcellus", }} className="text-3xl md:text-4xl font-bold mb-4">
                    {regionInfo.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Explore {regionInfo.intro}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Programs Available
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-6">
                    {regionInfo.programs.map((program, index) => (
                      <li
                        key={index}
                        className="border p-4 rounded-xl shadow-sm transition-all"
                      >
                        <h4 className=" font-semibold mb-2">{program.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">
                          {program.summary}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* FAQs */}
               <div className="w-full">
                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col gap-3 mb-6 text-center">
                    <h3 style={{ fontFamily: "Marcellus", }} className="text-3xl md:text-4xl font-bold mb-4">
                      Frequently Asked Questions
                    </h3>
                    <p className="">
                      Answers to common questions about {regionInfo.name}{" "}
                      programs availability and registeration advisory
                    </p>
                  </div>
                  <div className="space-y-4">
                    {regionInfo.faqs.map((faq, index) => (
                      <FAQItem
                        key={index}
                        faq={faq}
                        index={regionIndex * 100 + index}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row pt-4 gap-4 justify-center">
                  <Link
                    to={"/resources#consultation"}
                    className="bg-gradient-to-br from-primary-500 to-primary-600 text-white w-max px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-800 transition"
                  >
                    Schedule Consultation
                  </Link>
                  <Link
                    to={"/globalresidency-citizenship#onboardingform"}
                    className="border-primary-800 border w-max px-8 py-3 rounded-full font-semibold hover:border-primary-600 hover:bg-primary-600 transition duration-200 hover:text-white"
                  >
                    Register for {regionInfo.abrev}
                  </Link>
                </div>
              </div> 
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default GlobalServiceRegions;
