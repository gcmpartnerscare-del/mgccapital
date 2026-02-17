import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Facebook,
  Youtube,
  Twitter,
  AtSign,
  AlignCenter,
  X,
  Headphones,
  MapPin,
  Send,
  Globe,
  Languages,
  UserRoundPlus,
  Hash,
  Linkedin,
  Bot,
  HeadphonesIcon,
  LinkedinIcon,
  MapPinCheckIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSelector from "../components/LanguageSelector";
import { FaTiktok } from "react-icons/fa";

// Dropdown Descriptions
const dropdownDescriptions = {
  // "EU Citizenship & Residency Programs": {
  //   title: "Visa & Residency Solutions",
  //   description:
  //     "Get access to global mobility and citizenship services.",
  //   image:
  //     "https://img.freepik.com/premium-photo/broker-couple-contract-paper-house-while-meeting-consultation-mortgage-advice-financial-advisor-with-happy-black-man-woman-investment-savings-plan-insurance_590464-191307.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740",
  //   // image: "/images/passportCard.jpg",
  // },
  "About GCM": {
    title: "Global Trust & Transparency",
    description:
      "Explore our story, our impact, and why our clients choose GCM Partners.",
    image:
      "https://img.freepik.com/free-photo/man-registering-vote-united-states_23-2149096736.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740",
  },
  "Our Ethical & Service Pledge": {
    // "Our Service Suite": {
    title: "GCM Client Services",
    description:
      "Immigration, legal, financial and policy advisory tailored for success.",
    image:
      "https://img.freepik.com/free-photo/black-friday-cyber-monday-madness-frenzied-people-shoppers-going-crazy-by-sales-bargain-hunters-breaking-into-clothing-store-security-worker-holding-back-crowd-shopping-mall-entrance_482257-72285.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740",
  },
  "Clients Resources": {
    title: "Support on Your Journey",
    description:
      "Step-by-step guidance and tools to simplify your immigration process.",
    image:
      "https://img.freepik.com/free-photo/factory-engineer-tripping-refining-production-using-green-screen-tablet_482257-120514.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740",
  },
};

