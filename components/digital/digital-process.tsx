"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";

const steps = [
  { title: "Discovery & Research", description: "Understanding business, competitors & target audience before launching campaign." },
  { title: "Strategy Development", description: "Building a KPI-focused roadmap aligned with ROI, lead generation &  growth." },
  { title: "Implementation", description: "Executing high-performance campaigns across search, social, and web platforms." },
  { title: "Monitor & Optimize", description: "Continuous performance tuning using real-time analytics and conversion tracking." },
  { title: "Report & Scale", description: "Detailed reporting, insights, and smart scaling strategies for long-term success." },
];

export default function DigitalProcess() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  const angleRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);

  /* ================= THREE PARTICLES ================= */
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 120 : 260;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });

    const resize = () => {
      const w = containerRef.current!.offsetWidth || 300;
      const h = containerRef.current!.offsetHeight || 500;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 300;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: isMobile ? 1.2 : 1.8,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let raf: number;
    const animate = () => {
      points.rotation.y += 0.0005;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ================= CARD POSITION ================= */
  const updateCards = () => {
    const radius = window.innerWidth < 768 ? 230 : 350;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const a = (i / steps.length) * Math.PI * 2 + angleRef.current;
      const x = Math.cos(a) * radius;
      const z = Math.sin(a) * radius;
      const isFront = z > 0;

      gsap.to(card, {
        x,
        z,
        scale: isFront ? 1.15 : 0.85,
        opacity: isFront ? 1 : 0.35,
        filter: `blur(${isFront ? 0 : 4}px)`,
        duration: 0.6,
        overwrite: true,
      });
    });
  };

  /* ================= AUTO ROTATE ================= */
  useEffect(() => {
    let raf: number;
    const loop = () => {
      if (!draggingRef.current) {
        angleRef.current -= 0.0025; // faster
        updateCards();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ================= DRAG (SCROLL SAFE) ================= */
useEffect(() => {
  const el = containerRef.current;
  if (!el) return;

  let isHorizontalDrag = false;

  const start = (e: PointerEvent) => {
    draggingRef.current = false; // not immediately true
    lastXRef.current = e.clientX;
  };

  const move = (e: PointerEvent) => {
    const deltaX = e.clientX - lastXRef.current;
    const deltaY = Math.abs(e.movementY);

    // Detect horizontal intent only
    if (Math.abs(deltaX) > 5 && Math.abs(deltaX) > deltaY) {
      isHorizontalDrag = true;
      draggingRef.current = true;
    }

    if (!isHorizontalDrag) return;

    angleRef.current += deltaX * 0.004;
    lastXRef.current = e.clientX;
    updateCards();
  };

  const end = () => {
    draggingRef.current = false;
    isHorizontalDrag = false;
  };

  el.addEventListener("pointerdown", start);
  el.addEventListener("pointermove", move);
  el.addEventListener("pointerup", end);
  el.addEventListener("pointerleave", end);

  return () => {
    el.removeEventListener("pointerdown", start);
    el.removeEventListener("pointermove", move);
    el.removeEventListener("pointerup", end);
    el.removeEventListener("pointerleave", end);
  };
}, []);


  /* ================= RENDER ================= */
  return (
    <section className="relative bg-secondary py-28 overflow-hidden">
      <header className="text-center mb-16 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-primary font-serif">Digital Process</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A premium, performance-driven approach designed to maximize ROI and accelerate digital growth.
        </p>
      </header>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      />

      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-6xl mx-auto h-[520px] flex items-start justify-center perspective-[1400px] cursor-grab"
      >
<div className="relative w-full h-full preserve-3d flex items-center justify-center">          {steps.map((step, i) => (
            <article
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="
                absolute w-[340px] md:w-[420px]
                p-10 rounded-3xl
                bg-black/60 backdrop-blur-xl
                border border-primary/30
                shadow-[0_20px_60px_-10px_rgba(212,175,55,0.35)]
                text-center
              "
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
