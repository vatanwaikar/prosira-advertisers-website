"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Send, ShieldCheck, Building2, Target, User } from "lucide-react";

// ── Zod Schema ──────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(1, "Phone is required"),
  website: z.string().optional(),
  industry: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  platforms: z.array(z.string()).optional(),
  services: z.array(z.string()).optional(),
  competitors: z.string().optional(),
  expectations: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

// ── Constants ────────────────────────────────────────────────────────────────
const STEPS = ["Contact", "Business", "Goals"] as const;

const PLATFORMS = [
  "Facebook",
  "Instagram",
  "LinkedIn",
  "YouTube",
  "Google Business",
  "Others",
];

const SERVICES = [
  "Social Media Management",
  "Meta Ads (Facebook & Instagram)",
  "Google Ads",
  "SEO",
  "Website Development",
  "Content Creation",
  "Lead Generation Campaigns",
];

const INDUSTRIES = [
  "Export / Import",
  "Retail",
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Real Estate",
  "Food & Beverage",
];

// ── Sub-components ───────────────────────────────────────────────────────────
function StepsBar({ current }: { current: number }) {
  const stepIcons = [User, Building2, Target];
  return (
    <div className="relative mb-10">
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/10 rounded-full" />
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${((current - 1) / (STEPS.length - 1)) * 100}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#e8c84a] rounded-full"
      />
      
      <div className="flex items-center justify-between relative">
        {STEPS.map((label, i) => {
          const idx = i + 1;
          const done = idx < current;
          const active = idx === current;
          const Icon = stepIcons[i];
          return (
            <div key={label} className="flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  done || active
                    ? "bg-gradient-to-br from-[#d4af37] to-[#e8c84a] text-[#080b10] shadow-lg shadow-[#d4af37]/20"
                    : "bg-white/5 text-white/30 border border-white/10"
                }`}
              >
                {done ? (
                  <Check size={16} strokeWidth={2.5} />
                ) : (
                  <Icon size={16} strokeWidth={2} />
                )}
                {active && (
                  <motion.div
                    layoutId="activePulse"
                    className="absolute inset-0 rounded-xl bg-[#d4af37] opacity-20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.1, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>
              <span
                className={`text-[11px] font-medium transition-colors duration-300 ${
                  active
                    ? "text-[#d4af37] font-semibold"
                    : done
                    ? "text-white/50"
                    : "text-white/30"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SectionTitle({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ElementType }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      {Icon && <Icon size={16} className="text-[#d4af37]" />}
      <h3 className="text-[11px] font-bold tracking-[0.15em] text-[#d4af37] uppercase">
        {children}
      </h3>
      <div className="flex-1 h-px bg-gradient-to-r from-[#d4af37]/30 to-transparent" />
    </div>
  );
}

function Field({
  label,
  error,
  children,
  optional,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-[12px] font-semibold text-white/40 uppercase tracking-wider">
        {label}
        {optional && (
          <span className="text-white/25 normal-case tracking-normal ml-1.5 font-normal">
            optional
          </span>
        )}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] text-red-400 flex items-center gap-1"
        >
          <span className="w-1 h-1 rounded-full bg-red-400" />
          {error}
        </motion.p>
      )}
    </div>
  );
}

const inputClass =
  "w-full bg-[#0a0e14] border border-white/12 rounded-xl px-4 py-3 sm:py-3.5 text-[14px] text-[#e8e4dc] placeholder:text-white/25 outline-none transition-all duration-200 focus:border-[#d4af37]/50 focus:bg-[#0d121a] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.08)] hover:border-white/20";

function CheckItem({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`flex items-center gap-3 bg-[#0a0e14] border rounded-xl px-4 py-3 text-left transition-all duration-200 ${
        checked
          ? "border-[#d4af37]/40 bg-[#d4af37]/8 shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
          : "border-white/12 hover:border-[#d4af37]/30 hover:bg-white/[0.02]"
      }`}
    >
      <motion.div
        className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-200 ${
          checked ? "bg-[#d4af37] border-[#d4af37]" : "border-white/25"
        }`}
        whileHover={{ scale: 1.05 }}
      >
        <AnimatePresence mode="wait">
          {checked && (
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <Check size={11} strokeWidth={3} className="text-[#080b10]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <span
        className={`text-[13px] font-medium transition-colors duration-200 ${
          checked ? "text-white/90" : "text-white/50"
        }`}
      >
        {label}
      </span>
    </motion.button>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export function DigitalCTA() {
  const [step, setStep] = useState(1);
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [services, setServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  function togglePlatform(val: string) {
    setPlatforms((p) =>
      p.includes(val) ? p.filter((x) => x !== val) : [...p, val]
    );
  }

  function toggleService(val: string) {
    setServices((s) =>
      s.includes(val) ? s.filter((x) => x !== val) : [...s, val]
    );
  }

  async function nextStep(fields: (keyof FormData)[]) {
    const valid = await trigger(fields);
    if (valid) setStep((s) => s + 1);
  }

  async function onSubmit(data: FormData) {
    setLoading(true);
    setServerError(null);
    try {
      const res = await fetch("/api/lead-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, platforms, services }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Submission failed");
      }
      setSuccess(true);
    } catch (err: any) {
      setServerError(err?.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#080b10] min-h-screen py-14 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#d4af37]/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#d4af37]/2 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.15em] text-[#d4af37] uppercase">
              Free Strategy Session
            </span>
          </div>
          <span className="text-[11px] text-white/40 border border-white/12 rounded-full px-4 py-1.5 bg-white/[0.02]">
            No commitment required
          </span>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f0ebe0] leading-[1.2] mb-3">
            Let&apos;s discuss your{" "}
            <span className="text-[#d4af37]">growth goals</span>
          </h2>
          <p className="text-[14px] text-white/45 leading-[1.75] mb-10 max-w-[440px]">
            Our team will craft a marketing plan specific to your industry,
            audience, and revenue targets —{" "}
            <span className="text-[#d4af37] font-medium">no templates, no fluff.</span>
          </p>
        </motion.div>

        <StepsBar current={step} />

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#0e1219] border border-white/8 rounded-2xl p-5 sm:p-6 lg:p-8 relative overflow-hidden shadow-2xl shadow-black/30"
        >
          {/* Card glow effect */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#d4af37]/5 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#d4af37]/3 blur-[60px] pointer-events-none" />

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-10 sm:py-16 gap-5"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#e8c84a] flex items-center justify-center shadow-xl shadow-[#d4af37]/25"
              >
                <Check size={32} className="text-[#080b10]" strokeWidth={2.5} />
              </motion.div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#f0ebe0]">
                  Request Submitted Successfully!
                </h3>
                <p className="text-[14px] text-white/40 leading-[1.7] max-w-[300px]">
                  Thank you for contacting Prosira Advertisers. Our team will
                  review your requirements and get in touch shortly.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {/* ── STEP 1: Contact ── */}
                {step === 1 && (
                  <motion.div
                    key="s1"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.22 }}
                  >
                    <SectionTitle icon={User}>Contact Details</SectionTitle>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">                      <Field label="Full name" error={errors.name?.message}>
                        <input
                          {...register("name")}
                          placeholder="Jane Smith"
                          className={inputClass}
                        />
                      </Field>
                      <Field
                        label="Company / brand name"
                        error={errors.company?.message}
                      >
                        <input
                          {...register("company")}
                          placeholder="Acme Exports Pvt Ltd"
                          className={inputClass}
                        />
                      </Field>
                    </div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">                      <Field
                        label="Email address"
                        error={errors.email?.message}
                      >
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="hello@company.com"
                          className={inputClass}
                        />
                      </Field>
                      <Field
                        label="Contact number"
                        error={errors.phone?.message}
                      >
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="+91 90000 00000"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="Business website">
                        <input
                          {...register("website")}
                          type="url"
                          placeholder="https://example.com"
                          className={inputClass}
                        />
                      </Field>
                    </div>
<div className="flex flex-col sm:flex-row justify-end mt-8 gap-3 gap-3">                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          nextStep(["name", "company", "email", "phone"])
                        }
                        className="flex items-center gap-2.5 w-full sm:w-auto px-7 py-3 sm:py-3.5 bg-gradient-to-r from-[#d4af37] to-[#e8c84a] hover:from-[#e8c84a] hover:to-[#d4af37] text-[#080b10] text-[14px] font-bold rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 hover:shadow-xl hover:shadow-[#d4af37]/30"
                      >
                        Next: Business <ArrowRight size={17} />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 2: Business ── */}
                {step === 2 && (
                  <motion.div
                    key="s2"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.22 }}
                  >
                    <SectionTitle icon={Building2}>About Your Business</SectionTitle>
                    <Field label="Industry / business category">
                      <select {...register("industry")} className={inputClass}>
                        <option value="">Select your industry</option>
                        {INDUSTRIES.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field
                      label="Describe your business and key products or services"
                      error={errors.description?.message}
                    >
                      <textarea
                        {...register("description")}
rows={3}                        placeholder="What do you sell, who do you serve, and what makes you different?"
                        className={inputClass}
                      />
                    </Field>

                    <SectionTitle>Platforms &amp; Services</SectionTitle>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">                      <div>
                        <p className="text-[12px] font-semibold text-white/40 uppercase tracking-wider mb-3">
                          Platforms you&apos;re active on
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">                          {PLATFORMS.map((p) => (
                            <CheckItem
                              key={p}
                              label={p}
                              checked={platforms.includes(p)}
                              onToggle={() => togglePlatform(p)}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-white/40 uppercase tracking-wider mb-3">
                          Services you&apos;re interested in
                        </p>
                        <div className="flex flex-col gap-2">
                          {SERVICES.map((s) => (
                            <CheckItem
                              key={s}
                              label={s}
                              checked={services.includes(s)}
                              onToggle={() => toggleService(s)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

<div className="flex flex-col-reverse sm:flex-row gap-3 justify-between mt-8">                      <motion.button
                        type="button"
                        whileHover={{ x: -2 }}
                        onClick={() => setStep(1)}
                        className="flex items-center gap-2 text-[13px] text-white/35 hover:text-white/60 transition-colors"
                      >
                        <ArrowLeft size={16} /> Back
                      </motion.button>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => nextStep(["description"])}
                        className="flex items-center gap-2.5  w-full sm:w-auto px-7 py-3 sm:py-3.5 bg-gradient-to-r from-[#d4af37] to-[#e8c84a] hover:from-[#e8c84a] hover:to-[#d4af37] text-[#080b10] text-[14px] font-bold rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 hover:shadow-xl hover:shadow-[#d4af37]/30"
                      >
                        Next: Goals <ArrowRight size={17} />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 3: Goals ── */}
                {step === 3 && (
                  <motion.div
                    key="s3"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.22 }}
                  >
                    <SectionTitle icon={Target}>Goals &amp; Context</SectionTitle>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">                      <Field label="Competitors or similar brands" optional>
                        <textarea
                          {...register("competitors")}
                         rows={3}
                          placeholder="Name any brands you admire or compete with"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="Specific expectations or ideas" optional>
                        <textarea
                          {...register("expectations")}
                          rows={3}
                          placeholder="Any goals, KPIs, or campaign ideas you have in mind"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    {serverError && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[12px] text-red-400 text-center mb-4 flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg py-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        {serverError}
                      </motion.p>
                    )}

<div className="flex flex-col-reverse sm:flex-row gap-3 justify-between mt-8">                      <motion.button
                        type="button"
                        whileHover={{ x: -2 }}
                        onClick={() => setStep(2)}
                        className="flex items-center gap-2 text-[13px] text-white/35 hover:text-white/60 transition-colors"
                      >
                        <ArrowLeft size={16} /> Back
                      </motion.button>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                        className="flex items-center gap-2.5 w-full sm:w-auto px-7   py-3 sm:py-3.5 bg-gradient-to-r from-[#d4af37] to-[#e8c84a] hover:from-[#e8c84a] hover:to-[#d4af37] disabled:opacity-50 disabled:cursor-not-allowed text-[#080b10] text-[14px] font-bold rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 hover:shadow-xl hover:shadow-[#d4af37]/30 disabled:shadow-none"
                      >
                        <Send size={16} />
                        {loading ? "Submitting…" : "Get My Free Strategy"}
                      </motion.button>
                    </div>

                    <p className="flex items-center justify-center gap-2 text-[11px] text-white/25 mt-5">
                      <ShieldCheck size={14} className="text-[#d4af37]/50" />
                      We respect your privacy. We&apos;ll never share your data.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
