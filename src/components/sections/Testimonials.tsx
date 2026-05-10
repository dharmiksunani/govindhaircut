import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "IT Professional",
    text: "Govind is easily the best hairstylist I've found in Whitefield. The attention to detail in his skin fades is unmatched. Highly professional and convenient home service.",
    rating: 5
  },
  {
    name: "Suresh Raman",
    role: "Business Owner",
    text: "The signature beard sculpting service changed my entire look. He understands face shapes perfectly. I trust him completely with my monthly grooming.",
    rating: 5
  },
  {
    name: "Vikram Dev",
    role: "Regular Client",
    text: "Top-tier service at my doorstep. No more waiting in salon queues. Govind brings the entire luxury salon experience home. Exceptional craftsmanship.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-black relative">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-gold font-light tracking-[0.5em] uppercase text-[0.6rem] mb-6 block">What My Clients Say</span>
          <h2 className="text-3xl md:text-5xl font-display font-normal text-white tracking-[0.2em] uppercase text-gold-gradient">Client Reviews</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              className="glass p-12 relative flex flex-col items-center text-center border-white/[0.03] hover:border-gold/20 duration-1000"
            >
              <Quote className="text-gold/10 w-8 h-8 mb-8" strokeWidth={1} />
              <div className="flex gap-1.5 mb-10">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={10} className="fill-gold/40 text-gold/40" />
                ))}
              </div>
              <p className="text-white/40 font-light italic mb-10 leading-[2] tracking-wide text-xs md:text-sm">"{item.text}"</p>
              <div className="mt-auto">
                <h4 className="font-display font-normal text-white/80 tracking-[0.2em] uppercase text-xs mb-3">{item.name}</h4>
                <div className="h-px w-8 bg-gold/30 mx-auto mb-3" />
                <p className="text-gold/40 text-[0.6rem] font-light uppercase tracking-[0.3em]">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
