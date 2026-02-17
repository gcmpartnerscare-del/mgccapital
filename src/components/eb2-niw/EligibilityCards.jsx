import { BarChart2, GraduationCap, ScrollText, Signature } from "lucide-react";
import React from "react";

const eligibilityCriteria = [
  {
    title: "Advanced Degree",
    icon: <GraduationCap />,
    imgSrc: "https://img.freepik.com/premium-photo/graduation-achievement-group-students-with-certificate-university-education-opportunity-success-college-scholarship-happy-people-campus-with-degree-milestone-diploma_590464-464889.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80",
    alt: "Advanced Degree",
    description:
      "You must possess an advanced degree (master's or higher) or its equivalent (Bachelor’s + 5 years experience) in your field of expertise.",
  },
  {
    title: "Exceptional Ability",
    icon: <Signature />,
    imgSrc: "https://img.freepik.com/premium-photo/broker-couple-contract-paper-house-while-meeting-consultation-mortgage-advice-financial-advisor-with-happy-black-man-woman-investment-savings-plan-insurance_590464-191307.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740",
    alt: "Exceptional Ability",
    description:
      "Alternatively, demonstrate exceptional ability in sciences, arts, or business that significantly surpasses ordinary standards.",
  },
  {
    title: "National Importance",
    icon: <ScrollText />,
    imgSrc: "https://img.freepik.com/free-photo/black-man-woman-writing-report-with-information-from-notebook_482257-121050.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80",
    alt: "National Importance",
    description:
      "Your proposed work must have substantial merit and benefit the U.S. in a way that justifies waiving the standard job offer and labor certification process.",
  },
];

function CriteriaCard({ title, icon, imgSrc, alt, description }) {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white shadow-md rounded-lg p-3 border border-gray-100 hover:shadow-lg transition flex flex-col justify-between">
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-60 object-cover rounded-xl"
      />
      <h3
        className="text-xl flex items-center gap-2 font-semibold text-mgc-blue"
        style={{ fontFamily: "Marcellus" }}
      >
        {icon} {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mt-2">
        {description}
      </p>
    </div>
  );
}

export default function BenefitsNIW() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl text-white bg-gradient-to-b from-primary-800 to-primary-600 p-4 flex flex-col justify-between shadow-md border border-gray-100 hover:shadow-lg transition">
          <div className="flex gap-4 items-center pb-20">
            <span className="p-2 bg-gray-50 rounded-full bg-opacity-15">
              <BarChart2 size={16} className="text-white" />
            </span>
            <span className="">EB2-NIW General Eligibility Test</span>
          </div>
          <div className="grid gap-4 pt-20">
            <h3
              style={{ fontFamily: "Marcellus" }}
              className="text-2xl mb-2 text-white"
            >
              General EB-2 Eligibility Test & National Interest Waiver Test
            </h3>

            <p className="text-white text-sm leading-relaxed">
              You can apply for the EB2-NIW for U.S. Permanent Residency if you
              Meet one of the following!
            </p>
          </div>
        </div>
        {eligibilityCriteria.map((item, index) => (
          <CriteriaCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
