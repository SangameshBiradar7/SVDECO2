"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Factory,
  FlaskConical,
  TrendingUp,
} from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 overflow-hidden bg-deep-green"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-lime uppercase block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Let&apos;s Build a{" "}
            <span className="text-lime">Greener</span>{" "}
            Future Together
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            Whether you're a waste generator, a cement plant, or an investor — we'd
            love to explore how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Factory,
              title: "For Waste Generators",
              desc: "Looking for a compliant, sustainable solution for your hazardous waste? Let's discuss your off-take requirements.",
              cta: "Discuss Partnership",
              href: "mailto:partnerships@svdecoservices.com",
              color: "text-amber",
              accent: "border-amber/20",
            },
            {
              icon: FlaskConical,
              title: "For Cement Plants",
              desc: "Interested in high-quality, cost-effective alternative fuel? Explore how our pellets can power your kilns.",
              cta: "Explore Fuel Supply",
              href: "mailto:supply@svdecoservices.com",
              color: "text-lime",
              accent: "border-lime/20",
            },
            {
              icon: TrendingUp,
              title: "For Investors",
              desc: "Believe in the power of circular economy? Join us in building North Karnataka's leading waste-to-energy company.",
              cta: "Investment Enquiry",
              href: "mailto:investors@svdecoservices.com",
              color: "text-emerald-400",
              accent: "border-emerald-400/20",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              className="group"
            >
              <div
                className={`glass rounded-3xl p-8 border ${card.accent} card-hover h-full relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-lime/10 to-transparent rounded-full blur-3xl group-hover:from-lime/20 transition-all duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <card.icon className={`w-10 h-10 ${card.color} mb-6`} />
                  <h3 className="text-xl font-bold text-off-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-light leading-relaxed mb-6 flex-grow">
                    {card.desc}
                  </p>
                  <a
                    href={card.href}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      i === 0
                        ? "bg-amber text-deep-green hover:bg-amber-light shadow-lg shadow-amber/20"
                        : i === 1
                        ? "bg-lime text-deep-green hover:bg-lime-light shadow-lg shadow-lime/20"
                        : "bg-emerald-400 text-deep-green hover:bg-emerald-300 shadow-lg shadow-emerald-400/20"
                    }`}
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-strong rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-light uppercase tracking-wider mb-1">
                  Email
                </p>
                 <p className="text-sm font-semibold text-off-white">
                   svdeco963@gmail.com
                 </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-light uppercase tracking-wider mb-1">
                  Phone
                </p>
                 <p className="text-sm font-semibold text-off-white">
                   9449579555
                 </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-light uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-sm font-semibold text-off-white">
                  Bidar, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
