import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Faris Obeidat',
    role: 'Certified Innovation Leader | Innovation Engineer | Entrepreneur',
    text: 'Abdelaziz is a talented and reliable video editor who contributed to building Swapop’s early marketing content with strong attention to detail and creative execution. He consistently delivered high-quality work, adapted quickly to feedback, and maintained a professional, collaborative approach throughout his time with us. I’d confidently recommend him to any team looking for a dedicated and skilled video editor.',
    rating: 5,
  },
  // {
  //   id: 2,
  //   name: 'James Rodriguez',
  //   role: 'YouTube Creator, 2.4M Subscribers',
  //   text: 'I\'ve worked with many editors, but none match this level of creativity and consistency. My retention rates jumped 40% after switching to EditCraft. The editing style perfectly captures my brand voice.',
  //   rating: 5,
  // },
  // {
  //   id: 3,
  //   name: 'Emily Chen',
  //   role: 'Marketing Manager, TechVault Inc.',
  //   text: 'Our product launch video exceeded every KPI. The cinematic quality, motion graphics, and sound design were all top-tier. A true professional who understands deadlines and brand identity.',
  //   rating: 5,
  // },
  // {
  //   id: 4,
  //   name: 'Alex Thompson',
  //   role: 'Independent Filmmaker',
  //   text: 'The documentary edit was masterful — seamless multi-cam sync, emotional pacing, and a soundtrack that gave me chills. This is someone who truly understands the art of storytelling through editing.',
  //   rating: 5,
  // },
];

export default function TestimonialsSection() {
  const [ref, isVisible] = useScrollReveal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (dir) => {
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm font-medium tracking-widest uppercase">Testimonials</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-3 text-foreground">
            Client Love
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-card border border-border/50 rounded-2xl p-8 md:p-12 overflow-hidden min-h-[280px] flex flex-col justify-center">
            {/* Quote decoration */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center relative z-10"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                <p className="font-body text-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto italic">
                  "{testimonials[current].text}"
                </p>

                <div className="mt-8">
                  <p className="font-heading font-bold text-foreground">{testimonials[current].name}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => goTo(-1)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-primary' : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(1)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}