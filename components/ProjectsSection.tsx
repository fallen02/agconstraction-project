import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading, Button } from "./ui";
import { projects } from "../constant/projects";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Eco"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === filter.toLowerCase(),
        );

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B42_1px,transparent_1px),linear-gradient(to_bottom,#1E293B81_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Our projects"
          title="Explore our diverse range of projects"
          subtitle="From hospital interiors to schools, apartments and villas, explore our work and our quality standards."
          className="mb-10"
        />

        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2 rounded-full text-xs font-heading font-bold transition-colors cursor-pointer ${
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

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.name}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 15 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="group relative rounded-2xl overflow-hidden h-[360px] sm:h-[380px] w-full bg-secondary shadow-md hover:shadow-2xl flex flex-col justify-end p-6 cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Card Bottom Details */}
                <div className="relative z-10 flex items-end justify-between gap-2">
                  <div>
                    <span className="text-xs font-heading font-bold text-primary tracking-wider uppercase block mb-1">
                      {project.displayCategory}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-primary transition-colors leading-snug">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      {project.stats}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="w-9 h-9 rounded-full bg-primary/20 group-hover:bg-primary text-primary group-hover:text-secondary flex items-center justify-center shrink-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center">
          <Button to="/projects" size="md">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
