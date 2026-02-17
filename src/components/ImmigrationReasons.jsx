import React, { useState } from "react";
import { Element } from "react-scroll";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const immigrationMotives = [
  {
    id: 1,
    title: "Traveling",
    desc: "Access more countries visa-free & move freely across borders",
    img: "https://img.freepik.com/premium-photo/black-woman-browsing-cellphone-while-waiting-airport-hall_1363666-168.jpg",
  },
  {
    id: 2,
    title: "Education",
    desc: "Secure admission into top EU institutions & more opportunities",
    img: "https://img.freepik.com/free-photo/close-up-hands-holding-diplomas-caps_23-2148950575.jpg",
  },
  {
    id: 3,
    title: "Business",
    desc: "Build global ventures & enjoy investor-friendly environments overseas.",
    img: "https://img.freepik.com/free-photo/workplace-team-cooperation-businesswoman-laptop-office_1418-44.jpg",
  },
  {
    id: 4,
    title: "Healthcare",
    desc: "Access advanced healthcare systems & specialized treatments",
    img: "https://img.freepik.com/premium-photo/heart-hand-black-woman-nurse-hospital-with-expression-show-love-care-career-professional-medical-facility-worker-uniform-with-happy-smile-self-love-sign-work_590464-84511.jpg",
  },
  {
    id: 5,
    title: "Career",
    desc: "Pursue high-paying roles & international job opportunities",
    img: "https://img.freepik.com/premium-photo/successful-businessman-working-office_249974-10781.jpg",
  },
  {
    id: 6,
    title: "Investments",
    desc: "Gain asset security, tax efficiency & reliable financial institutions",
    img: "https://img.freepik.com/free-photo/entrepreneur-checking-business-analytics_482257-119390.jpg",
  },
];

const ImmigrationReasons = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <Element name="immigrationReasons" className="w-full bg-white pt-5">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-4">
          <h2
            style={{ fontFamily: "Marcellus" }}
            className="text-xl font-bold text-gray-900"
          >
            Motivations Behind Global Residency & Citizenship
          </h2>
        </div>

        <Slider {...settings} className="immigration-motives-slider">
          {immigrationMotives.map((item, index) => {
            const isActive = index === activeIndex || index === hoveredIndex;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transition-all duration-300 px-1 py-2 ${
                  index === activeIndex ? "scale-[1.02]" : "opacity-90"
                }`}
              >
                <div className="relative rounded-xl overflow-hidden min-h-[184px] h-full group cursor-pointer flex items-end">
                  {/* Background Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full absolute inset-0 object-cover z-0"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 z-10 bg-black/50" />

                  {/* Animated Content Container */}
                  <div className="relative z-20 p-2 w-full h-full flex flex-col justify-end text-white">
                    {/* Title Slide Animation */}
                    <motion.h3
                      style={{ fontFamily: "Marcellus" }}
                      className="text-base font-semibold absolute bottom-2 left-2 drop-shadow-sm"
                      initial={{ y: 0 }}
                      animate={isActive ? { y: -70 } : { y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.title}
                    </motion.h3>

                    {/* Description Fade In */}
                    <motion.p
                      className="text-sm drop-shadow-sm mt-auto"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.desc}
                    </motion.p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </Element>
  );
};

export default ImmigrationReasons;
