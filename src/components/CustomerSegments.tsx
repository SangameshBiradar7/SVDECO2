"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Palette, Factory, SprayCan } from "lucide-react";

const segments = [
  {
    title: "Pharmaceutical",
    icon: FlaskConical,
    description:
      "Hazardous ETP sludge and solvent waste from pharma manufacturing — stabilized and converted to high-energy fuel pellets.",
    wasteTypes: ["ETP Sludge", "Solvent Recovery Residue", "Mother Liquor Waste"],
    color: "from-lime to-green-400",
    bg: "bg-lime/10",
  },
  {
    title: "Paint & Coatings",
    icon: Palette,
    description:
      "Heavy metal-bearing sludge and solvent waste from paint manufacturing — ideal candidates for our carbon-boost blending technology.",
    wasteTypes: ["Heavy Metal Sludge", "Solvent Waste", "Resin Waste"],
    color: "from-amber to-orange-500",
    bg: "bg-amber/10",
  },
  {
    title: "Petrochemical",
    icon: Factory,
    description:
      "Complex hydrocarbon waste and spent catalysts from refineries — transformed into fuel-grade pellets with our stabilization process.",
    wasteTypes: ["Spent Catalyst", "Hydrocarbon Waste", "Tank Bottom Sludge"],
    color: "from-emerald-400 to-lime",
    bg: "bg-emerald-400/10",
  },
  {
    title: "Pesticide & Agrochemical",
    icon: SprayCan,
    description:
      "Organophosphate and carbamate-based waste safely stabilized before pelletization — ensuring zero hazardous residue in the final fuel.",
    wasteTypes: ["Pesticide Residue", "Formulation Waste", "Container Residue"],
    color: "from-orange-500 to-amber",
    bg: "bg-orange-500/10",
  },
];

export default function CustomerSegments() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
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
            Customer Segments
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Serving{" "}
            <span className="text-lime">Key Industries</span>
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            We partner with industries generating complex hazardous waste,
            transforming their liabilities into valuable alternative fuel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segments.map((segment, i) => (
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
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${segment.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <segment.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-off-white">
                        {segment.title}
                      </h3>
                      <p className="text-xs font-semibold tracking-[0.15em] text-muted-light uppercase mt-1">
                        Industrial Partner
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-light leading-relaxed mb-6 flex-grow">
                    {segment.description}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-off-white uppercase tracking-wider mb-3">
                      Typical Waste Types
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {segment.wasteTypes.map((waste, j) => (
                        <span
                          key={j}
                          className="px-3 py-1.5 text-xs font-medium rounded-full glass border border-white/10 text-muted-light"
                        >
                          {waste}
                        </span>
                      ))}
                    </div>
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
