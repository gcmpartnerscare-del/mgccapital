import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
    >
      <button
        className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-900 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary-600 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
      </motion.div>
    </motion.div>
  );
}
