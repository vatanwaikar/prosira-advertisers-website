export const metadata = {
  title: "Advertising & Media Insights | Prosira Advertisers Blog",
  description:
    "Expert insights on advertising, branding, digital marketing, media planning, outdoor advertising and events by Prosira Advertisers.",
  keywords: [
    "advertising blog",
    "media planning insights",
    "digital marketing india",
    "outdoor advertising india",
    "event marketing blog",
    "Prosira Advertisers",
  ],
};

export default function BlogPage() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-7xl">
      {/* HEADER */}
      <div className="max-w-2xl mb-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Advertising & Media Insights
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Insights, strategies and trends from the world of advertising,
          branding, digital marketing and media planning.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* BLOG CARD */}
        <article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
          <div className="mb-4 text-xs uppercase tracking-widest text-primary">
            Outdoor Advertising
          </div>

          <h2 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
            Why Outdoor Advertising Still Works in 2025
          </h2>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Discover why hoardings, transit media and outdoor campaigns continue
            to deliver strong brand recall in the digital age.
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>5 min read</span>
            <span>Prosira Team</span>
          </div>
        </article>

        {/* BLOG CARD */}
        <article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
          <div className="mb-4 text-xs uppercase tracking-widest text-primary">
            Digital Marketing
          </div>

          <h2 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
            How Brands Can Combine Digital & Traditional Media
          </h2>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Learn how integrated campaigns using digital, print, radio and
            outdoor media drive higher ROI.
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>6 min read</span>
            <span>Prosira Team</span>
          </div>
        </article>

        {/* BLOG CARD */}
        <article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
          <div className="mb-4 text-xs uppercase tracking-widest text-primary">
            Events & Expo
          </div>

          <h2 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
            Event Marketing: Turning Footfall Into Brand Loyalty
          </h2>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Understand how experiential marketing and exhibitions help brands
            create long-term customer connections.
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>4 min read</span>
            <span>Prosira Team</span>
          </div>
        </article>
      </div>
    </section>
  );
}
