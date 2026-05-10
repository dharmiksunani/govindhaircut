import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block py-1 pr-6 border-l border-gold text-gold text-[0.65rem] font-medium tracking-[0.4em] uppercase mb-10 pl-6">
              Best Home Barber in Bangalore
            </span>
            <h1 className="text-4xl md:text-8xl font-display font-normal leading-[1.05] mb-10 text-white tracking-widest uppercase">
              LOOK GREAT <br />
              <span className="text-gold-gradient font-light italic">FEEL CONFIDENT</span>
            </h1>
            <p className="text-md md:text-lg text-white/50 max-w-xl mb-14 font-sans leading-relaxed tracking-wide">
              Top-quality haircuts and beard styling brought straight to your doorstep. Save time and look your absolute best with Govind's expert grooming.
            </p>

            <div className="flex flex-wrap gap-6">
              <Button asChild size="lg" className="gold-gradient text-black font-medium uppercase tracking-[0.2em] rounded-none h-12 px-10 text-xs border-0">
                <Link to="/booking" className="flex items-center gap-2">
                  <Calendar size={14} />
                  Book Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass border-white/5 hover:border-gold/50 text-white font-light uppercase tracking-[0.2em] rounded-none h-12 px-10 text-xs transition-all duration-500">
                <a href="tel:+916287308665" className="flex items-center gap-3">
                  <Phone size={14} />
                  Talk to Me
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines and text */}
      <div className="absolute right-10 bottom-20 hidden lg:flex flex-col items-center gap-10">
        <div className="h-40 w-px bg-gradient-to-t from-gold to-transparent" />
        <span className="vertical-rl rotate-180 text-[10px] tracking-[0.5em] font-medium text-white/30 uppercase whitespace-nowrap">
          BANGALORE • WHITEFIELD • MARATHAHALLI
        </span>
      </div>

      {/* Background Decorative Element */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" 
      />
    </section>
  );
}
