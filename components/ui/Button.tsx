import { type ReactNode } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: boolean | ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  }[size];

  // Variant classes
  const variantClasses = {
    primary:
      "bg-primary hover:bg-primary-hover text-secondary font-bold rounded-lg shadow-md",
    secondary:
      "bg-secondary hover:bg-secondary-hover text-white font-bold rounded-lg shadow-md",
    outline:
      "bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 backdrop-blur-sm",
    accent:
      "bg-accent hover:bg-accent-hover text-secondary font-bold rounded-full shadow-lg",
  }[variant];

  // Icon component
  const renderedIcon =
    icon === true ? (
      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
    ) : icon ? (
      icon
    ) : null;

  const combinedClasses = `inline-flex items-center justify-center gap-2 transition-colors cursor-pointer select-none font-heading ${sizeClasses} ${variantClasses} ${className}`;

  const destination = to || href;

  if (destination) {
    const isExternal =
      destination.startsWith("http") ||
      destination.startsWith("tel:") ||
      destination.startsWith("mailto:");

    if (isExternal) {
      return (
        <motion.a
          href={destination}
          onClick={onClick}
          target={destination.startsWith("http") ? "_blank" : undefined}
          rel={destination.startsWith("http") ? "noopener noreferrer" : undefined}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className={combinedClasses}
        >
          <span>{children}</span>
          {renderedIcon}
        </motion.a>
      );
    }

    return (
      <motion.div
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="inline-block"
      >
        <Link to={destination} onClick={onClick} className={combinedClasses}>
          <span>{children}</span>
          {renderedIcon}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.04, y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.96 }}
      className={`${combinedClasses} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      <span>{children}</span>
      {renderedIcon}
    </motion.button>
  );
}
