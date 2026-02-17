import { Activity } from "lucide-react";
import React from "react";
import { Element } from "react-scroll";

const EthicalPledgeSection = () => {
  const pledges = [
    {
      title: "1. Integrity Without Exception",
      description:
        "We conduct every engagement with transparency, honesty, and professional accountability. No false promises. No grey areas. Just trust built on truth.",
    },
    {
      title: "2. Excellence in Every Service",
      description:
        "We pledge world-class service delivery—timely, accurate, and customer-focused. From the first consultation to final documentation, we exceed expectations with precision and care.",
    },
    {
      title: "3. 100% Legal, 0% Compromise",
      description:
        "We follow every national and international law to the letter and the spirit. No shortcuts, no shady dealings—just ethical, compliant solutions that stand up to scrutiny anywhere in the world.",
    },
    {
      title: "4. Confidentiality & Identity Stewardship",
      description:
        "We treat your data like we treat your dreams—with utmost protection. Your information is handled securely, respectfully, and only in your best interest.",
    },
    {
      title: "5. Fairness, Inclusion & Empowerment",
      description:
        "We are committed to unlocking global opportunities for all—without bias, gatekeeping, or discrimination. We champion access, equity, and dignity for every client, everywhere.",
    },
  ];

  return (
    <Element name="ethicalpledge" className="bg-gray-100 py-20 px-4 md:px-10">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <p className="bg-gray-100 rounded-full shadow py-1 px-3 font-semibold">
            <Activity />
          </p>
          <h3 className="text-gray-900">CLIENT FIRST APPROACH</h3>
        </div>
        <h2 style={{fontFamily:"Marcellus",}} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          GCM Partners Ethical & Service Pledge
        </h2>
        <p className="w-full lg:w-2/3 text-lg text-gray-600 mb-10">
          At GCM Partners, we go beyond borders and bureaucracy—we
          deliver global mobility solutions with a conscience. Every service we
          provide is backed by our unwavering commitment to integrity,
          excellence, and human dignity. Here are our five solemn pledges to
          you
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pledges.map((pledge, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {pledge.title}
              </h3>
              <p className="text-gray-600">{pledge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default EthicalPledgeSection;
