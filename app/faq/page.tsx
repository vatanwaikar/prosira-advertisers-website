import { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "FAQs | Prosira Advertisers",
  description:
    "Frequently asked questions about branding, digital marketing, SEO, website development, advertising campaigns, and marketing services by Prosira Advertisers.",
};

const faqs = [
  {
    question: "What services does Prosira Advertisers offer?",
    answer:
      "Prosira Advertisers provides branding, SEO, AI SEO, website development, performance marketing, social media marketing, hoarding advertising, lead generation, and digital marketing services.",
  },
  {
    question: "Do you provide SEO services in Pune?",
    answer:
      "Yes. We provide local SEO, AI SEO, GEO optimization, technical SEO, and Google ranking services for businesses in Pune and across India.",
  },
  {
    question: "Can you build mobile-friendly websites?",
    answer:
      "Yes. All websites developed by Prosira Advertisers are mobile-friendly, SEO-optimized, fast-loading, and responsive across devices.",
  },
  {
    question: "Do you provide Google Ads and Meta Ads services?",
    answer:
      "Yes. We manage Google Ads, Facebook Ads, Instagram Ads, and performance marketing campaigns for businesses.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO typically takes 3 to 6 months depending on competition, website authority, and industry.",
  },
  {
    question: "Do you provide website maintenance services?",
    answer:
      "Yes. We provide website maintenance, speed optimization, technical fixes, security updates, and SEO monitoring services.",
  },
  {
    question: "Can startups work with Prosira Advertisers?",
    answer:
      "Yes. We work with startups, local businesses, personal brands, and growing companies.",
  },
  {
    question: "Do you offer AI SEO and GEO optimization?",
    answer:
      "Yes. We optimize websites for AI search engines, generative search experiences, AI Overviews, and answer engine optimization.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />


      <main className="bg-black text-white min-h-screen">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <div className="mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[0.2em] mb-4">
                  Frequently Asked Questions
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Marketing & SEO FAQs
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Answers to common questions about SEO, branding,
              website development, AI SEO, and digital marketing services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-2xl p-6 bg-zinc-900/40"
              >
                <h2 className="text-xl font-semibold mb-3">
                  {faq.question}
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}