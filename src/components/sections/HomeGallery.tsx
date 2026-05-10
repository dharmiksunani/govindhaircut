import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const galleryImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431247-f5091e38e1b6?q=80&w=1976&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582733535794-6729584d9f67?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532710093739-9470acffcf03?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2052&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=2072&auto=format&fit=crop",
];

export default function HomeGallery() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Visual Showcase</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-wider">THE GALLERY</h2>
          </div>
          <Button asChild variant="link" className="text-gold hover:text-gold-dark p-0 h-auto font-bold tracking-[0.2em] uppercase text-xs">
            <Link to="/gallery">Explore Full Portfolio →</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden bg-charcoal"
            >
              <img 
                src={img} 
                alt="Haircut Style" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
