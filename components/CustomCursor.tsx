"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) setHasMoved(true);
      
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0, ease: "none" });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [hasMoved]);

  if (!hasMoved) return null; // Don't show until user moves mouse

  return (
    <>
      <div
        ref={cursorRef}
        className={cn(
          "fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform duration-300",
          isHovering ? "scale-0" : "scale-100"
        )}
      />
      <div
        ref={followerRef}
        className={cn(
          "fixed top-0 left-0 border rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out",
          isHovering
            ? "w-16 h-16 border-white/5 bg-white/10 backdrop-blur-sm mix-blend-difference"
            : "w-8 h-8 border-white/30 bg-transparent mix-blend-normal"
        )}
      />
    </>
  );
}
