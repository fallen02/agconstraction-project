import type { Route } from "./+types/services";
import { motion } from "motion/react";
import { SectionHeading, Button } from "../../components/ui";
import PageHero from "../../components/PageHero";
import WhyChooseUsSection from "../../components/WhyChooseUsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CtaBanner from "../../components/CtaBanner";
import ContactSection from "../../components/ContactSection";
import { detailedServices } from "../../constant/services";
import { stats } from "../../constant/about";
import { CounterStat } from "../../components/ui/CouterStat";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services - BuiltUp Construction Inc." },
    {
      name: "description",
      content:
        "Comprehensive construction, civil engineering, BIM 3D architectural modeling, and general contracting services.",
    },
  ];
}

export default function ServicesPage() {
  return (
    <div className="w-full">
      <PageHero
        title="Our Services"
        breadcrumb="Services"
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="OUR Services"
            title="Our Construction Services"
            subtitle="We specialize in structural, interior finishing and MEP works for industrial, commercial and residential projects."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm text-secondary flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-primary stroke-[2.2]" />
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-heading font-bold text-primary uppercase tracking-wider block mb-2">
                        Service 0{index + 1}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-secondary group-hover:text-primary transition-colors mb-2 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <Button to="/contact" variant="primary" size="sm" className="w-full">
                        Request a Proposal
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 relative  overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B42_1px,transparent_1px),linear-gradient(to_bottom,#1E293B81_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="what we do"
            title="Building the future on a foundation of excellence"
            subtitle="We specialize in a wide range of construction services, including residential, commercial, and industrial projects. From initial design to final inspection, we work closely with our clients to understand their unique needs and vision."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-secondary text-white rounded-2xl p-8 text-center "
              >
                <CounterStat start={0} end={s.value} suffix={s.prifix} className="text-5xl"/>
                <div className="text-sm text-slate-300 font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CtaBanner />

      <ContactSection />
    </div>
  );
}
