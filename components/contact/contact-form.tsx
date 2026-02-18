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

  /* SUCCESS */
  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-2xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center bg-gradient-to-br from-yellow-400/15 via-zinc-900/80 to-zinc-900 shadow-[0_40px_120px_-40px_rgba(212,175,55,0.5)] border border-yellow-400/30">
          <div className="mx-auto mb-4 sm:mb-6 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-yellow-400/20 flex items-center justify-center border-4 border-yellow-400/40">
            <CheckCircle className="h-8 w-8 sm:h-12 sm:w-12 text-yellow-400" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
            Thank You! ✨
          </h3>
          <p className="text-base sm:text-xl text-zinc-300">
            Your details received. Team will contact you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={formRef} className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div data-animate className="mb-8 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
          <span className="text-primary font-serif ">Connect Us</span>
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-14 bg-gradient-to-b from-zinc-900/95 to-zinc-800/90 backdrop-blur-xl shadow-[0_50px_140px_-60px_rgba(212,175,55,0.45)] border border-zinc-700/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">

          {/* LEFT SIDE */}
          <div data-animate className="space-y-4 sm:space-y-6">

            {/* Company Name */}
            <div className="space-y-2 sm:space-y-3">
              <Label className="text-white/90 font-semibold text-sm sm:text-base">Company Name</Label>
              <Input
                placeholder="Your Company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full h-12 sm:h-14 px-4 sm:px-5 text-base sm:text-lg bg-zinc-800/70 border border-zinc-600/50 rounded-xl sm:rounded-2xl"
              />
            </div>

            {/* Contact Person */}
            <div className="space-y-2 sm:space-y-3">
              <Label className="text-white/90 font-semibold text-sm sm:text-base">Contact Person</Label>
              <Input
                placeholder="Your Full Name"
                value={formData.contactPerson}
                onChange={(e) =>
                  setFormData({ ...formData, contactPerson: e.target.value })
                }
                required
                className="w-full h-12 sm:h-14 px-4 sm:px-5 text-base sm:text-lg bg-zinc-800/70 border border-zinc-600/50 rounded-xl sm:rounded-2xl"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2 sm:space-y-3">
              <Label className="text-white/90 font-semibold text-sm sm:text-base">Phone Number</Label>
              <div className="flex bg-zinc-800/70 border border-zinc-600/50 rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="px-3 sm:px-4 py-3 sm:py-3.5 bg-zinc-700/80 border-r border-zinc-600/50 text-white font-semibold text-sm min-w-[70px] sm:min-w-[80px] flex items-center">
                  +91
                </div>
                <Input
                  type="tel"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData({ ...formData, phone: digits });
                  }}
                  required
                  className="h-12 sm:h-14 px-4 sm:px-5 text-base sm:text-lg flex-1 bg-transparent border-none focus:ring-0"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2 sm:space-y-3">
              <Label className="text-white/90 font-semibold text-sm sm:text-base">Email Address</Label>
              <Input
                type="email"
                placeholder="yourname@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full h-12 sm:h-14 px-4 sm:px-5 text-base sm:text-lg bg-zinc-800/70 border border-zinc-600/50 rounded-xl sm:rounded-2xl"
              />
            </div>

            {/* Service */}
            <div className="space-y-2 sm:space-y-3">
              <Label className="text-white/90 font-semibold text-sm sm:text-base">Service Required</Label>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
                required
              >
                <SelectTrigger className="w-full h-12 sm:h-14 px-4 sm:px-5 text-base sm:text-lg bg-zinc-800/70 border border-zinc-600/50 rounded-xl sm:rounded-2xl">
                  <SelectValue placeholder="Select Service Required" />
                </SelectTrigger>
                <SelectContent className="rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-700 p-2">
                  {services.map((service) => (
                    <SelectItem
                      key={service}
                      value={service}
                      className="text-base sm:text-lg py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl cursor-pointer hover:bg-yellow-500/20 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black"
                    >
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div data-animate className="flex flex-col h-full">
            <div className="space-y-2 sm:space-y-3 flex flex-col flex-1">
              <Label className="text-white/90 font-semibold text-sm sm:text-base">
                Your Message
              </Label>

              <Textarea
                placeholder="Tell us about your project requirements..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="flex-1 w-full px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-xl bg-zinc-800/70 border border-zinc-600/50 rounded-2xl sm:rounded-3xl resize-none min-h-[120px] sm:min-h-[200px]"
              />
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-8 sm:mt-12 flex justify-center pt-6 sm:pt-8 border-t border-zinc-700/50">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 sm:h-16 px-6 sm:px-12 w-full max-w-sm sm:max-w-md rounded-2xl sm:rounded-3xl text-base sm:text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 text-black flex items-center gap-3 sm:gap-4 justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 animate-spin" />
                <span className="text-sm sm:text-base">Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-sm sm:text-base">Submit Enquiry</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
