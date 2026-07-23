import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdelaziz-hussian-240365231/?skipRedirect=true', icon: 'in' },
  { name: 'Whats app', href: 'https://wa.me/201285587095', icon: 'WH' },
  { name: 'Instagram', href: 'https://www.instagram.com/abdelazizabdo.688/', icon: 'IG' },
];

export default function ContactSection() {
  const [ref, isVisible] = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    toast.success('Message sent! I\'ll get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-secondary/20">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm font-medium tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-3 text-foreground">
            Let's Collaborate
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-0 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span- space-y-6"
          >
            {/* <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-card border-border/50 focus:border-primary h-12 font-body"
                />
              </div> */}
              {/* <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-card border-border/50 focus:border-primary h-12 font-body"
                />
              </div>
            </div> */}
            {/* <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">Subject</label>
              <Input
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Project type (e.g., YouTube editing, Commercial)"
                required
                className="bg-card border-border/50 focus:border-primary h-12 font-body"
              />
            </div> */}
            {/* <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">Message</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="bg-card border-border/50 focus:border-primary font-body resize-none"
              />
            </div> */}
            {/* <Button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold glow-purple-sm"
            >
              {sending ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
              )}
            </Button> */}
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">Email</p>
                  <p className="font-body text-sm text-foreground font-medium">abdelazizabdo660@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">Location</p>
                  <p className="font-body text-sm text-foreground font-medium">Alexandria, Egypt</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-body text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-4 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center font-heading font-bold text-xs text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        {social.icon}
                      </span>
                      <span className="font-body text-sm text-foreground">{social.name}</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}