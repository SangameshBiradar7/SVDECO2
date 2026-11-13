"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  const opacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-deep-green industrial-grid"
    >
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/svd-hero-industrial.webp"
          alt="Hazardous waste processing and waste-to-energy industrial facility"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 premium-image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-green via-deep-green/95 to-deep-green/45" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lime/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-3xl" />

      <motion.div style={{ y: y1, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-lime/30 bg-lime/10 px-4 py-2 mb-8"
          >
            <span className="text-xs font-semibold tracking-widest text-lime uppercase">
              Sustainable Industrial Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.98] tracking-[-0.06em] max-w-5xl mb-7"
          >
            <span className="text-off-white">Turning Hazardous Waste</span>
            <br />
            <span className="text-lime">Into Clean Industrial Energy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-muted-light max-w-xl mb-10 leading-relaxed"
          >
            We collect, stabilize, and transform hazardous industrial waste into
            high-quality alternative fuels for cement and other energy-consuming
            industries — turning environmental responsibility into sustainable energy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="#process"
              className="group px-7 py-4 bg-lime text-deep-green font-bold hover:bg-lime-light transition-all duration-300 flex items-center gap-2"
            >
              Explore Our Process
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-7 py-4 border border-white/20 text-off-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Partner With Us
            </Link>
          </motion.div>
          </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="hero-frame relative aspect-[0.95] overflow-hidden bg-charcoal">
            <Image
              src="/images/transformation-sequence.jpg"
              alt="Industrial material transformation sequence"
              fill
              sizes="45vw"
              className="object-cover premium-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-green via-transparent to-transparent" />
            <div className="absolute left-7 right-7 bottom-7 border-t border-white/30 pt-4 flex justify-between text-xs uppercase tracking-[0.18em] text-off-white">
              <span>Collection → recovery</span>
              <span className="text-lime">01—04</span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 bg-lime text-deep-green px-5 py-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5" />
            Compliance-led
          </div>
        </motion.div>
        </div>

        {/* Transformation Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative max-w-5xl mx-auto mt-20"
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
