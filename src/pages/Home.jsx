import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

// import { faqs } from "../data/faqs";
import HeroSection from "../components/HeroSection";
import ApplicationSteps from "../components/ApplicationSteps";
import BlogSection from "../components/BlogSection";
import EthicalPledgeSection from "../components/EthicalPledgeSection"
import AboutSection from "../components/AboutSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/forms/ContactSection";
// import HybridFAQ from "../components/HybridFAQ";
import ImmigrationReasons from "../components/ImmigrationReasons";
import PartnershipWithMGC from "../components/PartnershipWithMGC";
import ApplicationProcess from "../components/ApplicationProcess";
import InternationalMigration from "../components/InternationalMigration";

const Home = () => {
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
      <HeroSection />
      <ImmigrationReasons />
      <AboutSection />
      {/* <InternationalMigration /> */}
      <EthicalPledgeSection />
      <ApplicationProcess />
      <CTASection />
      <BlogSection />
      <PartnershipWithMGC />
      <ContactSection />
    </>
  );
};

export default Home;
