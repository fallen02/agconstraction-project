import { type ReactNode } from "react";
import { motion } from "motion/react";
import SectionTag from "./SectionTag";

interface SectionHeadingProps {
  tag?: string;
  tagVariant?: "default" | "pill" | "badge";
  title: string | ReactNode;
  highlight?: string;
  subtitle?: string | ReactNode;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  tag,
  tagVariant = "default",
  title,
  highlight,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`${
        isCentered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {/* Eyebrow Tag using font-heading */}
      {tag && <SectionTag variant={tagVariant}>{tag}</SectionTag>}

      {/* Main Headline using font-heading */}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-tight mb-4 text-secondary`}
      >
        {title}{" "}
        {highlight && (
          <>
            <br className="hidden sm:inline" />
            <span className="text-primary">{highlight}</span>
          </>
        )}
      </h2>

      {/* Subtitle Paragraph */}
      {subtitle && (
        <p
          className={` text-slate-600  text-base sm:text-lg leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
