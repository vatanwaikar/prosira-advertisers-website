"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Healthcare Brand",
    feedback:
      "Prosira completely transformed our online visibility and lead generation strategy. The results exceeded expectations.",
  },
  {
    name: "Real Estate Company",
    feedback:
      "Their SEO and Google Ads strategies significantly improved our project inquiries and digital presence.",
  },
  {
    name: "Restaurant Business",
    feedback:
      "From branding to digital growth, Prosira helped us build a modern and impactful online identity.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
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
            What Clients{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Say
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Trusted by businesses across industries for growth-focused
            marketing strategies.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
            >
              <Quote className="mb-6 h-10 w-10 text-cyan-400" />

              <p className="leading-relaxed text-white/70">
                "{testimonial.feedback}"
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    {testimonial.name}
                  </h3>
                </div>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}