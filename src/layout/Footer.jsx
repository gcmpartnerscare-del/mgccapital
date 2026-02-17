// ✅ Footer.jsx — Refactored using Lucide Icons & Tailwind CSS
import React from "react";
import {
  Globe,
  ExternalLink,
  Facebook,
  Linkedin,
  Twitter,
  AtSign,
  Youtube,
  Bot,
  CircleArrowOutDownRight,
  CircleArrowOutUpRight,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import NewsletterSubscriptionForm from "../components/forms/NewsletterSubscriptionForm";

const socialLinks = [
  {
    href: "https://web.facebook.com/profile.php?id=61580418931891",
    icon: Facebook,
  },
  {
    href: "https://www.linkedin.com/company/global-citizenship-and-migration/about/?viewAsMember=true",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/mygcmpartners/?hl=en",
    icon: AtSign,
  },
  {
    href: "https://x.com/mygcmpartners",
    icon: Twitter,
  },
  {
    href: "https://www.tiktok.com/@mygcmpartners",
    icon: FaTiktok,
  },
  // {
  //   href: "https://www.youtube.com/@mygcmpartners",
  //   icon: Youtube,
  // },
];

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white relative pb-12 sm:pb-0">
      {/* Background layer */}
      <div className="absolute bg-[url(/images/bg-light-footer.png)] bg-cover top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none"></div>
      <section className="pt-14 pb-2 px-4 md:px-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-end gap-8">
          <div>
            <div>
              <div className="flex items-center text-2xl gap-2">
                <img
                  src="/icons/mgccapital.svg"
                  alt="GCM Partners Logo"
                  className="w-[108px]"
                />
              </div>
              {/* Socials */}
              <div className="flex gap-4 mt-4 w-max">
                {socialLinks.map(({ href, icon: Icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-white hover:text-primary-800 hover:bg-white rounded-full hover:-translate-y-1 transition-all ease-in-out duration-500 w-max"
                  >
                    <Icon className="w-[13px] h-[13px]" />
                  </a>
                ))}
              </div>
              {/* <div className="flex gap-4 mt-4 w-max">
                {[AtSign, Facebook, Youtube, Linkedin, Twitter].map(
                  (Icon, index) => (
                    <a
                      href="#"
                      key={index}
                      className="p-2 border border-white hover:text-primary-800 hover:bg-white rounded-full hover:-translate-y-1 transition-all ease-in-out duration-500 w-max"
                    >
                      <Icon className="w-[12px] h-[12px]" />
                    </a>
                  )
                )}
              </div> */}
              {/* <p className="text-sm mt-2">
                We connect you with the rest of the world Helping you achieve
                your dreams
              </p> */}

              <div className="pt-4">
                <div className="grid gap-2">
                  {[
                    [
                      "Global Residency & Citizenship",
                      "/globalresidency-citizenship",
                    ],
                    // ["EU Residency Programs", "/usresidency"],
                  ].map(([label, path]) => {
                    const isCitizenship =
                      label === "Global Residency & Citizenship";

                    const baseClasses =
                      "flex items-center font-bold text-xs gap-2 sm:p-3 p-4 sm:px-4 w-full justify-center sm:w-[250px] transition-colors duration-300 ease";

                    const citizenshipClasses = isCitizenship
                      ? "bg-primary-100 text-primary-800 hover:bg-primary-800 hover:text-white"
                      : "bg-[#5f17eb] text-white hover:text-primary-800 hover:bg-primary-100";

                    return (
                      <Link
                        to={path}
                        key={label}
                        className={`${baseClasses} ${citizenshipClasses}`}
                      >
                        {label}
                        <CircleArrowOutUpRight className="w-4 h-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className="wwl">
              <h4 className="font-semibold">Worldwide Locations</h4>
            <p className="text-sm mt-2">
              We connect you with the rest of the world.
              <br /> Achieve your dreams on your own terms
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-1">
              {["Africa", "Europe", "Slovekia", "United States"].map((loc) => (
                <li
                  key={loc}
                  className="flex items-center text-xs gap-2 hover:text-[#00adee]"
                >
                  <Globe className="w-4 h-4" /> {loc}
                </li>
              ))}
            </ul>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Access Links</h4>
            {[
              ["About Us", "/about"],
              ["Our Services Suite", "/global-access-solutions"],
              ["News, Blogs & Events", "/blogs"],
              ["Clients Testimonials", "/about#testimonials"],
              ["Clients Resources", "/resources"],
              // ["Careers", "/about#careers"],
              ["Clients FAQ", "/resources#faqs"],
            ].map(([label, path]) => (
              <Link
                to={path}
                key={label}
                className="flex text-xs items-center gap-2 py-1 hover:text-primary-500"
              >
                <CircleArrowOutUpRight className="w-4 h-4" /> {label}
              </Link>
            ))}
          </div>

          {/* Specialist Services */}
          <div>
            <h4 className="mb-4">Specialist Services</h4>
            {[
              ["Visa & Migration Consulting", "/services#privateClients"],
              ["Ethical & Service Pledge", "/services#ethicalpledge"],
              ["Policy Engagement & Advisory", "/services#governmentadvisory"],
              ["Management, Corporate Immigration", "/services#management"],
              ["Business & Entrepreneur Migration", "/services#financial"],
              // "Personalized Application",
              ["Schedule Consultation", "/services#consultation"],
            ].map(([label, path]) => (
              <Link
                to={path}
                key={label}
                className="w-full text-left flex items-center gap-2 py-1 hover:text-primary-500 text-xs"
              >
                <CircleArrowOutUpRight className="w-4 h-4" /> {label}
              </Link>
            ))}
          </div>

          {/* Partnerships */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              Partnership Industries
            </h4>
            {[
              ["Real Estate Agencies", "/elitepartnerships"],
              // ["Real Estate Developers", "/elitepartnerships"],
              // ["Real Estate Investment", "/elitepartnerships"],
              ["Exclusive Travel Agencies", "/elitepartnerships"],
              ["Immigration Consultants", "/elitepartnerships"],
              ["Citizenship Consultants", "/elitepartnerships"],
            ].map(([label, path]) => (
              <Link
                to={path}
                key={label}
                className="flex text-xs items-center gap-2 py-1 hover:text-primary-500"
              >
                <CircleArrowOutUpRight className="w-4 h-4" /> {label}
              </Link>
            ))}
            {[["Partnerships", "/elitepartnerships"]].map(([label, path]) => (
              <Link
                to={path}
                key={label}
                className="flex items-center font-bold text-xs gap-2 sm:p-3 p-4 sm:px-4 w-full justify-center sm:w-[250px] transition-colors mt-2 md:mt-0 duration-300 ease bg-primary-100 text-primary-800 hover:bg-primary-800 hover:text-white"
              >
                {label}
                <CircleArrowOutUpRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        {/* <div className="mt-4 text-sm">
          <strong>DISCLAIMER:</strong> The graphical & text-based contents on
          this website, belongs to GCM Partners and is its
          intellectual Property. All other names, logos, & trademarks of other
          organization belong to their original owners. We don't purposefully
          entail any kind of endorsement via these trademarks and extended
          contents of the different organizations.
        </div> */}

        <div className="flex">
          <NewsletterSubscriptionForm />
        </div>
      </section>

      {/* Bottom Bar */}
      <div className=" px-4 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left flex gap-2 text-xs">
          &copy; 2025{" "}
          <span className="flex items-center gap-1 hover:text-primary-500 transition-all duration-300 ease-in-out">
            GCM Partners. All Rights Reserved.
          </span>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          {[
            ["Privacy Policy", "/legal#privacy"],
            ["Terms of Use", "/legal#terms"],
          ].map(([label, href]) => (
            <Link
              key={label}
              to={href}
              className="flex items-center gap-1 text-xs transition-all duration-300 ease-in-out hover:text-primary-500"
            >
              {label} <CircleArrowOutUpRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
