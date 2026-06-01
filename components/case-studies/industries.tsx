"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  UtensilsCrossed,
  GraduationCap,
  Bug,
  Factory,
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "AI SEO and lead generation strategies for clinics, hospitals, and healthcare brands.",
  },
  {
    icon: Building2,
    title: "Builders & Real Estate",
    description:
      "Performance marketing and SEO campaigns for builders, developers, and real estate businesses.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "Local SEO, social media, and branding strategies for restaurants and cafes.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Lead-focused campaigns and visibility strategies for educational institutes.",
  },
  {
    icon: Bug,
    title: "Pest Control",
    description:
      "Google Ads and local SEO systems designed for service-based businesses.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Industrial branding, SEO, and B2B digital growth strategies for manufacturers.",
  },
];

export function Industries() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
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
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Industries We’ve Helped{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Grow
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Strategic marketing solutions tailored for different industries
            and business models.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
            >
              <industry.icon className="mb-5 h-10 w-10 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />

              <h3 className="text-2xl font-semibold">
                {industry.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/70">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}