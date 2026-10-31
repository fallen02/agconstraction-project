import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionTag, Button } from "./ui";
import { slides } from "../constant/hero";

interface HeroProps {
  heroRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Hero({ heroRef }: HeroProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 35,
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
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
    [emblaApi]
  );

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-180 lg:min-h-dvh flex items-center overflow-hidden bg-secondary text-white"
    >
      {/* Embla Carousel Viewport */}
      <div className="overflow-hidden w-full h-full cursor-grab" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative min-h-180 lg:min-h-dvh flex items-center justify-start pt-28 pb-20 select-none"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
                style={{ backgroundImage: `url('${slide.image}')` }}
              />

              {/* Dark Navy Gradient Overlay matching reference */}
              <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/85 to-secondary/30 pointer-events-none" />

              {/* Subtle blueprint pattern texture */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Main Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl lg:max-w-3xl">
                  {/* Eyebrow Tag using font-heading */}
                  <SectionTag variant="badge" className="mb-6 font-heading font-extrabold">
                    {slide.tag}
                  </SectionTag>

                  {/* Main Headline using font-heading */}
                  <h1 className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black text-white tracking-tight leading-[1.08] mb-6 break-words">
                    {slide.title} <br />
                    <span className="text-primary">{slide.highlight}</span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
                    {slide.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4" >
                    <Button to="/contact" variant="primary" size="lg" >
                      Get a Free Quote
                    </Button>

                    <Button to="/projects" variant="outline" size="lg">
                      Explore Projects
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Indicator Dots at the bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-3 pointer-events-auto" >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="p-1 cursor-pointer focus:outline-none"
          >
            <motion.div
              animate={{
                width: index === selectedIndex ? 32 : 10,
                backgroundColor:
                  index === selectedIndex
                    ? "#ffb703"
                    : "rgba(255, 255, 255, 0.4)",
              }}
              transition={{ duration: 0.3 }}
              className="h-2.5 rounded-full"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
