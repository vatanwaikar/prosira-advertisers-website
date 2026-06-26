"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── ANIMATION VARIANTS ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── COUNTER HOOK ──────────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── GLOBE SVG ─────────────────────────────────────────────────────────────
function GlobeSVG() {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="globeGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#1e2d5a" />
          <stop offset="100%" stopColor="#060a15" />
        </radialGradient>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <clipPath id="circleClip">
          <circle cx="250" cy="250" r="195" />
        </clipPath>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer glow ring */}
      <circle cx="250" cy="250" r="215" fill="url(#glowGrad)" />

      {/* Globe base */}
      <circle cx="250" cy="250" r="195" fill="url(#globeGrad)" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.4" />

      {/* Latitude lines */}
      <g clipPath="url(#circleClip)" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2" fill="none">
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
          <ellipse key={i} cx="250" cy="250" rx="195" ry={Math.abs(i) === 0 ? 195 : 195 * Math.cos(i * 0.37)} />
        ))}
        {/* Longitude lines */}
        {[0, 30, 60, 90, 120, 150].map((angle) => (
          <line
            key={angle}
            x1={250 + 195 * Math.cos((angle * Math.PI) / 180)}
            y1={250 + 195 * Math.sin((angle * Math.PI) / 180)}
            x2={250 - 195 * Math.cos((angle * Math.PI) / 180)}
            y2={250 - 195 * Math.sin((angle * Math.PI) / 180)}
          />
        ))}
      </g>

      {/* Land masses – simplified continents */}
      <g clipPath="url(#circleClip)" fill="#1a3a6e" fillOpacity="0.7">
        {/* North America */}
        <path d="M100,140 Q120,120 155,130 Q175,125 185,150 Q195,170 180,200 Q165,230 145,235 Q120,240 100,210 Q80,185 85,160 Z" />
        {/* South America */}
        <path d="M155,265 Q175,255 190,275 Q205,300 200,330 Q195,355 175,370 Q155,375 145,355 Q130,330 135,300 Q138,275 155,265 Z" />
        {/* Europe */}
        <path d="M248,130 Q265,120 280,130 Q295,140 290,160 Q285,175 268,178 Q250,178 245,163 Q240,148 248,130 Z" />
        {/* Africa */}
        <path d="M248,185 Q270,178 285,195 Q300,215 298,255 Q296,295 275,315 Q258,328 245,315 Q228,298 228,260 Q228,220 240,200 Z" />
        {/* Asia */}
        <path d="M295,120 Q340,105 385,120 Q420,135 425,165 Q430,195 410,215 Q385,230 355,225 Q320,220 305,200 Q285,178 295,150 Z" />
        {/* Australia */}
        <path d="M370,290 Q400,280 420,295 Q435,310 430,330 Q425,350 405,355 Q382,358 368,342 Q355,325 360,305 Z" />
      </g>

      {/* Animated trade route dots */}
      <g filter="url(#softGlow)">
        {/* Route 1: Asia to Europe */}
        <circle r="4" fill="#D4AF37">
          <animateMotion dur="6s" repeatCount="indefinite"
            path="M360,165 Q320,145 285,145 Q265,145 248,150" />
        </circle>
        {/* Route 2: Europe to North America */}
        <circle r="4" fill="#D4AF37">
          <animateMotion dur="7s" repeatCount="indefinite" begin="1s"
            path="M260,148 Q225,138 195,140 Q170,142 158,148" />
        </circle>
        {/* Route 3: Asia to Australia */}
        <circle r="4" fill="#FFD700" fillOpacity="0.8">
          <animateMotion dur="5s" repeatCount="indefinite" begin="2s"
            path="M370,190 Q375,230 390,265 Q400,278 395,292" />
        </circle>
        {/* Route 4: South America to Europe */}
        <circle r="3.5" fill="#D4AF37">
          <animateMotion dur="8s" repeatCount="indefinite" begin="0.5s"
            path="M162,285 Q190,265 220,230 Q240,210 250,175 Q254,162 260,152" />
        </circle>
      </g>

      {/* City dots */}
      {[
        { cx: 165, cy: 155, label: "NYC" },
        { cx: 258, cy: 148, label: "LON" },
        { cx: 362, cy: 168, label: "SHA" },
        { cx: 172, cy: 280, label: "SAO" },
        { cx: 268, cy: 242, label: "JBG" },
        { cx: 400, cy: 298, label: "SYD" },
      ].map((city) => (
        <g key={city.label}>
          <circle cx={city.cx} cy={city.cy} r="5" fill="#D4AF37" fillOpacity="0.9" />
          <circle cx={city.cx} cy={city.cy} r="10" fill="none" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4">
            <animate attributeName="r" from="5" to="16" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" from="0.6" to="0" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

// ─── FAQ DATA ──────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How does Prosira generate international B2B leads?",
    a: "We combine International SEO, targeted Google Ads, LinkedIn outreach, and high-converting landing pages to attract verified global buyers actively searching for your products.",
  },
  {
    q: "What industries does Prosira serve in EXIM?",
    a: "We work with manufacturers, exporters, importers, traders, agricultural businesses, textile companies, pharmaceutical exporters, chemical suppliers, and more.",
  },
  {
    q: "How long does it take to see results?",
    a: "Initial traction typically appears within 60–90 days for SEO and sooner for Ads campaigns. Full lead generation momentum usually builds in 3–6 months.",
  },
  {
    q: "Do you target specific countries or regions?",
    a: "Yes. We build geo-targeted campaigns based on your ideal buyer countries, whether that's the UAE, USA, Europe, Southeast Asia, or Africa.",
  },
  {
    q: "What makes Prosira different from a generic digital agency?",
    a: "Prosira specializes in B2B and export-import businesses. Our entire methodology is built around international lead generation — not just website traffic.",
  },
  {
    q: "Do you provide a free consultation?",
    a: "Yes. We offer a free Global Market Expansion Blueprint call where we analyse your current digital presence and map an international growth strategy.",
  },
];

// ─── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function EXIMPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const c50 = useCounter(50, 2000, statsInView);
  const c1000 = useCounter(1000, 2200, statsInView);
  const c100 = useCounter(100, 1800, statsInView);

  return (
    <div className="exim-root" style={{ background: "#070c1a", color: "#f0f0f0", fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        .exim-root * { box-sizing: border-box; margin: 0; padding: 0; }

        .gold { color: #D4AF37; }
        .gold-bg { background: #D4AF37; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #D4AF37 0%, #f0c84a 50%, #D4AF37 100%);
          background-size: 200% 200%;
          color: #070c1a; font-weight: 700; font-size: 0.9rem;
          padding: 14px 28px; border-radius: 6px; border: none; cursor: pointer;
          text-decoration: none; letter-spacing: 0.01em;
          transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 24px rgba(212,175,55,0.35);
        }
        .btn-primary:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(212,175,55,0.55);
        }

        .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          color: #D4AF37; font-weight: 600; font-size: 0.9rem;
          padding: 14px 28px; border-radius: 6px; border: 1.5px solid rgba(212,175,55,0.5);
          cursor: pointer; text-decoration: none; letter-spacing: 0.01em;
          transition: border-color 0.3s, background 0.3s, transform 0.2s;
        }
        .btn-secondary:hover {
          border-color: #D4AF37;
          background: rgba(212,175,55,0.08);
          transform: translateY(-2px);
        }

        .section-label {
          display: inline-block;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
          color: #D4AF37; border: 1px solid rgba(212,175,55,0.3);
          background: rgba(212,175,55,0.06); padding: 5px 14px; border-radius: 20px;
          margin-bottom: 20px;
        }

        .display-font { font-family: 'Inter', sans-serif; }

        /* Glass card */
        .glass {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border-radius: 12px;
        }

        /* Section wrappers */
        .section-dark { background: #070c1a; }
        .section-mid { background: #0d1224; }
        .section-deep { background: #060a16; }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        /* Gold underline heading */
        .h-gold-line { position: relative; display: inline-block; }
        .h-gold-line::after {
          content: ''; position: absolute; left: 0; bottom: -6px;
          width: 60px; height: 3px;
          background: linear-gradient(90deg, #D4AF37, transparent);
          border-radius: 2px;
        }

        /* Service cards */
        .service-card {
          background: linear-gradient(145deg, rgba(20,28,60,0.8), rgba(10,15,30,0.95));
          border: 1px solid rgba(212,175,55,0.12);
          border-radius: 14px; padding: 32px 28px;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          cursor: default;
        }
        .service-card:hover {
          border-color: rgba(212,175,55,0.5);
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(212,175,55,0.12);
        }

        /* Industry cards */
        .industry-card {
          background: rgba(15,22,48,0.8);
          border: 1px solid rgba(212,175,55,0.1);
          border-radius: 12px; padding: 24px 20px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }
        .industry-card:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: rgba(212,175,55,0.45);
          box-shadow: 0 16px 40px rgba(212,175,55,0.14);
        }

        /* Trust items */
        .trust-item {
          display: flex; align-items: center; gap: 10px;
          white-space: nowrap;
          font-size: 0.8rem; font-weight: 500; letter-spacing: 0.04em;
          text-transform: uppercase; color: rgba(240,240,240,0.55);
        }
        .trust-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #D4AF37; flex-shrink: 0;
        }

        /* Timeline */
        .timeline-step {
          display: flex; gap: 28px; align-items: flex-start;
          position: relative;
        }
        .timeline-step:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 27px; top: 56px;
          width: 2px; height: calc(100% - 16px);
          background: linear-gradient(to bottom, rgba(212,175,55,0.4), rgba(212,175,55,0.05));
        }
        .timeline-num {
          width: 56px; height: 56px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Inter', sans-serif; font-size: 1rem; font-weight: 700;
          color: #D4AF37;
          border: 2px solid rgba(212,175,55,0.4);
          background: rgba(212,175,55,0.06);
          position: relative; z-index: 1;
        }

        /* Comparison table */
        .compare-col {
          flex: 1; border-radius: 14px; padding: 36px 30px;
        }
        .compare-col.prosira {
          background: linear-gradient(145deg, rgba(212,175,55,0.08), rgba(212,175,55,0.03));
          border: 1.5px solid rgba(212,175,55,0.4);
        }
        .compare-col.traditional {
          background: rgba(10,15,30,0.7);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .compare-row {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: 0.9rem;
        }
        .compare-row:last-child { border-bottom: none; }

        /* FAQ */
        .faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .faq-btn {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 22px 0; cursor: pointer;
          background: none; border: none; color: #f0f0f0;
          font-size: 1rem; font-weight: 500; text-align: left;
          transition: color 0.3s;
        }
        .faq-btn.active { color: #D4AF37; }
        .faq-icon {
          width: 28px; height: 28px; border-radius: 50%;
          border: 1.5px solid rgba(212,175,55,0.4);
          display: flex; align-items: center; justify-content: center;
          color: #D4AF37; flex-shrink: 0;
          transition: background 0.3s, transform 0.3s;
        }
        .faq-btn.active .faq-icon {
          background: rgba(212,175,55,0.15);
          transform: rotate(45deg);
        }
        .faq-answer { padding: 0 0 20px; color: rgba(240,240,240,0.6); line-height: 1.7; font-size: 0.93rem; }

        /* Stats */
        .stat-num {
          font-family: 'Inter', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #D4AF37;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        /* Floating card */
        .float-card {
          background: rgba(10,15,30,0.75);
          border: 1px solid rgba(212,175,55,0.25);
          backdrop-filter: blur(16px);
          border-radius: 10px;
          padding: 12px 18px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; }
          .compare-flex { flex-direction: column !important; }
          .trust-scroll { overflow-x: auto; padding-bottom: 8px; }
        }
      `}</style>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        {/* ambient glow */}
        <div style={{
          position: "absolute", top: "-200px", right: "-100px",
          width: "700px", height: "700px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-150px", left: "-100px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,60,120,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="container">
          <div className="hero-grid" style={{ display: "flex", gap: "60px", alignItems: "center" }}>

            {/* LEFT */}
            <motion.div
              style={{ flex: "1 1 480px" }}
              initial="hidden" animate="visible" variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <span className="section-label">✦ Trusted Growth Partner For Exporters & Importers</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="display-font"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.01em" }}
              >
                Operating Locally?{"\n"}
                <br />
                It&apos;s Time To{" "}
                <span className="gold" style={{ position: "relative" }}>
                  Market Globally.
                  <span style={{
                    position: "absolute", left: 0, bottom: "-4px", width: "100%", height: "2px",
                    background: "linear-gradient(90deg, #D4AF37, transparent)",
                  }} />
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} style={{ color: "rgba(240,240,240,0.65)", lineHeight: "1.75", marginBottom: "36px", maxWidth: "520px", fontSize: "1.0rem" }}>
                The global market doesn&apos;t sleep, so why should your lead generation? For export-import businesses, traditional networking and trade fairs are no longer enough. Prosira helps exporters, importers, manufacturers, and traders generate qualified international leads through SEO, Google Ads, LinkedIn outreach, and high-converting digital funnels.
              </motion.p>

              <motion.div variants={fadeUp} style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary">
                  Get Free Global Market Expansion Blueprint
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Talk To EXIM Expert →
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT – Globe visual */}
            <motion.div
              style={{ flex: "0 0 460px", position: "relative", height: "500px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Globe */}
              <div style={{ width: "420px", height: "420px", margin: "0 auto" }}>
                <GlobeSVG />
              </div>

              {/* Floating cards */}
              <motion.div
                className="float-card"
                style={{ position: "absolute", top: "30px", left: "-20px" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span style={{ fontSize: "1.4rem" }}>🌍</span>
                <div>
                  <div className="gold" style={{ fontWeight: 700, fontSize: "0.95rem" }}>100+ Countries</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(240,240,240,0.5)" }}>Global Reach</div>
                </div>
              </motion.div>

              <motion.div
                className="float-card"
                style={{ position: "absolute", bottom: "80px", left: "-30px" }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <span style={{ fontSize: "1.4rem" }}>⚡</span>
                <div>
                  <div className="gold" style={{ fontWeight: 700, fontSize: "0.95rem" }}>24/7</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(240,240,240,0.5)" }}>Lead Generation</div>
                </div>
              </motion.div>

              <motion.div
                className="float-card"
                style={{ position: "absolute", top: "150px", right: "-10px" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              >
                <span style={{ fontSize: "1.4rem" }}>✅</span>
                <div>
                  <div className="gold" style={{ fontWeight: 700, fontSize: "0.95rem" }}>Verified Buyers</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(240,240,240,0.5)" }}>Quality Leads</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ────────────────────────────────────────────────────── */}
      <div style={{
        borderTop: "1px solid rgba(212,175,55,0.15)",
        borderBottom: "1px solid rgba(212,175,55,0.15)",
        background: "rgba(212,175,55,0.03)",
        padding: "22px 0",
        overflow: "hidden",
      }}>
        <div className="container">
          <div className="trust-scroll" style={{ display: "flex", gap: "40px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
            {["Global Visibility", "International SEO", "Buyer Lead Generation", "LinkedIn Outreach", "Export Marketing", "Google Ads"].map((item) => (
              <div className="trust-item" key={item}>
                <span className="trust-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. WHY DIGITAL MARKETING FOR EXIM ──────────────────────────────── */}
      <section className="section-mid" style={{ padding: "100px 0" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <motion.span className="section-label" variants={fadeUp}>Why It Matters</motion.span>
            <motion.h2 variants={fadeUp}
              style={{ fontSize: "2rem", fontWeight: 700, lineHeight: "1.25", maxWidth: "600px", margin: "0 auto" }}>
              Why EXIM Businesses Need <span className="gold">Digital Marketing</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}
          >
            {[
              { icon: "🌐", title: "Reach Global Buyers", desc: "Access decision-makers and procurement teams in 100+ countries who are actively searching for your products right now." },
              { icon: "📩", title: "Generate RFQs Consistently", desc: "Move beyond sporadic inquiries. Build a predictable pipeline of qualified Request For Quotations every month." },
              { icon: "🚫", title: "Reduce Trade Fair Dependency", desc: "Trade fairs cost lakhs and deliver seasonal results. Digital marketing works 365 days a year at a fraction of the cost." },
              { icon: "🏆", title: "Build International Authority", desc: "Position your brand as a trusted global supplier through content, SEO, and thought leadership that converts." },
            ].map((card) => (
              <motion.div key={card.title} variants={fadeUp}
                style={{
                  background: "linear-gradient(145deg, rgba(18,26,55,0.9), rgba(10,15,30,0.95))",
                  border: "1px solid rgba(212,175,55,0.1)",
                  borderRadius: "14px", padding: "36px 28px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                whileHover={{ y: -6, borderColor: "rgba(212,175,55,0.45)", boxShadow: "0 20px 50px rgba(212,175,55,0.12)" }}
              >
                <div style={{
                  fontSize: "2rem", marginBottom: "16px",
                  width: "56px", height: "56px", borderRadius: "12px",
                  background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{card.icon}</div>
                <h3 className="gold" style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "10px" }}>{card.title}</h3>
                <p style={{ color: "rgba(240,240,240,0.55)", lineHeight: "1.75", fontSize: "0.9rem" }}>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. SERVICES ─────────────────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "100px 0" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <motion.span className="section-label" variants={fadeUp}>What We Do</motion.span>
            <motion.h2 variants={fadeUp}
              style={{ fontSize: "2rem", fontWeight: 700, lineHeight: "1.25" }}>
              Our EXIM <span className="gold">Growth Services</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}
          >
            {[
              { icon: "🔍", title: "Global SEO", desc: "Rank for high-intent buyer keywords across international markets and search engines." },
              { icon: "📊", title: "International Google Ads", desc: "Precision campaigns targeting importers, distributors, and procurement teams globally." },
              { icon: "💼", title: "LinkedIn B2B Lead Gen", desc: "Direct outreach to verified decision-makers, buyers, and industry leaders worldwide." },
              { icon: "🖥️", title: "Landing Page Development", desc: "High-converting pages designed to turn international traffic into qualified inquiries." },
              { icon: "✍️", title: "Content Marketing", desc: "Authority-building content that ranks globally and nurtures buyers through the funnel." },
              { icon: "📱", title: "Social Media Marketing", desc: "Brand positioning across LinkedIn, Meta, and industry-specific platforms." },
              { icon: "📧", title: "Email Marketing Automation", desc: "Automated follow-up sequences that convert cold leads into warm export inquiries." },
              { icon: "📈", title: "Analytics & Conversion Tracking", desc: "Full-funnel visibility so every rupee of marketing spend is tracked and optimised." },
            ].map((s) => (
              <motion.div key={s.title} className="service-card" variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div style={{
                  fontSize: "1.6rem", marginBottom: "16px",
                  width: "50px", height: "50px", borderRadius: "10px",
                  background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "10px", color: "#f0f0f0" }}>{s.title}</h3>
                <p style={{ color: "rgba(240,240,240,0.5)", fontSize: "0.87rem", lineHeight: "1.7" }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="section-mid" style={{ padding: "100px 0" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <motion.span className="section-label" variants={fadeUp}>Sectors We Serve</motion.span>
            <motion.h2 variants={fadeUp}
              style={{ fontSize: "2rem", fontWeight: 700, lineHeight: "1.25" }}>
              Industries We <span className="gold">Accelerate</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}
          >
            {[
              { icon: "🏭", label: "Manufacturers" },
              { icon: "⚙️", label: "Industrial Suppliers" },
              { icon: "🌾", label: "Agricultural Exporters" },
              { icon: "🧵", label: "Textile Exporters" },
              { icon: "🥫", label: "Food Exporters" },
              { icon: "🧪", label: "Chemical Exporters" },
              { icon: "🔩", label: "Engineering Companies" },
              { icon: "🤝", label: "Trading Companies" },
              { icon: "🚢", label: "Logistics Businesses" },
              { icon: "📦", label: "Packaging Manufacturers" },
              { icon: "🚗", label: "Auto Component Exporters" },
              { icon: "💊", label: "Pharmaceutical Exporters" },
            ].map((ind) => (
              <motion.div key={ind.label} className="industry-card" variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{ind.icon}</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(240,240,240,0.7)", lineHeight: "1.4" }}>{ind.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. PROCESS TIMELINE ─────────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "100px 0" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "72px" }}
          >
            <motion.span className="section-label" variants={fadeUp}>Our Method</motion.span>
            <motion.h2 variants={fadeUp}
              style={{ fontSize: "2rem", fontWeight: 700 }}>
              Global Lead Generation <span className="gold">Process</span>
            </motion.h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "0 80px" }}>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              style={{ display: "flex", flexDirection: "column", gap: "32px" }}
            >
              {[
                { n: "01", title: "Market Research", desc: "We identify high-potential markets, buyer personas, and competitive landscapes for your product category globally." },
                { n: "02", title: "Buyer Persona Creation", desc: "Deep profiling of your ideal international buyers — their search behavior, pain points, and decision criteria." },
                { n: "03", title: "International SEO & Ads", desc: "Multi-market campaigns combining organic SEO, Google Ads, and LinkedIn to capture buyer intent at every stage." },
              ].map((step) => (
                <motion.div key={step.n} className="timeline-step" variants={fadeUp}>
                  <div className="timeline-num">{step.n}</div>
                  <div style={{ paddingTop: "12px", flex: 1 }}>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "8px" }}>{step.title}</h3>
                    <p style={{ color: "rgba(240,240,240,0.5)", fontSize: "0.88rem", lineHeight: "1.7" }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              style={{ display: "flex", flexDirection: "column", gap: "32px" }}
            >
              {[
                { n: "04", title: "Lead Capture Funnel", desc: "High-converting landing pages, inquiry forms, and nurturing sequences built to turn global traffic into warm leads." },
                { n: "05", title: "Lead Qualification", desc: "Every lead is scored and verified so your sales team focuses only on buyers with genuine purchase intent." },
                { n: "06", title: "Growth & Expansion", desc: "Continuous optimisation across channels, scaling what works, entering new markets, and compounding your global reach." },
              ].map((step) => (
                <motion.div key={step.n} className="timeline-step" variants={fadeUp}>
                  <div className="timeline-num">{step.n}</div>
                  <div style={{ paddingTop: "12px", flex: 1 }}>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "8px" }}>{step.title}</h3>
                    <p style={{ color: "rgba(240,240,240,0.5)", fontSize: "0.88rem", lineHeight: "1.7" }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. WHY PROSIRA – COMPARISON ─────────────────────────────────────── */}
      <section className="section-mid" style={{ padding: "100px 0" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <motion.span className="section-label" variants={fadeUp}>The Difference</motion.span>
            <motion.h2 variants={fadeUp}
              style={{ fontSize: "2rem", fontWeight: 700 }}>
              Traditional Marketing <span className="gold">vs Prosira</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="compare-flex"
            style={{ display: "flex", gap: "24px", maxWidth: "860px", margin: "0 auto" }}
          >
            {/* Traditional */}
            <div className="compare-col traditional">
              <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "24px", color: "rgba(240,240,240,0.5)" }}>Traditional Marketing</h3>
              {[
                { icon: "❌", text: "Trade Fair Dependency" },
                { icon: "❌", text: "Seasonal Leads" },
                { icon: "❌", text: "Limited Geographic Reach" },
                { icon: "❌", text: "High Cost, Unpredictable ROI" },
                { icon: "❌", text: "Reactive Lead Generation" },
              ].map((row) => (
                <div className="compare-row" key={row.text}>
                  <span>{row.icon}</span>
                  <span style={{ color: "rgba(240,240,240,0.45)", fontSize: "0.9rem" }}>{row.text}</span>
                </div>
              ))}
            </div>

            {/* Prosira */}
            <div className="compare-col prosira">
              <h3 className="gold" style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "24px" }}>Prosira Advertisers</h3>
              {[
                { icon: "✅", text: "Always-On Lead Generation" },
                { icon: "✅", text: "Consistent Year-Round Leads" },
                { icon: "✅", text: "100+ Countries Reach" },
                { icon: "✅", text: "Scalable & Trackable Growth" },
                { icon: "✅", text: "Verified Buyer Leads" },
              ].map((row) => (
                <div className="compare-row" key={row.text}>
                  <span>{row.icon}</span>
                  <span className="gold" style={{ fontSize: "0.9rem", fontWeight: 600 }}>{row.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. STATISTICS ────────────────────────────────────────────────────── */}
      <section
        ref={statsRef}
        style={{
          padding: "100px 0",
          background: "linear-gradient(135deg, #060a14 0%, #0d1520 50%, #060a14 100%)",
          borderTop: "1px solid rgba(212,175,55,0.12)",
          borderBottom: "1px solid rgba(212,175,55,0.12)",
        }}
      >
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", textAlign: "center" }}
          >
            {[
              { value: c100, suffix: "+", label: "Countries Reach" },
              { value: c1000, suffix: "+", label: "Target Keywords" },
              { value: "24/7", suffix: "", label: "Lead Generation" },
              { value: c100, suffix: "%", label: "Conversion Tracking" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="stat-num">
                  {stat.value}{stat.suffix}
                </div>
                <div style={{ color: "rgba(240,240,240,0.45)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "8px" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 9. FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "100px 0" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <motion.span className="section-label" variants={fadeUp}>FAQs</motion.span>
            <motion.h2 variants={fadeUp}
              style={{ fontSize: "2rem", fontWeight: 700 }}>
              Questions <span className="gold">Answered</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} className="faq-item" variants={fadeUp}>
                <button
                  className={`faq-btn ${openFaq === i ? "active" : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <div className="faq-icon">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="faq-answer">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ────────────────────────────────────────────────────── */}
      <section style={{
        padding: "120px 24px",
        background: "linear-gradient(135deg, #1a1200 0%, #2d1e00 30%, #1a1200 60%, #0a0800 100%)",
        borderTop: "1px solid rgba(212,175,55,0.2)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Glow orbs */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "600px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(212,175,55,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={stagger}
          style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto", position: "relative" }}
        >
          <motion.span className="section-label" variants={fadeUp}>Start Growing</motion.span>

          <motion.h2
              variants={fadeUp}
            style={{ fontSize: "2.25rem", fontWeight: 700, lineHeight: "1.2", marginBottom: "24px" }}
          >
            Stop Searching For{" "}
            <span className="gold">Global Buyers.</span>
            <br />
            Let Them Find You.
          </motion.h2>

          <motion.p variants={fadeUp} style={{ color: "rgba(240,240,240,0.6)", lineHeight: "1.75", marginBottom: "44px", fontSize: "1.0rem" }}>
            Build a predictable international lead generation system and grow your export-import business with Prosira Advertisers.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "16px 32px" }}>
              Claim Free Blueprint
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ fontSize: "1rem", padding: "16px 32px" }}>
              Talk To EXIM Expert →
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}