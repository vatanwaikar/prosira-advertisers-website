"use client";

import { useEffect } from "react";

export default function ScrollFailsafe() {
  useEffect(() => {
    const root = document.getElementById("app-scroll-root");
    if (!root) return;

    const forceUnlock = () => {
      if (root.scrollHeight > window.innerHeight) {
        root.style.overflowY = "auto";
      }
    };

    forceUnlock();
    window.addEventListener("resize", forceUnlock);

    return () => window.removeEventListener("resize", forceUnlock);
  }, []);

  return null;
}
