"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Zap, Users, Shield } from "lucide-react";
import Image from "next/image";

const impactImages = [
  "/images/impact-environment.jpg",
  "/images/impact-energy.jpg",
  "/images/impact-employment.jpg",
  "/images/impact-compliance.jpg",
];

const impacts = [
  {
    icon: Leaf,
    title: "Environment",
    subtitle: "ENVIRONMENTAL",
    description:
      "Diverting hazardous waste from landfills and open dumping. Reducing methane emissions and soil/water contamination through safe processing and energy recovery.",
    metrics: ["Reduced landfill burden", "Prevented soil contamination", "Lower GHG emissions"],
    color: "text-lime",
    bg: "from-lime/20 to-lime/5",
    border: "border-lime/20",
  },
  {
    icon: Zap,
    title: "Energy",
    subtitle: "INDUSTRIAL ENERGY",
    description:
      "Replacing fossil fuels with waste-derived pellets in cement kilns. Supporting India's energy security while reducing industrial carbon intensity.",
    metrics: ["Fossil fuel displacement", "Enhanced energy security", "Cleaner kiln operations"],
    color: "text-amber",
    bg: "from-amber/20 to-amber/5",
    border: "border-amber/20",
  },
  {
    icon: Users,
    title: "Employment",
    subtitle: "EMPLOYMENT",
    description:
      "Creating skilled and semi-skilled jobs in collection, processing, and logistics — with a focus on local communities in Bidar and Kalaburagi.",
    metrics: ["Direct employment", "Skill development", "Local community upliftment"],
    color: "text-emerald-400",
    bg: "from-emerald-400/20 to-emerald-400/5",
    border: "border-emerald-400/20",
  },
  {
    icon: Shield,
    title: "Compliance",
    subtitle: "REGULATORY",
    description:
      "Full compliance with CPCB and KSPCB regulations. Transparent manifest tracking ensures every batch meets environmental and safety standards.",
    metrics: ["CPCB compliance", "KSPCB authorization", "Digital audit trail"],
    color: "text-amber-light",
    bg: "from-amber-light/20 to-amber-light/5",
    border: "border-amber-light/20",
  },
];

export default function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="impact"
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
            Our Impact
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Impact Across{" "}
            <span className="text-lime">Four Dimensions</span>
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            Our operations create meaningful, measurable impact across environment,
            energy, employment, and regulatory compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((impact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="group"
            >
              <div
                className={`relative rounded-3xl p-8 md:p-10 bg-gradient-to-br ${impact.bg} border ${impact.border} card-hover h-full overflow-hidden`}
              >
                <Image
                  src={impactImages[i]}
                  alt={impact.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                   className="object-cover opacity-25 -z-10 premium-image"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-deep-green/60 to-charcoal/60" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-lime/10 to-transparent rounded-full blur-3xl group-hover:from-lime/20 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl ${impact.bg} border ${impact.border} flex items-center justify-center`}
                    >
                      <impact.icon className={`w-7 h-7 ${impact.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-off-white">
                        {impact.title}
                      </h3>
                      <p className="text-xs font-bold tracking-[0.2em] text-muted-light uppercase">
                        {impact.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-light text-sm leading-relaxed mb-6">
                    {impact.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {impact.metrics.map((metric, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 text-xs font-medium rounded-full glass border border-white/10 text-muted-light"
                      >
                        {metric}
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
