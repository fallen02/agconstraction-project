import { useState, type SubmitEventHandler } from "react";
import { ArrowUpRight, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionTag } from "./ui";
import bg from "@img/contact-us-bg.png";
import { address, mail, phoneNo } from "../constant/contacts";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("http://localhost/api/v1/forms/submit.php", {
        method: "POST",
        body: formData,
      }).then(res => res.json())
      setLoading(false);
      setSubmitted(true);

    } catch (e) {
      console.log(e);
      setLoading(false)
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28  relative overflow-hidden">
      
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat min-h-100 w-full"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-secondary text-white rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <SectionTag>CONTACT US</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight leading-tight mb-4">
                Let's build something <br />
                <span className="text-primary">great together</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Have a new development, renovation, or architectural plan in
                mind? Reach out to our principal team today for a transparent
                consultation.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-6 mb-8">
                <motion.a
                  whileHover={{ x: 4 }}
                  href={`tel:${phoneNo.replace(/\s+/g, "")}`}
                  className="flex items-start gap-4 text-slate-200 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Phone Number
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {phoneNo}
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 4 }}
                  href={`mailto:${mail.replace(/\s+/g, "")}`}
                  // href="mailto:contact@builtup.com"
                  className="flex items-start gap-4 text-slate-200 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Email Address
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {mail}
                    </div>
                  </div>
                </motion.a>

                <div className="flex items-start gap-4 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Headquarters
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {address}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Representative Image Badge */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-700 shrink-0 border-2 border-primary">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Support representative"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Need Quick Answers?
                </div>
                <div className="text-xs text-slate-300">
                  Our estimating desk is open Mon - Fri: 8am - 6pm EST
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right White Card: Form with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200 flex flex-col justify-center"
          >
            {/* Reusable Section Tag Sub-Component */}
            <SectionTag>GET IN TOUCH</SectionTag>

            <h3 className="text-2xl sm:text-3xl font-heading font-black text-secondary tracking-tight mb-2">
              Tell us about your project
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              Fill out the details below and our senior estimating team will
              review your specs and prepare a comprehensive estimate.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                      delay: 0.1,
                    }}
                    className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h4 className="text-xl font-heading font-bold text-emerald-950 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto mb-6">
                    Thank you for reaching out. One of our master builders has
                    received your project details and will be in touch within 24
                    business hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-emerald-700 text-white font-heading font-semibold text-sm hover:bg-emerald-800 transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        name="full_name"
                        type="text"
                        required
                        placeholder="e.g. Robert Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="robert@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        name="phoneNo"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white cursor-pointer font-sans"
                      >
                        <option>Commercial Construction</option>
                        <option>Architectural Design & BIM</option>
                        <option>Civil & Structural Engineering</option>
                        <option>Luxury Residential Building</option>
                        <option>Renovation & Retrofitting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Overview & Timeline *
                    </label>
                    <textarea
                      name="overview"
                      required
                      rows={4}
                      placeholder="Tell us about the project scope, location, intended start date, or any specific structural requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-secondary font-heading font-bold px-8 py-4 rounded-xl text-base shadow-lg transition-colors cursor-pointer disabled:opacity-75"
                  >
                    <span>{loading ? "Transmitting..." : "Send Message"}</span>
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
