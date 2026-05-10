import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HomeAbout() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden thin-border">
             <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" 
              alt="Govind" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 w-1/2 aspect-square glass-dark p-8 hidden md:flex flex-col justify-end border-white/5">
             <span className="font-display text-2xl font-light text-gold-gradient leading-relaxed tracking-[0.2em]">EST. <br />MMXIX</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gold font-light tracking-[0.4em] uppercase text-[0.6rem] mb-6 block">Your Personal Stylist</span>
          <h2 className="text-3xl md:text-5xl font-display font-normal mb-10 text-white tracking-[0.1em] uppercase">
            Style That <br />
            Defines <span className="text-gold-gradient italic">You</span>
          </h2>
          <div className="space-y-6 text-white/40 text-sm md:text-md font-light leading-loose tracking-wide mb-12">
            <p>
              I am Govind, and I love making people look their best. I've spent years learning how to give the perfect haircut and style that matches your face and personality.
            </p>
            <p>
              I work with the busiest people in Bangalore who want a great haircut without wastes time in a salon. I come to you, so you can relax and get a premium service at home.
            </p>
          </div>
          <Button asChild variant="outline" className="glass border-white/5 text-gold hover:border-gold/50 rounded-none px-12 h-12 uppercase tracking-[0.3em] font-light text-[0.65rem] transition-all duration-700">
            <Link to="/about">About Me</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
