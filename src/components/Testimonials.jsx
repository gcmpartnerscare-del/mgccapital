import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight, Quote, Users } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Element } from "react-scroll";

import { useTestimonials } from "../hooks/useTestimonials";
import TestimonialCard from "../ui/TestimonialCard"; // Make sure this accepts `testimonial` prop

const Testimonials = () => {
  const sliderRef = useRef(null);
  const { data: testimonials = [], isLoading, isError } = useTestimonials();

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Element name="testimonials" id="testimonials" className="py-16 px-4 md:px-10 w-full bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-primary-100 text-primary-800 p-2 rounded-full">
            <Quote size={20} />
          </span>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Client Testimonials
          </h3>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-500">
            What our clients are saying about us
          </p>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-primary-50 text-gray-800 shadow-md hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-primary-50 text-gray-800 shadow-md hover:bg-gray-100"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        {isLoading ? (
          <p className="text-center text-gray-500">Loading testimonials...</p>
        ) : isError ? (
          <p className="text-center text-red-500">Failed to load testimonials.</p>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-gray-600">No testimonials found.</p>
        ) : (
          <Slider ref={sliderRef} {...settings}>
            {testimonials.slice(0, 8).map((testimonial) => (
              <div key={testimonial._id} className="p-2">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </Element>
  );
};

export default Testimonials;



// import React, { useState } from "react";
// import { Element } from "react-scroll";
// import Slider from "react-slick";
// import { Quote } from "lucide-react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const testimonialsData = [
//   {
//     id: 1,
//     name: "James Okoro",
//     role: "Entrepreneur & Investor",
//     testimony:
//       "GCM Partners made my second citizenship journey seamless. Their expert advice and personalized service made me feel confident every step of the way.",
//     img: "/images/testimonial1.jpg",
//   },
//   {
//     id: 2,
//     name: "Fatima Al Rashid",
//     role: "Family Office Advisor",
//     testimony:
//       "Their AI-driven investment matching tool (P.A.I.R.S) gave us precision we’ve never seen. Our clients gained faster global access and diversified returns.",
//     img: "/images/testimonial2.jpg",
//   },
//   {
//     id: 3,
//     name: "Michael Wong",
//     role: "Executive, Tech Holdings",
//     testimony:
//       "GCM Partners doesn’t just offer services — they architect opportunities. Their strategic foresight helped restructure my international footprint.",
//     img: "/images/testimonial3.jpg",
//   },
// ];

// const Testimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     beforeChange: (_, next) => setActiveIndex(next),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <Element name="testimonials" className="bg-white py-20 w-full">
//       <div className="container-custom mx-auto px-4">
//         <div className="text-center mb-12">
//           <p className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</p>
//           <h2 className="text-4xl font-bold text-gray-900">Hear From Our Global Clients</h2>
//         </div>

//         <Slider {...settings} className="testimonials-slider">
//           {testimonialsData.map((item, index) => (
//             <div
//               key={item.id}
//               className={`transition-all px-4 py-6 ${
//                 index === activeIndex ? "col-span-2 scale-[1.02]" : "col-span-1 opacity-80"
//               }`}
//             >
//               <div className="relative rounded-xl bg-white shadow-lg p-8 flex flex-col h-full border border-gray-200">
//                 <Quote className="absolute top-4 right-4 text-primary w-8 h-8 opacity-20" />
//                 <div className="flex items-center gap-4 mb-4">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-14 h-14 object-cover rounded-full border-2 border-primary"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-gray-800">{item.name}</h4>
//                     <p className="text-sm text-gray-500">{item.role}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-base mt-2">"{item.testimony}"</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </Element>
//   );
// };

// export default Testimonials;