"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MagneticButton } from "./MagneticButton";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { 
  SiReact, 
  SiJavascript, 
  SiMongodb, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiGit, 
  SiCloudinary, 
  SiVercel 
} from "react-icons/si";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const pathRef3 = useRef<SVGPathElement>(null);
  const [mounted, setMounted] = useState(false);

  const techStack = [
    { icon: <SiReact />, color: "#61DAFB", name: "React" },
    { icon: <SiJavascript />, color: "#F7DF1E", name: "JavaScript" },
    { icon: <SiMongodb />, color: "#47A248", name: "MongoDB" },
    { icon: <SiNodedotjs />, color: "#339933", name: "Node.js" },
    { icon: <SiTailwindcss />, color: "#06B6D4", name: "Tailwind CSS" },
    { icon: <SiGit />, color: "#F05032", name: "Git" },
    { icon: <SiCloudinary />, color: "#3448C5", name: "Cloudinary" },
    { icon: <SiVercel />, color: "#FFFFFF", name: "Vercel" },
  ];

  useEffect(() => {
    // 1. Mark as mounted to trigger responsive elements
    setMounted(true);
    
    // 2. Manually set the SVG paths to bypass hydration mismatch
    const generatePath = (R: number, A: number, f: number) => {
      const points = [];
      for (let i = 0; i <= 360; i += 2) {
        const rad = (i * Math.PI) / 180;
        const r = R + A * Math.sin(f * rad);
        const x = r * Math.cos(rad);
        const y = r * Math.sin(rad);
        points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`);
      }
      return points.join(" ") + " Z";
    };

    if (pathRef1.current) pathRef1.current.setAttribute("d", generatePath(215, 14, 12));
    if (pathRef2.current) pathRef2.current.setAttribute("d", generatePath(219, 14, 12));
    if (pathRef3.current) pathRef3.current.setAttribute("d", generatePath(211, 14, 12));

    // 3. GSAP Animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        ".reveal-text",
        { y: "100%", opacity: 0, rotateZ: 2 },
        { y: "0%", opacity: 1, rotateZ: 0, duration: 1.8, stagger: 0.1, delay: 0.1 }
      )
      .fromTo(
        ".hero-tagline",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        "-=1.2"
      )
      .fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        "-=1.2"
      )
      .fromTo(
        ".orbit-container",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 2, ease: "power3.out" },
        "-=1.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative w-full min-h-[80vh] flex flex-col justify-start px-6 md:px-12 overflow-hidden bg-black selection:bg-indigo-500/30 pt-32 pb-8">
      {/* Premium Background Layering */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Minimalist Grid System */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Mesh Glows */}
        <div className="absolute top-[10%] left-[5%] w-[50vw] h-[50vw] bg-indigo-500/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[120px]" />
        
        {/* Center Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-white/[0.02] rounded-full blur-[160px]" />
      </div>

      <div className="z-10 w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-start relative pt-8 md:pt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-0 w-full">
          {/* Left Side: Content */}
          <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col">
            <div className="mb-6 opacity-0 hero-tagline">
              <div className="flex items-center gap-4">
                <div className="relative h-[2px] w-12 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-[#ff4d4d] shadow-[0_0_15px_#ff4d4d]" />
                  <div className="absolute inset-0 bg-white/40 animate-shimmer" style={{ transform: 'translateX(-100%)' }} />
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.6em] text-[#ff4d4d]/90 select-none">
                  Available for freelance
                </span>
              </div>
            </div>
            
            <div className="hero-header-parallax group">
              <h1 className="text-[11vw] xl:text-[11vw] font-heading font-black tracking-tighter leading-[0.88] uppercase flex flex-col pointer-events-none select-none">
                <div className="overflow-hidden">
                  <span className="block reveal-text text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 drop-shadow-2xl">
                    VARUN
                  </span>
                </div>
                <div className="overflow-hidden md:-mt-4">
                  <span className="block reveal-text text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60">
                    JAMWAL
                  </span>
                </div>
              </h1>
            </div>
          </div>

          {/* Right Side: Orbiting Tech Stack */}
          <div className="w-full md:w-2/5 lg:w-1/3 flex items-center justify-center orbit-container lg:-translate-x-20 xl:-translate-x-24">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] flex items-center justify-center animate-spin-slow">
              {/* Central Glowing Core - Grounded & Dynamic */}
              <div className="absolute w-32 h-32 bg-radial-glow rounded-full blur-[50px] animate-pulse-slow" />
              <div className="absolute w-20 h-20 bg-white/5 rounded-full blur-[25px] border border-white/5" />
              
              {/* Decorative Wavy Rings - Manual path to fix hydration */}
              <svg className="absolute w-full h-full pointer-events-none overflow-visible opacity-60" viewBox="-250 -250 500 500">
                <path
                  ref={pathRef1}
                  fill="none"
                  stroke="rgba(255, 215, 0, 0.45)"
                  strokeWidth="0.8"
                  strokeDasharray="1000"
                  className="drop-shadow-[0_0_12px_rgba(255,215,0,0.5)] animate-pulse-slow animate-dash-flow-1"
                />
                <path
                  ref={pathRef2}
                  fill="none"
                  stroke="rgba(255, 191, 0, 0.35)"
                  strokeWidth="0.8"
                  strokeDasharray="800"
                  className="drop-shadow-[0_0_10px_rgba(255,191,0,0.3)] animate-pulse-slow animate-dash-flow-2"
                />
                <path
                  ref={pathRef3}
                  fill="none"
                  stroke="rgba(218, 165, 32, 0.35)"
                  strokeWidth="0.8"
                  strokeDasharray="1200"
                  className="drop-shadow-[0_0_10px_rgba(218,165,32,0.3)] animate-pulse-slow animate-dash-flow-3"
                />
              </svg>

              {/* Logos Orbiting - Rendered only after mount for stability */}
              {mounted && techStack.map((tech, index) => {
                const angle = (index / techStack.length) * (2 * Math.PI);
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
                const radius = isMobile ? 120 : 215;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div 
                    key={index}
                    className="absolute group/tech transition-all duration-300 transform-gpu hover:scale-125"
                    style={{ 
                      transform: `translate(${x}px, ${y}px)`
                    }}
                  >
                    <div className="animate-reverse-spin">
                      <div 
                        className="p-3 md:p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl flex items-center justify-center text-xl md:text-2xl transition-all duration-500 group-hover/tech:border-white/40 group-hover/tech:bg-white/[0.08]"
                        style={{ 
                          color: tech.color,
                          filter: `drop-shadow(0 0 12px ${tech.color}55)`
                        }}
                      >
                        <span className="transition-all duration-500 group-hover/tech:brightness-125">
                          {tech.icon}
                        </span>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 border border-white/10 rounded text-[10px] uppercase tracking-widest text-white opacity-0 group-hover/tech:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Invisible path visualization */}
              <div className="absolute w-[240px] h-[240px] md:w-[400px] md:h-[400px] border border-white/[0.02] rounded-full" />
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-end justify-between w-full border-t border-white/10 pt-8 relative">
          {/* Accent Line Glow */}
          <div className="absolute top-0 left-0 w-24 h-[3px] bg-gradient-to-r from-indigo-500 to-transparent blur-[1px]" />
          
          <p className="hero-tagline max-w-2xl text-xl md:text-3xl text-white/40 font-medium tracking-tight leading-[1.25] mb-12 md:mb-0">
            B.Tech CSE student at Lovely Professional University. 
            <span className="block mt-4 text-white/80">
              Specializing in <span className="text-white font-bold underline decoration-indigo-500/50 underline-offset-8">modern</span>, responsive, and high-impact web experiences.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="hero-cta opacity-0">
              <MagneticButton 
                as="a" 
                href="#projects"
                onMouseDown={(e: any) => e.preventDefault()}
                onDragStart={(e: any) => e.preventDefault()}
                className="group relative px-6 py-3 bg-white text-black text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold rounded-full transition-all flex items-center gap-3 overflow-hidden select-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-500 pointer-events-none" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500 select-none pointer-events-none">Explore Projects</span>
                <FiArrowRight className="relative z-10 group-hover:translate-x-1 group-hover:text-white transition-all duration-500 select-none pointer-events-none" size={16} />
              </MagneticButton>
            </div>

            <div className="hero-cta opacity-0">
              <MagneticButton 
                as="a" 
                href="/resume.pdf"
                target="_blank"
                onMouseDown={(e: any) => e.preventDefault()}
                onDragStart={(e: any) => e.preventDefault()}
                className="group relative px-6 py-3 bg-white text-black text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold rounded-full transition-all flex items-center gap-3 overflow-hidden select-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-500 pointer-events-none" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500 select-none pointer-events-none">Download CV</span>
                <FiDownload className="relative z-10 group-hover:-translate-y-0.5 group-hover:text-white transition-all duration-500 select-none pointer-events-none" size={16} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes dash-flow {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite linear;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
        .animate-dash-flow-1 {
          animation: dash-flow 15s infinite linear;
        }
        .animate-dash-flow-2 {
          animation: dash-flow 20s infinite linear reverse;
        }
        .animate-dash-flow-3 {
          animation: dash-flow 25s infinite linear;
        }
        .bg-radial-glow {
          background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%);
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s infinite linear;
        }
        .animate-reverse-spin {
          animation: reverse-spin 60s infinite linear;
        }
      `}</style>
    </section>
  );
}
