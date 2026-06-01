"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Search, Sparkles } from "lucide-react";

export function AEOSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {[
            {
              icon: MessageSquareText,
              title: "Direct AI Answers",
              description:
                "Answer-focused content helps AI systems directly understand and use your website content.",
            },
            {
              icon: Search,
              title: "Featured Visibility",
              description:
                "Well-structured answers increase your chances of appearing in AI summaries and snippets.",
            },
            {
              icon: Sparkles,
              title: "Semantic Structure",
              description:
                "Question-answer architecture improves AI readability and contextual understanding.",
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

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-400 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Answer Engine Optimization
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            What is{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AEO?
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-white/70">
            Answer Engine Optimization (AEO) helps your website provide
            direct, structured, and accurate answers that AI systems and
            search engines can easily understand and display.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Modern AI search engines prioritize content that is organized,
            semantic, and written in a clear question-answer format.
            AEO ensures your website becomes AI-readable and future-ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}