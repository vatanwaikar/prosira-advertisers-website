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
    question: "What is AI SEO?",
    answer:
      "AI SEO is the process of optimizing websites for AI-powered search engines such as ChatGPT, Google AI Overviews, Gemini, Perplexity, and Bing Copilot.",
  },
  {
    question: "What is the difference between SEO and AI SEO?",
    answer:
      "Traditional SEO focuses on search rankings, while AI SEO focuses on semantic understanding, structured data, answer optimization, and AI visibility.",
  },
  {
    question: "What is GEO?",
    answer:
      "GEO stands for Generative Engine Optimization. It helps businesses appear inside AI-generated search answers and recommendations.",
  },
  {
    question: "What is AEO?",
    answer:
      "AEO stands for Answer Engine Optimization. It focuses on structuring content in a way AI systems can directly understand and display.",
  },
  {
    question: "Can ChatGPT recommend my business?",
    answer:
      "Yes. With proper AI SEO, semantic optimization, and authority building, your business can improve its visibility across AI systems.",
  },
  {
    question: "How long does AI SEO take?",
    answer:
      "AI SEO is a long-term strategy. Initial improvements may appear within a few months depending on competition and content quality.",
  },
  {
    question: "Is AI SEO important in 2026?",
    answer:
      "Yes. AI-powered search is rapidly growing, and businesses without AI optimization may lose visibility in the future search ecosystem.",
  },
  {
    question: "Why choose Prosira for AI SEO?",
    answer:
      "Prosira combines modern SEO, GEO, AEO, semantic optimization, and AI-first strategies to help businesses grow in the next generation of search.",
  },
];

export function FAQs() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:px-12 lg:px-20">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
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
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Everything you need to know about AI SEO, GEO, and AEO.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-cyan-400">
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
