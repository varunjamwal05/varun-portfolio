"use client";

import React, { useRef, useState, useEffect } from "react";
import { MagneticButton } from "./MagneticButton";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion";

export default function Experiments() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for section glow and data
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isInside, setIsInside] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // 3D Tilt values
  const rotateX = useSpring(useMotionValue(0), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useMotionValue(0), { damping: 20, stiffness: 150 });

  // Data display values (reactive for rendering)
  const displayX = useTransform(rotateY, (v) => v.toFixed(1));
  const displayY = useTransform(rotateX, (v) => (-v).toFixed(1));
  
  const [coords, setCoords] = useState({ x: "0.0", y: "0.0" });

  useMotionValueEvent(displayX, "change", (latest) => setCoords(prev => ({ ...prev, x: latest })));
  useMotionValueEvent(displayY, "change", (latest) => setCoords(prev => ({ ...prev, y: latest })));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);

    if (cardRef.current && !isDragging) {
      const { left: cLeft, top: cTop, width: cWidth, height: cHeight } = cardRef.current.getBoundingClientRect();
      const centerX = cLeft + cWidth / 2;
      const centerY = cTop + cHeight / 2;
      rotateX.set((e.clientY - centerY) / -10);
      rotateY.set((e.clientX - centerX) / 10);
    }
  };

  const handleMouseLeave = () => {
    setIsInside(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section 
      id="experiments" 
      ref={containerRef}
      onMouseEnter={() => setIsInside(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-24 px-6 md:px-12 overflow-hidden bg-black relative"
    >
      {/* High-Tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* Localized Cursor Glow */}
      <AnimatePresence>
        {isInside && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              left: mouseX,
              top: mouseY,
            }}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] z-0"
          />
        )}
      </AnimatePresence>

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[130px] -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-16 relative z-10">
        <div className="flex flex-col gap-1.5 mb-8">
          <div className="w-10 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full animate-shimmer bg-[length:200%_100%]" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">UI Experiments</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Background Lab Labels */}
            <div className="absolute -top-12 -left-4 text-[10px] uppercase tracking-[0.3em] text-white/10 select-none font-mono">
              System.Status: Active // Physics: Standard_Gravity
            </div>
            
            <p className="text-white/60 text-xl mb-12 leading-relaxed max-w-lg">
              I love exploring the boundaries of frontend engineering. This section showcases small interactive elements, physics-based UI, and fluid Apple-style animations.
            </p>
            <div className="flex gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="relative group/btn">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <MagneticButton className="w-32 h-32 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-sm font-medium hover:bg-white hover:text-black transition-colors relative z-10">
                  Play With Me
                </MagneticButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="relative group/btn">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <MagneticButton className="w-24 h-24 rounded-full border border-white/10 bg-transparent flex items-center justify-center text-xs font-medium relative z-10 transition-transform">
                  Drag Me
                </MagneticButton>
              </motion.div>
            </div>
          </div>
          
          <div className="relative h-[440px] flex items-center justify-center p-8 bg-white/[0.02] rounded-[2.5rem] border border-white/10 overflow-hidden group/container">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 opacity-0 group-hover/container:opacity-100 transition-opacity duration-700" />
            
            {/* Physics Data Label */}
            <div className="absolute top-6 left-8 font-mono text-[9px] text-indigo-400/50 flex flex-col gap-1">
              <span className="flex items-center gap-2">
                <span className={`w-1 h-1 rounded-full ${isDragging ? 'bg-green-400' : 'bg-blue-400 animate-pulse'}`} />
                STATE: {isDragging ? 'DRAGGING' : 'IDLE'}
              </span>
              <span className="flex items-center gap-2">
                <span>ROT_X: {coords.y}°</span>
                <span>ROT_Y: {coords.x}°</span>
              </span>
            </div>

            {/* Corner Markers */}
            <div className="absolute bottom-6 right-8 font-mono text-[8px] text-white/20 tracking-widest uppercase">
              Interact_Ref_v2.0
            </div>

            {/* Floating Container */}
            <motion.div
              animate={isDragging ? { y: 0 } : { y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-full max-w-sm"
            >
              <motion.div
                ref={cardRef}
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={0.6}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                style={{ 
                  rotateX, 
                  rotateY, 
                  transformStyle: "preserve-3d" 
                }}
                className="relative w-full h-64 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl z-10 cursor-grab active:cursor-grabbing overflow-hidden"
              >
                {/* Border Beam Effect */}
                <div className="absolute inset-[-1px] rounded-3xl pointer-events-none overflow-hidden">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className="absolute inset-[30%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-40 blur-sm"
                  />
                </div>

                <div 
                  className="text-4xl font-black tracking-widest text-white shadow-xl mix-blend-overlay select-none pointer-events-none"
                  style={{ transform: "translateZ(60px)" }}
                >
                  INTERACT
                </div>

                {/* Internal UI elements to fill card */}
                <div className="absolute bottom-4 left-6 flex gap-1">
                  {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-white/20" />)}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
