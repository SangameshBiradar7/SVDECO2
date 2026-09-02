"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Wallet, PieChart } from "lucide-react";

const fundingData = {
  total: "₹75 LAKH",
  founderInvestment: "₹20 LAKH",
  externalFunding: "₹0",
  allocation: [
    { category: "Equipment & Technology", percentage: 35, amount: "₹26.25L", color: "bg-lime" },
    { category: "Working Capital", percentage: 25, amount: "₹18.75L", color: "bg-amber" },
    { category: "Facility & Infrastructure", percentage: 20, amount: "₹15L", color: "bg-emerald-400" },
    { category: "Logistics & Operations", percentage: 15, amount: "₹11.25L", color: "bg-orange-500" },
    { category: "Contingency", percentage: 5, amount: "₹3.75L", color: "bg-muted-light" },
  ],
};

export default function Funding() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="funding"
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
            Investment
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Funding{" "}
            <span className="text-lime">Requirements</span>
          </h2>
          <p className="text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
            We are seeking strategic partners to help scale our impact across North
            Karnataka.
          </p>
        </motion.div>

        {/* Key metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              label: "Total Requirement",
              value: fundingData.total,
              icon: TrendingUp,
              color: "text-lime",
            },
            {
              label: "Founder Investment",
              value: fundingData.founderInvestment,
              icon: Wallet,
              color: "text-amber",
            },
            {
              label: "External Funding Sought",
              value: fundingData.externalFunding,
              icon: PieChart,
              color: "text-emerald-400",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              className="glass rounded-3xl p-8 border border-white/5 text-center card-hover"
            >
              <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-4`} />
              <p className="text-xs text-muted-light uppercase tracking-wider mb-2">
                {item.label}
              </p>
              <p className={`text-2xl md:text-3xl font-bold ${item.color}`}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Allocation Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <h3 className="text-xl font-bold text-off-white mb-2">
            Capital Allocation
          </h3>
          <p className="text-sm text-muted-light mb-8">
            Detailed breakdown of the ₹75 lakh investment requirement
          </p>

          <div className="space-y-4">
            {fundingData.allocation.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm font-medium text-off-white">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-light">
                      {item.amount}
                    </span>
                    <span className="text-sm font-semibold text-lime w-12 text-right">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + 0.1 * i }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-lime/10 border border-lime/20">
            <p className="text-xs text-lime leading-relaxed text-center">
              Founder commitment: ₹20 lakh already invested in equipment,
              testing, and pilot operations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
