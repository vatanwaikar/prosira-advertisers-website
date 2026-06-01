"use client";

import { motion } from "framer-motion";
import { BrainCircuit, SearchCheck, Sparkles } from "lucide-react";

export function WhatIsAISEO() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-12 lg:px-20">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-400 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            AI Search Optimization
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            What is{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI SEO?
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-white/70">
            AI SEO is the process of optimizing websites for AI-powered
            search engines and answer engines such as Google AI Overviews,
            ChatGPT, Gemini, Perplexity, and Bing Copilot.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Unlike traditional SEO, AI SEO focuses on semantic content,
            structured data, entity optimization, topical authority,
            and answer-focused content architecture that helps AI systems
            understand and recommend your business.
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {[
            {
              icon: BrainCircuit,
              title: "Semantic SEO",
              description:
                "AI engines understand meaning, entities, and relationships instead of just keywords.",
            },
            {
              icon: SearchCheck,
              title: "Answer Engine Optimization",
              description:
                "Structured answers help AI systems directly use and recommend your content.",
            },
            {
              icon: Sparkles,
              title: "Generative Engine Optimization",
              description:
                "Optimize visibility inside AI-generated search experiences and AI answers.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
            >
              <item.icon className="mb-5 h-10 w-10 text-cyan-400" />

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}