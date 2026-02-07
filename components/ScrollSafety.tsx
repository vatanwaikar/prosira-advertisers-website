"use client";

import { useEffect } from "react";

export default function ScrollSafety() {
  useEffect(() => {
    const root = document.getElementById("app-scroll-root");
    if (!root) return;

    const style = root.style as CSSStyleDeclaration & {
      webkitOverflowScrolling?: string;
    };

    style.overflowY = "auto";
    style.webkitOverflowScrolling = "touch";
  }, []);

  return null;
}
