"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Building2,
  UtensilsCrossed,
  GraduationCap,
  Bug,
  Factory,
  Rocket,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "AI SEO, branding, and patient-focused digital growth strategies for clinics and hospitals.",
    href: "/industries/healthcare",
  },
  {
    icon: Building2,
    title: "Builders & Real Estate",
    description:
      "Lead generation and SEO strategies designed for builders and real estate brands.",
    href: "/industries/builders",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "Local SEO, branding, and social media marketing for restaurants and cafes.",
    href: "/industries/restaurants",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Digital visibility and lead-focused campaigns for educational institutions.",
    href: "/industries/education",
  },
  {
    icon: Bug,
    title: "Pest Control",
    description:
      "Performance marketing and local SEO strategies for service-based businesses.",
    href: "/industries/pest-control",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Industrial branding, SEO, and B2B growth solutions for manufacturers.",
    href: "/industries/manufacturing",
  },
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Growth-focused AI SEO and branding strategies for startups and emerging brands.",
    href: "/industries/startups",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "SEO and conversion-focused digital growth strategies for online stores.",
    href: "/industries/ecommerce",
  },
];

export function IndustriesGrid() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
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
            Industries We{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] bg-clip-text text-transparent">
              Specialize In
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Customized AI SEO, branding, and digital marketing solutions
            tailored for specific industries and business models.
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
              className="group rounded-3xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10"
            >
              <industry.icon className="mb-5 h-10 w-10 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110" />

              <h3 className="text-2xl font-semibold leading-snug">
                {industry.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/70">
                {industry.description}
              </p>

              {/* <Link
                href={industry.href}
                className="mt-6 inline-flex items-center text-sm font-medium text-[#D4AF37] transition-all duration-300 hover:translate-x-1"
              >
                Explore Industry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}