"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, TrendingUp } from "lucide-react";

const calorificData = [
  {
    label: "Raw ETP Sludge",
    value: "~1,500",
    unit: "kcal/kg",
    status: "baseline",
    description: "Raw waste — low energy content",
  },
  {
    label: "Agri-Biomass Fines",
    value: "~3,600",
    unit: "kcal/kg",
    status: "reference",
    description: "Common biomass alternative",
  },
  {
    label: "Proposed Pellet Blend",
    value: "~3,750",
    unit: "kcal/kg",
    status: "target",
    description: "Our stabilized blend target",
  },
  {
    label: "Premium Coal Reference",
    value: "~6,000",
    unit: "kcal/kg",
    status: "reference",
    description: "Traditional fossil fuel benchmark",
  },
];

export default function Technology() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="technology"
      ref={ref}
      className="relative py-32 overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-deep-green/50 to-charcoal" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-lime uppercase block mb-4">
            Technology
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            The{" "}
            <span className="text-lime">Carbon-Boost</span>{" "}
            Blend
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            Our proprietary stabilization and blending technology transforms
            low-calorific hazardous waste into high-value alternative fuel.
          </p>
        </motion.div>

        {/* Calorific Value Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-strong rounded-3xl p-8 md:p-12 border border-white/10 mb-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-lime" />
            <h3 className="text-xl font-bold text-off-white">
              Calorific Value Comparison
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {calorificData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`relative rounded-2xl p-6 border ${
                  item.status === "target"
                    ? "border-lime/40 bg-lime/5"
                    : "border-white/5 bg-white/5"
                } card-hover`}
              >
                {item.status === "target" && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-lime text-deep-green text-xs font-bold rounded-full uppercase tracking-wider">
                    Our Target
                  </div>
                )}
                <div className="text-center mb-4">
                  <div
                    className={`text-3xl md:text-4xl font-bold ${
                      item.status === "target" ? "text-lime" : "text-off-white"
                    }`}
                  >
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-light uppercase tracking-wider mt-1">
                    {item.unit}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-off-white mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-amber/10 border border-amber/20">
            <p className="text-xs text-amber-light leading-relaxed text-center">
              <strong>Note:</strong> Illustrative figures — final blend calorific
              value subject to laboratory validation and regulatory approval.
            </p>
          </div>
        </motion.div>

        {/* Process Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Stabilization",
              desc: "Chemical treatment neutralizes hazardous components, making waste safe to handle and process.",
            },
            {
              title: "Blending",
              desc: "Precision mixing with biomass fines optimizes calorific value and combustion characteristics.",
            },
            {
              title: "Pelletization",
              desc: "High-pressure extrusion creates uniform pellets with consistent size, density, and energy content.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 border border-white/5 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-lime/20 flex items-center justify-center text-lime">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-off-white uppercase tracking-wider">
                  {feature.title}
                </h4>
              </div>
              <p className="text-sm text-muted-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