// Nav Config
const navItems = [
  {
    title: "Global Residency & Citizenship",
    icon: <Globe size={16} />,
    path: "/globalresidency-citizenship",
    // subMenu: [
    //   // {
    //   //   title: "Slovenian Citizenship by Repatriation",
    //   //   path: "/citizenship",
    //   // },
    //   {
    //     title: "EB2-NIW Visa For Permanent US Residency",
    //     path: "/usresidency",
    //   },
    //   {
    //     title: "Step-by-step Guide for Program Application",
    //     path: "/usresidency#applicationSteps",
    //   },
    //   {
    //     title: "International Real Estate & Property Investment",
    //     path: "/citizenship#realEstateInvestment",
    //   },
    //   {
    //     title: "Investment Immigration",
    //     path: "/usresidency#investmentImmigration",
    //   },
    //   {
    //     title: "Pricing & Cost Breakdown",
    //     path: "/usresidency#costbreakdown",
    //   },
    // ],
  },
  {
    title: "Global Access Solutions",
    icon: <MapPinCheckIcon size={16} />,
    path: "/global-access-solutions",
  },
  {
    title: "About GCM",
    icon: <Languages size={16} />,
    path: "/about",
    subMenu: [
      {
        title:
          "Who We Are - Africa’s forward-facing migration and global citizenship consultancy",
        path: "/about#whoweare",
      },
      {
        title:
          "Our Purpose - To provide ethical, affordable, and empowering pathways to global mobility",
        path: "/about#mission",
      },
      // { title: "Our Vision", path: "/about#vision" },
      // { title: "Our Core Values", path: "/about#corevalues" },
      {
        title:
          "Our Global Impact - On Business, On Society & On the Global Stage",
        path: "/about#seeourimpact",
      },
      {
        title:
          "Why Choose Us - Transparency, Sensitive Guidance, Strategic Global Network",
        path: "/about#whychooseus",
      },
    ],
  },
  {
    title: "Our Ethical & Service Pledge",
    // title: "Our Service Suite",
    icon: <UserRoundPlus size={16} />,
    path: "/services",
    subMenu: [
      {
        title: "Visa & Migration Consulting",
        path: "/services#privateClients",
      },
      { title: "Ethical & Service Pledge", path: "/services#ethicalpledge" },
      {
        title: "Policy Engagement & Advisory",
        path: "/services#governmentadvisory",
      },
      {
        title: "Management, Corporate Immigration",
        path: "/services#management",
      },
      {
        title: "Financial Advisory, Business & Entrepreneur Migration",
        path: "/services#financial",
      },
      { title: "Schedule Consultation", path: "/services#consultation" },
    ],
  },
  {
    title: "GCM NewsRoom",
    icon: <Hash size={16} />,
    path: "/blogs",
  },
  {
    title: "Contact Us",
    icon: <Headphones size={16} />,
    path: "/contact",
  },
];

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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const isMobile = window.innerWidth <= 1024;

  // Lock scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false); // Auto-close mobile nav on route change
  }, [location]);

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isDropdownOpen = (index) => openDropdowns.includes(index);

  const mobileMenuVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      x: 20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const mobileLinkVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <header className="bg-black text-white fixed max-w-[1440px] mx-auto top-0 z-50 w-full shadow-soft">
      {/* Top Contact */}
      <div className="hidden lg:flex justify-between px-8 py-2 text-xs border-b-[1.5px] border-dashed border-gray-800">
        {/* <div className="gap-6 flex">
          <a
            href="mailto:wecare@gcmpartners.net"
            className="flex items-center gap-2"
          >
            <Send size={12} /> wecare@gcmpartners.net
          </a>
          <Link to="/contact" className="flex items-center gap-2">
            <MapPin size={12} /> Block B4-338, HFP Eastline, Lekki, Lagos
          </Link>
        </div> */}
        <div className="flex gap-4 items-center w-full justify-between ml-auto lg:w-max">
          <div className="flex gap-2">
            <a
              href="https://web.facebook.com/profile.php?id=61580418931891"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Facebook size={13} />
            </a>
            <a
              href="https://www.linkedin.com/company/global-citizenship-and-migration/about/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <LinkedinIcon size={13} />
            </a>
            <a
              href="https://www.instagram.com/mygcmpartners/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <AtSign size={13} />
            </a>
            <a
              href="https://x.com/mygcmpartners"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Twitter size={13} />
            </a>
            <a
              href="https://www.tiktok.com/@mygcmpartners"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaTiktok size={13} />
            </a>
          </div>
          <LanguageSelector />
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center px-6 py-2 relative">
        <Link
          to="/"
          className="text-base font-semibold flex gap-1 items-center"
        >
          <img
            src="/icons/mgccapital.svg"
            alt="gcmpartners Branndlogo"
            className="w-[100px] object-cover z-10"
          />
        </Link>
        {/* <div className="absolute bg-black w-[150px] h-full left-0 top-0 z-0"></div>  */}
        {/* [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)] */}

        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-6 text-sm font-medium relative z-50">
          {navItems.map((item, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center gap-1 text-xs">
                <Link to={item.path} className="flex items-center gap-1">
                  {item.title}
                </Link>
                {item.subMenu && (
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
              </div>

              {item.subMenu && (
                <div className="absolute left-0 top-0 w-full bg-black rounded-b-lg grid grid-cols-3 gap-6 p-6 pt-12 opacity-0 -translate-y-5 group-hover:translate-y-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease -z-50">
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                    {item.subMenu.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="flex gap-2 items-start hover:text-primary-600"
                      >
                        <Hash size={16} className="mt-1" />{" "}
                        <span>{sub.title}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-100 p-2 rounded-md shadow-sm h-full flex flex-col justify-between">
                    <img
                      src={
                        dropdownDescriptions[item.title]?.image ||
                        "/icons/mgccapital.svg"
                      }
                      className="rounded-md h-32 object-cover mb-2"
                    />
                    <h4 className="text-sm text-black font-semibold">
                      {dropdownDescriptions[item.title]?.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {dropdownDescriptions[item.title]?.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden xl:flex">
          <Link
            to="/elitepartnerships"
            className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-800 hover:to-primary-700 text-xs text-white ps-4 pe-3 py-2 rounded-[2px]  flex gap-2 items-center transition-colors ease-in-out duration-300"
          >
            PARTNERSHIPS
            <div className="flex bg-primary-400 p-1 rounded-sm">
              <UserRoundPlus size={12} />
            </div>
          </Link>
        </div>

        <div className="xl:hidden flex gap-6 items-center">
          <div className="lg:hidden flex">
            <LanguageSelector />
          </div>
          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-primary-800"
          >
            {mobileOpen ? <AlignCenter /> : <AlignCenter />}
            {/* {mobileOpen ? <X size={30} /> : <AlignCenter size={30} />} */}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed w-full sm:w-1/2 inset-0 bg-black z-20"
          >
            <div className="flex justify-between px-6 py-6 bg-black">
              <Link
                to="/"
                className="text-base font-semibold flex gap-1 items-center"
              >
                <img
                  src="/icons/mgccapital.svg"
                  alt="gcmpartners Branndlogo"
                  className="w-[100px]"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden p-2 focus:outline-none text-primary-800 text-lg"
              >
                {mobileOpen ? (
                  <div className="flex flex-col leading-none">
                    <p>Close</p>
                    <p>Menu</p>
                  </div>
                ) : (
                  <AlignCenter />
                )}
              </button>
            </div>

            <div className="fixed w-full sm:w-1/2 inset-x-0 top-[112px] bottom-0 z-50 bg-black overflow-y-auto xl:hidden">
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="p-6 flex flex-col gap-2"
              >
                {navItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={mobileLinkVariants}
                    className="mb-4"
                  >
                    <div className="flex justify-between items-center">
                      <Link
                        to={item.path}
                        className="flex gap-2 items-center"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                      {item.subMenu && (
                        <button
                          onClick={() => toggleDropdown(idx)}
                          className="p-1"
                        >
                          <motion.div
                            animate={{ rotate: isDropdownOpen(idx) ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {isDropdownOpen(idx) && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-6 flex flex-col mt-2"
                        >
                          {item.subMenu?.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              to={sub.path}
                              className="block text-sm py-2"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>

              {/* Keep the rest of the content scrollable inside this container */}
              <div className="p-6 space-y-3">
                <Link
                  to="/elitepartnerships"
                  onClick={() => setMobileOpen(false)}
                  className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-800 hover:to-primary-700 text-sm text-white ps-4 pe-3 py-4  rounded-[2px] flex gap-2 items-center justify-center transition-colors ease-in-out duration-300"
                >
                  PARTNERSHIPS
                  <div className="flex bg-primary-400 p-1 rounded-sm">
                    <UserRoundPlus size={12} />
                  </div>
                </Link>
              </div>

              {/* <div className="p-6">
                <h4 className="font-semibold">
                  Worldwide Locations & Partnerships
                </h4>
                <ul className="mt-2 grid grid-cols-2 gap-2">
                  {["Africa", "Europe", "Oceania", "United States"].map(
                    (loc) => (
                      <li
                        key={loc}
                        className="flex items-center text-sm gap-2 hover:text-primary-600"
                      >
                        <Globe className="w-4 h-4" /> {loc}
                      </li>
                    )
                  )}
                </ul>
              </div> */}

              <div className="p-6">
                <div className="flex flex-col gap-4 border-t border-primary-50 pt-6 pb-12">
                  <div className="flex justify-center gap-4">
                    {socialLinks.map(({ href, icon: Icon }, index) => (
                      <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-primary-800 rounded-full hover:-translate-y-1 hover:scale-110 transition-all ease-in-out duration-300"
                      >
                        <Icon className="w-[13px] h-[13px]" />
                      </a>
                    ))}
                  </div>
                  {/* <div className="flex justify gap-4">
                    {[AtSign, Facebook, Youtube, Linkedin, Twitter, Bot].map(
                      (Icon, index) => (
                        <a
                          href="mailto:Nduneche@live.com"
                          key={index}
                          className="p-2 border border-primary-800 rounded-full hover:-translate-y-1 transition-all ease-in-out duration-300"
                        >
                          <Icon className="w-[12px] h-[12px]" />
                        </a>
                      )
                    )}
                  </div> */}
                  {/* <a
                    href={"tel:+2348037179146"}
                    className="text-base flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Headphones size={12} /> Contact Us: (+234) 803 717 9146
                  </a> */}
                  <a
                    href={"mailto:wecare@gcmpartners.net"}
                    className="text-base flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Send size={12} /> Email: wecare@gcmpartners.net
                  </a>
                  <Link to="/contact" className="flex items-center gap-2">
                    <MapPin size={12} /> Block B4-338, HFP Eastline, Lekki,
                    Lagos
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
