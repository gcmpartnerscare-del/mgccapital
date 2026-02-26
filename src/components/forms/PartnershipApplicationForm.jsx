import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
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
    // lines: ["partners@gcmpartners.net", "inquiries@gcmpartners.net"],
  },
  {
    icon: MapPin,
    title: "Global Offices",
    lines: ["Suite B4-338, HFP Eastline, Lekki, Lagos"],
  },
  // {
  //   icon: Clock,
  //   title: "Office Hours",
  //   lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat – Sun: By Appointment"],
  // },
];

const PartnershipApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organizationType: "",
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

    const subjectLine = `Partnership Application from ${formData.organizationType}`;

    const submissionData = {
      ...formData,
      enquirySubject: subjectLine,
    };

    const response = await fetch("https://formspree.io/f/xkogdray", {
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
          organizationType: "",
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
    <section id="ApplyNow" className="bg-white p-4 md:px-10 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          Apply to Become a Partner
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Complete the form below and our Partnerships Team will contact you within 24 hours.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* LEFT COLUMN - CONTACT INFO */}
        <div className="lg:w-2/5 bg-primary p-4 lg:p-12 rounded-xl">
          <h3 style={{ fontFamily: "Marcellus" }} className="text-2xl font-bold mb-6">
            Let’s Build Global Value Together
          </h3>
          <p className="mb-8">
            If you're an immigration consultancy, legal advisory, or visa service provider—
            we want to partner with you.
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
        <div className="lg:w-3/5 p-8 lg:p-12 bg-white rounded-xl shadow-lg">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Submit Your Partnership Inquiry
            </h3>
            <p className="text-gray-600">
              Tell us about your organization and collaboration goals. We’ll reach out with the next steps.
            </p>
          </div>

          {submitStatus === "success" ? (
            <div className="bg-green-100 text-green-700 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Application Received!</h4>
              <p>Our team will follow up shortly to explore the partnership potential.</p>
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
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Organization Type</option>
                  <option value="Immigration Company">Immigration Companies/Consultant</option>
                  <option value="Legal Consultancy">Legal Companies/Consultant</option>
                  <option value="Visa Application Centre">Visa Application Centre</option>
                  <option value="Other">Other</option>
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
                placeholder="Tell us about your firm, client base, or partnership goals..."
                rows="5"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="flex items-center justify-center bg-primary-50 text-primary-900 px-6 py-3 rounded-full hover:bg-primary-100 w-full transition"
              >
                Submit Application <Send className="ml-2 h-5 w-5" />
              </button>

              {submitStatus === "error" && (
                <p className="text-red-600 mt-2">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnershipApplicationForm;
