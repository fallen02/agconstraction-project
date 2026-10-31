import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { SectionHeading, StarRating } from "./ui";
import { testimonials } from "../constant/testimonials";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      // loop: true,
      duration: 35,
      align: "start",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Testimonials"
          title="What Our Clients Say About Us"
          subtitle="Real projects for developers, hospitals, schools and homeowners who trust AG Constructions with their vision."
          className="mb-16"
        />

        <div
          className="overflow-hidden mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 cursor-grab "
          ref={emblaRef}
        >
          <div className="flex -ml-6 touch-pan-y">
            {testimonials.map((t, index) => (
              <div
                key={t.name}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 pl-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  // whileHover={{ y: -6 }}
                  className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between relative h-[310px] sm:h-[400px] w-full select-none"
                >
                  <div>
                    <StarRating count={5} className="mb-6" />

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-8">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-sm font-heading font-bold text-secondary">
                        {t.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2.5">
          {testimonials.map(
            (_, i) =>
              Math.floor(testimonials.length / 3) >= i - 1 && (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="p-1 cursor-pointer focus:outline-none"
                >
                  <motion.div
                    animate={{
                      width: selectedIndex === i ? 32 : 10,
                      backgroundColor:
                        selectedIndex === i ? "#ffb703" : "#cbd5e1",
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-2.5 rounded-full"
                  />
                </button>
              ),
          )}
        </div>
      </div>
    </section>
  );
}
