"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Loader2, CheckCircle } from "lucide-react";

const services = [
  "TV Advertising",
  "Radio Advertising",
  "Outdoor Advertising",
  "Digital Marketing",
  "Event Management",
  "Brand Development",
  "Multiple Services",
  "Other",
];

export function ContactForm() {
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    contactPerson: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  /* ANIMATION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate-in",
              "fade-in",
              "slide-in-from-bottom-6"
            );
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = formRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* SUBMIT */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      });

      await res.json();
      if (!res.ok) throw new Error("Submission failed");

      if (typeof window !== "undefined") {
        // @ts-ignore
        window.gtag?.("event", "generate_lead", {
          event_category: "Contact",
          event_label: formData.service,
        });
      }

      setIsSubmitted(true);

      setFormData({
  contactPerson: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
});

    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* SUCCESS STATE */
  if (isSubmitted) {
    return (
      <div
        ref={formRef}
        className="
          max-w-2xl mx-auto
          rounded-3xl
          p-12
          text-center
          bg-gradient-to-br from-primary/15 via-background to-background
          shadow-[0_40px_120px_-40px_rgba(212,175,55,0.5)]
        "
      >
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-primary/25 flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">We’ve got it ✨</h3>
        <p className="text-muted-foreground">
          Your details are in. Our team will reach out shortly.
        </p>
      </div>
    );
  }

  /* FORM */
  return (
    <div ref={formRef} className="max-w-4xl mx-auto">
      <div data-animate className="mb-14 text-center">
        <h2 className="text-4xl font-bold mb-3">Connect With Us</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="
          rounded-3xl
          p-10
          bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-800
          shadow-[0_50px_140px_-60px_rgba(212,175,55,0.45)]
        "
      >
        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            {/* ROW 1 */}
            <div data-animate className="grid sm:grid-cols-2 gap-8">
              <div>
                <Label>Contact Person</Label>
                <Input
                  placeholder="Your name"
                  value={formData.contactPerson}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contactPerson: e.target.value,
                    })
                  }
                  required
                  className="mt-3 h-12 text-base bg-secondary/60 focus:bg-secondary"
                />
              </div>

              <div>
                <Label>Email Address</Label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="mt-3 h-12 text-base bg-secondary/60 focus:bg-secondary"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div data-animate className="grid sm:grid-cols-2 gap-8">
              <div>
                <Label>Phone Number</Label>
                <div className="mt-3 flex">
                  <div className="px-4 flex items-center bg-secondary border border-border rounded-l-md text-sm">
                    +91
                  </div>
                  <Input
                    type="tel"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => {
                      const digits = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      setFormData({ ...formData, phone: digits });
                    }}
                    required
                    className="h-12 text-base rounded-l-none bg-secondary/60 focus:bg-secondary"
                  />
                </div>
              </div>

              <div>
                <Label>Company</Label>
                <Input
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="mt-3 h-12 text-base bg-secondary/60 focus:bg-secondary"
                />
              </div>
            </div>

            {/* SERVICE */}
            <div data-animate>
              <Label>Service Required</Label>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
                required
              >
                <SelectTrigger className="mt-3 h-12 bg-secondary/60">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="z-[9999] rounded-xl bg-zinc-900 border border-zinc-700">
                  {services.map((service) => (
                    <SelectItem
                      key={service}
                      value={service}
                      className="
                        cursor-pointer
                        focus:bg-yellow-500/20
                        data-[state=checked]:bg-yellow-500
                        data-[state=checked]:text-black
                      "
                    >
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* RIGHT SIDE – MESSAGE */}
          <div data-animate className="flex flex-col h-full">
            <Label>Your Message</Label>
            <Textarea
              rows={10}
              placeholder="Briefly tell us what you’re planning…"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="
                mt-3
                flex-1
                text-base
                bg-secondary/60
                resize-none
                focus:bg-secondary
              "
            />
          </div>
        </div>

        {/* CTA */}
        <div data-animate className="mt-8 flex justify-start">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="
              h-12
              px-2
              rounded-lg
              text-sm font-semibold
              bg-yellow-400
              text-black
              shadow-[0_12px_30px_-12px_rgba(250,204,21,0.9)]
              hover:-translate-y-0.5
              transition-all
            "
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Submit
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
