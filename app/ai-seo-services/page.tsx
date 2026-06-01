import { Metadata } from "next";

import { Hero } from "@/components/ai-seo/hero";
import { WhatIsAISEO } from "@/components/ai-seo/what-is-ai-seo";
import { GEOSection } from "@/components/ai-seo/geo-section";
import { AEOSection } from "@/components/ai-seo/aeo-section";
import { Platforms } from "@/components/ai-seo/platforms";
import { Services } from "@/components/ai-seo/services";
import { Process } from "@/components/ai-seo/process";
import { Benefits } from "@/components/ai-seo/benefits";
import { Industries } from "@/components/ai-seo/industries";
import { FAQs } from "@/components/ai-seo/faqs";
import { CTA } from "@/components/ai-seo/cta";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI SEO Services in Pune | GEO & AEO Agency | Prosira",
  description:
    "Prosira offers AI SEO services in Pune including GEO, AEO, AI search optimization, ChatGPT visibility, Google AI Overviews optimization, and semantic SEO strategies.",
};

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI SEO is the process of optimizing websites for AI-powered search engines such as ChatGPT, Google AI Overviews, Gemini, and Perplexity.",
      },
    },

    {
      "@type": "Question",
      name: "What is GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "GEO stands for Generative Engine Optimization. It helps businesses appear inside AI-generated search answers and recommendations.",
      },
    },

    {
      "@type": "Question",
      name: "What is AEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AEO stands for Answer Engine Optimization. It focuses on optimizing content for direct AI-generated answers.",
      },
    },

    {
      "@type": "Question",
      name: "Why is AI SEO important?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI SEO improves visibility across AI-powered search platforms such as ChatGPT, Gemini, Google AI Overviews, and Perplexity.",
      },
    },

    {
      "@type": "Question",
      name: "Can AI SEO improve business visibility?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. AI SEO helps businesses improve discoverability, authority, and search visibility across modern AI-driven search ecosystems.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://prosira.in",
    },

    {
      "@type": "ListItem",
      position: 2,
      name: "AI SEO Services",
      item: "https://prosira.in/ai-seo-services",
    },
  ],
};

export default function AISEOPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
        <Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

<Script
  id="breadcrumb-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>

      <Hero />
      <WhatIsAISEO />
      <GEOSection />
      <AEOSection />
      <Platforms />
      <Services />
      <Process />
      <Benefits />
      <Industries />
      <FAQs />
      <CTA />
    </main>
  );
}