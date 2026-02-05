"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const ICON_SIZE = 24;

  // scale lerp refs
  const scaleRef = useRef(1);
  const targetScaleRef = useRef(1);

  /* ---------- DEVICE CHECK ---------- */
  const checkDevice = () => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    setEnabled(!isTouch);
  };

  useEffect(() => {
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  /* ---------- MOUSE MOVE ---------- */
  useEffect(() => {
    if (!enabled) return;

    let rafId: number | null = null;

    const onMove = (e: MouseEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.translate = `${
            e.clientX - ICON_SIZE / 2
          }px ${e.clientY - ICON_SIZE / 2}px`;
        }
        rafId = null;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  /* ---------- HOVER DETECTION ---------- */
  useEffect(() => {
    if (!enabled) return;

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
  }, [enabled]);

  /* ---------- SMOOTH SCALE (LERP – REAL FIX) ---------- */
  useEffect(() => {
    if (!enabled || !cursorRef.current) return;

    let rafId: number;
    const speed = 0.15; // ↓ slow = smoother

    const animate = () => {
      targetScaleRef.current = hover ? 3.5 : 1;

      scaleRef.current +=
        (targetScaleRef.current - scaleRef.current) * speed;

      cursorRef.current!.style.transform = `scale(${scaleRef.current})`;

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [hover, enabled]);

  /* ---------- SAFETY RESET ---------- */
  useEffect(() => {
    if (!enabled) return;

    const reset = () => setHover(false);

    window.addEventListener("mousedown", reset);
    window.addEventListener("mouseup", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("scroll", reset, { passive: true });

    return () => {
      window.removeEventListener("mousedown", reset);
      window.removeEventListener("mouseup", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("scroll", reset);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
    >
      <div
        className={cn(
          "transition-opacity duration-200 ease-out",
          hover ? "opacity-20" : "opacity-40"
        )}
      >
        <Image
          src="/prosra-icon-black-png.png"
          alt="Prosira cursor icon"
          width={ICON_SIZE}
          height={ICON_SIZE}
          draggable={false}
          className="object-contain brightness-200 invert sepia saturate-200 hue-rotate-[20deg]"
        />
      </div>
    </div>
  );
}
