import { Metadata } from "next";
import EximClientLoader from "./EximClientLoader";

export const metadata: Metadata = {
  title: "EXIM Digital Marketing Services | Import Export Lead Generation | Prosira Advertisers",
  description:
    "Grow your import export business with international SEO, Google Ads, LinkedIn lead generation, and B2B digital marketing. Generate verified global leads with Prosira Advertisers.",
  openGraph: {
    title:
      "EXIM Digital Marketing Services | Import Export Lead Generation | Prosira Advertisers",
    description:
      "Grow your import export business with international SEO, Google Ads, LinkedIn lead generation, and B2B digital marketing. Generate verified global leads with Prosira Advertisers.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://prosira.in/#organization",
      "name": "Prosira Advertisers",
      "url": "https://prosira.in/",
      "logo": "https://prosira.in/logo.webp",
      "sameAs": [],
    },
    {
      "@type": "Service",
      "name": "EXIM Digital Marketing",
      "description": "International SEO, Google Ads, LinkedIn lead generation and full-funnel digital marketing for import-export businesses.",
      "provider": { "@id": "https://prosira.in/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prosira.in/" },
        { "@type": "ListItem", "position": 2, "name": "EXIM", "item": "https://prosira.in/exim" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EximClientLoader />
    </>
  );
}
