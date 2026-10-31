
import { motion } from "motion/react";
import { SectionHeading, StatCard } from "./ui";
import { cards } from "../constant/chooseCards";
import { cn } from "../lib/cn";

export default function WhyChooseUsSection() {
  

  return (
    <section id="why-us" className="py-20 lg:py-28  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reusable Section Heading Sub-Component */}
        <SectionHeading
          tag="Why choose us?"
          title="Why we're your best choice"
          subtitle="We understand client needs and combine structural expertise, interior finishing skill and MEP know-how to deliver high-quality buildings within time and budget, every time."
          className="mb-16"
        />

        {/* 3x2 Grid with Exact Same Height and Width for Every Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            cards.map((card, index) => (
              <div className={cn("flex gap-6 flex-col-reverse", (index + 1) % 2 != 0 && "lg:flex-col")}>
                <StatCard
                  key={card.title}
                  icon={card.icon!}
                  title={card.title!}
                  description={card.description!}
                  stat={card.stat!}
                  label={card.label!}
                  index={index}
                />
                <motion.div
                key={card.image}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                // whileHover={{ y: -6 }}
                className="h-[360px] sm:h-[380px] w-full rounded-2xl overflow-hidden relative group bg-slate-100"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-secondary/15 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>
              </div>
            ))
          }
          {/* {cards.map((item, index) => {
            if (item.type === "stat") {
              return (
                <StatCard
                  key={item.title}
                  icon={item.icon!}
                  title={item.title!}
                  description={item.description!}
                  stat={item.stat!}
                  label={item.label!}
                  index={index}
                />
              );
            }

            return (
              <motion.div
                key={item.image}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                // whileHover={{ y: -6 }}
                className="h-[360px] sm:h-[380px] w-full rounded-2xl overflow-hidden relative group bg-slate-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-secondary/15 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
}
