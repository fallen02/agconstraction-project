import { CheckCircle2, PhoneCall, Award } from "lucide-react";
import { motion } from "motion/react";
import { SectionTag, Button } from "./ui";
import { phoneNo } from "../constant/contacts";

export default function AboutSection() {
  const checklist = ["Structural Works", "Interior Fit-Out", "MEP Services"];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.008, 0.5, 1, 0.3] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Rounded image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/5 bg-slate-100 border border-slate-200 group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
                  alt="Professional construction engineers in safety equipment"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Floating Experience Badge with Spring Entry */}
              <motion.div
                initial={{ opacity: 0, scale: 0.75, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.35,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="absolute -bottom-6 right-0 sm:bottom-6 sm:-right-6 bg-secondary text-white p-4 sm:p-5 rounded-xl shadow-2xl border border-white/10 flex items-center gap-4 max-w-[calc(100%-1rem)] sm:max-w-none"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-secondary font-black text-xl">
                  <Award className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-black text-primary">
                    25+ Years
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Proven Industry Excellence
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: About Details */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.008, 0.5, 1, 0.3] }}
            className="lg:col-span-7"
          >
            {/* Reusable Section Tag Sub-Component */}
            <SectionTag>About AG Constructions</SectionTag>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary tracking-tight leading-tight mb-5">
              Quality we pursue,
              <br />
              <span className="text-primary">Safety we follow</span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Aakifah Grandeur Constructions (AG Constructions) delivers
              industrial, commercial and residential construction, covering
              structural and interior finishes fit-out works along with MEP
              services, with high quality and a reputation we protect.
            </p>

            {/* Light Blue Checkbox Container with Staggered items */}
            <div className="bg-accent-blue border border-accent-border rounded-xl p-5 sm:p-6 mb-8">
              <ul className="grid  gap-4">
                {checklist.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="size-6 fill-primary text-white" />
                    </span>
                    <span className="text-lg font-bold text-secondary">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Reusable Button Sub-Component */}
              <Button to="/about" size="md">
                Get Free Quote
              </Button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                // href="tel:+18001234567"
                href = {`tel:${phoneNo.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-3 text-secondary hover:text-primary transition-colors group font-bold text-sm cursor-pointer"
              >
                <span className="w-10 h-10 rounded-full bg-accent-blue border border-accent-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                  <PhoneCall className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs text-slate-500 font-medium">
                    Call Us For Enquiries
                  </div>
                  <div className="text-sm font-heading font-black">
                    {phoneNo}
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
