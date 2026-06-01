"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why are industry-specific pages important for SEO?",
    answer:
      "Industry-specific pages help search engines and AI systems understand your expertise, services, and relevance within a particular niche.",
  },
  {
    question: "What is industry-focused AI SEO?",
    answer:
      "Industry-focused AI SEO combines semantic SEO, GEO, and AEO strategies tailored for specific business industries and audiences.",
  },
  {
    question: "Can industry pages improve rankings?",
    answer:
      "Yes. Industry-focused pages improve topical authority, semantic relevance, and long-tail keyword visibility.",
  },
  {
    question: "How does AI SEO help businesses?",
    answer:
      "AI SEO improves discoverability across AI-powered search engines such as ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
  },
  {
    question: "Which industries does Prosira work with?",
    answer:
      "Prosira works with healthcare, builders, restaurants, education, pest control, manufacturing, startups, and e-commerce brands.",
  },
  {
    question: "What is topical authority?",
    answer:
      "Topical authority is the level of expertise and trust search engines associate with your website for a specific subject or industry.",
  },
  {
    question: "Do industry pages help AI search visibility?",
    answer:
      "Yes. AI systems prefer websites with strong semantic structure and industry-specific expertise signals.",
  },
  {
    question: "Why choose Prosira for industry-focused SEO?",
    answer:
      "Prosira combines AI SEO, branding, performance marketing, and semantic optimization to help businesses dominate their niche.",
  },
];

export function FAQ() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Golden Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Everything you need to know about industry-focused AI SEO
            and digital growth strategies.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 p-6 backdrop-blur-xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-[#D4AF37]">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-base leading-relaxed text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}