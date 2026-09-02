"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    icon: "🏭",
    label: "WASTE",
    desc: "Hazardous industrial waste collected",
    color: "from-amber to-amber-light",
  },
  {
    icon: "⚗️",
    label: "SVD ECO",
    desc: "Stabilization & processing",
    color: "from-lime to-lime-light",
  },
  {
    icon: "🔥",
    label: "FUEL PELLETS",
    desc: "High-calorific blend formed",
    color: "from-orange-500 to-amber",
  },
  {
    icon: "🏗️",
    label: "CEMENT KILN",
    desc: "Clean industrial energy",
    color: "from-lime to-emerald-400",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -150]);
  const y2 = useTransform(scrollY, [0, 800], [0, -80]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-green"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              background: Math.random() > 0.5 ? "#84cc16" : "#fbbf24",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              opacity: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, Math.random() * 0.5 + 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lime/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-3xl" />

      <motion.div style={{ y: y1, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-lime/20 mb-8"
          >
            <MapPin className="w-3.5 h-3.5 text-lime" />
            <span className="text-xs font-semibold tracking-widest text-lime uppercase">
              Bidar · Kalaburagi · Karnataka
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight max-w-5xl mb-6"
          >
            <span className="text-off-white">Turning Hazardous Waste</span>
            <br />
            <span className="text-gradient-hero">Into Clean Industrial Energy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-light max-w-2xl mb-10 leading-relaxed"
          >
            We collect, stabilize, and transform hazardous industrial waste into
            high-calorific alternative fuel for cement-kiln co-processing — turning
            a liability into sustainable energy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#process"
              className="group px-8 py-4 bg-lime text-deep-green font-bold rounded-full hover:bg-lime-light transition-all duration-300 shadow-lg shadow-lime/30 hover:shadow-lime/50 flex items-center gap-2"
            >
              Explore Our Process
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 glass text-off-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>

        {/* Transformation Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-4 flex-1">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl shadow-lg animate-float`}
                      style={{ animationDelay: `${i * 0.5}s` }}
                    >
                      {step.icon}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6">
                        <ArrowRight className="w-6 h-6 text-muted-light/50" />
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold tracking-[0.2em] text-lime uppercase mb-1">
                      {step.label}
                    </p>
                    <p className="text-xs text-muted-light max-w-[120px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex items-center justify-center mt-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
            </div>
            <p className="text-center text-xs text-muted-light mt-6 tracking-wider uppercase">
              End-to-end waste-to-energy transformation
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-light uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-lime" />
        </motion.div>
      </motion.div>
    </section>
  );
}
