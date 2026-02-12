"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";



const navigation = [
  { name: "About Us", href: "/about-prosira-advertisers" },
  { name: "Services", href: "/traditional-services" },
  { name: "Digital", href: "/digital-services" },
  { name: "Events & Expo", href: "/events-expo" },
  { name: "Contact Us", href: "/contact" },
  
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clickedPath, setClickedPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // clear optimistic state after route change
  useEffect(() => {
    setClickedPath(null);
  }, [pathname]);

  const isActive = (href: string) => {
    return clickedPath === href || pathname === href;
  };

  useEffect(() => {
  if (mobileMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
  ? "bg-background/95 backdrop-blur-xl border-b border-primary/10 py-0 shadow-lg shadow-black/10"
  : "bg-transparent py-6"

      )}
    >
<nav className="site-container flex min-h-[72px] items-center justify-between">
        {/* Logo */}
<Link href="/" className="flex items-center gap-3 group">
  <div className="relative flex items-center">
    <Image
      src="/logo.png"
      alt="Prosira Advertisers Logo"
      width={140}          // desktop size
      height={50}
      priority
      className="
        h-7 w-auto
        md:h-9
        lg:h-9
        transition-transform duration-300
        group-hover:scale-105
      "
    />

    {/* underline animation (optional premium touch) */}
    <div
      className="
        absolute -bottom-1 left-0
        h-px w-0
        bg-gradient-to-r from-primary to-transparent
        transition-all duration-500
        group-hover:w-full
      "
    />
  </div>
</Link>


      {/* Right side wrapper */}
    <div className="hidden lg:flex items-center gap-6 ml-auto">

  {/* Desktop Navigation */}
  <div className="flex gap-x-1">
    {navigation.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setClickedPath(item.href)}
        className={cn(
          "relative px-5 py-3 text-sm font-medium transition-all duration-300 rounded-lg group",
          isActive(item.href)
            ? "text-primary"
            : "text-foreground/70 hover:text-foreground"
        )}
      >
        <span className="relative z-10">{item.name}</span>

        <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />

        {isActive(item.href) && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
        )}

        <div className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Link>
    ))}
  </div>

  {/* CTA Section */}
  <a
    href="tel:+919028815714"
    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
  >
    <div className="w-10 h-10 rounded-full glass-gold flex items-center justify-center group-hover:animate-glow-pulse transition-all duration-300">
      <Phone className="h-4 w-4 text-primary" />
    </div>
    <div className="flex flex-col">
      <span className="text-xs text-muted-foreground">Call Us</span>
      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
        +91 90288 15714
      </span>
    </div>
  </a>

</div>


        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden w-10 h-10 rounded-lg glass-gold flex items-center justify-center text-foreground hover:text-primary transition-colors"
onClick={() => {
  setMobileMenuOpen((prev) => !prev);
  window.scrollTo({ top: 0, behavior: "smooth" });
}}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative w-5 h-4">
            <span
              className={cn(
                "absolute left-0 w-5 h-0.5 bg-current transition-all duration-300",
                mobileMenuOpen ? "top-1.5 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 w-5 h-0.5 bg-current transition-all duration-300",
                mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              )}
            />
            <span
              className={cn(
                "absolute left-0 w-5 h-0.5 bg-current transition-all duration-300",
                mobileMenuOpen ? "top-1.5 -rotate-45" : "top-3"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
         "lg:hidden fixed inset-0 z-50 transition-all duration-500",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className="relative h-full overflow-y-auto pt-20">
          <div className="site-container py-8 space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setClickedPath(item.href);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  "flex items-center justify-between px-4 py-4 text-lg font-medium rounded-xl transition-all duration-500 group",
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                )}
                style={{
                  transform: mobileMenuOpen
                    ? "translateX(0)"
                    : "translateX(-20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <span>{item.name}</span>
                <ChevronRight className="h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}

            <div className="pt-6 mt-6 border-t border-border/50">
              <a
                href="tel:+919028815714"
                className="flex items-center gap-4 px-4 py-4 rounded-xl bg-secondary/50"
              >
                <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Call Us Now
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    +91 90288 15714
                  </div>
                </div>
              </a>

              {/* <Button
                asChild
                className="w-full mt-4 bg-primary text-primary-foreground h-14 text-lg"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
