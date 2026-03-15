"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4 pointer-events-none">
      <nav 
        className={cn(
          "pointer-events-auto flex items-center gap-6 sm:gap-8 px-6 py-3 rounded-full transition-all duration-500",
          scrolled 
            ? "bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20" 
            : "bg-transparent border border-transparent"
        )}
      >
        {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-xs sm:text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}
