"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-28 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl md:p-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-400"
        >
          <Sparkles className="h-4 w-4" />
          Let’s Build Your Growth Story
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold leading-tight md:text-6xl"
        >
          Ready to Become Our{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Next Success Story?
          </span>
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70"
        >
          Partner with Prosira to scale your business with AI SEO,
          Google Ads, branding, website development, and performance-driven
          digital marketing strategies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Book Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <Link
            href="/ai-seo-services"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
            Explore AI SEO
          </Link>
        </motion.div>
      </div>
    </section>
  );
}