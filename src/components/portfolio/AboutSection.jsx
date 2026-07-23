import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { Award, Clock, Users, Briefcase } from 'lucide-react';
const PORTRAIT = "/zizo.jpeg";

const stats = [
  { icon: Briefcase, value: '4+', label: 'Years Experience' },
  { icon: Award, value: '200+', label: 'Projects Delivered' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Clock, value: '24h', label: 'Avg Turnaround' },
];

const timeline = [
  { year: '2022', title: 'Freelance Video Editor', desc: 'Produced over 250 high-performing videos for clients across Egypt and the Gulf. Specialized in managing social content (Reels & Stories) tailored to dynamic brand visions..' },
  { year: '2025', title: 'Ministry of Communications (MCIT)', desc: 'Joined project-based collaborations with the Ministry, editing high-quality video content and cinematic post-production for official national projects.' },
  { year: '2025', title: 'Senior Video Editor | 10XMEDIA', desc: 'Led the creation of high-retention promotional videos, collaborating with New Media Academy and Knowledge Creators (صناع المعرفة) to dominate Instagram and YouTube feeds.' },
  { year: '2026', title: 'Senior Video Editor | Swapop, Inc.', desc: 'Served as the primary Video Editor, driving the companys visual media strategy. Animated the official mobile application and engineered high-impact, AI-driven promotional videos that accelerated marketing campaigns and boosted the companys global brand presence.' },
  { year: '2026', title: 'End-to-End Video Producer & Editor | Ezr3ly', desc: 'Led all production phases—including storyboarding, filming, post-production, and color grading—to deliver tailored visual content' },
];

export default function AboutSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm font-medium tracking-widest uppercase">About Me</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-3 text-foreground">
            The Story Behind the Cuts
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mb-10">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl blur-sm" />
              <img
                src={PORTRAIT}
                alt="Video editor portrait"
                className="relative w-full aspect-[3/4] object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="font-heading font-bold text-xl text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-body mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Bio & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
              I don't just cut videos; I build visual experiences that keep audiences hooked.
              As a video editor and post-production specialist, I blend technical precision with creative intuition.
              From dynamic, high-retention social content to polished commercial campaigns, every cut, sound design element,
              and color grade is engineered to drive results and capture attention.
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-10">
              From high-energy social media content to polished commercial campaigns, I focus on precise pacing, seamless sound design,
              and world-class color grading to turn your raw footage into visual assets that drive results.
            </p>

            {/* Timeline */}
            <div className="relative pl-8 border-l border-border">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />
                  <span className="text-primary font-heading font-bold text-sm">{item.year}</span>
                  <h4 className="font-heading font-bold text-foreground mt-1">{item.title}</h4>
                  <p className="font-body text-sm text-muted-foreground mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}