import { Link } from "react-router-dom";
import { Scissors, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.05] pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Logo & About */}
          <div className="md:col-col-span-1">
            <Link to="/" className="flex flex-col mb-10 group">
              <span className="font-display text-xl tracking-[0.2em] text-white group-hover:text-gold transition-colors font-normal">GOVIND</span>
              <span className="text-[0.6rem] tracking-[0.4em] font-light text-white/40 -mt-0.5 uppercase">Male Grooming</span>
            </Link>
            <p className="text-white/30 text-[0.7rem] leading-loose mb-10 tracking-widest uppercase font-light">
              Professional home barber in Bangalore. I provide top-quality haircuts and styling services at your doorstep.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/20 hover:text-gold transition-all duration-500">
                <Instagram size={16} strokeWidth={1} />
              </a>
              <a href="#" className="text-white/20 hover:text-gold transition-all duration-500">
                <Facebook size={16} strokeWidth={1} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-[0.65rem] font-light text-gold/60 mb-10 tracking-[0.4em] uppercase">Quick Links</h4>
            <ul className="space-y-5">
              <li><Link to="/about" className="text-white/30 hover:text-gold transition-colors text-[0.65rem] uppercase tracking-[0.2em] font-light">About Me</Link></li>
              <li><Link to="/services" className="text-white/30 hover:text-gold transition-colors text-[0.65rem] uppercase tracking-[0.2em] font-light">Services</Link></li>
              <li><Link to="/gallery" className="text-white/30 hover:text-gold transition-colors text-[0.65rem] uppercase tracking-[0.2em] font-light">Gallery</Link></li>
              <li><Link to="/booking" className="text-white/30 hover:text-gold transition-colors text-[0.65rem] uppercase tracking-[0.2em] font-light">Book Now</Link></li>
              <li><Link to="/contact" className="text-white/30 hover:text-gold transition-colors text-[0.65rem] uppercase tracking-[0.2em] font-light">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-[0.65rem] font-light text-gold/60 mb-10 tracking-[0.4em] uppercase">What I Do</h4>
            <ul className="space-y-5">
              <li className="text-white/30 text-[0.65rem] uppercase tracking-[0.2em] font-light whitespace-nowrap">Haircuts</li>
              <li className="text-white/30 text-[0.65rem] uppercase tracking-[0.2em] font-light whitespace-nowrap">Beard Styling</li>
              <li className="text-white/30 text-[0.65rem] uppercase tracking-[0.2em] font-light whitespace-nowrap">Hair Coloring</li>
              <li className="text-white/30 text-[0.65rem] uppercase tracking-[0.2em] font-light whitespace-nowrap">Facial Care</li>
              <li className="text-white/30 text-[0.65rem] uppercase tracking-[0.2em] font-light whitespace-nowrap">Home Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-[0.65rem] font-light text-gold/60 mb-10 tracking-[0.4em] uppercase">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-white/30 text-[0.65rem] tracking-[0.2em] font-light uppercase">
                <Phone size={14} className="text-gold/40" strokeWidth={1} />
                <a href="tel:+916287308665" className="hover:text-gold">+91 6287308665</a>
              </li>
              <li className="flex items-center gap-4 text-white/30 text-[0.65rem] tracking-[0.2em] font-light uppercase">
                <Mail size={14} className="text-gold/40" strokeWidth={1} />
                <a href="mailto:niyaljohn@gmail.com" className="hover:text-gold">niyaljohn@gmail.com</a>
              </li>
              <li className="flex items-start gap-4 text-white/30 text-[0.65rem] tracking-[0.2em] font-light uppercase leading-loose">
                <MapPin size={14} className="text-gold/40 flex-shrink-0 mt-1" strokeWidth={1} />
                <span>Whitefield, Marathahalli,<br />Bangalore, KA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6 text-[0.55rem] tracking-[0.4em] text-white/10 uppercase font-light">
          <p>© {new Date().getFullYear()} Govind Portfolio. Defined by Precision.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-gold/50 transition-colors">Privacy Protocal</a>
            <a href="#" className="hover:text-gold/50 transition-colors">Service Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
