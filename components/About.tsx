"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".about-wrapper", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        opacity: 0,
        y: 100,
        rotateX: -10,
        transformOrigin: "bottom center",
        duration: 2,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const text = "I am a Full-Stack Developer and B.Tech CSE student at Lovely Professional University. I specialize in building modern web applications and crafting clean, scalable, and responsive digital experiences.";

  return (
    <section 
      id="about" 
      ref={container} 
      className="relative py-20 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-black"
      style={{ perspective: "1000px" }}
    >
      {/* Intense Ambient Glows - Added more color and vibrancy */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] -z-10" />

      <div className="about-wrapper relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Visual Profile Card */}
        <div className="w-full lg:w-5/12 perspective-1000">
          <div className="relative w-full aspect-[4/5] rounded-[2.5rem] bg-white/[0.03] border border-white/20 p-2 shadow-[0_0_50px_rgba(79,70,229,0.15)] backdrop-blur-3xl transform-gpu transition-all duration-700 hover:shadow-indigo-500/40 hover:border-white/40">
            {/* Inner Glow/Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 via-transparent to-white/10 rounded-[2.5rem] z-10 pointer-events-none" />
            
            <div className="group/card relative w-full h-full rounded-[2.2rem] bg-black/20 overflow-hidden flex flex-col justify-end border border-white/10 shadow-2xl">
              
              {/* Profile Image - Increased vibrancy and scale action */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image 
                  src="/profile.jpeg" 
                  alt="Varun Jamwal" 
                  fill
                  className="object-cover object-[center_70%] opacity-90 saturate-[1.1] contrast-[1.1] transition-all duration-1000 scale-105 group-hover/card:scale-110"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Status Indicator - More vibrant neon */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl z-20 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_15px_#4ade80] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white whitespace-nowrap">Open to Work</span>
              </div>
              
              {/* Profile Info Card - Higher contrast glass */}
              <div className="relative z-20 p-8 pb-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent backdrop-blur-[4px]">
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Full-Stack Developer</h3>
                <p className="text-indigo-300 text-sm font-bold uppercase tracking-[0.25em] mb-8 drop-shadow-md">B.Tech CSE @ LPU</p>
                
                <div className="flex gap-3">
                  <span className="px-5 py-2.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-[10px] font-black text-white backdrop-blur-2xl shadow-lg transition-transform hover:-translate-y-1">FULL-STACK</span>
                  <span className="px-5 py-2.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-[10px] font-black text-white backdrop-blur-2xl shadow-lg transition-transform hover:-translate-y-1">UI/UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text Description */}
        <div className="w-full lg:w-7/12">
          <div className="flex items-center gap-4 mb-10 translate-x-[-1px]">
            <span className="w-12 h-[3px] bg-gradient-to-r from-cyan-400 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></span>
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-white/80">About Me</h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-display font-black leading-[1.1] tracking-tighter mb-12 flex flex-wrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/20 inline-block w-full filter drop-shadow-[0_5px_15px_rgba(255,255,255,0.1)]">
              {text.split(" ").map((word, i) => (
                <span key={i} className="about-text inline-block mr-[0.25em] mb-2">{word}</span>
              ))}
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12 pt-12 border-t border-white/10">
            <div className="group/item relative">
              <div className="absolute -left-6 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-400 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
              <h4 className="text-cyan-400 font-black mb-4 text-xs uppercase tracking-[0.25em] flex items-center gap-3">
                <span className="w-2 h-2 rounded-sm bg-cyan-400 rotate-45 shadow-[0_0_10px_#22d3ee]" />
                Philosophy
              </h4>
              <p className="text-white/60 leading-relaxed text-[15px] font-medium group-hover/item:text-white/90 transition-colors">
                I believe that code is an art form. Every application should not only function flawlessly but perform beautifully under the hood.
              </p>
            </div>
            <div className="group/item relative">
              <div className="absolute -left-6 top-0 w-[2px] h-full bg-gradient-to-b from-indigo-500 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
              <h4 className="text-indigo-400 font-black mb-4 text-xs uppercase tracking-[0.25em] flex items-center gap-3">
                <span className="w-2 h-2 rounded-sm bg-indigo-500 rotate-45 shadow-[0_0_10px_#6366f1]" />
                Focus
              </h4>
              <p className="text-white/60 leading-relaxed text-[15px] font-medium group-hover/item:text-white/90 transition-colors">
                Bridging the gap between robust backend architectures and mesmerizing frontend experiences to create cohesive digital products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
