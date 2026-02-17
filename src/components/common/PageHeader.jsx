import React, { useState } from "react";
import { ChevronRight, Send, Regex } from "lucide-react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, subtitle, bgImage, breadcrumb }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch("https://formspree.io/f/mgvzzgka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", phone: "" });
        setStatus({
          loading: false,
          success: "Your request has been sent!",
          error: null,
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <header
      className="relative w-full h-max lg:mt-24 lg:h-[550px] px-4 pt-32 pb-8 md:px-10 md:py-8 items-center justify-center text-white grid gap-10 md:gap-4 grid-cols-1 md:grid-cols-2"
      style={{
        backgroundImage: `url(${bgImage || "/images/page-banner.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" /> */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 md:px-6">
        {/* Breadcrumbs */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mb-4 text-sm flex items-center flex-wrap text-gray-300 gap-1">
            {breadcrumb.map((crumb, index) => (
              <div key={index} className="flex items-center gap-1">
                {index > 0 && <ChevronRight className="w-4 h-4" />}
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className="hover:text-white transition-all"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {/* Subtitle */}
        {subtitle && (
          <p className="text-base md:text-xl text-gray-200">{subtitle}</p>
        )}
      </div>

      {/* RIGHT COLUMN - FORM */}
      <div className="md:w-[90%]  mx-auto">
        <div className="bg-white/75 md:p-6 p-4 rounded-lg backdrop-blur-0 text-black">
          <h3 className="text-xl font-semibold mb-1">
            Start Your Immigration Process Today
          </h3>
          <p className="mb-4 text-sm">
            Schedule a quick consultation with us. Our support Team will get
            back to you within 24 hours.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="name" className=" font-semibold text-sm flex items-center gap-1">
              <Regex size={12} className="text-red-600" /> Enter Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 px-4 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-[#4BAE4F] text-black"
            />
            <label htmlFor="email" className=" font-semibold text-sm flex items-center gap-1">
            <Regex size={12} className="text-red-600" /> Your e-mail or instagram
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 px-4 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-[#4BAE4F] text-black"
            />
            <label htmlFor="name" className=" font-semibold text-sm flex items-center gap-1">
              <Regex size={12} className="text-red-600" /> Your Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 px-4 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-[#4BAE4F] text-black"
            />
            <button
              type="submit"
              disabled={status.loading}
              className="bg-[#4BAE4F] hover:bg-[#249928] transition-all duration-200 text-white font-semibold py-3 rounded flex items-center gap-2 justify-center mt-2"
            >
              {status.loading ? "Sending..." : "Schedule a Consultation"} <Send size={16} />
            </button>

            {/* STATUS MESSAGES */}
            {status.success && (
              <p className="text-green-400 text-sm mt-1">{status.success}</p>
            )}
            {status.error && (
              <p className="text-red-400 text-sm mt-1">{status.error}</p>
            )}
          </form>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
