"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Target,
  SearchCheck,
  Sparkles,
} from "lucide-react";

const points = [
  {
    icon: BrainCircuit,
    title: "Better AI Understanding",
    description:
      "Industry-specific content helps AI systems understand your expertise and relevance more accurately.",
  },
  {
    icon: Target,
    title: "Higher Conversion Potential",
    description:
      "Targeted messaging improves trust, engagement, and lead generation within your niche.",
  },
  {
    icon: SearchCheck,
    title: "Improved Search Visibility",
    description:
      "Industry-focused SEO strengthens topical authority and increases organic discoverability.",
  },
];

export function WhyIndustrySEO() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-sm text-[#D4AF37] backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Industry-Focused SEO
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Why Industry-Specific{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] bg-clip-text text-transparent">
              AI SEO Matters
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-white/70">
            Generic SEO is no longer enough. Modern AI-powered search engines
            prioritize businesses that demonstrate clear industry expertise,
            topical authority, and semantic relevance.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Industry-focused AI SEO helps businesses rank better, appear in
            AI-generated answers, and build stronger trust with users and
            search engines.
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {points.map((point, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10"
            >
              <point.icon className="mb-5 h-10 w-10 text-[#D4AF37]" />

              <h3 className="text-2xl font-semibold">
                {point.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/70">
                {point.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}