import React from "react";
import InvestmentPrograms from "./InvestmentPrograms";

const types = {
  residency: [
    {
      title: "Temporary Residency (TR)",
      desc: "Legal stay ranging from 1 to 5 years, renewable. Ideal for remote professionals, retirees, and freelancers.",
      example: "Spain Non-Lucrative, Portugal D7, Mexico TR",
    },
    {
      title: "Permanent Residency (PR)",
      desc: "Long-term stay with rights similar to citizens. Often earned through TR upgrades or direct PR.",
      example: "Paraguay, Panama, Uruguay",
    },
    {
      title: "Golden Visa Residency",
      desc: "Residency through investment: real estate, government bonds, or business.",
      example: "Portugal, Greece, Spain",
    },
    {
      title: "Digital Nomad Visa",
      desc: "Remote work visas for online professionals. Proof of income required.",
      example: "Costa Rica, Mexico, Portugal",
    },
  ],
  citizenship: [
    {
      title: "Naturalization",
      desc: "Acquired through long-term legal residency and cultural integration.",
      example: "Most countries after 5–10 years",
    },
    {
      title: "Citizenship By Investment",
      desc: "Fast-track citizenship via investment into national economy.",
      example: "Dominica, St. Kitts & Nevis, Turkey",
    },
    {
      title: "Citizenship by Descent",
      desc: "Available if you have ancestral ties (e.g., grandparents).",
      example: "Ireland, Italy, Poland",
    },
    {
      title: "Citizenship by Birth (Jus Soli)",
      desc: "Granted at birth in some countries if born on the soil.",
      example: "USA, Canada, Brazil",
    },
  ],
};

const ResidencyCitizenshipTypes = () => {
  return (
    <section className="pt-20 pb-0 px-4 md:px-10 bg-white">
      <div className="flex flex-col gap-3 mb-6">
        <h2 style={{fontFamily: "Marcellus",}} className="text-3xl font-bold">Types of Citizenships</h2>
        <p className="">
          Citizenship provides full legal rights in a country—including passport
          issuance, voting rights, and public services access.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {types.citizenship.map((type, i) => (
          <div
            key={i}
            className="p-4 border rounded-xl shadow-sm flex justify-between gap-2 flex-col min-h-[200px]"
          >
            <h3 className="font-semibold text-xl mb-2">{type.title}</h3>
            <p className="text-gray-700 text-base mb-1">{type.desc}</p>
            <p className="text-sm text-primary-700 font-medium">
              Offering Countries: <br /> {type.example}
            </p>
          </div>
        ))}
      </div>
      <InvestmentPrograms category="CBI" />
      <div className="flex flex-col gap-3 mb-4">
        <h2 style={{ fontFamily: "Marcellus", }} className="text-3xl font-bold ">Types of Residency</h2>
        <p className="">
          Residency refers to the right to live, and in many cases, work or
          invest in a country—temporarily or permanently.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-4 mb-6">
        {types.residency.map((type, i) => (
          <div
            key={i}
            className="p-4 border rounded-xl shadow-sm flex justify-between gap-2 flex-col min-h-[200px]"
          >
            <h3 className="font-semibold text-xl mb-2">{type.title}</h3>
            <p className="text-gray-700 text-base mb-1">{type.desc}</p>
            <p className="text-sm text-primary-700 font-medium">
              Offering Countries: <br /> {type.example}
            </p>
          </div>
        ))}
      </div>
      <InvestmentPrograms category="RBI" />
    </section>
  );
};

export default ResidencyCitizenshipTypes;
