import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_100%)] opacity-[0.03] scale-150 pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           className="max-w-5xl mx-auto glass p-12 md:p-24 relative overflow-hidden"
        >
          {/* Subtle thin corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-[0.5px] border-l-[0.5px] border-gold/30" />
          <div className="absolute top-0 right-0 w-24 h-24 border-t-[0.5px] border-r-[0.5px] border-gold/30" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-[0.5px] border-l-[0.5px] border-gold/30" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-[0.5px] border-r-[0.5px] border-gold/30" />

          <span className="text-gold font-light tracking-[0.5em] uppercase text-[0.6rem] mb-10 block">Available For Home Booking</span>
          <h2 className="text-3xl md:text-7xl font-display font-normal mb-10 text-white tracking-[0.2em] leading-tight uppercase">
            Need a <br />
            New <span className="text-gold-gradient italic">Style?</span>
          </h2>
          <p className="text-white/30 text-sm md:text-md mb-14 max-w-xl mx-auto font-light leading-loose tracking-wide uppercase">
            Stop waiting in long salon lines. Book your slot now and get a premium haircut in the comfort of your own home.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <Button asChild size="lg" className="gold-gradient text-black font-medium uppercase tracking-[0.3em] rounded-none px-14 h-12 text-[0.65rem] border-0 outline-none">
              <Link to="/booking">Book Your Slot</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass border-white/5 text-white hover:border-gold/50 font-light uppercase tracking-[0.3em] rounded-none px-14 h-12 text-[0.65rem] transition-all duration-700">
              <Link to="/contact">Ask Anything</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
