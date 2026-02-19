import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertising Agency in Mumbai | Prosira Advertisers",
  description:
    "Prosira Advertisers is a professional advertising agency in Mumbai offering TV, radio, outdoor hoardings, digital marketing, branding, and event solutions for businesses across Mumbai.",
  alternates: {
    canonical: "/advertising-agency-in-mumbai",
  },
  openGraph: {
    title: "Advertising Agency in Mumbai | Prosira Advertisers",
    description:
      "Full-service advertising agency in Mumbai providing TV, radio, outdoor, digital marketing and branding solutions.",
    url: "/advertising-agency-in-mumbai",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertising Agency in Mumbai | Prosira Advertisers",
    description:
      "Professional advertising agency in Mumbai offering complete media and branding solutions.",
  },
};

export default function AdvertisingAgencyMumbaiPage() {
  return (
    <>
      <section className="site-container py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Advertising Agency in <span className="text-primary">Mumbai</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Prosira Advertisers is a full-service advertising agency in Mumbai,
          delivering impactful media campaigns, creative branding, outdoor
          hoardings, digital marketing, and event promotions.
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

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium"
          >
            Contact Advertising Agency in Mumbai
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "AdvertisingAgency",
              name: "Prosira Advertisers",
              url: "https://prosira.in/advertising-agency-in-mumbai",
              telephone: "+91-9028815714",
              areaServed: {
                "@type": "City",
                name: "Mumbai",
              },
            },
            {
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
                  name: "Advertising Agency in Mumbai",
                  item: "https://prosira.in/advertising-agency-in-mumbai",
                },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
