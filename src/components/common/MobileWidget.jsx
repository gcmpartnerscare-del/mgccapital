import { motion } from "framer-motion";
import { MessageCircleMore } from "lucide-react";

const Ripple = ({ delay }) => {
  return (
    <motion.span
      className="absolute w-full h-full rounded-full border border-green-500"
      initial={{ scale: 0.5, opacity: 0.6 }}
      animate={{ scale: 1.5, opacity: 0 }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 2,
        delay,
      }}
    />
  );
};

const MobileWidget = () => {
  return (
    <a
      href="tel:+2349116514216"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-[130px] z-[102]"
      aria-label="Contact us on Mobile"
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Clean Ripple Effect: Each expands independently without snapping back */}
        <Ripple delay={0} />
        <Ripple delay={0.6} />
        <Ripple delay={1.2} />

        {/* Mobile Icon (with bounce) */}
        <motion.div
          animate={{ y: [0, -1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="bg-[#4BAE4F] p-2 rounded-full text-white"
        >
          <MessageCircleMore
            className="w-8 h-8 relative z-10"
          />
        </motion.div>
      </div>
    </a>
  );
};

export default MobileWidget;