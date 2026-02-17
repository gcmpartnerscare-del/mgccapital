import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

// Ripple animation for the floating button
const Ripple = ({ delay }) => (
  <motion.span
    className="absolute w-full h-full rounded-full border border-green-300"
    initial={{ scale: 0.5, opacity: 0.6 }}
    animate={{ scale: 2.5, opacity: 0 }}
    transition={{
      duration: 2,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 2,
      delay,
    }}
  />
);

const steps = [
  "Personal Information",
  "Location & Background",
  "Service Interest",
  "Financial Readiness",
  "Goals & Preferences",
  "Additional Info",
];

const ConsultationForm = () => {
  const [showForm, setShowForm] = useState(false);
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

  const toggleForm = () => {
    setShowForm((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "auto";
      return next;
    });
  };

  // Expose global open/close so any page/button can trigger it without prop drilling
  useEffect(() => {
    const open = () => setShowForm(true);
    const close = () => setShowForm(false);
    const toggle = () => toggleForm();

    // window API
    window.openConsultation = open;
    window.closeConsultation = close;
    window.toggleConsultation = toggle;

    // hash trigger e.g., link to #consult from anywhere
    const onHash = () => {
      if (window.location.hash === "#consult") open();
    };
    window.addEventListener("hashchange", onHash);
    onHash();

    // cleanup & body scroll restore
    return () => {
      if (showForm) document.body.style.overflow = "auto";
      delete window.openConsultation;
      delete window.closeConsultation;
      delete window.toggleConsultation;
      window.removeEventListener("hashchange", onHash);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xkogdrgd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        _subject: "New Consultation Request",
        _replyto: formData.email,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Submission failed. Try again.");
    }
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <>
      {/* overlay when form is open */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99]"
          onClick={toggleForm}
        />
      )}

      {/* side drawer with ProgramRegistration form */}
      <div
        className={`fixed top-0 right-0 z-[100] h-full w-full max-w-4xl bg-white shadow-lg transition-transform duration-300 overflow-y-auto ${showForm ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-4 md:p-8">
          <div className="lg:w-full p-4 py-6 lg:p-8 bg-white rounded-xl">
            {!submitted ? (
              <>
                <div>
                  <h3
                    style={{ fontFamily: "Marcellus" }}
                    className="text-lg font-bold text-gray-900 mb-1"
                  >
                    Schedule A Free consultation
                  </h3>
                  <p className="text-base text-gray-600">
                    Our support Team will get back to you within 24 hours.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="max-w-4xl mx-auto py-8 lg:py-16 px-0 md:px-10 bg-white rounded-md md:shadow space-y-6"
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
                      <select
                        className="input"
                        name="gender"
                        onChange={handleChange}
                      >
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
                      <select
                        className="input"
                        name="budget"
                        onChange={handleChange}
                      >
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
              </>
            ) : (
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-primary-700 mb-2">
                  Thank you!
                </h2>
                <p>We’ve received your submission and will contact you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* floating Button (exactly like your original, mobile + desktop variants) */}
      <div
        onClick={toggleForm}
        className="fixed right-[78px] md:bg-transparent md:w-max bottom-5 w-full z-[101] flex md:bottom-5 md:right-[180px] items-center justify-center cursor-pointer"
      >
        <div>
          {/* mobile */}
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="items-center gap-1 rounded-full font-semibold text-sm tracking-wide p-3 px-5 bg-[#4BAE4F] text-white shadow-md md:hidden flex will-change-transform transform-gpu"
          >
            Free Consultation
            <div className="relative w-[16px] h-[16px] flex items-center justify-center">
              <Ripple delay={0} />
              <Ripple delay={0.6} />
              <Ripple delay={1.2} />
              <Send
                size={16}
                className={`transition-transform duration-500 ${showForm ? "-rotate-180" : "rotate-0"
                  }`}
              />
            </div>
          </motion.span>

          {/* desktop */}
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="hidden md:flex items-center gap-1 rounded-full font-semibold text-sm tracking-wide p-3 px-5 bg-[#4BAE4F] text-white shadow-md will-change-transform transform-gpu"
          >
            Schedule a Free Consultation
            <div className="relative w-[16px] h-[16px] flex items-center justify-center">
              <Ripple delay={0} />
              <Ripple delay={0.6} />
              <Ripple delay={1.2} />
              <Send
                size={16}
                className={`transition-transform duration-500 ${showForm ? "-rotate-180" : "rotate-0"
                  }`}
              />
            </div>
          </motion.span>
        </div>
      </div>
    </>
  );
};

export default ConsultationForm;
