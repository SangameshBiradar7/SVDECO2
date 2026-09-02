"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Recycle,
  Hash,
  Flame,
  ArrowRightLeft,
  CheckCircle2,
} from "lucide-react";

const whyCards = [
  {
    icon: Recycle,
    title: "Waste Recovery",
    subtitle: "MAXIMIZED RESOURCE RECOVERY",
    description:
      "We recover energy value from waste that would otherwise be landfilled, creating a net-positive environmental and economic outcome.",
    benefits: [
      "High calorific pellet output",
      "Minimal residual waste",
      "Maximized material recovery",
    ],
    color: "text-lime",
    accent: "bg-lime/10 border-lime/20",
  },
  {
    icon: Hash,
    title: "Traceability",
    subtitle: "END-TO-END VISIBILITY",
    description:
      "Every batch has a unique manifest ID tracked from collection through processing to final delivery — ensuring transparency and accountability.",
    benefits: [
      "Digital manifest system",
      "Real-time GPS tracking",
      "Immutable audit records",
    ],
    color: "text-amber",
    accent: "bg-amber/10 border-amber/20",
  },
  {
    icon: Flame,
    title: "Fuel Value",
    subtitle: "PREMIUM ALTERNATIVE FUEL",
    description:
      "Our pellet blend achieves calorific values comparable to biomass, making it a cost-effective and sustainable alternative to coal for cement kilns.",
    benefits: [
      "Consistent quality output",
      "Competitive fuel pricing",
      "Reduced coal dependency",
    ],
    color: "text-emerald-400",
    accent: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: ArrowRightLeft,
    title: "Two-Sided Value",
      subtitle: "MUTUAL BENEFIT MODEL",
      description:
        "We create value for waste generators through safe disposal and for cement plants through affordable, clean fuel — a true two-sided market.",
      benefits: [
        "Waste generator savings",
        "Cement plant cost reduction",
        "Shared ESG benefits",
      ],
      color: "text-amber-light",
      accent: "bg-amber-light/10 border-amber-light/20",
    },
  ];

  export default function WhySVD() {
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
              Why SVD
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
              Why This{" "}
              <span className="text-lime">Model Works</span>
            </h2>
            <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
              Four core pillars make our business model resilient, scalable, and
              impactful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 * i }}
                className="group"
              >
                <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 card-hover h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-lime/10 to-transparent rounded-full blur-3xl group-hover:from-lime/20 transition-all duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl ${card.accent} border flex items-center justify-center`}
                      >
                        <card.icon className={`w-7 h-7 ${card.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-off-white">
                          {card.title}
                        </h3>
                        <p className="text-xs font-bold tracking-[0.15em] text-muted-light uppercase">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-light leading-relaxed mb-6 flex-grow">
                      {card.description}
                    </p>

                    <div className="space-y-2">
                      {card.benefits.map((benefit, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className={`w-4 h-4 ${card.color}`} />
                          <span className="text-sm text-muted-light">
                            {benefit}
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
