import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import DynamicPageHeader from "../components/common/DynamicPageHeader";
import ResidencyCitizenshipTypes from "../components/programs/ResidencyCitizenshipTypes";
import servicesData from "../data/servicesData";
import GlobalServiceRegions from "../components/programs/GlobalServiceRegions";
import ProgramRegister from "../components/programs/ProgramRegister";
import RealEstateInvestment from "../components/programs/RealEstateInvestment";
import WhoWeServe from "../components/WhoWeServe";
// import InvestmentPrograms from "../components/programs/InvestmentPrograms";

const ResidencyCitizenship = () => {
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
      <WhoWeServe
          data={servicesData.privateClientSolutions}
          elementName="privateClients"
          title="Visa & Migration Consulting"
          subtitle="Tailored Services for Global Mobility"
        />
      {/* <ResidencyCitizenshipTypes /> */}
      {/* <GlobalServiceRegions /> */}
      {/* <RealEstateInvestment category="CBI" /> */}
      <ProgramRegister />
    </>
  );
};

export default ResidencyCitizenship;
