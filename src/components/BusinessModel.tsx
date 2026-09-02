"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, FlaskConical, ArrowRightLeft } from "lucide-react";

export default function BusinessModel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-deep-green"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-lime uppercase block mb-4">
            Business Model
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Two-Sided{" "}
            <span className="text-lime">Value Creation</span>
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            SVD Eco Services operates as the critical link between waste generators
            seeking safe disposal and cement plants seeking affordable alternative fuel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left: Waste Generators */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 h-full card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber to-amber-light flex items-center justify-center mb-6 shadow-lg shadow-amber/20">
                <Factory className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-off-white mb-2">
                For Waste Generators
              </h3>
              <p className="text-xs font-semibold tracking-[0.15em] text-amber uppercase mb-6">
                Safe, Compliant Disposal
              </p>
              <ul className="space-y-4">
                {[
                  "Off-take agreements for hazardous waste",
                  "Full regulatory compliance & documentation",
                  "Reduced disposal costs vs. landfilling",
                  "Sustainable ESG reporting",
                  "Transparent tracking & manifest records",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Center: SVD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-lime to-lime-light flex items-center justify-center shadow-2xl shadow-lime/30 animate-pulse-glow">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-deep-green">
                    SVD
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-deep-green/80 uppercase">
                    Eco
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-lime/20 animate-ping opacity-20" />
            </div>
            <h3 className="text-xl font-bold text-off-white mt-6 text-center">
              SVD Eco Services
            </h3>
            <p className="text-sm text-lime text-center mt-1">
              The Bridge
            </p>
          </motion.div>

          {/* Right: Cement Plants */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 h-full card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lime to-lime-light flex items-center justify-center mb-6 shadow-lg shadow-lime/20">
                <FlaskConical className="w-7 h-7 text-deep-green" />
              </div>
              <h3 className="text-2xl font-bold text-off-white mb-2">
                For Cement Plants
              </h3>
              <p className="text-xs font-semibold tracking-[0.15em] text-lime uppercase mb-6">
                Affordable, Clean Fuel
              </p>
              <ul className="space-y-4">
                {[
                  "Consistent-quality alternative fuel supply",
                  "Reduced coal procurement costs",
                  "Lower carbon emissions & improved ESG metrics",
                  "Enhanced kiln operational efficiency",
                  "Reliable, scheduled delivery logistics",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-lime mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border border-lime/20">
            <ArrowRightLeft className="w-5 h-5 text-lime" />
            <span className="text-sm font-medium text-off-white">
              We create value on both sides of the supply chain
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
