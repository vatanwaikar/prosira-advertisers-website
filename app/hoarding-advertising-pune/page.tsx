import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hoarding Advertising in Pune | Billboard Advertising – Prosira Advertisers",
  description:
    "Prosira Advertisers provides high-visibility hoarding advertising in Pune with premium billboard locations, strategic planning, and end-to-end execution.",
};

export default function HoardingAdvertisingPunePage() {
  return (
    <>
      <main className="container mx-auto px-4 py-16 sm:py-20 max-w-6xl">
        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Hoarding Advertising in <span className="text-primary">Pune</span>
        </h1>

        {/* Intro */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mb-10">
          Prosira Advertisers is a trusted hoarding advertising agency in Pune,
          offering strategic billboard placements across high-traffic locations.
          Our hoarding campaigns help brands achieve maximum visibility, recall,
          and local market impact.
        </p>

        {/* Services */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Our Hoarding Advertising Services in Pune
        </h2>

        <ul className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 list-disc pl-5">
          <li>Premium Billboard & Hoarding Placements</li>
          <li>Highway & Junction Hoardings</li>
          <li>Unipole & Large Format Displays</li>
          <li>Creative Design & Artwork Printing</li>
          <li>Government Permissions & Compliance</li>
          <li>Campaign Monitoring & Reporting</li>
        </ul>

        {/* Why Us */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Why Choose Prosira Advertisers for Hoarding Advertising?
        </h2>

        <p className="text-muted-foreground max-w-3xl mb-10">
          With strong media partnerships and local execution expertise, we
          identify the best hoarding locations in Pune. From planning to
          installation, we manage the complete process to ensure consistent
          brand exposure and ROI.
        </p>

        {/* Locations */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Hoarding Locations Across Pune
        </h2>

        <p className="text-muted-foreground max-w-3xl mb-12">
          Our hoarding advertising campaigns cover prime Pune areas such as
          Swargate, Shivajinagar, Hadapsar, Kothrud, Baner, Wakad, Hinjewadi,
          Pimpri-Chinchwad, and major city entry points.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-center font-medium"
          >
            Get Hoarding Advertising Quote in Pune
          </Link>

          <Link
            href="/advertising-agency-in-pune"
            className="border border-primary/40 px-8 py-4 rounded-lg text-center font-medium hover:bg-primary/10"
          >
            Advertising Agency in Pune
          </Link>
        </div>
      </main>

      {/* ===== SERVICE SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hoarding Advertising",
            "provider": {
              "@type": "AdvertisingAgency",
              "name": "Prosira Advertisers",
              "url": "https://prosiraadvertisers.com"
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
