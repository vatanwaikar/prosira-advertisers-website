"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Network,
  FileSearch,
  Database,
  Sparkles,
  LayoutTemplate,
  SearchCheck,
  Bot,
  Blocks,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Search Optimization",
  },
  {
    icon: Sparkles,
    title: "GEO Strategy",
  },
  {
    icon: SearchCheck,
    title: "AEO Optimization",
  },
  {
    icon: Database,
    title: "Structured Data Implementation",
  },
  {
    icon: Network,
    title: "Entity SEO",
  },
  {
    icon: BrainCircuit,
    title: "Semantic SEO",
  },
  {
    icon: LayoutTemplate,
    title: "Topical Authority Building",
  },
  {
    icon: Blocks,
    title: "AI Content Architecture",
  },
  {
    icon: FileSearch,
    title: "AI Visibility Audits",
  },
];

export function Services() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
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
            AI SEO Services
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI SEO Services
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            We combine semantic SEO, AI optimization, structured data,
            and answer-focused strategies to help brands grow in the
            future of search.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
            >
              <service.icon className="mb-5 h-10 w-10 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />

              <h3 className="text-2xl font-semibold leading-snug">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}