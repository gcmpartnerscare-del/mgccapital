import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import LegalToggleNav from "../components/legal/LegalToggleNav";
import PrivacyPolicySection from "../components/legal/PrivacyPolicySection";
import TermsOfUseSection from "../components/legal/TermsOfUseSection";
import DynamicPageHeader from "../components/common/DynamicPageHeader";

const Legal = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("privacy");
  const contentRef = useRef(null);

  // Listen to query/hash and scroll to section
  useEffect(() => {
    const hash = location.hash?.replace("#", "");

    if (hash === "terms") {
      setActiveTab("terms");
    } else if (hash === "privacy") {
      setActiveTab("privacy");
    }

    // Scroll smoothly to the content section
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  }, [location]);

  return (
    <div className="bg-white">
      <DynamicPageHeader />

      <div className="px-4 md:px-10 py-16">
        <LegalToggleNav activeTab={activeTab} setActiveTab={setActiveTab} />

        <div ref={contentRef} className="mt-12">
          {activeTab === "privacy" ? <PrivacyPolicySection /> : <TermsOfUseSection />}
        </div>
      </div>
    </div>
  );
};

export default Legal;
