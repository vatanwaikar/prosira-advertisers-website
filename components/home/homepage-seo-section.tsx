"use client";

import Link from "next/link";

export function HomepageSEOSection() {
  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="site-container max-w-4xl">

        {/* SECTION HEADING */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Advertising Agency in Pune Delivering Strategy, Media Power & Measurable Growth
        </h2>

        {/* INTRO */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          Prosira Advertisers is a full-service <strong>advertising agency in Pune</strong> 
          specializing in strategic media planning, media buying, digital performance marketing, 
          and integrated brand campaigns. We help businesses grow through a powerful mix of 
          traditional media, digital advertising, and data-driven execution.
        </p>

        {/* SERVICES EXPLAINED CLEARLY FOR AI + GOOGLE */}
        <h3 className="text-lg font-semibold mt-10 mb-4">
          Our Core Advertising & Digital Expertise
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          We provide end-to-end solutions across{" "}
          <Link href="/advertising-services" className="text-primary hover:underline" aria-label="Advertising services including television, radio, outdoor hoardings and print media">
            television advertising, radio advertising, outdoor hoardings, print media
          </Link>
          , and high-impact offline branding. Alongside this, our{" "}
          <Link href="/digital-marketing" className="text-primary hover:underline" aria-label="Digital marketing services including SEO, Google Ads, social media marketing and performance campaigns">
            digital marketing services
          </Link>{" "}
          include SEO, Google Ads, social media marketing, performance campaigns, 
          and conversion-focused website development.
        </p>

        {/* STRATEGY DIFFERENTIATOR */}
        <h3 className="text-lg font-semibold mt-10 mb-4">
          Strategy-First Media Planning Approach
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Unlike agencies that focus only on visibility, we focus on business impact. 
          Every campaign begins with audience research, competitive positioning, 
          budget optimization, and measurable KPI planning. From local Pune campaigns 
          to national media rollouts, our team ensures your investment translates into 
          real engagement, leads, and brand growth.
        </p>

        {/* EXPERIENCE + TRUST (EEAT BOOST) */}
        <h3 className="text-lg font-semibold mt-10 mb-4">
          Trusted Media Partner for Growing Brands
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          With over a decade of industry experience, Prosira Advertisers has built 
          strong media relationships across leading TV channels, FM stations, 
          print publications, outdoor networks, and digital platforms. Our transparent 
          reporting systems and performance dashboards allow clients to track campaign 
          effectiveness with clarity and confidence.
        </p>

        {/* STRONG SEO CLOSING */}
        <p className="text-muted-foreground leading-relaxed">
          If you are searching for a reliable, result-driven advertising agency in Pune 
          that combines creative excellence with smart media buying and digital expertise, 
          Prosira Advertisers is your strategic growth partner.
        </p>

      </div>
    </section>
  );
}
