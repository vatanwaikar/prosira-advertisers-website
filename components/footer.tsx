import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "TV Advertising", href: "/traditional-services#tv" },
    { name: "Radio Advertising", href: "/traditional-services#radio" },
    { name: "Digital Marketing", href: "/digital-services" },
    { name: "Event Management", href: "/events-expo" },
    { name: "Corporate Gifting", href: "/traditional-services#corporate-gifting" },      
    { name: "Magazine Advertising", href: "/traditional-services#magazine" },
    { name: "Brand Development", href: "/traditional-services#brand-development" },
    { name: "outdoor Advertising", href: "/traditional-services#outdoor" },
    
  ],

  // 👇 COMPANY + FOOTER-ONLY PAGES
  company: [
    { name: "About Us", href: "/about-prosira-advertisers" },
    { name: "Our Team", href: "/team" },
    { name: "Our Work", href: "/events-expo" },
    { name: "Contact", href: "/contact" },

    // 🔥 FOOTER-ONLY LINKS
    { name: "List Your Media", href: "/list-your-media" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Testimonials", href: "/testimonials" },
  ],

  social: [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1DnoEvbjBx/" },
   {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/prosira_advertisers?igsh=MXc3bjkwb2h3aThq",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/prosiraadvertisers/",
  },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
    <div className="site-container py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-primary font-serif">
                  PROSIRA
                </span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Advertisers
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              A comprehensive advertising and event company delivering
              360° media solutions with strategic and creative campaigns.
            </p>

            <div className="flex gap-4">
  {footerLinks.social.map((item) => (
    <a
      key={item.name}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.name}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <item.icon className="h-5 w-5" />
    </a>
  ))}
</div>

          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919028815714"
                  className="flex gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +91 90288 15714
                </a>
              </li>

              <li>
                <a
                  href="mailto:connect@prosira.in"
                  className="flex gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  connect@prosira.in
                </a>
              </li>

              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Pune, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-auto">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Prosira Advertisers. All rights reserved.
              </p>
            </div>

            <div>
              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
