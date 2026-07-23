import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { Play, ExternalLink, X } from 'lucide-react';

const categories = ['All', 'Medical', 'Motion Graphic', 'Educational Video', 'Commercial', 'Social Media', 'Brand'];

const projects = [
  {
    id: 1,
    title: 'هوس مشروبات الطاقة وتأثيرها على الأسنان',
    category: 'Medical',
    description: 'Transforming medical raw footage into a highly professional visual experience. This project balances precise medical content with engaging post-production techniques. I integrated explanatory animations, relevant imagery, and smooth, innovative transitions, combined with cinematic color correction to deliver a polished, clear, and impactful healthcare video.',
    tags: ['Color Grading', 'Transitions', 'Sound Design', 'Sound effect'],
    thumbnail: '/804- Abx - Dr.Sara - Nma Life -هوس مشروبات الطاقة وتأثيرها على الأسنان  Aren(1).mp4#t=1',
    video: "/804- Abx - Dr.Sara - Nma Life -هوس مشروبات الطاقة وتأثيرها على الأسنان  Aren(1).mp4"
  },
  {
    id: 8,
    title: 'Ezr3ly',
    category: 'Brand',
    description: 'Vertical format music video optimized for Instagram Reels with trend-driven editing and effects.',
    tags: ['Reels', 'Effects', 'Music Sync', 'Storyboarding & Scripting', 'Camera Operation', 'Lighting & Audio Setup', 'Direction', 'Color Grading', 'Video Editing'],
    thumbnail: '/Ezr3ly1.mp4#t=1',
    video: 'Ezr3ly1.mp4'
  },
  {
    id: 2,
    title: 'منع طلاء الأظافر ',
    category: 'Medical',
    description: 'Transforming medical raw footage into a highly professional visual experience. This project balances precise medical content with engaging post-production techniques. I integrated explanatory animations, relevant imagery, and smooth, innovative transitions, combined with cinematic color correction to deliver a polished, clear, and impactful healthcare video.',
    tags: ['Color Grading', 'Transitions', 'Sound Design', 'Sound effects'],
    thumbnail: '/830- ABX - Dr.Farida - NMA LIFE - منع طلاء الأظافر AR-EN.mp4#t=5',
    video: '/830- ABX - Dr.Farida - NMA LIFE - منع طلاء الأظافر AR-EN.mp4'
  },
  {
    id: 3,
    title: 'Animated video for Swapop',
    category: 'Motion Graphic',
    description: 'An animated App Explainer video created for Swapop, a US-based company. This project showcases the application’s core features and user interface through dynamic and engaging motion design. I transformed complex user flows into a seamless, visually captivating experience, integrating smart transitions and slick animations that elevate the brands digital identity to meet international standards.',
    tags: ['Slow Motion', 'Product Shots', 'Grading'],
    thumbnail: '/animation.mp4#t=40',
    video: '/animation.mp4'
  },
  {
    id: 4,
    title: 'video produced for (MCIT)',
    category: 'Educational Video',
    description: 'An educational and awareness video produced for the Egyptian Ministry of Communications and Information Technology (MCIT). The project aims to simplify digital and educational concepts into an engaging visual format. I integrated motion graphics, explanatory animations, and seamless transitions to ensure a clear information flow while adhering to the Ministrys official visual identity, delivering high-quality, impactful educational content.',
    tags: ['Color Grading', 'Transitions', 'Sound Design', 'Sound effects'],
    thumbnail: '/a_course_in_cooperation_with_the_ministry_of_communications_and_information_technology_v1 (1080p).mp4#t=1',
    video: '/a_course_in_cooperation_with_the_ministry_of_communications_and_information_technology_v1 (1080p).mp4'
  },
  {
    id: 5,
    title: 'bet el gomla',
    category: 'Commercial',
    description: 'A promotional and marketing video created for Bayt El Gomla. The project highlights the shopping experience, product variety, and competitive pricing using a high-energy, fast-paced visual style. I implemented dynamic transitions, vibrant color correction to emphasize product quality, and engaging visual/audio effects designed to drive customer engagement and boost sales.',
    tags: ['Color Grading', 'Transitions', 'Sound Design', 'Sound effects'],
    thumbnail: '/bet el gomla.mp4#t=7',
    video: '/bet el gomla.mp4'
  },
  {
    id: 6,
    title: 'Shot Egypt',
    category: 'Social Media',
    description: 'Horizontal format music video optimized for Instagram Reels with trend-driven editing and effects.',
    tags: ['Reels', 'Effects', 'Music Sync'],
    thumbnail: '/ShotEgypt.mp4#t=5',
    video: '/ShotEgypt.mp4'
  },
  {
    id: 7,
    title: '2me',
    category: 'Social Media',
    description: 'Vertical format music video optimized for Instagram Reels with trend-driven editing and effects.',
    tags: ['Reels', 'Effects', 'Music Sync'],
    thumbnail: '/2Me.mp4#t=1',
    video: '/2Me.mp4'
  },
  
];

function ProjectCard({ project, onClick }) {
  // تريكة صايعة: لو الـ thumbnail رابط صور من برة، اعرضه كـ صورة.. لو فيديو، اعرضه كـ فيديو متقطع
  const isVideoThumbnail = project.thumbnail.endsWith('.mp4') || project.thumbnail.includes('.mp4#t=');

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick(project)}
      className="group relative cursor-pointer rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        {isVideoThumbnail ? (
          <video 
            src={project.thumbnail} 
            className="w-full h-full object-contian transition-transform duration-700 group-hover:scale-110"
            muted
            playsInline
            preload="metadata"
          />
        ) : (
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-contian transition-transform duration-700 group-hover:scale-110"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center glow-purple transform scale-75 group-hover:scale-100 transition-transform duration-500">
            <Play className="w-6 h-6 text-primary-foreground fill-current ml-0.5" />
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-body font-medium rounded-full bg-background/70 backdrop-blur-sm text-foreground border border-border/30">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground mt-2 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-body px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [ref, isVisible] = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm font-medium tracking-widest uppercase">Portfolio</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-3 text-foreground">
            Selected Work
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            A curated collection of projects spanning cinematic films, commercial campaigns,
            and dynamic digital content.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-primary text-primary-foreground glow-purple-sm'
                  : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl bg-card rounded-2xl border border-border overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="aspect-video relative bg-black">
                {selectedProject.video ? (
                  <video
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  >
                    <source src={selectedProject.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    <img
                      src={selectedProject.thumbnail}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center glow-purple">
                        <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-6">
                <span className="text-primary text-xs font-body font-medium tracking-widest uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground mt-1">
                  {selectedProject.title}
                </h3>
                <p className="font-body text-muted-foreground mt-3">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}