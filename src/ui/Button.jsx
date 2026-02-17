import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled,
  fullWidth,
  ...props
}) => {
  const baseClasses = `btn btn-${variant} ${
    size === "sm"
      ? "px-4 py-2 text-sm"
      : size === "lg"
      ? "px-8 py-4 text-lg"
      : "px-6 py-4 text-base"
  } ${fullWidth ? "w-full" : ""} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  const buttonContent = (
    <motion.span
      className="flex items-center justify-center"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  // Internal link
  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {buttonContent}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {buttonContent}
      </a>
    );
  }

  // Regular button
  return (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
