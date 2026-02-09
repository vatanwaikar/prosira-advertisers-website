import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertising Agency in Mumbai | Prosira Advertisers",
  description:
    "Prosira Advertisers is a professional advertising agency in Mumbai offering TV, radio, outdoor hoardings, digital marketing, branding, and event solutions for businesses across Mumbai.",
};

export default function AdvertisingAgencyMumbaiPage() {
  return (
    <>
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Advertising Agency in <span className="text-primary">Mumbai</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Prosira Advertisers is a full-service advertising agency in Mumbai,
          delivering impactful media campaigns, creative branding, outdoor
          hoardings, digital marketing, and event promotions. We help brands
          reach the right audience across Mumbai’s competitive markets.
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          Our Advertising Services in Mumbai
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 mb-14">
          <li>Television Advertising in Mumbai</li>
          <li>Radio Advertising in Mumbai</li>
          <li>Outdoor Hoardings & Billboards</li>
          <li>Digital Marketing & SEO Services</li>
          <li>Brand Strategy & Creative Design</li>
          <li>Event Management & Promotions</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-6">
          Why Choose Prosira Advertisers in Mumbai?
        </h2>

        <p className="text-muted-foreground max-w-3xl mb-10">
          Mumbai is India’s most competitive advertising market. Our strategic
          planning, media buying expertise, and creative execution ensure your
          brand gains visibility, recall, and measurable ROI across the city.
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          Trusted Advertising Partner in Mumbai
        </h2>

        <p className="text-muted-foreground max-w-3xl mb-12">
          From startups to national brands, Prosira Advertisers delivers
          performance-driven advertising campaigns across Mumbai with
          transparency and strong media partnerships.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium"
          >
            Contact Advertising Agency in Mumbai
          </Link>
        </div>
      </section>

      {/* ===== LOCAL BUSINESS SCHEMA (MUMBAI) ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AdvertisingAgency",
            "name": "Prosira Advertisers",
            "url": "https://prosiraadvertisers.com/advertising-agency-in-mumbai",
            "telephone": "+91-9028815714",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "MH",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": "Mumbai"
            }
          }),
        }}
      />
    </>
  );
}
