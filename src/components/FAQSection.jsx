import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "../utils/animationlib";
import { Activity } from "lucide-react";
import { Element } from "react-scroll";
import FAQItem from "../ui/FAQItem";

const FAQSection = ({ data = [], title = "FAQ & RESPONSES", subtitle = "Frequently Asked Questions", description = "Answers to common questions about our services and processes.", id = "faqs" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <Element name={id} className="w-full">
      <section id={id} className="py-20 px-4 md:px-14 w-full bg-gray-100">
        <div className="grid grid-cols-1 gap-12" ref={ref}>
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
                className="text-gray-600"
              >
                {description}
              </motion.p>
            </div>

            
          </div>

          {/* Right Side FAQs */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto space-y-4"
          >
            {data.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default FAQSection;



