import React from "react";
import { Link } from "react-router-dom";
import { BriefcaseBusiness, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroNIW() {

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
  return (
    <section className="pt-28 lg:pt-32 pb-20 px-6 md:px-10 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold text-primary-700 flex items-center gap-2 uppercase mb-4">
            <BriefcaseBusiness size={18} />
            U.S. Residency Opportunity
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6"
            style={{ fontFamily: "Marcellus" }}
          >
            Unlock U.S. Permanent Residency through the EB2-NIW Visa
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            At GCM Partners, we help professionals, entrepreneurs, and global
            talents secure U.S. Green Cards through the EB-2 National Interest
            Waiver program — no job offer or employer required.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Link
              to="/resources#consultation"
              className="px-6 py-3 rounded-full bg-primary-700 hover:bg-primary-800 text-white font-semibold transition flex items-center gap-2 w-full md:w-max justify-center"
            >
              Book a Free Consultation{" "}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                <ArrowRight size={16} className="rotate-90" />
              </motion.div>
            </Link>
            <Link
              to="#eligibility"
              className="px-6 py-3 rounded-full border border-primary-700 text-primary-700 font-semibold hover:bg-primary-50 transition w-full md:w-max flex items-center justify-center"
            >
              Check Eligibility
            </Link>
          </div>
        </div>
        {/* Image carousel*/}

        <div className="w-full">
            <Slider {...settings}>
              <img
                src="https://img.freepik.com/premium-photo/happy-couple-broker-contract-house-meeting-consultation-retirement-advice-financial-advisor-black-man-woman-investment-savings-plan-pension-insurance-paper_590464-192422.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
                alt="Smart Path to US GreenCard"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
              <img
                src="https://img.freepik.com/premium-photo/diversity-people-talk-international-conference-partnership_53876-92207.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
                alt="Smart Path to US GreenCard2"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
              <img
                src="https://img.freepik.com/premium-photo/business-people-workplace-are-discussing-working-strategy-doing-business_35752-6538.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
                alt="Smart Path to US GreenCard3"
                className="w-full rounded-xl object-cover h-[300px] p-1 md:h-[450px]"
              />
            </Slider>
          </div>

      </div>
    </section>
  );
}


// Unlock U.S. Permanent Residency through the EB2-NIW Visa