import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import DynamicPageHeader from "../components/common/DynamicPageHeader";
// import InvestmentPrograms from "../components/programs/InvestmentPrograms";
import RealEstateInvestment from "../components/programs/RealEstateInvestment";
// import PricingPlans from "../components/programs/PricingPlans";
// import ProgramFAQ from "../components/programs/ProgramFAQ";
import ImmigrationInvestment from "../components/programs/ImmigrationInvestment";
// import ProgramConsultationForm from "../components/forms/ProgramConsultationForm";
// import GreenCardPathways from "../components/programs/GreenCardPathways";
import SlovenianRepatriationFAQ from "../components/programs/SlovenianRepatriationFAQ";
import ApplicationProcess from "../components/ApplicationProcess";
import ServiceConsultationForm from "../components/forms/ServiceConsultationForm";

const Citizenship = () => {
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
      <ApplicationProcess />
      <SlovenianRepatriationFAQ />
      <RealEstateInvestment category="CBI" />
      <ImmigrationInvestment category="CBI" />
      
      {/* <ProgramConsultationForm category="CBI" /> */}
      <ServiceConsultationForm />
    </>
  );
};

export default Citizenship;
