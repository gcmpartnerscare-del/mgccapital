import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

const contactInfo = [
  // {
  //   icon: Phone,
  //   title: "Phone",
  //   lines: ["+234 (803) 717 9146"],
  // },
  {
    icon: Mail,
    title: "Email",
    lines: ["wecare@gcmpartners.net"], //inquiries@gcmpartners.net //partners@gcmpartners.net",
  },
  {
    icon: MapPin,
    title: "Global Offices",
    lines: ["Suite B4-338, HFP Eastline, Lekki, Lagos"],
  },
];

const steps = [
  "Personal Information",
  "Location & Background",
  "Service Interest",
  "Financial Readiness",
  "Goals & Preferences",
  "Additional Info",
];

const ProgramRegister = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "",
    gender: "",
    age: "",
    nationality: "",
    residence: "",
    city: "",
    occupation: "",
    industry: "",
    services: [],
    budget: "",
    goal: "",
    destination: "",
    timeframe: "",
    appliedBefore: "",
    visaDetails: "",
    heardFrom: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "services") {
      const updated = checked
        ? [...formData.services, value]
        : formData.services.filter((item) => item !== value);
      setFormData({ ...formData, services: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xkogdrgd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        to: "wecare@gcmpartners.net",
      }),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Submission failed. Try again.");
    }
  };

  const progress = ((step + 1) / steps.length) * 100;

  if (submitted) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-primary-700 mb-2">Thank you!</h2>
        <p>We’ve received your submission and will contact you shortly.</p>
      </div>
    );
  }
  return (
    <Element id="onboardingform" className="bg-gray-100 p-4 md:px-10 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          Client Onboarding & Program Registeration Form
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Complete the form below and our Team will contact you within 24 hours.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* LEFT COLUMN - CONTACT INFO */}
        <div className="lg:w-2/5 bg-primary p-4 lg:p-12 rounded-xl">
          <h3
            style={{ fontFamily: "Marcellus" }}
            className="text-2xl font-bold mb-6"
          >
            Let’s Build Global Value Together
          </h3>
          <p className="mb-8">
            Find Your Ideal Mobility Pathway with GCM partners, Let us know your
             goals, your qualifications, budget, timeframe,
            expectations etc, and a consultant will reach out to you within 24
            hours.
          </p>

          <div className="space-y-6">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3  text-primary rounded-full shadow-soft">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    {item.lines.map((line, i) => (
                      <Link to={"mailto:wecare@gcmpartners.net"} key={i} className="block my-1">{line}</Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <div className="lg:w-3/5 p-4 py-6 lg:p-12 bg-white rounded-xl shadow-lg">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Please Complete Our Client Onboarding Form
            </h3>
            <p className="text-gray-600">
              These Information collected here help us serve you better and also
              highligth key details about your interests, goals and expectations
              so we know how we can best to serve you with curiated solutions
              Tailored for you!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto py-10 lg:py-16 px-0 md:px-10 bg-white rounded-md md:shadow space-y-6"
          >
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div
                className="bg-primary-700 h-1.5 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <h2 className="text-lg font-bold text-primary-800">
              {steps[step]}
            </h2>

            {/* === Step 1: Personal Info === */}
            {step === 0 && (
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="input"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  required
                />
                <input
                  className="input"
                  name="phone"
                  placeholder="Phone (WhatsApp Preferred)"
                  onChange={handleChange}
                  required
                />
                <select
                  className="input"
                  name="contactMethod"
                  onChange={handleChange}
                  required
                >
                  <option value="">Preferred Contact Method</option>
                  <option>Phone</option>
                  <option>Email</option>
                  <option>WhatsApp</option>
                </select>
                <select className="input" name="gender" onChange={handleChange}>
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <select className="input" name="age" onChange={handleChange}>
                  <option value="">Age Bracket</option>
                  <option>Under 18</option>
                  <option>18–24</option>
                  <option>25–34</option>
                  <option>35–44</option>
                  <option>45–54</option>
                  <option>55 and above</option>
                </select>
              </div>
            )}

            {/* === Step 2: Location & Background === */}
            {step === 1 && (
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="input"
                  name="nationality"
                  placeholder="Nationality"
                  onChange={handleChange}
                />
                <input
                  className="input"
                  name="residence"
                  placeholder="Country of Residence"
                  onChange={handleChange}
                />
                <input
                  className="input"
                  name="city"
                  placeholder="City/State"
                  onChange={handleChange}
                />
                <select
                  className="input"
                  name="occupation"
                  onChange={handleChange}
                >
                  <option value="">Occupation</option>
                  <option>Student</option>
                  <option>Employed</option>
                  <option>Entrepreneur</option>
                  <option>Freelancer</option>
                  <option>Retired</option>
                  <option>Other</option>
                </select>
                <select
                  className="input"
                  name="industry"
                  onChange={handleChange}
                >
                  <option value="">Industry</option>
                  <option>Education</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Technology</option>
                  <option>Construction</option>
                  <option>Trade/Commerce</option>
                  <option>Creative/Media</option>
                  <option>Government/Public Service</option>
                  <option>Other</option>
                </select>
              </div>
            )}

            {/* === Step 3: Services === */}
            {step === 2 && (
              <div className="space-y-3">
                <p className="font-semibold">
                  Service Interest (Select all that apply)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Immigration Consulting",
                    "Citizenship & Residency Programs",
                    "International Real Estate",
                    "Study Abroad Consulting",
                    "Business & Entrepreneur Migration",
                    "Corporate Immigration Services",
                    "Travel & Relocation Support",
                    "Policy Advisory or Research Collaboration",
                  ].map((service) => (
                    <label key={service} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        onChange={handleChange}
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* === Step 4: Financial Readiness === */}
            {step === 3 && (
              <div>
                <select className="input" name="budget" onChange={handleChange}>
                  <option value="">Estimated Budget</option>
                  <option>Under $10,000</option>
                  <option>$10,000–$50,000</option>
                  <option>$50,000–$100,000</option>
                  <option>Over $100,000</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            )}

            {/* === Step 5: Goals & Preferences === */}
            {step === 4 && (
              <div className="space-y-4">
                <textarea
                  className="input"
                  name="goal"
                  rows={3}
                  placeholder="Describe your goal or motivation"
                  onChange={handleChange}
                />
                <input
                  className="input"
                  name="destination"
                  placeholder="Preferred Destination Countries"
                  onChange={handleChange}
                />
                <select
                  className="input"
                  name="timeframe"
                  onChange={handleChange}
                >
                  <option value="">Timeframe for Action</option>
                  <option>Immediate (0–3 months)</option>
                  <option>Short-term (3–6 months)</option>
                  <option>Medium-term (6–12 months)</option>
                  <option>Long-term (1 year+)</option>
                </select>
              </div>
            )}

            {/* === Step 6: Additional Info === */}
            {step === 5 && (
              <div className="space-y-4">
                <select
                  className="input"
                  name="appliedBefore"
                  onChange={handleChange}
                >
                  <option value="">
                    Previously applied for visa/residency?
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <textarea
                  className="input"
                  name="visaDetails"
                  rows={2}
                  placeholder="If yes, provide details"
                  onChange={handleChange}
                />
                <select
                  className="input"
                  name="heardFrom"
                  onChange={handleChange}
                >
                  <option value="">How did you hear about us?</option>
                  <option>Social Media</option>
                  <option>Referral</option>
                  <option>Website</option>
                  <option>Event/Seminar</option>
                  <option>Other</option>
                </select>
              </div>
            )}

            {/* === Navigation Buttons === */}
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handlePrev}
                disabled={step === 0}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
              >
                Back
              </button>

              {step === steps.length - 1 ? (
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-700 text-white rounded hover:bg-primary-900 transition"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-primary-700 text-white rounded hover:bg-primary-900 transition"
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default ProgramRegister;
