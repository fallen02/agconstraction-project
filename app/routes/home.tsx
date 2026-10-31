import type { Route } from "./+types/home";
import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import ServicesSection from "../../components/ServicesSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection";
import ProjectsSection from "../../components/ProjectsSection";
import CtaBanner from "../../components/CtaBanner";
import TestimonialsSection from "../../components/TestimonialsSection";
import FaqSection from "../../components/FaqSection";
import ContactSection from "../../components/ContactSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BuiltUp - Premier Construction & Architecture" },
    {
      name: "description",
      content:
        "Building dreams with precision and excellence. Exceptional commercial, civil, and residential construction services.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Hero heroRef={{ current: null }} />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <CtaBanner />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
