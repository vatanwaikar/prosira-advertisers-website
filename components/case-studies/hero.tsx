"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-28 text-white md:px-12 lg:px-20">

      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-400 backdrop-blur-xl"
        >
          <Sparkles className="h-4 w-4" />
          Real Marketing Results
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          Real{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Case Studies
          </span>{" "}
          & Proven Growth
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          Explore how Prosira helps businesses grow through SEO,
          Google Ads, AI SEO, branding, website development,
          and performance-driven marketing strategies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Book Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4"
        >
          {[
            "120+ Campaigns",
            "50+ Brands",
            "5M+ Reach Generated",
            "AI-Driven Marketing",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <BarChart3 className="mb-3 h-6 w-6 text-cyan-400" />

              <p className="text-sm text-white/70">
                {item}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}