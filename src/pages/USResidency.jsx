import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import HeroNIW from "../components/eb2-niw/HeroNIW";
import EligibilityNIW from "../components/eb2-niw/EligibilityNIW";
import BenefitNIW from "../components/eb2-niw/BenefitNIW";
import CostBreakdownNIW from "../components/eb2-niw/CostBreakDown";
import FAQNIW from "../components/eb2-niw/FAQNIW";
import FinalCTA from "../components/eb2-niw/FinalCTA";
import WhyChooseNIW from "../components/eb2-niw/WhyChooseNIW";
import ImmigrationInvestment from "../components/programs/ImmigrationInvestment";
import ApplicationProcess from "../components/ApplicationProcess";
import Newslettersection from "../components/Newlettersection";

export default function USResidency() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionName = location.hash.slice(1);
      scroller.scrollTo(sectionName, {
        duration: 700,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -100,
      });
    }
  }, [location]);

  return (
    <main className="bg-white text-gray-800">
      <HeroNIW />
      <EligibilityNIW />
      <ImmigrationInvestment category="RBI" />
      <WhyChooseNIW />
      <ApplicationProcess />
      <BenefitNIW />
      <CostBreakdownNIW />
      {/* <FAQNIW /> */}
      <FinalCTA />
      <Newslettersection />
    </main>
  );
}
