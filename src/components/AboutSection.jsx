import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import {
  Globe,
  BadgeCheck,
  Briefcase,
  ArrowUpRightFromSquare,
  Users2,
} from "lucide-react";
import { Link } from "react-router-dom";

const aboutStats = [
  {
    icon: <Globe className="text-primary-600 w-5 h-5 md:w-6 md:h-6" />,
    value: "50+",
    label: (
      <>
        Countries of presence{" "}
        <span className="inline sm:hidden lg:inline">
          <br />
        </span>{" "}
        & offered services
      </>
    ),
  },
  {
    icon: <BadgeCheck className="text-primary-600 w-5 h-5 md:w-6 md:h-6" />,
    value: "100+",
    label: (
      <>
        Award recognitions{" "}
        <span className="inline sm:hidden lg:inline">
          <br />
        </span>{" "}
        & global certifications
      </>
    ),
  },
  {
    icon: <Users2 className="text-primary-600 w-5 h-5 md:w-6 md:h-6" />,
    value: "100%",
    label: (
      <>
        Client satisfaction{" "}
        <span className="inline sm:hidden lg:inline">
          <br />
        </span>{" "}
        & service ratings
      </>
    ),
  },
  {
    icon: <Briefcase className="text-primary-600 w-5 h-5 md:w-6 md:h-6" />,
    value: "10k+",
    label: (
      <>
        Global investments{" "}
        <span className="inline sm:hidden lg:inline">
          <br />
        </span>{" "}
        & management advisory
      </>
    ),
  },
];

const AboutSection = ({
  abtBtnpath = "/about",
  abtBtnContent = "More About Us",
}) => {
  return (
    <Element
      name="whoweare"
      className="py-12 px-4 md:px-10 bg-white text-primary-900 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 lg:gap-12 items-center">
        {/* About Us Image + Stats Cards */}
        <div
          className="order-2 lg:order-1 relative w-full xl:w-[85%] min-h-[500px] h-full bg-cover bg-center rounded-xl shadow-md"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/engineer-showing-teenage-apprentice-how-use-lathe_1218270-4311.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80')",
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
            {aboutStats.map((stat, idx) => (
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

        {/* About Details */}
        <div className="order-1 lg:order-2">
          <p className="text-sm font-medium uppercase text-primary-500 mb-2 flex items-center gap-2">
            Your Global Future Starts Here
          </p>
          <h2
            style={{ fontFamily: "Marcellus" }}
            className="text-3xl md:text-4xl font-bold mb-6 leading-snug border-b pb-4"
          >
            Welcome to <span className="text-primary-600">GCM Partners</span>
          </h2>

          <div className="space-y-6 text-gray-800 text-sm md:text-base">
            <p>
              Don’t believe the myth that only the super‑rich or well‑connected can dream of a second passport. In truth, a second citizenship can be a powerful tool for anyone who wants to move freely, tap into new business opportunities, and create a higher quality of life for their family.
            </p>

            <p>
              At GCM, we believe global living should be accessible. Our team of experts demystifies the process and shows you how to secure a second citizenship in a legal, affordable, and efficient manner. From Lagos to Europe, Canada to the Caribbean, we guide you with clarity and confidence through every step of residency, citizenship, and international mobility.
            </p>
            <p>
                Ready to unlock your future? Contact GCM Partners today and take the first step toward your second passport
              </p>
          </div>

          <Link
            to={abtBtnpath}
            className="inline-flex items-center gap-2 mt-8 text-sm font-medium px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
          >
            {abtBtnContent} <ArrowUpRightFromSquare size={16} />
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default AboutSection;
