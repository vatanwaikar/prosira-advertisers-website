"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  UtensilsCrossed,
  GraduationCap,
  Bug,
  Factory,
  ShoppingBag,
  Rocket,
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
  },
  {
    icon: Building2,
    title: "Builders & Real Estate",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
  },
  {
    icon: Bug,
    title: "Pest Control",
  },
  {
    icon: GraduationCap,
    title: "Education",
  },
  {
    icon: Factory,
    title: "Manufacturing",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
  },
  {
    icon: Rocket,
    title: "Startups",
  },
];

export function Industries() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
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
            Industries We Help with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI SEO
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            AI-first SEO strategies tailored for modern businesses across
            multiple industries.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30 hover:bg-white/10"
            >
              <industry.icon className="mx-auto mb-5 h-12 w-12 text-purple-400 transition-transform duration-300 group-hover:scale-110" />

              <h3 className="text-2xl font-semibold leading-snug">
                {industry.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
