"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function PremiumHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center px-6 py-3 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
        >
          <span className="text-primary text-sm font-medium tracking-wide">
            ✦ Premium Advertising Agency
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-white">We Build </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
            Powerful Brand Presence
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Strategic advertising, digital growth, and experiential marketing that delivers measurable results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            Explore Our Work
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border-2 border-primary/50 text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-black hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full opacity-40" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-primary rounded-full opacity-50" />
      <div className="absolute bottom-20 right-10 w-4 h-4 border border-primary/30 rounded-full" />
    </section>
  );
}
