import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { Monitor, Palette, Film, Volume2, Sparkles, Layers, Handshake, Subtitles } from 'lucide-react';

const software = [
  { name: 'Premiere Pro', abbr: 'Pr' },
  { name: 'After Effects', abbr: 'Ae' },
  { name: 'DaVinci Resolve', abbr: 'Dv' },
  { name: 'Photoshop', abbr: 'Ps' },
  { name: 'CapCut', abbr: 'CC' },
];

const skills = [
  { name: 'Motion Graphics', percentage: 92, icon: Sparkles },
  { name: 'Color Grading', percentage: 95, icon: Palette },
  { name: 'Sound Design & Mixing', percentage: 88, icon: Volume2 },
  { name: 'Pacing & Storytelling', percentage: 97, icon: Film },
  { name: 'VFX / Compositing', percentage: 85, icon: Layers },
  { name: 'Multi-Platform Delivery', percentage: 90, icon: Monitor },
  { name: 'Subtitling & Captions', percentage: 92, icon: Subtitles },
  { name: 'Client Collaboration', percentage: 98, icon: Handshake },
];

function AnimatedBar({ percentage, isVisible, delay }) {
  return (
    <div className="h-2 rounded-full bg-secondary/80 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
      />
    </div>
  );
}

export default function SkillsSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-secondary/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm font-medium tracking-widest uppercase">Expertise</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-3 text-foreground">
            Skills & Software
          </h2>
        </motion.div>

        {/* Software badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {software.map((sw, i) => (
            <motion.div
              key={sw.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:glow-purple-sm transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-heading font-bold text-sm text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {sw.abbr}
              </div>
              <span className="font-body text-sm text-foreground font-medium">{sw.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills bars */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <skill.icon className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm font-medium text-foreground">{skill.name}</span>
                </div>
                <span className="font-heading font-bold text-sm text-primary">{skill.percentage}%</span>
              </div>
              <AnimatedBar percentage={skill.percentage} isVisible={isVisible} delay={0.5 + i * 0.1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}