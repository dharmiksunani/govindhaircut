import { motion } from "motion/react";
import { Scissors, Zap, Frame, Wind, ShieldCheck, Heart, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const allServices = [
  {
    category: "HAIRCUT & STYLING",
    items: [
      { name: "Executive Haircut", price: "₹600", desc: "Consultation, precision cut, wash & blow dry styling.", duration: "45 mins" },
      { name: "Buzz Cut & Taper", price: "₹400", desc: "Single grade clipper cut with professional taper edges.", duration: "30 mins" },
      { name: "Advanced Style T-Form", price: "₹800", desc: "Long hair sculpting and creative fashion cutting.", duration: "60 mins" },
    ]
  },
  {
    category: "BEARD & GROOMING",
    items: [
      { name: "Signature Beard Sculpt", price: "₹400", desc: "Hot towel, line definition, and conditioning treatment.", duration: "30 mins" },
      { name: "Classic Straight Shave", price: "₹500", desc: "Traditional razor shave with multi-layered hot towel service.", duration: "45 mins" },
      { name: "Beard Grey Coverage", price: "₹350", desc: "Subtle grey blending for a naturally younger shadow.", duration: "20 mins" },
    ]
  },
  {
    category: "PREMIUM PACKAGES",
    items: [
      { name: "The Total Look", price: "₹900", desc: "Haircut, Beard style, and Scalp massage combo.", duration: "75 mins" },
      { name: "Gentleman's Ritual", price: "₹1200", desc: "The Total Look + Charcoal Facial Grooming.", duration: "100 mins" },
      { name: "Wedding Grooming", price: "Custom", desc: "Complete consultation and day-of grooming for the groom.", duration: "Variable" },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-40 pb-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <span className="text-gold font-light tracking-[0.5em] uppercase text-[0.6rem] mb-6 block">My Services</span>
          <h1 className="text-4xl md:text-6xl font-display font-normal text-white mb-8 uppercase tracking-[0.2em] text-gold-gradient">The Menu</h1>
          <p className="text-white/30 text-sm md:text-md leading-loose font-light tracking-[0.2em] uppercase">
            Professional grooming services tailored just for you. I use high-quality tools and products to ensure you get the best result.
          </p>
        </div>

        <div className="space-y-40">
          {allServices.map((cat, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-10 mb-16">
                 <h2 className="text-[0.65rem] md:text-[0.75rem] font-light text-gold tracking-[0.4em] whitespace-nowrap uppercase">{cat.category}</h2>
                 <div className="h-px bg-white/[0.05] w-full" />
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                  >
                    <div className="glass border-white/[0.03] h-full hover:border-gold/20 transition-all duration-1000 group">
                       <div className="p-10">
                          <div className="flex justify-between items-start mb-8">
                             <div className="w-10 h-10 border border-white/5 flex items-center justify-center group-hover:border-gold/30 transition-all duration-700">
                                <Scissors size={16} strokeWidth={1} className="text-gold/40 group-hover:text-gold" />
                             </div>
                             <span className="text-gold/60 font-light text-sm tracking-widest italic">{item.price}</span>
                          </div>
                          <h3 className="text-[0.75rem] font-light text-white mb-6 uppercase tracking-[0.3em] group-hover:text-gold transition-colors">{item.name}</h3>
                          <p className="text-white/20 text-[0.6rem] mb-10 leading-loose tracking-widest uppercase font-light">{item.desc}</p>
                          <div className="flex items-center gap-3 text-[0.5rem] uppercase tracking-[0.3em] text-white/10 border-t border-white/[0.03] pt-8">
                             <Clock size={12} strokeWidth={1} className="text-gold/30" />
                             <span>{item.duration} approx</span>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Home Service Banner */}
        <section className="mt-40">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="relative overflow-hidden aspect-[16/6] min-h-[350px] flex items-center border border-white/[0.03]"
           >
              <div className="absolute inset-0 bg-cover bg-fixed opacity-40 grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2052&auto=format&fit=crop')" }}>
                 <div className="absolute inset-0 bg-black/60" />
              </div>
              <div className="relative z-10 p-12 md:p-24 w-full flex flex-col md:flex-row justify-between items-center gap-12">
                 <div className="max-w-xl text-center md:text-left">
                    <span className="text-gold/60 text-[0.55rem] tracking-[0.5em] uppercase mb-4 block font-light">Haircut At Your Home</span>
                    <h2 className="text-3xl md:text-4xl font-display font-normal text-white mb-6 tracking-[0.2em] uppercase leading-tight">Home <br />Service</h2>
                    <p className="text-white/30 text-[0.65rem] tracking-[0.3em] uppercase leading-loose font-light">I bring the premium barber shop experience to your home. Enjoy a high-quality haircut without leaving your room.</p>
                 </div>
                 <Link to="/booking">
                   <Button variant="outline" className="border-gold/30 hover:border-gold text-gold/60 hover:text-gold font-light uppercase tracking-[0.4em] rounded-none px-12 py-7 text-[0.65rem] transition-all duration-1000 bg-transparent">
                      Book Home Visit
                   </Button>
                 </Link>
              </div>
           </motion.div>
        </section>
      </div>
    </div>
  );
}
