import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "../../utils/animationlib";
import { Activity } from "lucide-react";
import { Element } from "react-scroll";
import FAQItem from "../../ui/FAQItem";

const sloveniaFAQs = [
  {
    id: 1,
    question: "What is Slovenian Citizenship by Repatriation?",
    answer:
      "It is a simplified citizenship program that allows non-EU citizens with ancestral or regional ties to acquire Slovenian citizenship within 4–14 months without a residency requirement.",
  },
  {
    id: 2,
    question: "Who qualifies for the Slovenian repatriation program?",
    answer:
      "Any non-EU citizen above 18 years of age with no criminal record. There are no education, language, or work experience requirements.",
  },
  {
    id: 3,
    question: "What are the package options and costs?",
    answer:
      "There are three main packages:\n- Basic: €30,000 (approx. ₦30 million, 14 months)\n- Comfort: €40,000 (approx. ₦40 million, 9 months)\n- Top: €60,000 (approx. ₦60 million, 4 months)\nEach package includes varying levels of document assistance, accommodation, and legal support.",
  },
  {
    id: 4,
    question: "What documents are required?",
    answer:
      "Required documents include a scanned passport, application form, and personal claim. Additional documents may include birth/marriage certificates and family history proof if applicable.",
  },
  {
    id: 5,
    question: "Is physical presence in Slovenia required?",
    answer:
      "Only once—during the final stage for the oath of allegiance, biometrics, and document collection. This stay lasts approximately 14 working days.",
  },
  {
    id: 6,
    question: "What is the payment structure?",
    answer:
      "Payments are made in three stages:\n- 10% at contract signing\n- 60% after application approval\n- 30% upon receipt of Slovenian citizenship and passport",
  },
  {
    id: 7,
    question: "Can family members be added?",
    answer:
      "Yes. Costs vary:\n- Children under 14: Free\n- Children 15–17: €2,000\n- Children 18+ and parents/siblings: 50% of main package\n- Spouse: Negotiable discount",
  },
  {
    id: 8,
    question: "What support does GCM Partners provide?",
    answer:
      "GCM Partners acts as the official Nigerian partner, providing:\n- Eligibility assessment\n- Documentation support\n- Legal processing through Legally Pass\n- Travel coordination and post-citizenship services",
  },
  {
    id: 9,
    question: "What are the benefits of Slovenian citizenship?",
    answer:
      "Key benefits include:\n- EU citizenship rights (live, work, study in 27+ countries)\n- Visa-free travel to 180+ countries\n- Access to public healthcare and education\n- EU business and work opportunities\n- Generational citizenship transfer",
  },
  {
    id: 10,
    question: "What risks or concerns should I be aware of?",
    answer:
      "Major considerations include:\n- Ensuring all documents are genuine\n- Strict adherence to legal procedures\n- Working only with verified partners like GCM and Legally Pass",
  },
  {
    id: 11,
    question: "How long does the entire process take?",
    answer:
      "Depending on your package, the process ranges between 4 to 14 months from submission to passport issuance.",
  },
  {
    id: 12,
    question: "What happens after I receive the passport?",
    answer:
      "You gain immediate EU citizenship rights and can explore additional services including:\n- Property investment in Europe\n- Global health insurance\n- Education migration for children\n- Bank account setup in Slovenia or other EU countries",
  },
  {
    id: 13,
    question: "Is this a good option for people aged 40 and above?",
    answer:
      "Absolutely. Many clients aged 40+ pursue this program for retirement planning, family security, and international healthcare access. It offers a stable EU identity, mobility, and opportunities for global living.",
  },
  {
    id: 14,
    question: "Can retirees benefit from Slovenian citizenship?",
    answer:
      "Yes. Retirees enjoy visa-free global travel, EU health benefits, and the ability to pass citizenship to their children. Slovenia’s calm environment and healthcare system also make it attractive for retirement.",
  },
  {
    id: 15,
    question: "What financial strategies do older clients use to fund this?",
    answer:
      "Many use a mix of savings, real estate equity, or support from family. GCM can provide advisory guidance on wealth unlocking for retirement-age applicants.",
  },
];

const SlovenianRepatriationFAQ = ({
  title = "FAQ & RESPONSES",
  subtitle = "Slovenian Citizenship by Repatriation",
  description = "This section addresses the most common questions Nigerian clients—especially those aged 40 and above—ask about acquiring Slovenian citizenship through the GCM Partners repatriation program.",
  id = "slovenianFAQ",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <Element name={id} className="w-full">
      <section id={id} className="py-20 px-4 md:px-14 w-full bg-white">
        <div className="grid grid-cols-1 gap-12" ref={ref}>
          {/* Top Heading */}
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
                style={{ fontFamily: "Marcellus" }}
              >
                {subtitle}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-gray-600 max-w-3xl md:mx-auto mt-4"
              >
                {description}
              </motion.p>
            </div>
          </div>

          {/* FAQs */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-4"
          >
            {sloveniaFAQs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default SlovenianRepatriationFAQ;
// export default FAQSlovenia;
