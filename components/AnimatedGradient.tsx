"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function AnimatedGradient() {
  useEffect(() => {
    gsap.to(".gradient-orb", {
      y: "random(-100, 100)",
      x: "random(-100, 100)",
      scale: "random(0.9, 1.3)",
      duration: "random(15, 25)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 3,
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-black">
      {/* Orbs */}
      <div className="gradient-orb absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-[0.25] bg-[radial-gradient(circle,rgba(76,29,149,1)_0%,rgba(0,0,0,0)_70%)]" />
      <div className="gradient-orb absolute top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-[0.2] bg-[radial-gradient(circle,rgba(30,58,138,1)_0%,rgba(0,0,0,0)_70%)]" />
      <div className="gradient-orb absolute -bottom-[20%] left-[10%] w-[70vw] h-[70vw] rounded-full blur-[150px] opacity-[0.15] bg-[radial-gradient(circle,rgba(88,28,135,1)_0%,rgba(0,0,0,0)_70%)]" />
      
      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-screen"  
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
        }}
      />
    </div>
  );
}
