import { type ReactNode } from "react";

interface SectionTagProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "pill" | "badge";
  className?: string;
}

export default function SectionTag({
  children,
  icon = "◆",
  variant = "default",
  className = "",
}: SectionTagProps) {
  if (variant === "badge") {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-primary/20 border border-primary/40 text-primary font-heading font-extrabold text-xs tracking-widest uppercase mb-4 ${className}`}
      >
        {icon && <span className="text-[10px]">{icon}</span>}
        <span>{children}</span>
      </div>
    );
  }

  if (variant === "pill") {
    return (
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue border border-accent-border text-primary font-heading font-black text-xs tracking-widest uppercase mb-3 ${className}`}
      >
        {icon && <span className="text-[10px]">{icon}</span>}
        <span>{children}</span>
      </div>
    );
  }

  // Default variant matching the reference images
  return (
    <div
      className={`inline-flex items-center gap-2 text-primary font-heading font-black text-xs tracking-widest uppercase mb-3 ${className}`}
    >
      {icon && <span className="text-[10px]">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
