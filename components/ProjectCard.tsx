"use client";

import React, { useRef, useState } from "react";
import { Project } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { MagneticButton } from "./MagneticButton";

export default function ProjectCard({ project, highlighted }: { project: Project; highlighted?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 60; // Further reduced rotation for subtle effect
    const y = (e.clientY - top - height / 2) / 60;
    cardRef.current.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.005, 1.005, 1.005)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    setHovered(false);
    cardRef.current.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col justify-between p-5 md:p-7 rounded-[2rem] transition-all duration-500 ease-out border backdrop-blur-3xl overflow-hidden ${
        highlighted 
          ? "col-span-1 md:col-span-2 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent border-white/30 shadow-[0_0_50px_rgba(99,102,241,0.1)]" 
          : "col-span-1 bg-gradient-to-br from-indigo-500/15 via-purple-500/5 to-transparent border-white/20 shadow-[0_0_30px_rgba(99,102,241,0.05)] hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]"
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div 
        className={`absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 opacity-0 transition-opacity duration-700 ${hovered ? 'opacity-100' : ''}`}
        style={{ transform: "translateZ(-10px)" }}
      />
      
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {highlighted && (
          <span className="inline-block px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] bg-white text-black rounded-full mb-4 shadow-lg">
            Featured Case Study
          </span>
        )}
        <h3 className={`font-black tracking-tighter mb-1 ${highlighted ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
          {project.title}
        </h3>
        <p className={`text-white/80 mb-3 leading-snug max-w-2xl font-medium tracking-tight ${highlighted ? "text-base md:text-lg" : "text-sm md:text-base"}`}>
          {project.description}
        </p>
        {project.groupedTechStack ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 p-3 md:p-4 bg-black/40 rounded-[1.2rem] border border-white/[0.05] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-3xl">
            {project.groupedTechStack.map((group) => (
              <div key={group.category} className="flex flex-col group/skill">
                <h4 className="flex items-center gap-2 text-white/60 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.25em] mb-1.5 border-b border-white/[0.1] pb-1 transition-colors duration-300 group-hover/skill:text-white group-hover/skill:border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 shadow-[0_0_8px_rgba(99,102,241,0.5)] group-hover/skill:bg-indigo-400 group-hover/skill:shadow-[0_0_12px_indigo] transition-all duration-300" />
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {group.skills.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-sm font-medium tracking-wide border border-white/5 rounded-2xl text-white/50 bg-white/[0.02] backdrop-blur-xl hover:text-white hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_4px_15px_rgba(255,255,255,0.05)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 mb-12">
            {project.techStack.map(tech => (
              <span key={tech} className="px-4 py-2 text-xs font-semibold tracking-wide border border-white/10 rounded-full text-white/60 bg-white/5 backdrop-blur-md">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 flex items-center gap-5 mt-auto pt-4 border-t border-white/10" style={{ transform: "translateZ(30px)" }}>
        <MagneticButton
          as="a"
          href={project.githubLink}
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
        >
          <FiGithub size={20} />
        </MagneticButton>
        <MagneticButton
          as="a"
          href={project.liveDemo}
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
        >
          <FiExternalLink size={20} />
        </MagneticButton>
      </div>
    </div>
  );
}
