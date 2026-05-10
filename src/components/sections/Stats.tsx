import { motion } from "motion/react";

const stats = [
  { label: "Happy Clients", value: "500+", suffix: "" },
  { label: "Years Experience", value: "5+", suffix: "" },
  { label: "Haircuts Done", value: "1000+", suffix: "" },
  { label: "Premium Services", value: "10+", suffix: "" },
];

export default function Stats() {
  return (
    <section className="bg-charcoal py-12 border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-display font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
