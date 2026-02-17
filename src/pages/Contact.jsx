import React from "react";
import DynamicPageHeader from "../components/common/DynamicPageHeader";
import ContactSection from "../components/forms/ContactSection";
import Newlettersection from "../components/Newlettersection";

const Contact = () => {
  return (
    <>
      <DynamicPageHeader />
      <Newlettersection />
      <ContactSection />
    </>
  );
};

export default Contact;
