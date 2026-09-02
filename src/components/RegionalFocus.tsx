"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, TrendingUp, Building2 } from "lucide-react";

const regions = [
  {
    city: "Bidar",
    state: "Karnataka",
    status: "Primary Operations",
    description:
      "Headquarters and primary waste collection hub. Strong industrial base with pharma, paint, and agrochemical units.",
    stats: "Target: 5,000+ TPA",
    color: "lime",
    lat: "17.9",
    lng: "77.5",
  },
  {
    city: "Kalaburagi",
    state: "Karnataka",
    status: "Processing Facility",
    description:
      "Planned processing and pelletization facility. Strategically located for access to major cement kilns in the region.",
    stats: "Target: 3,000+ TPA",
    color: "amber",
    lat: "17.3",
    lng: "76.8",
  },
  {
    city: "Vijayapura",
    state: "Karnataka",
    status: "Expansion Zone",
    description:
      "Future expansion area with significant industrial waste generation and proximity to cement manufacturing clusters.",
    stats: "Target: 2,000+ TPA",
    color: "emerald-400",
    lat: "16.8",
    lng: "75.7",
  },
];

export default function RegionalFocus() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-deep-green/30 to-charcoal" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-lime uppercase block mb-4">
            Regional Focus
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Operating in{" "}
            <span className="text-lime">North Karnataka</span>
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            Our initial operations focus on the industrial corridor of North
            Karnataka, with room to expand across the state and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 border border-white/5 card-hover h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lime/10 to-transparent rounded-full blur-2xl group-hover:from-lime/20 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-5 h-5 text-${region.color}`} />
                      <h3 className="text-2xl font-bold text-off-white">
                        {region.city}
                      </h3>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full glass border border-white/10 text-muted-light">
                      {region.state}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/10 border border-lime/20 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                    <span className="text-xs font-semibold text-lime">
                      {region.status}
                    </span>
                  </div>

                  <p className="text-sm text-muted-light leading-relaxed mb-6">
                    {region.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <p className="text-xs text-muted-light mb-1">Target Volume</p>
                      <p className="text-sm font-semibold text-off-white">
                        {region.stats}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-lime">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border border-lime/20">
            <Building2 className="w-5 h-5 text-lime" />
            <span className="text-sm font-medium text-off-white">
              Expansion planned across Karnataka and neighboring states
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
