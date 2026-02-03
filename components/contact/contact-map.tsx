"use client";

import { useEffect, useRef } from "react";

export function ContactMap() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="map" className="bg-secondary">
      <div data-animate className="text-center py-12 duration-700">
        <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4">
          Our Location
        </span>
        <h2 className="text-2xl md:text-3xl font-bold">
          Find Us in <span className="text-primary font-serif italic">Pune</span>
        </h2>
      </div>

      <div data-animate className="w-full h-[400px] relative duration-700 delay-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68019517444!2d73.72287831327148!3d18.524600199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Prosira Advertisers Office Location in Pune"
          className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>
    </section>
  );
}
