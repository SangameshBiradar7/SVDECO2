"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Recycle, Flame, Cog } from "lucide-react";
import Image from "next/image";

const stages = [
  {
    num: "01",
    label: "WASTE COLLECTION",
    desc: "Hazardous industrial waste collected from generators",
    icon: Recycle,
    color: "from-amber to-red-500",
    image: "/images/waste-collection.webp",
  },
  {
    num: "02",
    label: "WASTE STABILIZATION",
    desc: "Advanced chemical stabilization of hazardous components",
    icon: FlaskConical,
    color: "from-lime to-green-400",
    image: "/images/waste-stabilization.webp",
  },
  {
    num: "03",
    label: "BLEND & PELLETIZE",
    desc: "Precision blending with biomass and agri-fines",
    icon: Cog,
    color: "from-emerald-400 to-lime",
    image: "/images/alternative-fuel.webp",
  },
  {
    num: "04",
    label: "CEMENT KILN FUEL",
    desc: "Clean energy recovery in high-temperature kilns",
    icon: Flame,
    color: "from-orange-500 to-amber",
    image: "/images/cement-kiln.webp",
  },
];

function FlaskConical(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 3h6" />
      <path d="M7 15l5 5 5-5" />
      <path d="M12 15V3" />
      <path d="M5 21h14" />
    </svg>
  );
}

export default function BigIdea() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-deep-green"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Transformation background image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/transformation-sequence.jpg"
            alt="Waste to fuel transformation pellets"
            fill
            sizes="100vw"
             className="object-cover opacity-15 premium-image"
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
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-off-white mb-6 leading-tight">
            From Waste to{" "}
            <span className="text-lime">Industrial Fuel.</span>
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            We transform hazardous industrial waste — once a costly liability — into
            high-calorific fuel pellets that power cement kilns, replacing fossil
            fuels and reducing industrial carbon footprints.
          </p>
        </motion.div>

        {/* Animated transformation flow */}
        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2">
            <div className="relative h-0.5 mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-r from-amber/30 via-lime/30 to-lime/30 rounded-full" />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-amber via-lime to-lime origin-left rounded-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 * i }}
                className="relative group"
              >
                <div className="glass rounded-3xl p-8 border border-white/5 card-hover h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lime/10 to-transparent rounded-full blur-2xl group-hover:from-lime/20 transition-all duration-500" />
                  <div className="relative z-10">
                    <div className="relative h-32 -mx-8 -mt-8 mb-6 overflow-hidden">
                      <Image
                        src={stage.image}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover opacity-70 premium-image transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-green to-transparent" />
                    </div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <stage.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-bold tracking-[0.2em] text-lime/70 uppercase mb-2">
                      {stage.num}
                    </div>
                    <h3 className="text-xl font-bold text-off-white mb-3">
                      {stage.label}
                    </h3>
                    <p className="text-sm text-muted-light leading-relaxed mb-5">
                      {stage.desc}
                    </p>
                    <a href="#process" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime hover:text-lime-light transition-colors">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border border-lime/20">
            <Recycle className="w-5 h-5 text-lime" />
            <span className="text-sm font-medium text-off-white">
              One integrated solution — from collection to combustion
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
