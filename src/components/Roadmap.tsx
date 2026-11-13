"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Circle } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    period: "2025 — 2026",
    title: "Foundations & Pilot",
    status: "In Progress",
    milestones: [
      { text: "Company incorporation & team formation", done: true },
      { text: "Pilot waste collection from 3+ generators", done: true },
      { text: "Stabilization lab setup & testing", done: true },
      { text: "Initial pelletization trials", done: false, current: true },
      { text: "Cement kiln trial runs", done: false },
    ],
  },
  {
    phase: "Phase 2",
    period: "2027 — 2028",
    title: "Scale & Expand",
    status: "Planned",
    milestones: [
      { text: "Full-scale processing facility operational", done: false },
      { text: "10+ waste generator agreements signed", done: false },
      { text: "3+ cement kiln supply contracts", done: false },
      { text: "Regional expansion to Vijayapura", done: false },
      { text: "Series A fundraising", done: false },
    ],
  },
  {
    phase: "Phase 3",
    period: "Future growth",
    title: "Future Growth",
    status: "Long-term",
    milestones: [
      { text: "Expand the regional waste-to-energy network", done: false },
      { text: "Deepen long-term cement kiln partnerships", done: false },
      { text: "Increase resource recovery across the value chain", done: false },
      { text: "Build a broader circular industrial ecosystem", done: false },
    ],
  },
];

export default function Roadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="roadmap"
      ref={ref}
      className="relative py-32 overflow-hidden bg-deep-green"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-lime uppercase block mb-4">
            Roadmap
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Our{" "}
            <span className="text-lime">Journey</span>{" "}
            Forward
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            A phased approach to building a scalable, sustainable waste-to-energy
            enterprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
            >
              <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-lime/10 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span
                        className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-2 ${
                          phase.status === "In Progress"
                            ? "bg-lime/20 text-lime"
                            : "bg-white/10 text-muted-light"
                        }`}
                      >
                        {phase.status}
                      </span>
                      <h3 className="text-2xl font-bold text-off-white">
                        {phase.phase}
                      </h3>
                      <p className="text-sm text-muted-light">{phase.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-light uppercase tracking-wider">
                        Period
                      </p>
                      <p className="text-sm font-semibold text-off-white">
                        {phase.period}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {phase.milestones.map((milestone, j) => (
                      <div
                        key={j}
                        className={`flex items-start gap-3 p-3 rounded-xl ${
                          milestone.current
                            ? "bg-lime/10 border border-lime/20"
                            : ""
                        }`}
                      >
                        {milestone.done ? (
                          <CheckCircle2 className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" />
                        ) : milestone.current ? (
                          <div className="w-5 h-5 rounded-full border-2 border-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                          </div>
                        ) : (
                          <Circle className="w-5 h-5 text-muted-light/30 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            milestone.done
                              ? "text-off-white line-through opacity-70"
                              : milestone.current
                              ? "text-lime font-medium"
                              : "text-muted-light"
                          }`}
                        >
                          {milestone.text}
                        </span>
                      </div>
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
