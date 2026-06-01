"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  MousePointerClick,
  BarChart3,
} from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "320%",
    label: "Average Growth in Leads",
  },
  {
    icon: Users,
    value: "50+",
    label: "Brands Worked With",
  },
  {
    icon: MousePointerClick,
    value: "2M+",
    label: "Ad Clicks Generated",
  },
  {
    icon: BarChart3,
    value: "120+",
    label: "Successful Campaigns",
  },
];

export function Results() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Real{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Results
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Performance-focused strategies designed to deliver measurable
            business growth and long-term visibility.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30 hover:bg-white/10"
            >
              <stat.icon className="mx-auto mb-5 h-10 w-10 text-purple-400 transition-transform duration-300 group-hover:scale-110" />

              <h3 className="text-5xl font-bold tracking-tight">
                {stat.value}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-white/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}