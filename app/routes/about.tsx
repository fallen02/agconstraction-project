import type { Route } from "./+types/about";
import { motion } from "motion/react";
import { Compass, Eye, ShieldCheck, Play, Mail, Award } from "lucide-react";
import AboutSection from "../../components/AboutSection";
import PageHero from "../../components/PageHero";
import CtaBanner from "../../components/CtaBanner";
import ContactSection from "../../components/ContactSection";
import { SectionHeading, SectionTag, Button } from "../../components/ui";
import { pillars, stats, team } from "../../constant/about";
import { CounterStat } from "../../components/ui/CouterStat";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | AG Constructions" },
    {
      name: "description",
      content:
        "From foundations to finishing, we build industrial, commercial and residential spaces with quality first and safety always.",
    },
  ];
}


export default function AboutPage() {
  return (
    <div className="w-full">
      <PageHero
        title="About Us"
        breadcrumb="About Us"
        image="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1920&q=80"
      />

      <AboutSection />

      <section className="py-20 lg:py-28  relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B42_1px,transparent_1px),linear-gradient(to_bottom,#1E293B81_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >

              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3 bg-slate-100 border border-slate-200 group">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1000&q=80"
                  alt="Construction engineers overlooking skyscraper development"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 260 }}
                className="absolute -bottom-6 right-6 sm:bottom-6 sm:-right-6 bg-white text-secondary p-5 rounded-2xl shadow-2xl border border-slate-200 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-heading font-black">
                  <Award className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-3xl font-heading font-black text-secondary">
                    8<span className="text-primary">+</span>
                  </div>
                  <div className="text-xs font-heading font-bold text-slate-500 uppercase tracking-wider">
                    Specialty Works Offered
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <SectionTag>Our history</SectionTag>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary tracking-tight leading-tight mb-6">
                Built with care, <br />
                <span className="text-primary">Finished with pride</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-5">
                Led by Shaik Mowlana, a B.Tech Civil graduate with a PGP in Quantity Surveying from NICMAR, AG Constructions works closely with every client to understand their needs and deliver safe, high-quality buildings on time.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Our clients include Casa Fortune Developers, Rainbow Children Hospitals, Govt. Zilla Parishad School at Garapadu, Tri-pod Apartment, Invicta International School and RV Villa, projects that reflect our commitment to quality and safety. Today we are working on four ongoing projects.
              </p>
              <Button to="/services" variant="primary" size="md">
                Explore Our Services
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white overflow-hidden relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: idx * 0.12,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/*<section className="relative h-[360px] sm:h-[480px] w-full overflow-hidden flex items-center justify-center bg-secondary">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-secondary/60 backdrop-blur-[2px]" />

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary text-secondary flex items-center justify-center shadow-2xl relative cursor-pointer group mb-4"
            aria-label="Play company documentary video"
          >
            <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
            <Play className="w-8 h-8 fill-secondary text-secondary ml-1" />
          </motion.button>
          <span className="text-white font-heading font-bold text-lg sm:text-xl tracking-tight">
            Watch Our 25-Year Engineering Journey
          </span>
        </div>
      </section>*/}

      <section className="py-20 lg:py-28 relative  overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B42_1px,transparent_1px),linear-gradient(to_bottom,#1E293B81_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="what we do"
            title="Strong structure, Refined interiors, Reliable MEP, Safe execution"
            subtitle="From MS structural steel fabrication and brick work to plastering, tiling, painting, waterproofing, false ceilings, railing, grill and tensile fabric works, we cover the full scope of civil structural, interior finishing and MEP works."
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

      <CtaBanner />

      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="TEAM"
            title="Meet Our Team"
            subtitle="Meet the people who plan, build and finish every single project with quality and safety."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: idx * 0.12,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold text-secondary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center gap-3 text-slate-400">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary hover:text-secondary flex items-center justify-center transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary hover:text-secondary flex items-center justify-center transition-colors"
                      aria-label="Twitter Profile"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary hover:text-secondary flex items-center justify-center transition-colors"
                      aria-label="Email Address"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <ContactSection />
    </div>
  );
}
