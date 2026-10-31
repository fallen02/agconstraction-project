import type { Route } from "./+types/services";
import { motion } from "motion/react";
import {
  Building2,
  DraftingCompass,
  HardHat,
  Ruler,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading, Button } from "../../components/ui";
import PageHero from "../../components/PageHero";
import WhyChooseUsSection from "../../components/WhyChooseUsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CtaBanner from "../../components/CtaBanner";
import ContactSection from "../../components/ContactSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Construction Services - BuiltUp Construction Inc." },
    {
      name: "description",
      content:
        "Comprehensive construction, civil engineering, BIM 3D architectural modeling, and general contracting services.",
    },
  ];
}

const detailedServices = [
  {
    icon: Building2,
    title: "Commercial Building Construction",
    subtitle: "High-rise towers, business centers & industrial plants",
    description:
      "We build resilient, state-of-the-art commercial developments designed to meet rigorous structural standards and future workspace demands.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: DraftingCompass,
    title: "Architectural & Concept Design",
    subtitle: "Turnkey planning, aesthetic innovation & permits",
    description:
      "From preliminary sketches to code-compliant architectural drafts, our award-winning design team transforms ambitious visions into blueprints.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Ruler,
    title: "Civil & Structural Engineering",
    subtitle: "Deep foundations, load analysis & seismic mitigation",
    description:
      "Our licensed engineers run thorough soil mechanics analysis, structural modeling, and environmental impact assessments on every project.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: HardHat,
    title: "On-Site Management & Safety",
    subtitle: "Critical path scheduling, zero-harm protocols & QA",
    description:
      "Experienced site superintendents supervise daily site operations, schedule tracking, and strict OSHA safety compliance from day one.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Layers,
    title: "3D BIM Digital Modeling",
    subtitle: "Conflict detection, 4D timeline simulation & cost control",
    description:
      "We implement digital twin BIM workflows that identify structural clashes prior to groundbreaking, reducing unexpected delays by 40%.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Sparkles,
    title: "Sustainable Green Building",
    subtitle: "LEED certification, solar integration & eco materials",
    description:
      "We prioritize energy efficiency, net-zero emissions, and environmentally conscious construction methods that cut long-term operational costs.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Our Services"
        breadcrumb="Services"
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Services Grid Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="OUR CAPABILITIES"
            title="Comprehensive construction & engineering services"
            subtitle="We deliver end-to-end design, project management, and general contracting solutions customized to your timeline and capital constraints."
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

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <CtaBanner />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
