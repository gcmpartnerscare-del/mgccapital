import React from "react";
import programs from "../../data/programs";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

export default function ImmigrationInvestment({ category }) {
  const { heading, cards } = programs[category].immigration;

  return (
    <Element name="investmentImmigration" className="py-20 px-4 md:px-10">

      <div className="mb-16 flex flex-col lg:flex-row gap-8 justify-between">
          <div className="grid">
            <div className="flex items-center gap-4 mb-4">
              <p className="bg-white rounded-full shadow py-1 px-3 font-semibold">
                <Activity />
              </p>
              
              <h3 className="text-gray-900">{heading}</h3>
            </div>
            <h2 className="text-3xl lg:text-5xl font-semibold max-w-xl leading-tight">
              Immigration Investment, With GCM Partners
            </h2>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-6 max-w-xl">
            <p className="text-gray-600 mt-4 text-lg ">
              Gain access to visa-free travel, global
              mobility, Quick residency approval in 4–6 months and international security through a seamless,
              expert-led processes.
            </p>
            <Link to={"/globalresidency-citizenship#onboardingform"} className="bg-primary-700 text-white w-max px-8 py-3 rounded-full font-semibold hover:bg-primary-800 transition">



              Get Started
            </Link>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div className="mt-4" key={index}>
            <img src={card.image} alt={card.title} className="mb-4 rounded-xl h-[300px] object-cover w-full" />
            <h4 style={{fontFamily: "Marcellus"}} className="text-3xl font-semibold mb-2">{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </Element>
  );
}
