import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/916287308665"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 hover:bg-green-600 transition-colors"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-black/40 backdrop-blur-md text-white/70 text-[0.6rem] uppercase tracking-[0.3em] font-light py-2 px-6 border border-white/[0.05] whitespace-nowrap pointer-events-none">
        Chat with Govind
      </span>
    </motion.a>
  );
}
