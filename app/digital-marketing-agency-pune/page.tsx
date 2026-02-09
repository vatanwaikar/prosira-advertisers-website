import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Pune | SEO & Social Media – Prosira Advertisers",
  description:
    "Prosira Advertisers is a results-driven digital marketing agency in Pune offering SEO, social media marketing, Google Ads, and performance marketing services.",
};

export default function DigitalMarketingPunePage() {
  return (
    <>
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Digital Marketing Agency in <span className="text-primary">Pune</span>
        </h1>

        <p className="text-muted-foreground max-w-3xl mb-10">
          Prosira Advertisers is a trusted digital marketing agency in Pune helping
          brands grow online through SEO, social media marketing, paid ads, and
          performance-driven digital strategies.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Our Digital Marketing Services in Pune
        </h2>

        <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-5 mb-12">
          <li>Search Engine Optimization (SEO)</li>
          <li>Social Media Marketing</li>
          <li>Google Ads & Performance Marketing</li>
          <li>Content & Campaign Strategy</li>
        </ul>

        <div className="flex gap-4 flex-wrap">
          <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg">
            Get Digital Marketing Quote
          </Link>
          <Link href="/advertising-agency-in-pune" className="border px-8 py-4 rounded-lg">
            Advertising Agency in Pune
          </Link>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Digital Marketing",
          "areaServed": { "@type": "City", "name": "Pune" },
          "provider": { "@type": "AdvertisingAgency", "name": "Prosira Advertisers" }
        })
      }} />
    </>
  );
}
