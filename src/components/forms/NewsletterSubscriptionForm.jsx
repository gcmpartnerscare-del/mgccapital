import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

const NewsletterSubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://formspree.io/f/mojvgdzk",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    if (response.ok) {
      setSubmitStatus("success");
      setEmail("");
      setTimeout(() => setSubmitStatus(null), 3000);
    } else {
      setSubmitStatus("error");
    }
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="p-1 bg-white w-full mt-4 rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex gap-2 items-center px-4 min-w-80">
            <img
              src="/images/newsletter.png"
              alt="newsletter icon"
              className="w-11 h-11"
            />
            
            <h3 className="text-primary-800 font-semibold text-lg">
              Newsletter Subscription
            </h3>
          </div>
          <div className="w-full py-2 md:py-0">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 w-full text-primary-800 md:border-l-4 md:border-gray-50 focus:outline-none focus:ring-0 h-12 focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            disabled={!isValidEmail(email)}
            className="flex items-center justify-center h-12 px-4 bg-primary-800 border border-primary-800 text-white hover:bg-primary-600 transition-colors disabled:opacity-80 w-full sm:w-max rounded-md"
          >
            <Send className="" />
          </button>
        </div>
        {submitStatus === "success" && (
          <p className="mt-4 text-green-600">Thank you for subscribing!</p>
        )}
        {submitStatus === "error" && (
          <p className="mt-4 text-red-600">
            Something went wrong. Try again later.
          </p>
        )}
      </form>
    </div>
  );
};

export default NewsletterSubscriptionForm;
