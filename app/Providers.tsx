"use client";

import { useEffect, useRef } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    el.classList.remove("opacity-0");
    el.classList.add("opacity-100");
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="opacity-0 transition-opacity duration-300 ease-out"
    >
      {children}
    </div>
  );
}
