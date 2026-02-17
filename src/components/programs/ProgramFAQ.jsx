import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "../../utils/animationlib";
import { Activity } from "lucide-react";
import { Element } from "react-scroll";
import FAQItem from "../../ui/FAQItem";
import programs from "../../data/programs";

const ProgramFAQ = ({ category = "CBI" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const program = programs[category];
  const faqData = program?.faq || [];

  return (
    <Element name="faqs" className="w-full">
      <section id="faqs" className="py-16 px-4 md:px-10 w-full bg-gray-100">
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-0 gap-4" ref={ref}>
          {/* Left Side Heading */}
          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <p className="bg-white rounded-full shadow py-1 px-3 font-semibold">
                  <Activity />
                </p>
                <h3 className="text-gray-900">FAQ & RESPONSES</h3>
              </div>

              <motion.h2
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-4xl md:text-5xl font-bold text-gray-900"
              >
                Frequently Asked Questions
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-gray-600"
              >
                Answers to common questions about {program?.title || "our programs"} and processes.
              </motion.p>
            </div>

            <p className="text-primary-900 mt-4">
              Learn more from our dedicated FAQ section or contact support.
            </p>
          </div>

          {/* Right Side FAQs */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {faqData.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default ProgramFAQ;
