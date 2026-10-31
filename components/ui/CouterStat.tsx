import React, { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
  motion,
} from "motion/react";

interface CounterUpProps {
  end: number;
  start?: number;
  duration?: number; // duration in seconds
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;        // Wrapper element styles
  prefixClassName?: string;  // Prefix styles (e.g. smaller text, muted color)
  numberClassName?: string;  // Animated number styles
  suffixClassName?: string;  // Suffix styles (e.g. "+", "%")
}

export const CounterStat: React.FC<CounterUpProps> = ({
  end,
  start = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
  prefixClassName = "",
  numberClassName = "",
  suffixClassName = "",
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const motionVal = useMotionValue(start);

  // Formats only the numeric portion
  const formattedNumber = useTransform(motionVal, (latest) =>
    latest.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, end, {
        duration,
        ease: "easeOut",
      });

      return () => controls.stop();
    }
  }, [isInView, motionVal, end, duration]);

  return (
    <span
      ref={ref}
      className={`inline-flex items-baseline tabular-nums font-heading font-extrabold tracking-tight ${className}`}
    >
      {prefix && (
        <span className={`select-none ${prefixClassName}`}>
          {prefix}
        </span>
      )}

      <motion.span className={numberClassName}>
        {formattedNumber}
      </motion.span>

      {suffix && (
        <span className={`select-none ${suffixClassName} text-primary`}>
          {suffix}
        </span>
      )}
    </span>
  );
};
