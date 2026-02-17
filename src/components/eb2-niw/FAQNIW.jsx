import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "../../utils/animationlib";
import { Activity } from "lucide-react";
import { Element } from "react-scroll";
import FAQItem from "../../ui/FAQItem";

const EB2NIWfaqs = [
  {
    id: 1,
    question: "Who is eligible to apply for an NIW Green Card from Nigeria?",
    answer:
      "Anyone with an advanced degree (Master's or Ph.D.) or exceptional ability in their field may qualify, especially if their work has national importance and impact.",
  },
  {
    id: 2,
    question: "Can I apply for the NIW Green Card while living in Nigeria?",
    answer:
      "Yes, you can apply from Nigeria. You do not need to be physically present in the U.S. to initiate the process.",
  },
  {
    id: 3,
    question: "What types of professionals typically qualify for the NIW category?",
    answer:
      "Researchers, medical professionals, engineers, ICT experts, entrepreneurs, and academic scholars are among those who commonly qualify.",
  },
  {
    id: 4,
    question: "Do I need a job offer or U.S. employer sponsorship to apply?",
    answer:
      "No. The NIW Green Card is a self-petitioning category, so no job offer or employer sponsorship is required.",
  },
  {
    id: 5,
    question: "How long does the entire application process take?",
    answer:
      "It can take 12–24 months depending on case complexity, USCIS backlog, and whether premium processing is used.",
  },
  {
    id: 6,
    question: "Can my spouse and children also get Green Cards?",
    answer:
      "Yes. Once your application is approved, your spouse and unmarried children under 21 can apply for their Green Cards.",
  },
  {
    id: 7,
    question: "What documents are typically required for the NIW application?",
    answer:
      "Common documents include academic certificates, professional references, a detailed resume, publications, and proof of achievements.",
  },
  {
    id: 8,
    question: "What is GCM Partners role in the process?",
    answer:
      "GCM Partners along with attorney experts  help to manage documentation, guide you through the legal process, and offer localized support for Global Citizenship and Global Residency pursuits.",
  },
  {
    id: 9,
    question: "Can I pay the fees in installments?",
    answer:
      "Yes, flexible payment plans are available for both legal fees and administrative processing.",
  },
  {
    id: 10,
    question: "Will the Green Card allow me to work and live permanently in the U.S.?",
    answer:
      "Yes. A Green Card grants permanent residency, allowing you to live, work, and travel freely within the United States.",
  },
  {
    id: 11,
    question:
      "Is the U.S. still welcoming immigrants under the NIW program after the Trump administration?",
    answer:
      "Yes. While the Trump administration introduced stricter immigration policies, the NIW program remains open and continues to receive high approval rates for qualified applicants. U.S. immigration policy now emphasizes skilled migration, innovation, and merit-based green cards.",
  },
  {
    id: 12,
    question: "Could a future Trump administration stop NIW or revoke my green card?",
    answer:
      "Highly unlikely. The NIW is a lawful pathway established under U.S. immigration law, not an executive order. Even if policies shift, individuals who have already obtained a green card through legal channels like NIW are protected under the U.S. legal system. However, all green card holders must continue to comply with immigration and residency requirements.",
  },
  {
    id: 13,
    question: "Will political changes in the U.S. affect my pending NIW application?",
    answer:
      "Once your application is filed and under review, it is evaluated based on the law and eligibility criteria, not politics. USCIS officers follow legal frameworks, and policy changes typically apply to future applications, not those already in the system.",
  },
  {
    id: 14,
    question: "Should I apply now or wait until after the U.S. elections?",
    answer:
      "Applying now is often better. Immigration processing can take time, and being proactive gives you an advantage. Moreover, starting your NIW application now means you're not caught in possible backlogs or future policy uncertainties.",
  },

  /*
  {
    question: "What is the processing time for an NIW petition?",
    answer: "Typically 6–12 months, faster with premium processing.",
  },
  {
    question: "Can I apply without a job offer?",
    answer: "Yes, the NIW allows self-petitioning.",
  },
  {
    question: "Is a PhD required?",
    answer:
      "Not always — exceptional ability or a master’s degree may qualify.",
  },
  {
    question: "Can I apply for NIW without a U.S. employer?",
    answer:
      "Yes. One of the major advantages of the NIW is that it allows self-petitioning without a U.S. job offer.",
  },
  {
    question: "How long does the NIW process take?",
    answer:
      "Processing times vary, but most applicants receive decisions within 6 to 12 months depending on USCIS workload and petition strength.",
  },
  {
    question: "Can I include my spouse and children?",
    answer:
      "Yes. Spouses and unmarried children under 21 can receive green cards as derivative beneficiaries.",
  },
  */ 
];

const FAQNIW = ({
  title = "FAQ & RESPONSES",
  subtitle = "Frequently Asked Questions",
  description = "Answers designed to address the most common questions and concerns Nigerian clients may have about acquiring the EB2-NIW Green Card.",
  id = "EB2NIWfaqs",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <Element name={id} className="w-full">
      <section id={id} className="py-20 px-4 md:px-14 w-full bg-gray-100">
        <div
          className="grid grid-cols-1 gap-12"
          ref={ref}
        >
          {/* Top Side Heading */}
          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-col md:text-center">
              <div className="flex items-center md:justify-center gap-4 mb-4">
                <p className="bg-gray-100 rounded-full shadow py-1 px-3 font-semibold">
                  <Activity />
                </p>
                <h3 className="text-gray-900">{title}</h3>
              </div>

              <motion.h2
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-4xl md:text-5xl font-bold text-gray-900"
              >
                {subtitle}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-gray-600 max-w-2xl md:mx-auto mt-4"
              >
                {description}
              </motion.p>
            </div>
          </div>

          {/* EB2-NIW GreenCard FAQs */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-4"
          >
            {EB2NIWfaqs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default FAQNIW;
