import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertising Agency in Nagpur | Prosira Advertisers",
  description:
    "Prosira Advertisers is a reliable advertising agency in Nagpur offering TV, radio, outdoor advertising, digital marketing, branding, and event management services.",
};

export default function AdvertisingAgencyNagpurPage() {
  return (
    <>
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Advertising Agency in <span className="text-primary">Nagpur</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Prosira Advertisers is a trusted advertising agency in Nagpur,
          supporting brands with strategic advertising, outdoor hoardings,
          digital marketing, and event promotions across the Vidarbha region.
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          Our Advertising Services in Nagpur
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 mb-14">
          <li>Television Advertising in Nagpur</li>
          <li>Radio Advertising in Nagpur</li>
          <li>Outdoor Hoardings & Billboards</li>
          <li>Digital Marketing & SEO Services</li>
          <li>Brand Strategy & Creative Design</li>
          <li>Event Management & Promotions</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-6">
          Why Choose Prosira Advertisers in Nagpur?
        </h2>

        <p className="text-muted-foreground max-w-3xl mb-10">
          Our understanding of the Nagpur market, combined with proven media
          strategies, helps brands build strong regional visibility and trust.
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          Local Advertising Experts in Nagpur
        </h2>

        <p className="text-muted-foreground max-w-3xl mb-12">
          We work closely with local businesses and national brands to deliver
          advertising campaigns that perform effectively across Nagpur and
          nearby regions.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium"
          >
            Contact Advertising Agency in Nagpur
          </Link>
        </div>
      </section>

      {/* ===== LOCAL BUSINESS SCHEMA (NAGPUR) ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AdvertisingAgency",
            "name": "Prosira Advertisers",
            "url": "https://prosiraadvertisers.com/advertising-agency-in-nagpur",
            "telephone": "+91-9028815714",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagpur",
              "addressRegion": "MH",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": "Nagpur"
            }
          }),
        }}
      />
    </>
  );
}
