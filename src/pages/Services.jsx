import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import servicesData from "../data/servicesData";
import WhoWeServe from "../components/WhoWeServe";
import DynamicPageHeader from "../components/common/DynamicPageHeader";
import { Contact } from "lucide-react";

import ManagementServices from "../components/ManagementServices";
import FinancialAdvisory from "../components/FinancialAdvisory";
import ServiceConsultationForm from "../components/forms/ServiceConsultationForm";
import EthicalPledgeSection from "../components/EthicalPledgeSection";

const Services = () => {
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
      <>
      <EthicalPledgeSection />
        {/* <WhoWeServe
          data={servicesData.privateClientSolutions}
          elementName="privateClients"
          title="Visa & Migration Consulting"
          subtitle="Tailored Services for Global Mobility"
        /> */}
      </>
      <>
        <WhoWeServe
          data={servicesData.governmentAdvisoryServices}
          elementName="governmentadvisory"
          title="Policy Engagement & Advisory"
          // title="Government Advisory Services"
          subtitle="Corporate Immigration Services"
          // subtitle="Program Integrity and Strategic Planning"
        />
      </>
      <ManagementServices />
      <FinancialAdvisory />
      <ServiceConsultationForm />
    </>
  );
};

export default Services;
