import { motion } from "motion/react";
import { SectionTag, Button } from "./ui";

export default function CtaBanner() {
  return (
    <section className="bg-secondary text-white relative overflow-hidden py-16 lg:py-20 border-y border-white/10">
      {/* Decorative gradient light */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Blueprint grid subtle background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Reusable Section Tag Sub-Component */}
            <SectionTag>BUILD WITH CONFIDENCE</SectionTag>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight mb-4">
              Let's build something <br />
              <span className="text-primary">great together!</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Share your project with us. Partner with AG Constructions for structural, interior and MEP works delivered with quality and safety.
            </p>

            {/* Reusable Button Sub-Component */}
            <Button to="/contact" size="lg">
              Get a Free Quote
            </Button>
          </motion.div>

          {/* Right Image: Construction Engineer with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-xs sm:max-w-sm">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[3/4] bg-secondary-light group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
                  alt="Professional construction lead engineer in hard hat"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge with Spring Motion */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="absolute -bottom-4 left-0 sm:bottom-4 sm:-left-6 bg-primary text-secondary p-4 rounded-xl shadow-xl font-heading font-black text-sm flex items-center gap-2.5 max-w-[calc(100%-1rem)] sm:max-w-none"
              >
                <span className="text-xl">👷‍♀️</span>
                <div>
                  <div className="leading-tight font-heading font-black">
                    100% Certified
                  </div>
                  <div className="text-xs font-semibold text-secondary/80">
                    Expert Team On Site
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
