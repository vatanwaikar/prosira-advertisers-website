"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const ICON_SIZE = 24;

  const scaleRef = useRef(1);
  const targetScaleRef = useRef(1);

  /* ---------- FINAL DEVICE CHECK (HARD BLOCK TOUCH) ---------- */
  const checkDevice = () => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    const canHover = window.matchMedia("(any-hover: hover)").matches;
    const finePointer = window.matchMedia("(any-pointer: fine)").matches;

    setEnabled(!isTouch && canHover && finePointer);
  };

  useEffect(() => {
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  /* ---------- POINTER MOVE (MOUSE ONLY) ---------- */
  useEffect(() => {
    if (!enabled) return;

    let rafId: number | null = null;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
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

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  /* ---------- HOVER DETECTION ---------- */
  useEffect(() => {
    if (!enabled) return;

    const targets = document.querySelectorAll(
      "a[href], button:not([disabled]), [data-cursor='expand']"
    );

    const enter = (e: Event) => {
      if ((e as PointerEvent).pointerType === "mouse") {
        setHover(true);
      }
    };

    const leave = () => setHover(false);

    targets.forEach((el) => {
      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointerleave", leave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("pointerenter", enter);
        el.removeEventListener("pointerleave", leave);
      });
    };
  }, [enabled]);

  /* ---------- SMOOTH SCALE ---------- */
  useEffect(() => {
    if (!enabled || !cursorRef.current) return;

    let rafId: number;
    const speed = 0.15;

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

  /* ---------- HARD RESET (EXTRA SAFETY) ---------- */
  useEffect(() => {
    if (!enabled) return;

    const reset = () => setHover(false);

    window.addEventListener("pointerdown", reset);
    window.addEventListener("pointercancel", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("scroll", reset, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", reset);
      window.removeEventListener("pointercancel", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("scroll", reset);
    };
  }, [enabled]);

  /* ---------- BODY CLASS FAILSAFE ---------- */
  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("cursor-active");
    return () => {
      document.body.classList.remove("cursor-active");
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
