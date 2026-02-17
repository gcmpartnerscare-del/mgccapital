import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import HybridFAQ from '../components/HybridFAQ';
import DynamicPageHeader from '../components/common/DynamicPageHeader';
import ApplicationProcess from '../components/ApplicationProcess';
import ServiceConsultationForm from '../components/forms/ServiceConsultationForm';
import Testimonials from '../components/Testimonials';
import Newslettersection from '../components/Newlettersection';
import ImpactAnalysis from '../components/ImpactAnalysis';


const Resources = () => {

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
    {/* <HybridFAQ /> */}
    <Testimonials />
    <Newslettersection />
    <ImpactAnalysis />
    <ServiceConsultationForm />
    </>
  )
}

export default Resources