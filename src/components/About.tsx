"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Target, Heart } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden bg-deep-green"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lime/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-lime uppercase block mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Building a{" "}
            <span className="text-lime">Greener</span>{" "}
            Industrial Future
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-light leading-relaxed">
                SVD Eco Services is a North Karnataka-based startup focused on
                transforming hazardous industrial waste into clean, high-calorific
                alternative fuel for cement kilns.
              </p>
              <p className="text-lg text-muted-light leading-relaxed">
                Founded with the vision of bridging the gap between waste generators
                and energy-intensive industries, we combine advanced chemical
                stabilization technology with precision pelletization to create
                fuel that meets rigorous quality standards.
              </p>
              <p className="text-lg text-muted-light leading-relaxed">
                Our mission is to build a sustainable waste-to-energy ecosystem
                that benefits industry, protects the environment, and creates
                livelihoods — proving that circular economy models can be both
                commercially viable and environmentally responsible.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Leaf,
                title: "Our Vision",
                desc: "A future where no industrial waste goes to landfill and every tonne of waste becomes a source of clean energy.",
                color: "text-lime",
              },
              {
                icon: Target,
                title: "Our Mission",
                desc: "To become North Karnataka's leading waste-to-energy solutions provider by 2030.",
                color: "text-amber",
              },
              {
                icon: Heart,
                title: "Our Values",
                desc: "Sustainability, transparency, innovation, and accountability in every process we undertake.",
                color: "text-emerald-400",
              },
              {
                icon: Leaf,
                title: "Our Promise",
                desc: "Complete regulatory compliance, digital traceability, and consistent fuel quality for every client.",
                color: "text-lime",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 border border-white/5 card-hover"
              >
                <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                <h4 className="text-sm font-bold text-off-white uppercase tracking-wider mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
