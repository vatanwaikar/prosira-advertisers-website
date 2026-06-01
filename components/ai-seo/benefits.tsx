"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Sparkles,
  SearchCheck,
  BrainCircuit,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: SearchCheck,
    title: "Better AI Search Visibility",
    description:
      "Increase your chances of appearing in AI-generated search answers and recommendations.",
  },
  {
    icon: ShieldCheck,
    title: "Stronger Brand Authority",
    description:
      "Build trust and topical authority across AI-powered search ecosystems.",
  },
  {
    icon: Sparkles,
    title: "Future-Proof SEO Strategy",
    description:
      "Prepare your business for the next evolution of search and discovery.",
  },
  {
    icon: TrendingUp,
    title: "Higher Organic Growth",
    description:
      "Improve long-term organic reach through semantic and AI-focused optimization.",
  },
  {
    icon: BrainCircuit,
    title: "Semantic Relevance",
    description:
      "Help AI systems understand your business, services, and expertise more effectively.",
  },
  {
    icon: Users,
    title: "Better User Engagement",
    description:
      "Deliver structured and meaningful content experiences for users and AI engines.",
  },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-400 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            AI SEO Benefits
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Benefits of{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI SEO
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            AI SEO helps businesses adapt to the future of search with
            stronger visibility, authority, and discoverability.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
            >
              <benefit.icon className="mb-5 h-10 w-10 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />

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