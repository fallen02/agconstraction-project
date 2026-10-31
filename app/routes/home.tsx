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
    { title: "AG Constructions - Best Construction Company in Guntur" },
    {
      name: "description",
      content:
        "From foundations to finishing, we build industrial, commercial and residential spaces with quality first and safety always.",
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
