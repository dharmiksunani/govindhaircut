import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "glass-dark border-b border-white/5 py-2" : "bg-transparent py-4 md:py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col group">
          <span className="font-display text-xl md:text-2xl tracking-[0.2em] text-white group-hover:text-gold transition-colors font-normal">GOVIND</span>
          <span className="text-[0.6rem] tracking-[0.4em] font-light text-white/40 -mt-0.5 uppercase">Male Grooming</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[0.65rem] tracking-[0.3em] uppercase font-light transition-colors hover:text-gold ${
                location.pathname === link.href ? "text-gold" : "text-white/60"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="gold-gradient text-black rounded-none h-9 px-6 text-[0.65rem] uppercase tracking-[0.2em] font-medium border-0">
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 glass-dark border-b border-white/[0.03] md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-[0.65rem] tracking-[0.4em] uppercase font-light ${
                    location.pathname === link.href ? "text-gold" : "text-white/40"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="gold-gradient text-black font-medium uppercase tracking-[0.3em] rounded-none py-6 border-0 text-[0.65rem]">
                <Link to="/booking" onClick={() => setIsOpen(false)}>Book Appointment</Link>
              </Button>
              <div className="flex items-center justify-center gap-4 text-white/20 pt-4 border-t border-white/[0.03]">
                 <Phone size={12} strokeWidth={1} />
                 <span className="text-[0.6rem] tracking-[0.3em]">+91 6287308665</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
