"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Search,
  Globe,
  Sparkles,
} from "lucide-react";

const caseStudies = [
  {
    icon: TrendingUp,
    title: "Google Ads Growth",
    category: "Performance Marketing",
    description:
      "Scaled lead generation campaigns with optimized Google Ads strategies and landing page improvements.",
    href: "/case-studies/google-ads-growth",
  },
  {
    icon: Search,
    title: "SEO Traffic Growth",
    category: "SEO & Organic Growth",
    description:
      "Improved rankings, topical authority, and organic visibility through semantic SEO strategies.",
    href: "/case-studies/seo-traffic-growth",
  },
  {
    icon: Globe,
    title: "Website Transformation",
    category: "Website Development",
    description:
      "Redesigned outdated websites into premium modern experiences optimized for conversion and SEO.",
    href: "/case-studies/website-redesign",
  },
];

export function FeaturedCaseStudies() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
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
            Featured Projects
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Real campaigns, measurable growth, and performance-driven
            marketing results across industries.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
            >
              <study.icon className="mb-6 h-10 w-10 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />

              <p className="mb-3 text-sm uppercase tracking-widest text-cyan-400">
                {study.category}
              </p>

              <h3 className="text-3xl font-semibold leading-tight">
                {study.title}
              </h3>

              <p className="mt-5 leading-relaxed text-white/70">
                {study.description}
              </p>

              <Link
                href={study.href}
                className="mt-8 inline-flex items-center text-sm font-medium text-cyan-400 transition-all duration-300 hover:translate-x-1"
              >
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}