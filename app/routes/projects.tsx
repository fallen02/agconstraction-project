import type { Route } from "./+types/projects";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading, Button } from "../../components/ui";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import ContactSection from "../../components/ContactSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Featured Projects - BuiltUp Construction Inc." },
    {
      name: "description",
      content:
        "Explore our diverse portfolio of residential towers, commercial plazas, and green civic infrastructure.",
    },
  ];
}

const allProjects = [
  {
    name: "Aspen Heights Tower",
    category: "Residential",
    displayCategory: "Residential Tower",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    stats: "32 Floors / Finished 2025",
    description: "A luxury 32-story residential condominium featuring seismic-resistant framing and panoramic riverfront balconies.",
  },
  {
    name: "Vertex Business Plaza",
    category: "Commercial",
    displayCategory: "Commercial Complex",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    stats: "120,000 sq ft / Finished 2025",
    description: "Class-A corporate headquarters with advanced curtain-wall glass facade and integrated smart BMS automation.",
  },
  {
    name: "Green Horizon Condos",
    category: "Eco",
    displayCategory: "Eco Architecture",
    location: "Seattle, WA",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    stats: "LEED Platinum / Finished 2026",
    description: "Net-zero energy residential community powered by geothermal heat pumps and recycled mass timber frames.",
  },
  {
    name: "Metropolitan Tech Hub",
    category: "Commercial",
    displayCategory: "Civic & Industrial",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    stats: "Turnkey Design / Finished 2026",
    description: "Multipurpose tech incubator campus equipped with high-capacity fiber spine and open-span steel trusses.",
  },
  {
    name: "Skyline Harbor Residences",
    category: "Residential",
    displayCategory: "Luxury Waterfront",
    location: "Miami, FL",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80",
    stats: "45 Units / Finished 2024",
    description: "Coastal hurricane-resistant luxury villas incorporating marine-grade concrete alloys and solar roofs.",
  },
  {
    name: "Pinnacle Medical Center",
    category: "Commercial",
    displayCategory: "Healthcare Infrastructure",
    location: "Boston, MA",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    stats: "180,000 sq ft / Finished 2024",
    description: "State-of-the-art regional acute care facility with vibration-isolated surgical wings and backup power grids.",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Residential", "Commercial", "Eco"];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter(
          (p) => p.category.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Our Projects"
        breadcrumb="Projects"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Portfolio Header & Filter Grid */}
      <section className="py-20 lg:py-28 bg-accent-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="OUR PORTFOLIO"
            title="Explore our landmark developments"
            subtitle="Browse our completed commercial towers, luxury residential high-rises, and sustainable civic developments built across North America."
            className="mb-10"
          />

          {/* Filter Pills */}
          <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-heading font-bold transition-colors cursor-pointer ${
                    isActive
                      ? "bg-secondary text-white shadow-md"
                      : "bg-white text-slate-600 hover:text-secondary border border-slate-200"
                  }`}
                >
                  {cat} Projects
                </motion.button>
              );
            })}
          </div>

          {/* Projects Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.name}
                  initial={{ opacity: 0, scale: 0.88, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: 15 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-secondary/85 backdrop-blur-sm text-primary text-[10px] font-heading font-black uppercase tracking-wider px-3 py-1.5 rounded-md border border-white/10">
                      {project.displayCategory}
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
                        <span>{project.location}</span>
                        <span>{project.stats}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-secondary group-hover:text-primary transition-colors mb-3 leading-snug">
                        {project.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Button to="/contact" variant="primary" size="sm">
                        Consult on Similar Build
                      </Button>
                      <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-colors">
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
