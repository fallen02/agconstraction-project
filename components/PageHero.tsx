import { Link } from "react-router";
import { motion } from "motion/react";

interface PageHeroProps {
  title: string;
  breadcrumb?: string;
  image?: string;
}

export default function PageHero({
  title,
  breadcrumb,
  image = "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1920&q=80",
}: PageHeroProps) {
  const currentBreadcrumb = breadcrumb || title;

  return (
    <section className="relative overflow-hidden bg-secondary text-white pt-36 pb-20 sm:pt-44 sm:pb-24">
      {/* Background Image matching reference */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Dark Navy Gradient Overlay matching reference */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/95 pointer-events-none" />

      {/* Subtle blueprint pattern texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight mb-4"
        >
          {title}
        </motion.h1>

        {/* Breadcrumb matching reference: Home / About Us */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 text-sm font-heading font-semibold text-slate-300"
        >
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-slate-500">/</span>
          <span className="text-primary font-bold">{currentBreadcrumb}</span>
        </motion.div>
      </div>
    </section>
  );
}
