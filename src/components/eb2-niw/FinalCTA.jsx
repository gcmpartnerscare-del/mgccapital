import React from "react";

export default function FinalCTA() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Global Network</h2>
        <p className="mb-8">
          Join our global network of immigration professionals, legal advisors, consultants, and service providers 
          helping clients access EU citizenship, second passports, and international wealth solutions.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/elitepartnerships"
            className="bg-gray-50 text-[#002244] px-6 py-4 rounded-md font-semibold hover:bg-primary-400 hover:text-white transition-all duration-300 ease"
          >
            🔹 Apply to Become a Partner
          </a>
          <a
            href="/resources#consultation"
            className="bg-[#004488] text-white px-6 py-4 rounded-md font-semibold hover:bg-[#0066aa]"
          >
            🔹 Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
