import React from "react";
import { motion } from "motion/react";
import { Scissors, Zap, Frame, Wind, ShieldCheck, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "SIGNATURE CUT",
    description: "Precision hair cutting tailored to your head shape and hair type.",
    icon: <Scissors className="w-8 h-8" />,
    price: "From ₹500"
  },
  {
    title: "BEARD SCULPTING",
    description: "Expert beard shaping, lining, and hot towel treatment.",
    icon: <Zap className="w-8 h-8" />,
    price: "From ₹300"
  },
  {
    title: "MODERN STYLING",
    description: "Contemporary styling for any occasion, from office to party.",
    icon: <Frame className="w-8 h-8" />,
    price: "From ₹400"
  },
  {
    title: "HAIR COLORING",
    description: "Professional grey coverage or trend-forward global coloring.",
    icon: <Wind className="w-8 h-8" />,
    price: "From ₹800"
  },
  {
    title: "GROOMING FACIAL",
    description: "Rejuvenating facial treatments designed for men's skin.",
    icon: <ShieldCheck className="w-8 h-8" />,
    price: "From ₹600"
  },
  {
    title: "WEDDING PKG",
    description: "Complete grooming solution for the groom and groomsmen.",
    icon: <Heart className="w-8 h-8" />,
    price: "Custom Quote"
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-gold font-light tracking-[0.4em] uppercase text-[0.6rem] mb-6 block">Expert Care For Your Hair</span>
          <h2 className="text-3xl md:text-5xl font-display font-normal mb-8 text-white tracking-[0.15em] text-gold-gradient uppercase">Popular Services</h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-10" />
          <p className="text-white/40 text-sm md:text-md font-light tracking-wide leading-loose uppercase">
            Choose from my most requested grooming services. Each one is designed to give you a clean, sharp, and modern look.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group p-10 glass border-white/[0.03] hover:border-gold/30 transition-all duration-700 hover:shadow-[0_0_50px_-12px_rgba(212,175,55,0.1)]"
            >
              <div className="text-gold/60 mb-8 group-hover:text-gold transition-all duration-700 transform group-hover:-translate-y-1">
                {/* Reducing Icon size slightly for thin look */}
                {React.cloneElement(service.icon as React.ReactElement, { size: 24, strokeWidth: 1.2 })}
              </div>
              <h3 className="text-lg font-display font-normal mb-4 tracking-[0.15em] text-white/90 uppercase">{service.title}</h3>
              <p className="text-white/30 text-xs mb-8 leading-relaxed font-light tracking-wider uppercase">
                {service.description}
              </p>
              <div className="flex justify-between items-center border-t border-white/[0.05] pt-8">
                <span className="text-gold/70 font-light text-[0.65rem] tracking-[0.2em]">{service.price}</span>
                <Link to="/booking" className="text-[0.6rem] uppercase font-light tracking-[0.3em] text-white/30 hover:text-gold transition-colors">Book This Service →</Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="border-white/10 text-white/60 hover:border-gold hover:text-gold rounded-none px-12 h-14 uppercase tracking-widest font-bold">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
