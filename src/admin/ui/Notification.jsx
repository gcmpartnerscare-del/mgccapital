import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertTriangle, X } from "lucide-react";

export default function Notification({ show, message, type, onClose }) {
  // Auto-close after 4 seconds
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.8,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  const bgColor =
    type === "success" ? "bg-green-100 border-green-500" :
    type === "error" ? "bg-red-100 border-red-500" :
    "bg-yellow-100 border-yellow-500";

  const icon =
    type === "success" ? <CheckCircle className="text-green-600" /> :
    type === "error" ? <XCircle className="text-red-600" /> :
    <AlertTriangle className="text-yellow-600" />;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`fixed top-8 right-8 z-50 max-w-sm w-full p-4 border-l-4 shadow-lg rounded-xl ${bgColor}`}
        >
          <div className="flex items-start">
            <div className="w-10 h-10 flex items-center justify-center mr-4">{icon}</div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 capitalize">{type}</h4>
              <p className="text-sm text-gray-600">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition ml-2"
            >
              <X size={18} />
            </button>
          </div>
          {/* Progress Bar */}
          <div className="relative mt-4 h-1 bg-gray-300 rounded-full overflow-hidden">
            <motion.div
              className={`absolute h-full ${type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-yellow-500"}`}
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
