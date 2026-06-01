"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-28 text-white md:px-12 lg:px-20">

      {/* Golden Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-sm text-[#D4AF37] backdrop-blur-xl"
        >
          <Sparkles className="h-4 w-4" />
          Industry-Focused Marketing
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          Industry-Specific{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] bg-clip-text text-transparent">
            AI SEO & Marketing
          </span>{" "}
          Solutions
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          Prosira helps businesses across healthcare, real estate,
          restaurants, education, manufacturing, pest control, and
          more grow with AI SEO, branding, performance marketing,
          and modern digital strategies.
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
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Book Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-[#D4AF37]/10"
          >
            View Case Studies
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
            "Healthcare Marketing",
            "Builder Marketing",
            "Restaurant Growth",
            "AI-Driven SEO",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 p-5 backdrop-blur-xl"
            >
              <Building2 className="mb-3 h-6 w-6 text-[#D4AF37]" />

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