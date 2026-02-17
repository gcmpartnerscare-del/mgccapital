import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "../utils/animationlib";
import { Activity, Search } from "lucide-react";
import { Element } from "react-scroll";
import { faqs } from "../data/faqs";
import FAQItem from "../ui/FAQItem";

const HybridFAQ = ({
  title = "FAQ & RESPONSES",
  subtitle = "Frequently Asked Questions",
  description = "Answers to common questions about our services, program registeration processes, approval duration, eligibility and lots more. Curated by our technical experts indicating clearly that we are here to serve you and your migration needs.",
  id = "faqs",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchInput, setSearchInput] = useState("");

  const categories = Object.keys(faqs); // ["general", "about", etc.]

  useEffect(() => {
    if (!searchInput) return;

    const match = categories.find((category) =>
      searchInput.toLowerCase().includes(category.toLowerCase())
    );

    setSelectedCategory(match || "general");
  }, [searchInput]);

  const currentFaqs = faqs[selectedCategory] || [];

  return (
    <Element name={id} className="">
      <section id={id} className="py-20 px-4 md:px-10 w-full bg-gray-100">
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto" ref={ref}>

          {/* Top Heading */}
          <div className="flex flex-col justify-center text-center gap-6">
            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-4 mb-4">
                <p className="bg-white rounded-full shadow py-1 px-3 font-semibold">
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
                className="text-gray-600 pt-4"
              >
                {description}
              </motion.p>
            </div>

            {/* <p className="text-primary-900 mt-4">
              Learn more from our expert responses in this dedicated FAQ attached for detailed insights, international migration and program registeration related information.
            </p> */}
          </div>

          {/* RIGHT: Filter and FAQs */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
           <div className="flex gap-4">
             {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSearchInput(""); // reset search field when manually switching
              }}
              className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
            >
              {categories.map((key) => (
                <option key={key} value={key}>
                  {key.toUpperCase()} FAQs
                </option>
              ))}
            </select>

            {/* Search Field */}
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search: e.g. 'Citizenship', 'services'..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
            </div>
           </div>

            {/* FAQs */}
            <div className="space-y-4">
              {currentFaqs.length > 0 ? (
                currentFaqs.map((faq, index) => (
                  <FAQItem key={faq.id} faq={faq} index={index} />
                ))
              ) : (
                <p className="text-gray-500">No FAQs available for this category.</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default HybridFAQ;