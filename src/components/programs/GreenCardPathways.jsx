import React from "react";
import { Link } from "react-router-dom";
import { BriefcaseBusiness, MapPinned } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GreenCardPathways() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const pathways = [
    {
      name: "EB-2 NIW",
      audience: "Professionals with advanced degrees or exceptional ability",
      pros: [
        "No employer needed",
        "Strong fit for self-starters",
        "High approval rate",
      ],
      considerations: "Must show national importance of your work",
    },
    {
      name: "EB-1A",
      audience: "Globally recognized experts, innovators, or award-winners",
      pros: ["Fast-track green card", "No job offer needed"],
      considerations: "High evidence threshold",
    },
    {
      name: "EB-1B",
      audience: "Academic researchers with job offers from U.S. institutions",
      pros: ["Ideal for scholars", "Faster processing"],
      considerations: "Requires a U.S. job offer",
    },
    {
      name: "O-1 Visa",
      audience: "Tech, arts, and business talents with proven success",
      pros: ["Good entry point", "Builds EB-1 or NIW profile"],
      considerations: "Temporary, not permanent",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 mb-10">
          {/* Header Section + CTA */}
          <div>
            <p className="flex items-center gap-2 text-sm text-primary-700 font-semibold uppercase mb-4">
              <MapPinned size={20} />
              U.S. Immigration Guide
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
              Your Smart Pathway to a U.S. Green Card
            </h2>
            <p className="mt-2 text-gray-600">
              Use this guide to assess your eligibility and discover how to
              begin your immigration journey today. Contact GCM Partners Group
              for a free initial assessment and personalized immigration
              guidance.
            </p>
          </div>
          {/* CTA Section */}
          <div className="">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to find out if you're eligible?
            </h4>
            <p className="my-4 text-gray-600">
              Are you a Nigerian professional seeking a reliable, self-directed
              route to U.S. permanent residency? This quick decision guide helps
              you choose the most suitable U.S. high-skilled immigration pathway
              based on your profile — whether you're an academic, industry
              expert, or aspiring global contributor.
            </p>

            <Link
              to="resources#consultation"
              className="bg-primary-600 hover:bg-primary-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 block w-full text-center md:w-max mt-4"
            >
              Get a Free Assessment
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {" "}
            {pathways.map((path, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#002244] mb-2">
                  {path.name}
                </h3>
                <p className="mb-2 text-sm text-gray-700">
                  <strong>Who It’s For:</strong> {path.audience}
                </p>
                <ul className="mb-2 list-disc ml-5 text-sm text-primary-700">
                  {path.pros.map((pro, i) => (
                    <li key={i}>✔ {pro}</li>
                  ))}
                </ul>
                <p className="text-sm text-primary-700">
                  <strong>Considerations:</strong> {path.considerations}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          {/* <div className="w-full">
            <Slider {...settings}>
              <img
                src="https://img.freepik.com/premium-photo/full-body-portrait-stylish-trendy-girl-jeans-jumpsuit-sneakers-showing-american-flag-looking-camera-isolated-violent-background-holiday-concept_534373-6893.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
                alt="Smart Path to US GreenCard"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
              <img
                src="https://img.freepik.com/free-photo/black-woman-holding-american-flag-head_23-2148135160.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
                alt="Smart Path to US GreenCard2"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
              <img
                src="https://img.freepik.com/premium-photo/go-adventure-happy-couple-preparing-journey-choosing-route-pink-background_116547-121147.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
                // src="https://img.freepik.com/premium-photo/black-woman-portrait-american-flag-independence-day-pride-heritage-background-culture-politics-patriotism-usa-freedom-representation-celebration-human-rights_590464-394908.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
                alt="Smart Path to US GreenCard3"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
              <img
                src="https://img.freepik.com/free-psd/person-with-american-flag-isolated_23-2151615215.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
                alt="Smart Path to US GreenCard3"
                className="w-full rounded-xl object-cover object-top h-[300px] p-1 md:h-[450px] shadow-lg"
              />
            </Slider>
          </div> */}
        </div>
      </div>
    </section>
  );
}
// import React from "react";
// import { Link } from "react-router-dom";
// import { BriefcaseBusiness, MapPinned } from "lucide-react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function GreenCardPathways() {
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//   };

//   const pathways = [
//     {
//       name: "EB-2 NIW",
//       audience: "Professionals with advanced degrees or exceptional ability",
//       pros: [
//         "No employer needed",
//         "Strong fit for self-starters",
//         "High approval rate",
//       ],
//       considerations: "Must show national importance of your work",
//     },
//     {
//       name: "EB-1A",
//       audience: "Globally recognized experts, innovators, or award-winners",
//       pros: ["Fast-track green card", "No job offer needed"],
//       considerations: "High evidence threshold",
//     },
//     {
//       name: "EB-1B",
//       audience: "Academic researchers with job offers from U.S. institutions",
//       pros: ["Ideal for scholars", "Faster processing"],
//       considerations: "Requires a U.S. job offer",
//     },
//     {
//       name: "O-1 Visa",
//       audience: "Tech, arts, and business talents with proven success",
//       pros: ["Good entry point", "Builds EB-1 or NIW profile"],
//       considerations: "Temporary, not permanent",
//     },
//   ];

//   return (
//     <section className="py-20 px-4 md:px-10 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 mb-10">
//           {/* Header Section + CTA */}
//           <div>
//             <p className="flex items-center gap-2 text-sm text-primary-700 font-semibold uppercase mb-4">
//               <MapPinned size={20} />
//               U.S. Immigration Guide
//             </p>
//             <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
//               Your Smart Pathway to a U.S. Green Card
//             </h2>
//             <p className="mt-2 text-gray-600">
//               Use this guide to assess your eligibility and discover how to
//               begin your immigration journey today. Contact GCM Partners Group
//               for a free initial assessment and personalized immigration
//               guidance.
//             </p>
//           </div>
//           {/* CTA Section */}
//           <div className="">
//             <h4 className="text-2xl font-semibold text-gray-900 mb-4">
//               Ready to find out if you're eligible?
//             </h4>
//             <p className="my-4 text-gray-600">
//               Are you a Nigerian professional seeking a reliable, self-directed
//               route to U.S. permanent residency? This quick decision guide helps
//               you choose the most suitable U.S. high-skilled immigration pathway
//               based on your profile — whether you're an academic, industry
//               expert, or aspiring global contributor.
//             </p>

//             <Link
//               to="resources#consultation"
//               className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-full font-semibold transition block w-full text-center md:w-max mt-4"
//             >
//               Get a Free Assessment
//             </Link>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
//           <div className="grid gap-4 md:grid-cols-2">
//             {" "}
//             {pathways.map((path, idx) => (
//               <div key={idx} className="bg-white shadow-md rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-[#002244] mb-2">
//                   {path.name}
//                 </h3>
//                 <p className="mb-2 text-sm text-gray-700">
//                   <strong>Who It’s For:</strong> {path.audience}
//                 </p>
//                 <ul className="mb-2 list-disc ml-5 text-sm text-green-700">
//                   {path.pros.map((pro, i) => (
//                     <li key={i}>✔ {pro}</li>
//                   ))}
//                 </ul>
//                 <p className="text-sm text-green-700">
//                   <strong>Considerations:</strong> {path.considerations}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Image */}
//           <div className="w-full">
//             <Slider {...settings}>
//               <img
//                 src="https://img.freepik.com/premium-photo/full-body-portrait-stylish-trendy-girl-jeans-jumpsuit-sneakers-showing-american-flag-looking-camera-isolated-violent-background-holiday-concept_534373-6893.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
//                 alt="Smart Path to US GreenCard"
//                 className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
//               />
//               <img
//                 src="https://img.freepik.com/free-photo/black-woman-holding-american-flag-head_23-2148135160.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
//                 alt="Smart Path to US GreenCard2"
//                 className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
//               />
//               <img
//                 src="https://img.freepik.com/premium-photo/go-adventure-happy-couple-preparing-journey-choosing-route-pink-background_116547-121147.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
//                 // src="https://img.freepik.com/premium-photo/black-woman-portrait-american-flag-independence-day-pride-heritage-background-culture-politics-patriotism-usa-freedom-representation-celebration-human-rights_590464-394908.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
//                 alt="Smart Path to US GreenCard3"
//                 className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
//               />
//               <img
//                 src="https://img.freepik.com/free-psd/person-with-american-flag-isolated_23-2151615215.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
//                 alt="Smart Path to US GreenCard3"
//                 className="w-full rounded-xl object-cover object-top h-[300px] p-1 md:h-[450px] shadow-lg"
//               />
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
