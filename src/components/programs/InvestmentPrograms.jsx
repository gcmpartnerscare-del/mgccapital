import React from "react";
import countriesDB from "../../data/countriesDB"; // Your dynamic countries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import programs from "../../data/programs";
import ProgramsCard from "./ProgramsCard";

export default function InvestmentPrograms({ category }) {
  const { countryIDs } = programs[category];
  const filteredCountries = countriesDB.filter((c) =>
    countryIDs.includes(c.id)
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablet
      { breakpoint: 640, settings: { slidesToShow: 1 } },  // Mobile
    ],
  };

  return (
    <section className="pt-2 pb-10">
      <h2
        style={{ fontFamily: "Marcellus" }}
        className="text-4xl font-bold mb-6"
      >
        {programs[category].title} Programs
      </h2>

      <Slider {...settings}>
        {filteredCountries.map((country) => (
          <div key={country.id} className="px-2">
            <ProgramsCard country={country} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
