// components/services/FinancialAdvisory.jsx
import React from "react";
import { Element } from "react-scroll";

const FinancialAdvisory = () => {
  return (
    <Element name="financial" className="w-full bg-white py-20 px-6 md:px-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col order-1 xl:order-2 ">
          <h2 style={{fontFamily:"Marcellus",}} className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Financial Advisory, Business & Entrepreneural Migration
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            GCM Partners financial advisory
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-800 text-base">
            <li>Cross-border wealth management structuring</li>
            <li>Public-private partnership investment frameworks</li>
            <li>Investment return forecasting and impact evaluation</li>
            <li>Program pricing models and fund flow advisory</li>
            <li>
              Tax-efficient migration and global capital deployment planning
            </li>
          </ul>
        </div>
        <div className="w-full order-2 xl:order-1 ">
          <img
            src="https://img.freepik.com/premium-photo/older-couple-listening-financial-advisor-about-retirement-living-room_1176719-2068.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            // src="https://img.freepik.com/free-photo/it-professionals-data-center-reviewing-reports-files_482257-124058.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
            alt="GCM Partners mission"
            className="w-full rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </Element>
  );
};

export default FinancialAdvisory;
