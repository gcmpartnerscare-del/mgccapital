import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import DynamicPageHeader from "../components/common/DynamicPageHeader";
import InvestmentPrograms from "../components/programs/InvestmentPrograms";
import RealEstateInvestment from "../components/programs/RealEstateInvestment";
import PricingPlans from "../components/programs/PricingPlans";
import ImmigrationInvestment from "../components/programs/ImmigrationInvestment";
import GreenCardPathways from "../components/programs/GreenCardPathways";
import ProgramFAQ from "../components/programs/ProgramFAQ";
import ProgramConsultationForm from "../components/forms/ProgramConsultationForm";


const Residency = () => {
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
    <>
      <DynamicPageHeader />
      <InvestmentPrograms category="RBI" />
      <ImmigrationInvestment category="RBI" />
      <ProgramFAQ category="RBI" />
      <PricingPlans category="RBI" />
      <RealEstateInvestment category="RBI" />
      {/* <ProgramFAQ category="RBI" /> */}
      <GreenCardPathways />
      <ProgramConsultationForm category="RBI" />
    </>
  );
};

export default Residency;
