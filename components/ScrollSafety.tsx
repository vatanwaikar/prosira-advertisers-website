"use client";

import { useEffect } from "react";

export default function ScrollSafety() {
  useEffect(() => {
    const root = document.getElementById("app-scroll-root");
    if (!root) return;

    // Prevent unnecessary style overwrites
    if (root.style.overflowY !== "auto") {
      root.style.overflowY = "auto";
    }

    // iOS smooth scrolling support
    if ((root.style as any).webkitOverflowScrolling !== "touch") {
      (root.style as any).webkitOverflowScrolling = "touch";
    }
  }, []);

  return null;
}
