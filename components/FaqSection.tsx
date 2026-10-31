import { useState } from "react";
import { Plus, Minus, HardHat } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionTag } from "./ui";
import { faqs } from "../constant/faqs";



export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 lg:py-28  relative overflow-hidden">
      {/* Blueprint grid watermark */}
      {/* <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0f1c2e 1px, transparent 1px), linear-gradient(90deg, #0f1c2e 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      /> */}
       <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B42_1px,transparent_1px),linear-gradient(to_bottom,#1E293B81_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 2x2 Image Collage with Center Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="rounded-2xl overflow-hidden aspect-square shadow-md bg-slate-200">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=600&q=80"
                  alt="Construction high rise"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-md bg-slate-200">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                  alt="Engineers planning"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-md bg-slate-200">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                  alt="Construction workers site"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-md bg-slate-200">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                  alt="Civil blueprints"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Central Floating Badge with Spring Entry */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.35,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary text-secondary p-2 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white font-heading font-black"
              >
                <HardHat className="w-6 h-6 stroke-[2.5]" />
                <span className="text-[10px] uppercase tracking-wider font-heading font-extrabold mt-0.5">
                  Trusted
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: FAQ Accordion with AnimatePresence */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            {/* Reusable Section Tag Sub-Component */}
            <SectionTag>FAQ</SectionTag>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary tracking-tight mb-4">
              Got questions? <br />
              <span className="text-primary">We've got answers</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Find quick answers to common questions about our construction process,
              permits, warranties, and project timelines.
            </p>

            {/* Accordion Items with Motion */}
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-secondary text-base hover:text-primary transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.q}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? "bg-primary text-secondary"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[3]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[3]" />
                        )}
                      </motion.span>
                    </button>

                    {/* Smooth Height Expand/Collapse Entry & Exit Animation */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
