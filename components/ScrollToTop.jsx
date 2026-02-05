"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="
        fixed z-[9999]
        text-[#C9A24D]

        bottom-[calc(7rem+env(safe-area-inset-bottom))] right-6
        md:bottom-20 md:right-8

        /* ❌ MOBILE hover/transform OFF */
        md:hover:-translate-y-2
        md:hover:scale-110
        md:active:scale-95

        transition-all duration-300 ease-out
        touch-manipulation
      "
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
        <polyline points="18 20 12 14 6 20" />
        <polyline points="18 10 12 4 6 10" />
      </svg>
    </button>
  );
}
