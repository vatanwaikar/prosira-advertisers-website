import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertising Agency in Pune | Prosira Advertisers",
  description:
    "Prosira Advertisers is a trusted advertising agency in Pune offering TV, radio, outdoor hoardings, digital marketing, branding, and event solutions for businesses across Pune.",
};

export default function AdvertisingAgencyPunePage() {
  return (
    <>
      {/* ===== PAGE CONTENT ===== */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Advertising Agency in <span className="text-primary">Pune</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Prosira Advertisers is a full-service advertising agency in Pune,
          helping brands grow through strategic media planning, creative
          campaigns, outdoor hoardings, digital marketing, and event promotions.
          With deep local market knowledge, we deliver measurable results for
          businesses across Pune and Maharashtra.
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          Our Advertising Services in Pune
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 mb-14">
          <li>Television Advertising in Pune</li>
          <li>Radio Advertising in Pune</li>
          <li>Outdoor Hoardings & Billboards</li>
          <li>Digital Marketing & SEO Services</li>
          <li>Brand Strategy & Creative Design</li>
          <li>Event Management & Promotions</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-6">
          Why Choose Prosira Advertisers in Pune?
        </h2>

        <p className="text-muted-foreground max-w-3xl mb-10">
          As a Pune-based advertising agency, we understand local audiences,
          media channels, and buying behavior. Our team combines creativity,
          data-driven strategy, and strong media partnerships to ensure your
          brand stands out across Pune’s competitive market.
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          Trusted Local Advertising Partner
        </h2>

        <p className="text-muted-foreground max-w-3xl mb-12">
          From startups to established brands, Prosira Advertisers has executed
          over 2000 successful campaigns across Pune. Our local presence,
          transparent processes, and performance-driven approach make us a
          reliable advertising partner.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium"
          >
            Contact Advertising Agency in Pune
          </Link>
        </div>
      </section>

      {/* ===== LOCAL BUSINESS SCHEMA (CITY PAGE) ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AdvertisingAgency",
            "name": "Prosira Advertisers",
            "url": "https://prosiraadvertisers.com/advertising-agency-in-pune",
            "telephone": "+91-9028815714",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3rd Floor, Patil Plaza, Swargate",
              "addressLocality": "Pune",
              "addressRegion": "MH",
              "postalCode": "411037",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": "Pune"
            }
          }),
        }}
      />
    </>
  );
}
