import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  easeIn,
  easeOut,
} from "motion/react";
import { SectionHeading, Button } from "./ui";
import { services } from "../constant/services";

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 text-white">
      {/* Background blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B42_1px,transparent_1px),linear-gradient(to_bottom,#1E293B81_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Our services"
          title="Our construction services"
          subtitle="We specialize in industrial, commercial and residential construction, from structure to interior finishes and MEP."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-2xl overflow-hidden aspect-8/6 lg:aspect-3/4 bg-slate-900 cursor-pointer select-none"
              >
                {/* Background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                  loading="lazy"
                />

                {/* Dark gradient scrim */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-80"
                  }`}
                />

                {/* Bottom Content Area */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  {/* Index and Title slide smoothly upwards */}
                  <motion.div
                    layout
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  >
                    <h3 className="text-2xl lg:text-lg font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                  </motion.div>

                  {/* Expandable description and View More link */}
                  <AnimatePresence initial={false}>
                    {isHovered && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          transition: {
                            height: {
                              duration: 0.5,
                              ease: easeIn,
                            },
                            opacity: { duration: 0.25, delay: 0.08 },
                          },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          transition: {
                            height: {
                              duration: 0.5,
                              ease: easeOut,
                            },
                            opacity: { duration: 0.15 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-slate-300 mt-2.5 leading-relaxed ">
                          {service.subtitle}
                        </p>

                        <a
                          href="/services"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 mt-4 tracking-wider uppercase transition-colors"
                        >
                          <span>Details</span>
                          <span className="w-4 h-4 rounded-full border border-amber-400/80 flex items-center justify-center shrink-0">
                            <ArrowRight className="w-2.5 h-2.5" />
                          </span>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button to="/services" variant="secondary">
            View all services
          </Button>
        </div>
      </div>
    </section>
  );
}
