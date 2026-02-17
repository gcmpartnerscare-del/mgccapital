import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section
      className="relative w-full bg-[url('/images/uniqueNature.jpg')] bg-center bg-cover flex items-center justify-center overflow-hidden py-44 px-5"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-900/50 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 style={{fontFamily:"Marcellus",}} className="text-white text-lg md:text-xl lg:text-3xl max-w-4xl leading-relaxed md:leading-snug mb-6">
          Find the Perfect Global Citizenship or Residency Program <span className="hidden md:inline lg:hidden"><br /></span> Tailored to Your Goals Here at GCM Partners
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/globalresidency-citizenship"
            className="inline-flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Global Residency & Citizenship <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            to="/elitepartnerships#ApplyNow"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:text-primary-900 hover:bg-primary-100 transition-all duration-300"
          >
            Become a Partner<ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
