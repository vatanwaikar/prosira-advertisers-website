"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(true);

  const ICON_SIZE = 24; // px (must match image size)

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setVisible(false);
      return;
    }

    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(
              ${mouseX - ICON_SIZE / 2}px,
              ${mouseY - ICON_SIZE / 2}px,
              0
            )`;
          }
          rafId = null;
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(
      "a, button, [data-cursor='expand']"
    );

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  if (!visible) return null;

  return (
   <div
  ref={cursorRef}
  className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
>
  <div
    className={cn(
      "transition-transform duration-150 ease-out",
      hover ? "scale-150 opacity-90" : "scale-100 opacity-35"
    )}
  >
    <Image
      src="/prosra-icon-black-png.png"
      alt="Prosira cursor icon"
      width={ICON_SIZE}
      height={ICON_SIZE}
      className="
        object-contain
        brightness-200
        invert
        sepia
        saturate-200
        hue-rotate-[20deg]
      "
      priority
    />
  </div>
</div>

  );
}
