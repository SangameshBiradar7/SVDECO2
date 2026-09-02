"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Zap, TrendingDown } from "lucide-react";

const stats = [
  {
    value: 7.9,
    suffix: "M+",
    label: "Tonnes of Hazardous Waste Generated Per Year in India",
    unit: "TONNES/YEAR",
    icon: TrendingDown,
    color: "text-amber",
  },
  {
    value: 100,
    suffix: "%",
    label: "Limited Formal Infrastructure for Safe Disposal",
    unit: "LIMITED INFRASTRUCTURE",
    icon: Factory,
    color: "text-lime",
  },
  {
    value: 75,
    suffix: "%+",
    label: "Potential Energy Content Lost in Unprocessed Waste",
    unit: "LOST ENERGY",
    icon: Zap,
    color: "text-amber-light",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-bold">
      {isInView ? `${value}${suffix}` : "0"}
    </span>
  );
}

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-charcoal"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-deep-green" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-amber uppercase block mb-4">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-4 leading-tight">
            India Has a{" "}
            <span className="text-amber">Waste Problem.</span>
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white leading-tight">
            And Industry Has an{" "}
            <span className="text-lime">Energy Problem.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              className="group relative glass rounded-3xl p-8 md:p-10 border border-white/5 card-hover"
            >
              <div className="absolute top-6 right-6">
                <stat.icon className={`w-8 h-8 ${stat.color} opacity-60`} />
              </div>
              <div className="mb-6">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold tracking-[0.2em] text-lime uppercase mb-3">
                {stat.unit}
              </div>
              <p className="text-muted-light text-sm leading-relaxed">
                {stat.label}
              </p>
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-lime to-amber transition-all duration-700 rounded-full" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-light max-w-2xl mx-auto leading-relaxed">
            Millions of tonnes of hazardous industrial waste are produced annually,
            with limited formal infrastructure for safe disposal. Meanwhile, cement
            and manufacturing industries struggle with rising fossil fuel costs.
            SVD Eco Services bridges this gap.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
