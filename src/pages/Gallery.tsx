import { motion } from "motion/react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Scissors, Search } from "lucide-react";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop", title: "Classic Taper Fade", cat: "Haircut" },
  { src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2052&auto=format&fit=crop", title: "Sharp Beard Sculpt", cat: "Beard" },
  { src: "https://images.unsplash.com/photo-1582733535794-6729584d9f67?q=80&w=2070&auto=format&fit=crop", title: "Modern Pompadour", cat: "Styling" },
  { src: "https://images.unsplash.com/photo-1532710093739-9470acffcf03?q=80&w=2070&auto=format&fit=crop", title: "Clean Buzz Cut", cat: "Haircut" },
  { src: "https://images.unsplash.com/photo-1599351431247-f5091e38e1b6?q=80&w=1976&auto=format&fit=crop", title: "Detailed Linework", cat: "Beard" },
  { src: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=2072&auto=format&fit=crop", title: "Elegant Men's Style", cat: "Styling" },
  { src: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop", title: "Scissor Only Cut", cat: "Haircut" },
  { src: "https://images.unsplash.com/photo-1512690196252-7asf1eb3084d?q=80&w=2070&auto=format&fit=crop", title: "Relaxing Treatment", cat: "Service" },
  { src: "https://images.unsplash.com/photo-1582733535794-6729584d9f67?q=80&w=2070&auto=format&fit=crop", title: "Creative Fade", cat: "Haircut" },
];

export default function GalleryPage() {
  return (
    <div className="pt-40 pb-32 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <span className="text-gold font-light tracking-[0.5em] uppercase text-[0.6rem] mb-6 block">My Latest Work</span>
          <h1 className="text-4xl md:text-6xl font-display font-normal text-white mb-8 uppercase tracking-[0.2em] text-gold-gradient">Photo Gallery</h1>
          <p className="text-white/30 text-sm md:text-md leading-loose font-light tracking-[0.3em] uppercase">
            Take a look at some of the haircuts and styles I've done for my happy clients. See the quality I bring to every session.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 1 }}
              className="break-inside-avoid relative group"
            >
              <Dialog>
                 <DialogTrigger asChild>
                    <div className="relative overflow-hidden group cursor-pointer border border-white/[0.03] grayscale hover:grayscale-0 transition-all duration-1000">
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-auto object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms]" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                         <Search className="text-gold/40 mb-6 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-1000" strokeWidth={1} />
                         <span className="text-gold/60 text-[0.45rem] uppercase tracking-[0.4em] font-light mb-2">{item.cat} Ritual</span>
                         <h3 className="text-white font-display text-sm font-light tracking-[0.2em] uppercase">{item.title}</h3>
                      </div>
                    </div>
                 </DialogTrigger>
                 <DialogContent className="max-w-4xl bg-black border-white/[0.05] p-0 overflow-hidden rounded-none">
                    <div className="relative">
                      <img src={item.src} alt={item.title} className="w-full h-auto max-h-[80vh] object-contain grayscale" />
                      <div className="absolute inset-x-0 bottom-0 p-10 glass border-0">
                         <span className="text-gold/60 text-[0.55rem] uppercase tracking-[0.4em] font-light mb-3 block">{item.cat} Session</span>
                         <h3 className="text-white font-display text-lg font-light tracking-[0.3em] uppercase">{item.title}</h3>
                         <p className="text-white/20 text-[0.6rem] mt-4 tracking-[0.2em] font-light uppercase">Bespoke Ritual by Govind</p>
                      </div>
                    </div>
                 </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        {/* Section divider */}
        <div className="mt-40 py-24 border-y border-white/[0.03] flex flex-col items-center">
           <div className="flex items-center gap-16 text-white/[0.03] mb-12 flex-wrap justify-center font-display text-3xl">
              <span className="tracking-[0.5em] italic">PRECISION</span>
              <span className="tracking-[0.5em]">AESTHETIC</span>
              <span className="tracking-[0.5em] italic">LEGACY</span>
           </div>
           <p className="text-white/10 text-[0.55rem] tracking-[0.5em] uppercase font-light text-center">Digital Curation Updated Weekly • Resonate on Socials @GovindArchitect</p>
        </div>
      </div>
    </div>
  );
}
