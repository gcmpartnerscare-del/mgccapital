import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Calendar, Send } from "lucide-react";
import { Link } from "react-router-dom";

/* Contact Info */
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
  }, //inquires@gcmpartners.net
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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredDate: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mwvpgodj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
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
    <section className="bg-gray-100 p-4 md:px-10 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          Connect with GCM Partners
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover tailored solutions in Global Citizenship, International
          migration, real estate and Mobility Advisory. Reach out to explore
          your options or schedule a personalized consultation.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* LEFT COLUMN - CONTACT INFO */}
        <div className="lg:w-2/5 bg-primary p-4 lg:p-12">
          <h3
            style={{ fontFamily: "Marcellus" }}
            className="text-2xl font-bold mb-6"
          >
            Find Your Ideal Citizenship Program @GCM Partners
          </h3>
          <p className="mb-8">
            Reach out to learn more about our Citizenship Programs, Residency programs, wealth advisory, or to
            book a personalized consultation.
          </p>

          {/* <p className="mb-8">
              Our team of experts is here to assist you in securing dual citizenship, global investments, and personalized advisory.
            </p> */}

          <div className="space-y-6">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-full flex items-center justify-center shadow-soft">
                    <Icon size={20} className="text-gray-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    {item.lines.map((line, i) => (
                      <Link
                        to={"mailto:wecare@gcmpartners.net"}
                        key={i}
                        className="block my-1"
                      >
                        {line}
                      </Link>
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
              Request a Personalized Consultation
            </h3>
            <p className="text-gray-600">
              Let us know your global access and mobility goals, and a consultant will reach out
              to you within 24 hours.
            </p>
          </div>

          {submitStatus === "success" ? (
            <div className="bg-green-100 text-green-700 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">
                Thank you for your interest!
              </h4>
              <p>
                Your submission has been received. A representative will contact
                you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Enter Your Name"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter Your Email Address"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    placeholder="Contact Information"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Subject of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="general-enquiry">General Enquiry</option>
                    <option value="citizenship-investment">
                      Global Citizenship Programs
                    </option>
                    <option value="citizenship-investment">
                      Global Residency Programs
                    </option>
                    {/* <option value="real-estate-advisory">
                      Real Estate Property Investment
                    </option> */}
                    {/* <option value="private-wealth">
                      Private Wealth Planning
                    </option> */}
                    <option value="global-mobility">
                      Global Mobility Support
                    </option>
                    <option value="other">Others</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-gray-700 mb-2"
                  >
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
                      required
                    />
                    <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
                    placeholder="Tell us more about your needs or questions…"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <p className="mb-8">
                  Our team of experts is here to assist you in securing dual
                  citizenship, global investments, and personalized advisory.
                </p>
                <button
                  type="submit"
                  className="flex justify-center items-center bg-primary-50 text-primary-900 px-8 py-3 rounded-full hover:bg-primary-100 transition-colors duration-300 w-full"
                >
                  Submit Request
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
