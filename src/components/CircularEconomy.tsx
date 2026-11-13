"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Recycle, Truck, FlaskConical, Flame, Leaf } from "lucide-react";
import Image from "next/image";

const circularStages = [
  {
    title: "Waste Collection",
    desc: "Hazardous waste sourced from industries",
    icon: Truck,
    angle: 0,
    color: "text-amber",
    bg: "bg-amber/10",
  },
  {
    title: "Stabilization",
    desc: "Hazard neutralization & processing",
    icon: FlaskConical,
    angle: 90,
    color: "text-lime",
    bg: "bg-lime/10",
  },
  {
    title: "Fuel Production",
    desc: "Pelletization & quality control",
    icon: Recycle,
    angle: 180,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    title: "Energy Recovery",
    desc: "Clean combustion in cement kilns",
    icon: Flame,
    angle: 270,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

export default function CircularEconomy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-deep-green"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Circular economy background image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/circular-economy.jpg"
            alt="Sustainable industrial landscape circular economy"
            fill
            sizes="100vw"
             className="object-cover opacity-10 premium-image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-green via-deep-green/90 to-deep-green" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-lime uppercase block mb-4">
            Circular Economy
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Closing the{" "}
            <span className="text-lime">Loop</span>
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            Every stage of our process is designed to maximize resource efficiency
            and minimize waste — creating a true circular economy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Circular diagram */}
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-lime to-lime-light flex items-center justify-center shadow-2xl shadow-lime/30 animate-pulse-glow">
                <Leaf className="w-12 h-12 text-deep-green" />
              </div>
              <div className="text-center mt-4">
                <p className="text-sm font-bold text-off-white">SVD Eco</p>
                <p className="text-xs text-lime">Circular Loop</p>
              </div>
            </div>

            {/* Orbiting stages */}
            {circularStages.map((stage, i) => {
              const positions = [
                { top: "5%", left: "50%", transform: "translateX(-50%)" },
                { top: "50%", right: "5%", transform: "translateY(-50%)" },
                { bottom: "5%", left: "50%", transform: "translateX(-50%)" },
                { top: "50%", left: "5%", transform: "translateY(-50%)" },
              ];
              const pos = positions[i];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * i }}
                  className={`absolute ${pos.top ? `top-[${pos.top}]` : ""} ${pos.right ? `right-[${pos.right}]` : ""} ${pos.bottom ? `bottom-[${pos.bottom}]` : ""} ${pos.left ? `left-[${pos.left}]` : ""} ${pos.transform ? `transform ${pos.transform}` : ""}`}
                  style={pos}
                >
                  <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full ${stage.bg} border border-white/10 flex flex-col items-center justify-center text-center p-3 card-hover`}>
                    <stage.icon className={`w-6 h-6 ${stage.color} mb-2`} />
                    <p className="text-xs font-bold text-off-white leading-tight">
                      {stage.title}
                    </p>
                    <p className="text-[10px] text-muted-light mt-1 line-clamp-2">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <motion.circle
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="url(#circularGradient)"
                strokeWidth="2"
                strokeDasharray="8 4"
                className="opacity-40"
              />
              <defs>
                <linearGradient id="circularGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#84cc16" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            "Zero-waste philosophy",
            "Full material recovery",
            "Reduced carbon footprint",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 glass rounded-full px-5 py-3 border border-white/10"
            >
              <div className="w-2 h-2 rounded-full bg-lime" />
              <span className="text-sm text-off-white">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
