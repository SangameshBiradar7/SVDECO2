"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Mail } from "lucide-react";

const team = [
  {
    name: "Vegiraju Verma",
    role: "Founder & CEO",
    bio: "Strategic leader with deep expertise in industrial waste management and sustainable business models.",
    image: null,
    initials: "VV",
    color: "from-lime to-green-400",
  },
  {
    name: "Vishnu Shetty",
    role: "Co-Founder & COO",
    bio: "Operations expert overseeing logistics, processing efficiency, and supply chain management.",
    image: null,
    initials: "VS",
    color: "from-amber to-orange-500",
  },
  {
    name: "Somanath Hunaje",
    role: "Co-Founder & CTO",
    bio: "Technology lead driving stabilization R&D, pelletization innovation, and process optimization.",
    image: null,
    initials: "SH",
    color: "from-emerald-400 to-lime",
  },
  {
    name: "Dhanraj Patil",
    role: "Co-Founder & CFO",
    bio: "Financial strategist managing investor relations, fundraising, and fiscal planning.",
    image: null,
    initials: "DP",
    color: "from-orange-500 to-amber",
  },
  {
    name: "Dr. Kashinath",
    role: "Mentor & Advisor",
    bio: "Industry veteran providing strategic guidance on regulatory compliance and technical processes.",
    image: null,
    initials: "DK",
    color: "from-lime-light to-lime",
  },
];

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="team"
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
            Our Team
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Meet the{" "}
            <span className="text-lime">Founders</span>
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            A diverse team of operators, technologists, and strategists united by a
            common mission — to transform waste into value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 border border-white/5 card-hover h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-lime/10 to-transparent rounded-full blur-3xl group-hover:from-lime/20 transition-all duration-500" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold text-deep-green mb-6 shadow-lg`}
                  >
                    {member.initials}
                  </div>

                  <h3 className="text-xl font-bold text-off-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold tracking-[0.15em] text-lime uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-light leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      aria-label={`${member.name} LinkedIn`}
                      className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-light hover:text-lime hover:border-lime/30 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label={`Email ${member.name}`}
                      className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-light hover:text-lime hover:border-lime/30 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
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
