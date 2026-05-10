import { motion } from "motion/react";
import { Scissors } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center flex-col"
    >
      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          letterSpacing: ["0.4em", "0.6em", "0.4em"]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center"
      >
        <span className="text-white font-display text-xl tracking-[0.6em] uppercase font-light mb-2 translate-x-[0.3em]">
          GOVIND
        </span>
        <div className="h-px bg-gold/30 w-12 mx-auto" />
      </motion.div>
    </motion.div>
  );
}
