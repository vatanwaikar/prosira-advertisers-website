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
  const firstInputRef = useRef<HTMLInputElement>(null);

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

  /* ================= ANIMATION ================= */
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

  /* ================= VALIDATION ================= */
  const isValid =
    formData.contactPerson.trim().length > 2 &&
    /^\S+@\S+\.\S+$/.test(formData.email) &&
    /^\d{10}$/.test(formData.phone) &&
    formData.service &&
    formData.message.trim().length > 5;

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.contactPerson.trim(),
          email: formData.email.trim(),
          phone: formData.phone,
          company: formData.company.trim(),
          service: formData.service,
          message: formData.message.trim(),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      // GA4 Safe Event
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
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
      firstInputRef.current?.focus();
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ================= SUCCESS UI ================= */
  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto rounded-3xl p-12 text-center bg-gradient-to-br from-yellow-400/15 via-zinc-900/80 to-zinc-900 shadow-[0_40px_120px_-40px_rgba(212,175,55,0.5)] border border-yellow-400/30">
          <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-yellow-400/20 flex items-center justify-center border-4 border-yellow-400/40">
            <CheckCircle className="h-12 w-12 text-yellow-400" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-white">
            Thank You! ✨
          </h3>
          <p className="text-xl text-zinc-300">
            Your enquiry has been received. Our team will contact you shortly.
          </p>
        </div>
      </div>
    );
  }

  /* ================= FORM ================= */
  return (
    <div ref={formRef} className="max-w-4xl mx-auto px-6 py-20">
      <div data-animate className="mb-14 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif">
          Connect With Us
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl p-12 bg-gradient-to-b from-zinc-900/95 to-zinc-800/90 backdrop-blur-xl shadow-[0_50px_140px_-60px_rgba(212,175,55,0.45)] border border-zinc-700/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="space-y-2">
              <Label className="text-white">Company Name</Label>
              <Input
                ref={firstInputRef}
                placeholder="Your Company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="h-14 bg-zinc-800/70 border-zinc-600/50 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Contact Person *</Label>
              <Input
                placeholder="Your Full Name"
                required
                value={formData.contactPerson}
                onChange={(e) =>
                  setFormData({ ...formData, contactPerson: e.target.value })
                }
                className="h-14 bg-zinc-800/70 border-zinc-600/50 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Phone Number *</Label>
              <Input
                type="tel"
                required
                placeholder="9876543210"
                value={formData.phone}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData({ ...formData, phone: digits });
                }}
                className="h-14 bg-zinc-800/70 border-zinc-600/50 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Email Address *</Label>
              <Input
                type="email"
                required
                placeholder="yourname@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-14 bg-zinc-800/70 border-zinc-600/50 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Service Required *</Label>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="h-14 bg-zinc-800/70 border-zinc-600/50 rounded-2xl">
                  <SelectValue placeholder="Select Service Required" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-700 rounded-xl">
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col">
            <Label className="text-white mb-2">Your Message *</Label>
            <Textarea
              required
              placeholder="Tell us about your project requirements..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="flex-1 min-h-[260px] bg-zinc-800/70 border-zinc-600/50 rounded-3xl"
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-12 flex justify-center">
          <Button
            type="submit"
            aria-label="Send message"
            disabled={isSubmitting || !isValid}
            className="h-16 px-12 w-full max-w-md rounded-3xl text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 text-black flex items-center gap-4 justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-6 w-6 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="h-6 w-6" />
                Submit Enquiry
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
