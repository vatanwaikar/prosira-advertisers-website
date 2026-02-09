"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";

const steps = [
  { title: "Discovery & Research", description: "Understanding goals & audience." },
  { title: "Strategy Development", description: "Building KPI roadmap." },
  { title: "Implementation", description: "Executing campaigns." },
  { title: "Monitor & Optimize", description: "Performance tuning." },
  { title: "Report & Scale", description: "Insights & growth." },
];

export default function DigitalProcess() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  const angleRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);

  /* ================= THREE.JS PARTICLES (SAFE) ================= */
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 100 : 220;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
    camera.position.z = 180;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });

    const resize = () => {
      const w = containerRef.current!.offsetWidth || 300;
      const h = containerRef.current!.offsetHeight || 420;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 260;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: isMobile ? 1.1 : 1.6,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let raf: number;
    const animate = () => {
      points.rotation.y += 0.00035;
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

  /* ================= CARD POSITIONING ================= */
  const updateCards = () => {
    const radius = window.innerWidth < 768 ? 190 : 280;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const a = (i / steps.length) * Math.PI * 2 + angleRef.current;
      const x = Math.cos(a) * radius;
      const z = Math.sin(a) * radius;
      const isFront = z > 0;

      gsap.to(card, {
        x,
        z,
        scale: isFront ? 1.1 : 0.85,
        opacity: isFront ? 1 : 0.45,
        filter: `blur(${isFront ? 0 : 3}px)`,
        duration: 0.45,
        overwrite: true,
      });
    });
  };

  /* ================= AUTO ROTATE (NO RE-RENDER) ================= */
  useEffect(() => {
    let raf: number;
    const loop = () => {
      if (!draggingRef.current) {
        angleRef.current -= 0.0013;
        updateCards();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ================= DRAG CONTROL ================= */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const start = (e: PointerEvent) => {
      draggingRef.current = true;
      lastXRef.current = e.clientX;
      el.style.cursor = "grabbing";
    };

    const move = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const delta = e.clientX - lastXRef.current;
      angleRef.current += delta * 0.0035;
      lastXRef.current = e.clientX;
      updateCards();
    };

    const end = () => {
      draggingRef.current = false;
      el.style.cursor = "grab";
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
    <section className="relative bg-secondary min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <header className="text-center mb-10 z-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          How We Drive <span className="text-primary font-serif">Digital Success</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Our proven process ensures measurable growth across every campaign.
        </p>
      </header>

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      />

      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-5xl h-[420px] flex items-start justify-center pt-6 perspective-[1100px] cursor-grab"
      >
        <div className="relative w-0 h-0 preserve-3d">
          {steps.map((step, i) => (
            <article
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="absolute w-[230px] p-6 rounded-xl border bg-background/80 backdrop-blur-md shadow-xl text-center"
            >
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
