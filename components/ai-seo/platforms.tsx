"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  Search,
  Globe,
  Cpu,
  MessageCircle,
} from "lucide-react";

const platforms = [
  {
    icon: Search,
    title: "Google AI Overviews",
    description:
      "Optimize visibility in Google's AI-generated search summaries and answers.",
  },
  {
    icon: Bot,
    title: "ChatGPT",
    description:
      "Increase the chances of your business being recommended in ChatGPT responses.",
  },
  {
    icon: Sparkles,
    title: "Gemini",
    description:
      "Improve semantic relevance for Google's Gemini AI ecosystem.",
  },
  {
    icon: Globe,
    title: "Perplexity",
    description:
      "Structure content for AI-powered answer discovery and citations.",
  },
  {
    icon: Cpu,
    title: "Bing Copilot",
    description:
      "Strengthen visibility within Microsoft's AI-powered search experience.",
  },
  {
    icon: MessageCircle,
    title: "Voice Search",
    description:
      "Prepare your content for conversational and voice-driven AI search.",
  },
];

export function Platforms() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-purple-400 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            AI Platforms
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            AI Platforms We{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Optimize For
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            We help businesses become discoverable across the modern AI-powered
            search ecosystem.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30 hover:bg-white/10"
            >
              <item.icon className="mb-5 h-10 w-10 text-purple-400" />

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}