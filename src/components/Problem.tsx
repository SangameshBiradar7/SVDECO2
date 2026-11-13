"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Zap, TrendingDown } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    value: 18.51,
    suffix: "M+",
    label: "Hazardous Waste Generated Annually Across India from 89,301 Hazardous Waste Generator Units",
    unit: "TONNES/YEAR",
    icon: TrendingDown,
    color: "text-amber",
  },
  {
    value: 100,
    suffix: "%",
    label: "Only 41–51 Authorized Facilities Available for Safe Handling and Disposal of Hazardous Waste",
    unit: "LIMITED INFRASTRUCTURE",
    icon: Factory,
    color: "text-lime",
  },
  {
    value: 75,
    suffix: "%+",
    label: "Valuable Energy Potential Lost When Waste Remains Untreated or Unprocessed",
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

      {/* Challenge images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full">
          <Image
            src="/images/challenge-waste.jpg"
            alt="Industrial waste containers"
            fill
            sizes="50vw"
             className="object-cover opacity-20 premium-image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <Image
            src="/images/challenge-energy.jpg"
            alt="Cement plant industrial kiln"
            fill
            sizes="50vw"
             className="object-cover opacity-20 premium-image"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-charcoal to-transparent" />
        </div>
      </div>

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 border border-lime/20 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lime/10 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="text-5xl md:text-6xl font-bold text-lime">
                  20,000+
                </div>
                <div className="text-xs font-bold tracking-[0.2em] text-lime uppercase mt-2">
                  MT Processed
                </div>
              </div>
              <div className="h-px w-full md:w-px md:h-20 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-lime/30 to-transparent" />
              <div className="flex-grow text-center md:text-left">
                <div className="text-xs font-bold tracking-[0.3em] text-amber uppercase block mb-3">
                  Our Track Record
                </div>
                <p className="text-off-white text-base md:text-lg leading-relaxed">
                  Between 2024 and 2026, we have processed more than{" "}
                  <span className="text-lime font-semibold">20,000 MT</span> of hazardous
                  waste and converted it into alternative fuel for industrial applications.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
