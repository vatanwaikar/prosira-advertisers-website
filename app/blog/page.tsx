import Link from "next/link";

export const metadata = {
  title: "AI SEO, Advertising & Digital Marketing Insights | Prosira Blog",
  description:
    "Explore AI SEO, digital marketing, branding, Google Ads, SEO, media planning and future search insights from Prosira Advertisers.",
  keywords: [
    "AI SEO India",
    "advertising blog",
    "digital marketing insights",
    "SEO strategies",
    "Google Ads India",
    "AI search optimization",
    "branding strategies",
    "local SEO India",
    "Prosira Advertisers",
  ],
};

const blogs = [
  {
    category: "AI SEO",
    title: "What is AI SEO & Why It Matters in 2026",
    description:
      "Learn how AI-powered search engines like ChatGPT, Gemini and Google AI Overviews are changing SEO forever.",
    readTime: "7 min read",
    href: "/blog/what-is-ai-seo",
  },
  {
    category: "SEO",
    title: "SEO vs Google Ads: Which is Better for Your Business?",
    description:
      "Compare SEO and Google Ads strategies to understand which marketing channel delivers better long-term growth.",
    readTime: "6 min read",
  },
  {
    category: "Local SEO",
    title: "How Local SEO Helps Businesses Generate More Leads",
    description:
      "Discover how local SEO improves Google visibility, maps rankings and customer inquiries for local businesses.",
    readTime: "5 min read",
  },
  {
    category: "Outdoor Advertising",
    title: "Why Outdoor Advertising Still Works in 2025",
    description:
      "Discover why hoardings, transit media and outdoor campaigns continue to deliver strong brand recall in the digital age.",
    readTime: "5 min read",
  },
  {
    category: "Digital Marketing",
    title: "How Brands Can Combine Digital & Traditional Media",
    description:
      "Learn how integrated campaigns using digital, print, radio and outdoor media drive higher ROI.",
    readTime: "6 min read",
  },
  {
    category: "Events & Expo",
    title: "Event Marketing: Turning Footfall Into Brand Loyalty",
    description:
      "Understand how experiential marketing and exhibitions help brands create long-term customer connections.",
    readTime: "4 min read",
  },
  {
    category: "AI Search",
    title: "How Businesses Can Rank in Google AI Overviews",
    description:
      "Understand how semantic SEO, structured data and AI optimization improve AI search visibility.",
    readTime: "8 min read",
  },
  {
    category: "Branding",
    title: "Why Branding Matters More Than Ever in the AI Era",
    description:
      "Strong branding improves trust, recall and visibility across modern AI-powered search platforms.",
    readTime: "5 min read",
  },
  {
    category: "Website Development",
    title: "Why Modern Websites Need AI SEO Architecture",
    description:
      "Explore how semantic structure, fast performance and AI readability impact future SEO rankings.",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <section className="site-container py-16">

      {/* HEADER */}
      <div className="max-w-3xl mb-16">

        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs uppercase tracking-widest text-primary mb-6">
          AI SEO & Marketing Insights
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          AI SEO, Advertising & Digital Marketing Insights
        </h1>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Explore AI SEO, digital marketing, branding, advertising,
          Google Ads, media planning, local SEO and future search
          strategies from Prosira Advertisers.
        </p>

      </div>

      {/* BLOG GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {blogs.map((blog, index) => (

          <Link key={index} href={blog.href || "#"} >
          <article
            key={index}
            className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1"
          >

            {/* CATEGORY */}
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
              {blog.category}
            </div>

            {/* TITLE */}
            <h2 className="text-xl font-semibold mb-4 leading-snug transition-colors duration-300 group-hover:text-primary">
              {blog.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              {blog.description}
            </p>

            {/* FOOTER */}
            <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
              <span>{blog.readTime}</span>
              <span>Prosira Team</span>
            </div>

          </article>
          </Link>
        ))}

      </div>
    </section>
  );
}