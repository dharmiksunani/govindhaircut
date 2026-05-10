import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageSquare, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="pt-40 pb-32 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-gold font-light tracking-[0.5em] uppercase text-[0.6rem] mb-6 block">Have a Question?</span>
          <h1 className="text-3xl md:text-5xl font-display font-normal text-white mb-8 tracking-[0.2em] uppercase text-gold-gradient">Contact Me</h1>
          <p className="text-white/30 leading-loose text-sm md:text-md font-light tracking-wide uppercase">
            Feel free to reach out if you have any questions about my services or want to talk about your next styling session.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="glass border-white/[0.03] group-hover:border-gold/20 transition-all duration-1000 text-center p-12 h-full flex flex-col justify-center">
              <div className="w-12 h-12 border border-gold/10 flex items-center justify-center mx-auto mb-8 transition-all duration-700 group-hover:border-gold/30">
                <Phone className="text-gold/40 w-5 h-5 group-hover:text-gold" strokeWidth={1} />
              </div>
              <h3 className="text-white font-display text-[0.65rem] font-light mb-4 tracking-[0.3em] uppercase">Vocal Link</h3>
              <p className="text-white/20 text-[0.55rem] mb-8 uppercase tracking-[0.2em]">Available 09:00 — 21:00</p>
              <a href="tel:+916287308665" className="text-gold/60 font-light text-sm hover:text-gold italic tracking-widest">+91 6287308665</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <div className="glass border-white/[0.03] group-hover:border-gold/20 transition-all duration-1000 text-center p-12 h-full flex flex-col justify-center">
              <div className="w-12 h-12 border border-gold/10 flex items-center justify-center mx-auto mb-8 transition-all duration-700 group-hover:border-gold/30">
                <MessageSquare className="text-gold/40 w-5 h-5 group-hover:text-gold" strokeWidth={1} />
              </div>
              <h3 className="text-white font-display text-[0.65rem] font-light mb-4 tracking-[0.3em] uppercase">Digital Chat</h3>
              <p className="text-white/20 text-[0.55rem] mb-8 uppercase tracking-[0.2em]">Instant Resonance</p>
              <a href="https://wa.me/916287308665" target="_blank" rel="noreferrer" className="text-gold/60 font-light text-sm hover:text-gold italic tracking-widest uppercase">Chat with Govind</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="glass border-white/[0.03] group-hover:border-gold/20 transition-all duration-1000 text-center p-12 h-full flex flex-col justify-center">
              <div className="w-12 h-12 border border-gold/10 flex items-center justify-center mx-auto mb-8 transition-all duration-700 group-hover:border-gold/30">
                <Mail className="text-gold/40 w-5 h-5 group-hover:text-gold" strokeWidth={1} />
              </div>
              <h3 className="text-white font-display text-[0.65rem] font-light mb-4 tracking-[0.3em] uppercase">Postal Ritual</h3>
              <p className="text-white/20 text-[0.55rem] mb-8 uppercase tracking-[0.2em]">Curation Inquiries</p>
              <a href="mailto:niyaljohn@gmail.com" className="text-gold/60 font-light text-[0.65rem] hover:text-gold italic tracking-widest break-all uppercase">niyaljohn@gmail.com</a>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-normal text-white mb-10 tracking-[0.2em] uppercase text-gold-gradient">Domain Presence</h2>
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 border border-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={12} strokeWidth={1} className="text-gold/40" />
                </div>
                <div>
                   <h4 className="text-white/60 font-light tracking-[0.3em] uppercase text-[0.6rem] mb-3">Service Orbit</h4>
                   <p className="text-white/30 leading-loose text-xs font-light tracking-widest uppercase max-w-md">
                     Whitefield, Marathahalli, ITPL, Indiranagar, and the refined residential sanctuaries of East Bangalore.
                   </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 border border-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock size={12} strokeWidth={1} className="text-gold/40" />
                </div>
                <div>
                   <h4 className="text-white/60 font-light tracking-[0.3em] uppercase text-[0.6rem] mb-3">Temporal Availability</h4>
                   <div className="text-white/30 leading-[2.5] text-[0.65rem] font-light tracking-[0.2em] uppercase">
                     Monday — Saturday: 10:00 — 21:00<br />
                     Sunday: 10:00 — 18:00<br />
                     <span className="italic text-[0.55rem] opacity-50">*Off-hour rituals available upon prior arrangement.</span>
                   </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
               <a href="#" className="w-10 h-10 glass border-white/5 flex items-center justify-center hover:border-gold/30 transition-all duration-700">
                  <Instagram size={14} strokeWidth={1} className="text-white/30 hover:text-gold" />
               </a>
               <a href="#" className="w-10 h-10 glass border-white/5 flex items-center justify-center hover:border-gold/30 transition-all duration-700">
                  <Facebook size={14} strokeWidth={1} className="text-white/30 hover:text-gold" />
               </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden thin-border grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 aspect-video lg:aspect-auto lg:h-[450px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.782869502931!2d77.7289569!3d12.9718915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f9fc8461db%3A0xc3f34f0c4391e4a!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715340000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
