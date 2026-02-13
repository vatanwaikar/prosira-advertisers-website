"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/images/events/corporate-event.jpg",
    alt: "Corporate conference event",
    category: "Corporate",
  },
  {
    src: "/images/events/product-launch.jpg",
    alt: "Product launch event",
    category: "Launch",
  },
  {
    src: "/images/events/exhibition.jpg",
    alt: "Trade exhibition booth",
    category: "Exhibition",
  },
  {
    src: "/images/events/brand-activation.jpg",
    alt: "Brand activation campaign",
    category: "Activation",
  },
  {
    src: "/images/hero-bg.jpg",
    alt: "Team planning session",
    category: "Behind the Scenes",
  },
  {
    src: "/images/services-bg.jpg",
    alt: "Digital production setup",
    category: "Production",
  },
];

export function EventsGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    <section ref={sectionRef} className="py-20 bg-secondary">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            data-animate
            className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4 duration-700"
          >
            Our Work
          </span>
          <h2
            data-animate
            className="text-3xl md:text-4xl font-bold mb-6 duration-700 delay-100"
          >
            Event{" "}
            <span className="text-primary font-serif ">Gallery</span>
          </h2>
          <p
            data-animate
            className="text-muted-foreground text-lg leading-relaxed duration-700 delay-200"
          >
            A glimpse into some of the memorable events we've created for our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              data-animate
              type="button"
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer duration-700"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary font-semibold">{image.category}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
          role="button"
          tabIndex={0}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full aspect-video">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Selected event image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
