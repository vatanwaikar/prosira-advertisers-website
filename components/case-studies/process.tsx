"use client";

import { motion } from "framer-motion";
import {
  Search,
  Target,
  LayoutTemplate,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research & Audit",
    description:
      "We analyze the business, competitors, audience behavior, and current digital presence.",
  },
  {
    icon: Target,
    title: "Strategy Planning",
    description:
      "Custom growth strategies are built around SEO, ads, branding, and AI-driven marketing.",
  },
  {
    icon: LayoutTemplate,
    title: "Execution & Optimization",
    description:
      "We implement campaigns, optimize websites, improve visibility, and scale performance.",
  },
  {
    icon: Rocket,
    title: "Growth & Scaling",
    description:
      "Continuous monitoring, optimization, and scaling for long-term business growth.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
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
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            A performance-focused workflow designed to deliver measurable
            results and long-term brand growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30 hover:bg-white/10"
            >
              {/* Step Number */}
              <div className="absolute right-6 top-6 text-5xl font-bold text-white/5">
                0{index + 1}
              </div>

              <step.icon className="mb-6 h-10 w-10 text-purple-400" />

              <h3 className="text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}