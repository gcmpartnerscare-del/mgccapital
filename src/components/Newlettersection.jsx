import React, { useState } from "react";
import { MailCheck, Send } from "lucide-react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { Globe, Users2, Mail, Megaphone, Star } from "lucide-react";

const newsletterStats = [
  {
    icon: <Users2 className="text-primary-600 w-5 h-5 md:w-6 md:h-6" />,
    value: "10K+",
    label: (
      <>
        Subscribers worldwide{" "}
        <span className="inline sm:hidden lg:inline">
          <br />
        </span>{" "}
        and growing daily
      </>
    ),
  },
  {
    icon: <Mail className="text-primary-600 w-5 h-5 md:w-6 md:h-6" />,
    value: "99%",
    label: (
      <>
        Delivery rate{" "}
        <span className="inline sm:hidden lg:inline">
          <br />
        </span>{" "}
        with zero spam reports
      </>
    ),
  },
  {
    icon: <Megaphone className="text-primary-600 w-5 h-5 md:w-6 md:h-6" />,
    value: "50+",
    label: (
      <>
        Business insights{" "}
        <span className="inline sm:hidden lg:inline">
          <br />
        </span>{" "}
        shared monthly
      </>
    ),
  },
  {
    icon: <Star className="text-primary-600 w-5 h-5 md:w-6 md:h-6" />,
    value: "4.9★",
    label: (
      <>
        Rated by readers{" "}
        <span className="inline sm:hidden lg:inline">
          <br />
        </span>{" "}
        for impact & value
      </>
    ),
  },
];

const Newslettersection = () => {
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://formspree.io/f/mrbllnqy",
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

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  return (
    <Element
      name="newslettersection"
      className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 md:px-10 py-20 bg-white gap-36 lg:gap-12"
    >
      {/* Newsletter Image + Stats */}
      <div
        className="relative w-full xl:w-[85%] min-h-[500px] h-full bg-cover bg-center rounded-xl shadow-md"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/computer-collaboration-success-with-business-people-email-marketing-target-audience-research-rpa-software-chief-automation-officer-winner-solution-with-employees-ai-system_590464-479851.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80')",
        }}
      >
        <ul
          className="absolute 
           left-1/2 md:left-1/2 -top-32 
           lg:top-1/2 lg:left-full 
           -translate-x-1/2 
           lg:-translate-y-1/2 
           grid grid-cols-2 lg:grid-cols-1 
           gap-2 md:gap-3 lg:gap-4 
           w-max"
        >
          {newsletterStats.map((stat, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white/90 backdrop-blur-md border-t-4 border-primary-600 shadow-md p-3 md:p-4 rounded-md flex items-start gap-2 md:gap-4"
            >
              <div className="flex-shrink-0">{stat.icon}</div>
              <div>
                <h3 className="text-lg leading-none mb-1 md:text-2xl font-semibold text-primary-700">
                  {stat.value}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-700">
                  {stat.label}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Newsletter Form */}
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-3xl">
          Subscribe to our Newsletter!
        </h3>
        <p className="text-gray-700">
          Join Clients & decision-makers who rely on our newsletter for
          exclusive insights, investor-ready tips, and growth strategies.
          Whether you're a startup founder, business leader, or investor, we
          bring you powerful tools, trends, and resources to stay competitive.
          It's smart. It's free. And it only takes 10 seconds to sign up. Why
          wait?
        </p>
        <p className="text-gray-700">
          Subscribe below to get top industry insights, early market trends,
          dynamic immigration shifts, Citizenship and Residency program
          Updates and international News/Laws that concern global mobility
        </p>

        <form onSubmit={handleSubmit}>
          <div className="w-full py-2 md:py-0 mb-2 relative">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 pl-12 w-full text-primary-800 border border-gray-100 rounded-lg focus:outline-none focus:ring-0 h-12 focus:ring-primary"
              required
            />
            <MailCheck className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
          </div>
          <button
            type="submit"
            disabled={!isValidEmail(email)}
            className="flex items-center justify-center p-4 bg-primary-700 border border-primary-800 text-white hover:bg-primary-600 transition-colors disabled:opacity-80 rounded-lg w-full"
          >
            Subscribe <Send className="ml-2" />
          </button>
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
    </Element>
  );
};

export default Newslettersection;
