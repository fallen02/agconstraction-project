import { type ElementType } from "react";
import { motion } from "motion/react";
import { CounterStat } from "./CouterStat";

interface StatCardProps {
  icon: ElementType;
  title: string;
  description: string;
  stat: number;
  label: string;
  index?: number;
  className?: string;
}

export default function StatCard({
  icon: Icon,
  title,
  description,
  stat,
  label,
  index = 0,
  className = "",
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className={`h-[360px] sm:h-[380px] w-full bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 flex flex-col justify-between  ${className}`}
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-5">
          <Icon className="w-6 h-6 stroke-[2.5]" />
        </div>
        <h3 className="text-xl font-heading font-bold text-secondary mb-3">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <div className="text-4xl font-heading font-black text-secondary tracking-tight">
          <CounterStat  start={0} end={stat} suffix="+"/>
        </div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
