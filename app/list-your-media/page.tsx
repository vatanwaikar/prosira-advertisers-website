"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MEDIA_TYPES = [
  "TV Channel",
  "Radio Station",
  "Newspaper / Magazine",
  "Outdoor / Hoardings",
  "Digital Media",
  "Event / Expo Media",
  "Other",
];

export default function ListYourMediaPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mediaInquiry, setMediaInquiry] = useState(""); // ✅ NEW (safe state)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // ✅ extra safety (backend ला empty जाणार नाही)
    if (!mediaInquiry) {
      alert("Please select Media Type");
      return;
    }

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/list-your-media", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSubmitted(true);
      form.reset();
      setMediaInquiry(""); // reset
    } else {
      alert("Something went wrong. Try again.");
    }
  }

  return (
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        List Your Media With Prosira Advertisers
      </h1>

      <p className="text-muted-foreground mb-10">
        Partner with us to monetize your media inventory through trusted
        advertising and event campaigns across India.
      </p>

      {submitted ? (
        <div className="bg-card p-10 rounded-xl border border-border text-center">
          <h3 className="text-2xl font-bold mb-2 text-primary">
            Thank You!
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Your message has been sent successfully. Our team will contact you shortly.
          </p>
        </div>
      ) : (
        <form
          id="list-media-form"
          onSubmit={handleSubmit}
          className="space-y-6 bg-card p-6 rounded-xl border border-border"
        >
          <input name="companyName" required placeholder="Company Name" className="input" />
          <input name="name" required placeholder="Your Name" className="input" />
          <input name="email" type="email" required placeholder="Email" className="input" />
          <input name="phone" type="tel" required placeholder="Phone Number" className="input" />

          {/* ✅ PERMANENT HIDDEN INPUT (IMPORTANT) */}
          <input type="hidden" name="mediaInquiry" value={mediaInquiry} />

          {/* MEDIA TYPE SELECT */}
          <Select
            value={mediaInquiry}
            onValueChange={(value) => setMediaInquiry(value)}
          >
            <SelectTrigger className="media-select-trigger w-full h-[52px]">
              <SelectValue placeholder="Select Media Type" />
            </SelectTrigger>

            <SelectContent
              position="popper"
              side="bottom"
              sideOffset={8}
              align="start"
              avoidCollisions
              collisionPadding={16}
              className="media-select-content media-select-dropdown !bg-[#0b0b0b]"
            >
              {MEDIA_TYPES.map((item) => (
                <SelectItem key={item} value={item} className="media-select-item">
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* FILE UPLOAD */}
          <label className="media-file-upload">
            <input
              type="file"
              name="profile"
              accept=".pdf"
              className="hidden"
              onChange={(e) => {
                const label =
                  e.currentTarget.nextElementSibling as HTMLElement;
                if (e.target.files?.[0]) {
                  label.innerText = e.target.files[0].name;
                }
              }}
            />

            <div className="media-file-box">
              <span className="media-file-text">
                Upload Company Profile (PDF)
              </span>
            </div>
          </label>

          <button
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium"
          >
            {loading ? "Submitting..." : "Submit Media Details"}
          </button>
        </form>
      )}
    </section>
  );
}
