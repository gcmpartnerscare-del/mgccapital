import { motion } from "framer-motion";

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

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/+2349116514216"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-[80px] z-[102]"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Clean Ripple Effect: Each expands independently without snapping back */}
        <Ripple delay={0} />
        <Ripple delay={0.6} />
        <Ripple delay={1.2} />

        {/* WhatsApp Icon (with bounce) */}
        <motion.div
          animate={{ y: [0, -1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <img
            src="/icons/whatsapp.png"
            alt="whatsapp widget"
            className="w-12 h-12 relative z-10"
          />
        </motion.div>
      </div>
    </a>
  );
};

export default WhatsAppWidget;



// import { motion } from "framer-motion";

// const rippleVariants = {
//   initial: {
//     scale: 1,
//     opacity: 0.6,
//   },
//   animate: {
//     scale: 2,
//     opacity: 0,
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "linear",
//     },
//   },
// };

// const WhatsAppWidget = () => {
//   return (
//     <a
//       href="https://wa.me/+2349116514216"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-16 md:bottom-10 right-[16px] z-50"
//       aria-label="Contact us on WhatsApp"
//     >
//       <div className="relative w-16 h-16 flex items-center justify-center">
//         {/* Ripple Layers */}
//         {[0, 0.5, 1, 1.5].map((delay, index) => (
//           <motion.span
//             key={index}
//             className="absolute w-full h-full rounded-full border border-green-500"
//             variants={rippleVariants}
//             initial="initial"
//             animate="animate"
//             style={{ animationDelay: `${delay}s` }}
//             transition={{ ...rippleVariants.animate.transition, delay }}
//           />
//         ))}

//         {/* WhatsApp Icon (with subtle bounce) */}
//         <motion.div
//           animate={{ y: [0, -2, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//         >
//           <img
//             src="/icons/whatsapp.png"
//             alt="whatsapp widget"
//             className="w-12 h-12 relative z-10"
//           />
//         </motion.div>
//       </div>
//     </a>
//   );
// };

// export default WhatsAppWidget;
