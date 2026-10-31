import type { Route } from "./+types/contact";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import ContactSection from "../../components/ContactSection";
import PageHero from "../../components/PageHero";
import FaqSection from "../../components/FaqSection";
import { SectionHeading } from "../../components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - BuiltUp Construction Inc." },
    {
      name: "description",
      content:
        "Get in touch with BuiltUp's estimating desk and master builders for consultations, bids, and site inspections.",
    },
  ];
}

const contactCards = [
  {
    icon: Phone,
    title: "Direct Phone Desk",
    line1: "+1 (800) 123-4567",
    line2: "+1 (800) 765-4321",
    sub: "Mon - Fri, 8am - 6pm EST",
  },
  {
    icon: Mail,
    title: "Email Inquiries",
    line1: "bids@builtup.com",
    line2: "contact@builtup.com",
    sub: "Responses within 24 business hours",
  },
  {
    icon: MapPin,
    title: "Corporate Headquarters",
    line1: "100 Skyline Blvd, Suite 400",
    line2: "New York, NY 10001",
    sub: "Visitor parking available on-site",
  },
  {
    icon: Clock,
    title: "Office Hours",
    line1: "Monday - Friday: 8am - 6pm",
    line2: "Saturday: 9am - 2pm",
    sub: "24/7 Emergency response line for active jobsites",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Contact Us"
        breadcrumb="Contact Us"
        image="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Contact Quick Details Bar */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="CONTACT US"
            title="We're ready to bring your vision into reality"
            subtitle="Reach out directly to our master builders, estimating engineers, and project managers."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-accent-blue border border-accent-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-secondary mb-2">
                    {card.title}
                  </h3>
                  <div className="text-sm font-semibold text-secondary">
                    {card.line1}
                  </div>
                  <div className="text-sm text-slate-500 mb-2">{card.line2}</div>
                  <div className="text-xs text-slate-400 font-medium">{card.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Form */}
      <ContactSection />

      {/* FAQ & Support Section */}
      <FaqSection />
    </div>
  );
}
