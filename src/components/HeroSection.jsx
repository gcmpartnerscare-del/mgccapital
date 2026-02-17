import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "../ui/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroSlides = [
  {
    punchline: "Your Vision, Our Solutions",
    title: "Dream beyond borders, but make your journey legal and secure!",
    description:
      "GCM Partners is Your Secure Migration Partner let Us Help guide you every step of the way",
    image: "/images/sunset.webp",
    buttonText: "Explore Our Services",
    buttonPath: "/services",
  },
  {
    punchline: "Turn Rejections Into Approvals",
    title: "They ask for your bank statement, your birth certificate, and your grandma’s maiden name and still say NO",
    description:
      "GCM helps you own a passport that says yes—every time.",
    image: "https://img.freepik.com/premium-photo/thinking-together-group-african-american-business-people-working-office-together_146671-44955.jpg",
    buttonText: "Explore Our Services",
    buttonPath: "/services",
  },
  {
    punchline: "Freedom Without Borders",
    title: "You need a passport that takes you across 180 countries without VISA? - UK, USA, Canada, China and UAE etc",
    description:
      "GCM can help you achieve that in just 5 months",
    image: "https://img.freepik.com/premium-photo/group-successful-afro-americans-europeans-arabic-korean-businessman-businesswoman-working-office-with-large-glass-windows_175356-6065.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80",
    buttonText: "Explore Our Services",
    buttonPath: "/services",
  },
  {
    punchline: "Migration Success",
    title:
      "You don't have to break a bank nor be in the corridors of power to get a Second passport",
    description:
      "Permanent solutions for families seeking quality education, healthcare, and peace of mind abroad.",
    image:
      "https://img.freepik.com/premium-photo/computer-collaboration-mentor-with-business-people-email-marketing-target-audience-research-rpa-software-chief-automation-officer-solution-technology-with-employees-ai-system_590464-479430.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80",
    buttonText: "Become a Partner",
    buttonPath: "/elitepartnerships",
  },
  {
    punchline: "Gateway to the World",
    title: "Your Trusted Bridge to Global Citizenship & Global Opportunities.",
    description:
      "Let GCM Partners guide you with integrity, Fairness and clarity through the immigration journey.",
    image: "/images/bridge-to-citizenship.png",
    buttonText: "Register Now",
    buttonPath: "/globalresidency-citizenship#onboardingform",
  },
];

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const openConsult = () => {
    if (window.openConsultation) {
      window.openConsultation();
    } else {
      // fallback to hash to trigger listener
      window.location.hash = "consult";
    }
  };

  return (
    <div className="relative max-w-[1440px] mx-auto max-h-[750px] h-screen overflow-hidden">
      <Slider {...settings}>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="relative max-w-[1440px] mx-auto max-h-[750px] h-screen flex items-end pt-20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#060d24] to-black opacity-50 z-20"></div>
            <div
              className="absolute z-10 inset-0 bg-cover bg-top"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="absolute px-4 z-20 py-16 md:px-8 bottom-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto text-white"
              >
                <p className="text-base md:text-xl mb-2">{slide.punchline}</p>
                <h1 className="text-3xl md:text-4xl mb-4 text-shadow-lg/30">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl mb-8 max-w-2xl">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={openConsult}
                    className="border-white border bg-white text-black hover:bg-primary-500 hover:border-primary-500 hover:text-white py-4 px-6 rounded text-sm font-semibold flex items-center justify-center transition-all duration-300"
                  >
                    Get Started Now
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="ml-2"
                    >
                      <ArrowDown size={16} />
                    </motion.div>
                  </button>

                  <Button
                    className="border-white border rounded bg-transparent text-white hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-300"
                    to={slide.buttonPath}
                    size="md"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
