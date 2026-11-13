"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  Hash,
  Calendar,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const trackingSteps = [
  {
    status: "Order Placed",
    time: "2026-01-15 09:00",
    location: "Bidar Facility",
    completed: true,
  },
  {
    status: "Waste Collected",
    time: "2026-01-15 14:30",
    location: "Industrial Unit — Bidar",
    completed: true,
  },
  {
    status: "In Transit to Facility",
    time: "2026-01-15 16:00",
    location: "GPS Tracked Route",
    completed: true,
  },
  {
    status: "Stabilization Started",
    time: "2026-01-16 08:00",
    location: "SVD Processing Unit",
    completed: true,
  },
  {
    status: "Pelletization Complete",
    time: "2026-01-17 15:00",
    location: "Pellet Plant — Kalaburagi",
    completed: false,
    active: true,
  },
  {
    status: "Quality Verification",
    time: "Pending",
    location: "Lab Testing",
    completed: false,
  },
  {
    status: "Dispatch to Cement Kiln",
    time: "Pending",
    location: "Partner Cement Plant",
    completed: false,
  },
];

const manifestData = {
  id: "SVD-2026-004281",
  generator: "Pharma Industries Ltd., Bidar",
  wasteType: "Hazardous ETP Sludge",
  quantity: "2,500 kg",
  status: "In Process — Pelletization",
};

export default function Traceability() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="traceability"
      ref={ref}
      className="relative py-32 overflow-hidden bg-navy"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-deep-green/30 to-charcoal" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Dashboard background image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/traceability-dashboard.jpg"
            alt="Digital industrial tracking dashboard"
            fill
            sizes="100vw"
             className="object-cover opacity-10 premium-image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-deep-green/30 to-charcoal" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-lime uppercase block mb-4">
            Digital Traceability
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Every Batch{" "}
            <span className="text-lime">Tracked</span>
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            Our digital manifest system provides complete transparency from waste
            collection to fuel delivery. <span className="text-lime/80">Illustrative workflow.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-strong rounded-3xl p-8 md:p-10 border border-white/10 overflow-hidden"
        >
          {/* Manifest Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Hash className="w-4 h-4 text-lime" />
                <span className="text-xs font-bold tracking-[0.2em] text-lime uppercase">
                  Manifest ID
                </span>
              </div>
              <p className="text-2xl font-bold text-off-white font-mono">
                {manifestData.id}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="glass rounded-xl px-4 py-3 border border-white/10">
                <p className="text-xs text-muted-light mb-1">Generator</p>
                <p className="text-sm font-semibold text-off-white">
                  {manifestData.generator}
                </p>
              </div>
              <div className="glass rounded-xl px-4 py-3 border border-white/10">
                <p className="text-xs text-muted-light mb-1">Waste Type</p>
                <p className="text-sm font-semibold text-off-white">
                  {manifestData.wasteType}
                </p>
              </div>
              <div className="glass rounded-xl px-4 py-3 border border-white/10">
                <p className="text-xs text-muted-light mb-1">Quantity</p>
                <p className="text-sm font-semibold text-off-white">
                  {manifestData.quantity}
                </p>
              </div>
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="absolute left-4 top-0 w-px bg-gradient-to-b from-lime to-lime/20 hidden md:block" style={{ height: "45%" }} />

            <div className="space-y-0">
              {trackingSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="relative flex items-start gap-6 py-4"
                >
                  <div className="relative z-10 hidden md:flex">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed
                          ? "bg-lime text-deep-green"
                          : step.active
                          ? "bg-lime/20 border-2 border-lime text-lime"
                          : "bg-white/10 border border-white/20 text-muted-light"
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : step.active ? (
                        <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-current" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4
                        className={`text-sm font-semibold ${
                          step.active ? "text-lime" : "text-off-white"
                        }`}
                      >
                        {step.status}
                      </h4>
                      {step.active && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-lime/20 text-lime rounded-full">
                          Live
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-light">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {step.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {step.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
