"use client";

import { useEffect } from "react";

export default function ScrollFailsafe() {
  useEffect(() => {
    const root = document.getElementById("app-scroll-root");
    if (!root) return;

    const forceUnlock = () => {
      if (root.scrollHeight > window.innerHeight) {
        if (root.style.overflowY !== "auto") {
          root.style.overflowY = "auto";
        }
      }
    };

    forceUnlock();

    window.addEventListener("resize", forceUnlock, { passive: true });

    return () => {
      window.removeEventListener("resize", forceUnlock);
    };
  }, []);

  return null;
}
