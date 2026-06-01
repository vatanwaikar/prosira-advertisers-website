"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  BrainCircuit,
  ShieldCheck,
  Users,
  SearchCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Higher Industry Visibility",
    description:
      "Improve search rankings and AI discoverability within your specific industry niche.",
  },
  {
    icon: BrainCircuit,
    title: "Better AI Recognition",
    description:
      "Help AI systems understand your expertise, services, and business relevance.",
  },
  {
    icon: ShieldCheck,
    title: "Stronger Brand Authority",
    description:
      "Build trust and credibility through industry-focused content and semantic SEO.",
  },
  {
    icon: Users,
    title: "Better Lead Quality",
    description:
      "Attract more relevant customers with highly targeted messaging and strategies.",
  },
  {
    icon: SearchCheck,
    title: "Improved Organic Growth",
    description:
      "Strengthen topical authority and long-term organic search visibility.",
  },
  {
    icon: Sparkles,
    title: "Future-Ready Marketing",
    description:
      "Prepare your business for the future of AI-powered search and digital discovery.",
  },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Golden Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-sm text-[#D4AF37] backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Industry Growth Benefits
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Benefits of{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] bg-clip-text text-transparent">
              Industry-Focused AI SEO
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Specialized AI SEO strategies designed to improve visibility,
            authority, and growth within your industry.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10"
            >
              <benefit.icon className="mb-5 h-10 w-10 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110" />

              <h3 className="text-2xl font-semibold leading-snug">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/70">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}