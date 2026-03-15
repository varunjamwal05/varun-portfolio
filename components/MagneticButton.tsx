"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export function MagneticButton({ 
  children, 
  className, 
  as: Component = "button",
  ...props 
}: { 
  children: React.ReactNode; 
  className?: string;
  as?: any;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !contentRef.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    gsap.to(ref.current, { x: x * 0.2, y: y * 0.2, duration: 1, ease: "power3.out" });
    gsap.to(contentRef.current, { x: x * 0.1, y: y * 0.1, duration: 1, ease: "power3.out" });
  };

  const handleMouseLeave = () => {
    if (!ref.current || !contentRef.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
    gsap.to(contentRef.current, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={(e) => e.preventDefault()}
      className={cn("relative inline-flex items-center justify-center cursor-pointer select-none", className)}
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
    >
      <Component {...props} className="w-full h-full absolute inset-0 rounded-full select-none" style={{ userSelect: 'none', WebkitUserSelect: 'none' }} />
      <div ref={contentRef} className="relative z-10 pointer-events-none w-full h-full flex items-center justify-center select-none" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
        {children}
      </div>
    </div>
  );
}
