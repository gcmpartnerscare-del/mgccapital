// components/forms/ServiceConsultationForm.jsx
import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Calendar, Send } from "lucide-react";
import { Link } from "react-router-dom";

const contactInfo = [
  // {
  //   icon: Phone,
  //   title: "Phone",
  //   lines: ["(+234) 803 717 9146"],
  // },
  {
    icon: Mail,
    title: "Email",
    lines: ["wecare@gcmpartners.net"],
  },
  {
    icon: MapPin,
    title: "Global Offices",
    lines: ["Suite B4-338, HFP Eastline, Lekki, Lagos"],
  },
  // {
  //   icon: Clock,
  //   title: "Official Hours",
  //   lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat – Sun: By Appointment"],
  // },
];

const ServiceConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
    preferredDate: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subjectLine = `I am interested in your ${formData.serviceType} services & Program application`;

    const submissionData = {
      ...formData,
      to: "wecare@gcmpartners.net",
      enquirySubject: subjectLine,
    };

    const response = await fetch("https://formspree.io/f/mbdlnoen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submissionData),
    });

    if (response.ok) {
      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
          preferredDate: "",
        });
        setSubmitStatus(null);
      }, 3000);
    } else {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="consultation" className="bg-gray-100 p-4 md:px-10 py-20">
      <div className="text-center mb-16">
        <h2 style={{fontFamily:"Marcellus",}} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
         Expert Advisory & Personalized Consultation
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Select your area of interest and one of our consultants will reach out
          within 24 hours.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* LEFT COLUMN - CONTACT INFO */}
        <div className="lg:w-2/5 bg-primary p-4 lg:p-12 rounded-xl">
          <h3
            style={{ fontFamily: "Marcellus" }}
            className="text-2xl font-bold mb-6"
          >
            Request a Personalized Consultation
          </h3>
          <p className="mb-8 ">
            Discuss your goals around global citizenship, wealth planning, or
            program partnership opportunities.
          </p>

          <div className="space-y-6 ">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 text-primary rounded-full shadow-soft">
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
        <div className="lg:w-3/5 p-4 lg:p-12 bg-white rounded-xl shadow-lg">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Select Your Service Type
            </h3>
            <span className="text-gray-600 text-xs italic">
              (e.g. Private Client Solutions, Government Services, Management or
              Financial Advisory Services)
            </span>
            <p className="text-gray-600">
              Let us know your investment goals, and a consultant will reach out
              to you within 24 hours.
            </p>
          </div>

          {submitStatus === "success" ? (
            <div className="bg-green-100 text-green-700 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Submission Successful!</h4>
              <p>Your request has been received. We'll reach out shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                >
                  {/* <option value="">Click to Select a Service</option> */}
                  <option value="Private Services">
                    Visa & Migration Consulting
                  </option>
                  <option value="Government Services">
                    Policy Engagement & Advisory
                  </option>
                  <option value="Management">
                    Corporate Migration
                  </option>
                  <option value="Financial Advisory">
                    Business & Entrepreneur Migration
                  </option>
                </select>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message / Enquiry..."
                rows="5"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-primary-50  px-6 py-3 rounded-full text-primary-900 hover:bg-primary-100 w-full"
              >
                Submit Request <Send className="ml-2 h-5 w-5" />
              </button>
              {submitStatus === "error" && (
                <p className="text-red-600 mt-2">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceConsultationForm;
