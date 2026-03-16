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
          "pointer-events-auto flex items-center justify-center flex-wrap gap-x-4 gap-y-2 sm:gap-x-8 px-6 py-3 rounded-[2rem] transition-all duration-500",
          scrolled 
            ? "bg-black/40 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]" 
            : "bg-transparent border border-transparent"
        )}
      >
        {[
          { name: "Home", id: "home" },
          { name: "About", id: "about" },
          { name: "Projects", id: "projects" },
          { name: "Certs", id: "certifications" },
          { name: "Training", id: "training" },
          { name: "Activities", id: "co-curricular" },
          { name: "Life", id: "notcoding" },
          { name: "Skills", id: "skills" },
          { name: "Contact", id: "contact" }
        ].map((item) => (
          <Link 
            key={item.id} 
            href={`/#${item.id}`} 
            scroll={false}
            className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/40 hover:text-white hover:scale-110 transition-all duration-300 px-1 py-1"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
