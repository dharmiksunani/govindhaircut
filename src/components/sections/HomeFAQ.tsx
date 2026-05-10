import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import * as React from "react";
import { useState } from "react";

const faqs = [
  {
    question: "Do you offer home services in Bangalore?",
    answer: "Yes, I specialize in premium home services across Bangalore, including Whitefield, Marathahalli, Brookefield, and ITPLareas. Experience salon-quality grooming in the comfort of your home."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book directly through the 'Book Now' page, call me at +91 6287308665, or send a message on WhatsApp for instant confirmation."
  },
  {
    question: "What products do you use?",
    answer: "I use only professional, high-end grooming products from internationally recognized brands to ensure the best care for your hair and skin."
  },
  {
    question: "Is there an extra charge for home visits?",
    answer: "Home service charges are included in the premium pricing for locations within my primary service areas. For very distant locations, a small travel convenience fee may apply."
  }
];

const FAQItem = ({ faq, index }: { faq: (typeof faqs)[0]; index: number; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="border-b border-white/[0.05]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xs md:text-sm font-light tracking-[0.2em] group-hover:text-gold transition-colors text-white/70 uppercase">
          {faq.question}
        </span>
        <div className="flex-shrink-0 ml-4 h-6 w-6 border border-white/5 flex items-center justify-center group-hover:border-gold/30 transition-colors">
          {isOpen ? <Minus className="h-3 w-3 text-gold/50" strokeWidth={1} /> : <Plus className="h-3 w-3 text-gold/50" strokeWidth={1} />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-8 text-white/30 font-light text-xs md:text-sm tracking-wide leading-loose">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function HomeFAQ() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-gold font-light tracking-[0.4em] uppercase text-[0.6rem] mb-6 block">Got Questions?</span>
            <h2 className="text-3xl md:text-5xl font-display font-normal mb-8 text-white tracking-[0.2em] uppercase text-gold-gradient">Common Questions</h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto"></div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
