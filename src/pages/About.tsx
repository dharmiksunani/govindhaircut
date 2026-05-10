import { motion } from "motion/react";
import { Scissors, Award, Users, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "PRECISE CRAFTSMANSHIP",
    description: "Every cut is a result of years of training and a keen eye for detail. I never rush perfection.",
    icon: <Scissors className="text-gold w-6 h-6" />
  },
  {
    title: "PERSONALIZED EXPERIENCE",
    description: "I don't just cut hair; I listen to your style goals and consult on what best fits your face and lifestyle.",
    icon: <Users className="text-gold w-6 h-6" />
  },
  {
    title: "PREMIUM PRODUCTS",
    description: "Only the finest grooming products are used to ensure your hair and skin receive the luxury they deserve.",
    icon: <Star className="text-gold w-6 h-6" />
  }
];

export default function AboutPage() {
  return (
    <div className="pt-40 pb-32 bg-black">
      {/* Intro Section */}
      <section className="container mx-auto px-6 mb-40">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold font-light tracking-[0.6em] uppercase text-[0.6rem] mb-6 block">My Story</span>
            <h1 className="text-4xl md:text-7xl font-display font-normal text-white mb-10 tracking-[0.2em] uppercase leading-[1.1]">
              HELPING YOU <br />
              LOOK <span className="text-gold-gradient italic">AMAZING</span>
            </h1>
            <p className="text-white/40 text-[0.75rem] md:text-[0.85rem] mb-8 leading-loose tracking-widest uppercase font-light">
              I'm Govind, and I believe a great haircut can change how you feel. I am a professional barber in Bangalore who brings the salon experience to your home.
            </p>
            <p className="text-white/40 text-[0.75rem] md:text-[0.85rem] mb-12 leading-loose tracking-widest uppercase font-light">
              I started my journey to help busy people look their best without any stress. My focus is always on detail, quality, and making sure you are 100% happy with your fresh look.
            </p>
            <div className="flex items-center gap-6 py-10 border-y border-white/[0.05] mb-12">
               <div className="flex -space-x-3">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="w-10 h-10 border border-black ring-2 ring-black bg-black flex items-center justify-center overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Client" className="w-full h-full object-cover grayscale opacity-50" />
                   </div>
                 ))}
               </div>
               <p className="text-[0.55rem] tracking-[0.4em] text-white/20 uppercase font-light">Trusted by Happy Clients Across Bangalore</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-2 gap-6 relative"
          >
             <div className="aspect-[3/5] border border-white/[0.03] overflow-hidden mt-16 group">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop" alt="The Ritual" className="w-full h-full object-cover grayscale group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100" />
             </div>
             <div className="aspect-[3/5] border border-white/[0.03] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" alt="The Instruments" className="w-full h-full object-cover grayscale group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-gold/10 rounded-full animate-spin-slow opacity-20 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white/[0.02] py-40 mb-40 border-y border-white/[0.03]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <h2 className="text-2xl md:text-4xl font-display font-normal text-white mb-8 tracking-[0.4em] uppercase">My Work Way</h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-30" />
          </div>

          <div className="grid md:grid-cols-3 gap-20">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="text-center group"
              >
                <div className="w-14 h-14 border border-white/[0.05] flex items-center justify-center mx-auto mb-10 group-hover:border-gold/30 transition-all duration-700">
                  <Scissors size={18} strokeWidth={1} className="text-gold/40 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-[0.65rem] font-light text-white mb-6 tracking-[0.4em] uppercase group-hover:text-gold transition-colors">{v.title}</h3>
                <p className="text-white/20 leading-relaxed text-[0.6rem] tracking-widest uppercase font-light">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="container mx-auto px-6 mb-40">
         <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
               <h2 className="text-2xl md:text-4xl font-display font-normal text-white mb-12 tracking-[0.3em] uppercase leading-tight">Technical <br /><span className="text-gold italic">Domain</span></h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {[
                    "Architectural Cuts",
                    "Geometric Fades",
                    "Razor Sculpting",
                    "Tonal Pigmentation",
                    "Follice Rituals",
                    "Event Curation"
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-6 group border-b border-white/[0.03] pb-4">
                       <span className="text-gold/50 font-light text-[0.55rem] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-700">0{i+1}</span>
                       <span className="text-white/40 font-light uppercase tracking-[0.2em] text-[0.65rem] group-hover:text-white transition-colors">{skill}</span>
                    </div>
                  ))}
               </div>
               <div className="mt-16">
                  <Link to="/booking">
                    <Button variant="outline" className="border-white/10 hover:border-gold/50 text-white/50 hover:text-gold font-light uppercase tracking-[0.4em] rounded-none px-12 py-7 text-[0.65rem] transition-all duration-1000 bg-transparent">
                      Enter the Ritual
                    </Button>
                  </Link>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 aspect-square border border-white/[0.05] p-10 flex items-center justify-center relative translate-x-4 translate-y-4"
            >
               <div className="absolute inset-0 border border-gold/10 -translate-x-8 -translate-y-8 pointer-events-none" />
               <div className="w-full h-full overflow-hidden grayscale relative group">
                  <img src="https://images.unsplash.com/photo-1599351431247-f5091e38e1b6?q=80&w=1976&auto=format&fit=crop" alt="The Mastery" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
               </div>
               
               <div className="absolute top-10 right-10 glass border-white/[0.05] p-6 text-center transform hover:-translate-y-2 transition-transform duration-700">
                  <Award size={20} strokeWidth={1} className="mx-auto mb-4 text-gold/60" />
                  <span className="text-[0.45rem] tracking-[0.3em] uppercase block text-white/40 mb-1">Curation</span>
                  <span className="text-[0.65rem] text-gold/80 tracking-[0.2em] uppercase font-light whitespace-nowrap">Expert Artisan</span>
               </div>
            </motion.div>
         </div>
      </section>
    </div>
  );
}
