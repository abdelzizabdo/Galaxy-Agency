import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Film } from 'lucide-react';

const navLinks = [
{ label: 'Home', href: '#hero' },
{ label: 'About', href: '#about' },
{ label: 'Portfolio', href: '#portfolio' },
{ label: 'Skills', href: '#skills' },
{ label: 'Testimonials', href: '#testimonials' },
{ label: 'Contact', href: '#contact' }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      'bg-background/80 backdrop-blur-xl border-b border-border/50' :
      'bg-transparent'}`
      }>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2 group">
            <Film className="w-6 h-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-heading font-bold text-lg tracking-tight text-[#f2f2f2]"> Abdelaziz <span className="text-primary">Hussien</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
              
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </a>
            )}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-heading font-semibold hover:opacity-90 transition-all glow-purple-sm">
            
            Hire Me
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2">
            
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden">
          
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-body text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors">
              
                  {link.label}
                </a>
            )}
              <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-heading font-semibold text-center">
              
                Hire Me
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}