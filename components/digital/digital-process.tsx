"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import * as THREE from "three";

const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description: "Understanding goals & audience.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Building KPI roadmap.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Executing campaigns.",
  },
  {
    number: "04",
    title: "Monitor & Optimize",
    description: "Performance tuning.",
  },
  {
    number: "05",
    title: "Report & Scale",
    description: "Insights & growth.",
  },
];

export function DigitalProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [angle, setAngle] = useState(0);
  const radius = 300;

  /* ================= PARTICLES ================= */

  useEffect(() => {
    if (!canvasRef.current) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 120 : 320;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
    camera.position.z = 180;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false,
    });

    const resize = () => {
      const w = containerRef.current?.offsetWidth || 300;
const h = containerRef.current?.offsetHeight || 420;

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

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

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
      renderer.dispose();
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ================= POSITION CARDS ================= */

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const a = (i / steps.length) * Math.PI * 2 + angle;

      const x = Math.cos(a) * radius;
      const z = Math.sin(a) * radius;

      const isFront = z > 0;

      gsap.to(card, {
        x,
        z,
        scale: isFront ? 1.15 : 0.8,
        opacity: isFront ? 1 : 0.35,
        filter: `blur(${isFront ? 0 : 3}px)`,
        rotationY: 0,
        duration: 0.5,
        overwrite: true,
      });
    });
  }, [angle]);

  /* ================= AUTO ROTATE ================= */

  useEffect(() => {
    let raf: number;

    const loop = () => {
      setAngle((a) => a - 0.0018);
      raf = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(raf);
  }, []);

  /* ================= DRAG CONTROL ================= */

  useEffect(() => {
    let dragging = false;
    let lastX = 0;

    const start = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
    };

    const move = (e: PointerEvent) => {
      if (!dragging) return;

      const delta = e.clientX - lastX;
      setAngle((a) => a + delta * 0.0035);

      lastX = e.clientX;
    };

    const end = () => {
      dragging = false;
    };

    window.addEventListener("pointerdown", start);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);

    return () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
    };
  }, []);

  /* ================= RENDER ================= */

  return (
<section className="relative bg-secondary min-h-screen flex flex-col items-center justify-center overflow-hidden">

  {/* HEADING */}
  <div className="text-center mb-10 z-10">
    <h2 className="text-3xl md:text-4xl font-bold">
      How We Drive{" "}
      <span className="text-primary font-serif">
        Digital Success
      </span>
    </h2>

    <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
      Our proven process ensures measurable growth across every campaign.
    </p>
  </div>
      {/* PARTICLE BACKGROUND */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60 -z-0"

      />

      {/* ORBIT CONTAINER */}
      <div
        ref={containerRef}
className="relative z-10 w-full max-w-5xl h-[420px] flex items-start justify-center pt-6 perspective-[1100px]"
      >
        {/* CARDS */}
        <div className="relative w-0 h-0 preserve-3d">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="absolute w-[230px] p-6 rounded-xl border bg-background/80 backdrop-blur-md shadow-xl text-center will-change-transform"
            >
              <div className="text-primary font-bold mb-2">
                {step.number}
              </div>

              <h3 className="font-bold mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* DOT NAVIGATION */}
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() =>
                setAngle(-(i / steps.length) * Math.PI * 2)
              }
              className="w-3 h-3 rounded-full bg-primary/50 hover:bg-primary transition hover:scale-125"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
