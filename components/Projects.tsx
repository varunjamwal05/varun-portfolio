import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative pt-10 pb-20 px-6 md:px-12 bg-black overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-1.5 mb-8">
          <div className="w-10 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full animate-shimmer bg-[length:200%_100%]" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Selected Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              highlighted={project.id === "inkvero"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
