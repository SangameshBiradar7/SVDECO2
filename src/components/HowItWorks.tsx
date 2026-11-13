"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, FlaskConical, Cog, Flame } from "lucide-react";
import Image from "next/image";

const stepImages = [
  "/images/waste-collection.webp",
  "/images/waste-stabilization.webp",
  "/images/alternative-fuel.webp",
  "/images/cement-kiln.webp",
];

const steps = [
  {
    num: "01",
    title: "Collect & Track",
    subtitle: "Source Segregation & Logistics",
    description:
      "We deploy GPS-enabled logistics to collect hazardous waste from industrial generators. Every batch is tagged, tracked, and documented from the point of collection.",
    details: ["GPS-tracked collection", "Manifest documentation", "Source verification"],
    icon: Truck,
    color: "from-lime to-green-400",
    accent: "text-lime",
  },
  {
    num: "02",
    title: "Stabilize",
    subtitle: "Hazard Neutralization",
    description:
      "At our processing facility, hazardous components are chemically stabilized using proprietary formulations, converting reactive waste into stable, non-hazardous material suitable for further processing.",
    details: ["Chemical stabilization", "pH neutralization", "Heavy metal fixation"],
    icon: FlaskConical,
    color: "from-emerald-400 to-lime",
    accent: "text-emerald-400",
  },
  {
    num: "03",
    title: "Blend & Pelletize",
    subtitle: "Calorific Enhancement",
    description:
      "Stabilized material is blended with agri-biomass fines and processed through high-pressure pelletization, creating uniform fuel pellets with consistent calorific value optimized for cement kilns.",
    details: ["Precision blending", "High-pressure pelletization", "Quality testing"],
    icon: Cog,
    color: "from-amber to-orange-500",
    accent: "text-amber",
  },
  {
    num: "04",
    title: "Deliver Alternative Fuel",
    subtitle: "Energy Recovery",
    description:
      "Fuel pellets are supplied directly to cement kilns, replacing fossil fuels and reducing carbon emissions. The process completes the circular economy loop — from waste to industrial energy.",
    details: ["Kiln-ready delivery", "Continuous supply", "Performance monitoring"],
    icon: Flame,
    color: "from-orange-500 to-amber-light",
    accent: "text-orange-400",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-32 overflow-hidden bg-deep-green"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-deep-green via-charcoal/20 to-deep-green" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-lime uppercase block mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            A 4-Step{" "}
            <span className="text-lime">Transformation</span>{" "}
            Process
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            From hazardous waste collection to clean industrial energy — our proven
            process ensures safety, efficiency, and compliance at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 card-hover h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-lime/10 to-transparent rounded-full blur-3xl group-hover:from-lime/20 transition-all duration-500" />
                <Image
                  src={stepImages[i]}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                   className="object-cover opacity-20 -z-10 premium-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/90 via-deep-green/70 to-deep-green/50" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-white/5">
                      {step.num}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-off-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold tracking-[0.15em] text-lime uppercase">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-light text-sm leading-relaxed mb-6 flex-grow">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 text-xs font-medium rounded-full glass border border-white/10 text-muted-light"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
