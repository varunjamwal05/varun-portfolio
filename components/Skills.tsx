import { 
  FaHtml5, FaJs, FaReact, FaNodeJs, FaJava, FaPhp, FaFigma, FaGitAlt, FaDatabase 
} from "react-icons/fa6";
import { 
  SiCplusplus, SiMysql, SiMongodb
} from "react-icons/si";

const skills = [
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "PHP", icon: FaPhp, color: "#777BB4" },
  { name: "SQL", icon: FaDatabase, color: "#336791" },
  { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative pt-20 pb-32 px-6 md:px-12 bg-black overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-16 text-center">
        <div className="flex flex-col items-center gap-1.5 mb-10">
          <div className="w-10 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-full animate-shimmer bg-[length:200%_100%]" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">Core Stack</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-4 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="group flex flex-col items-center justify-center py-10 px-4 bg-white/[0.02] backdrop-blur-xl rounded-[2.5rem] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <skill.icon 
                className="w-12 h-12 md:w-16 md:h-16 mb-6 transition-all duration-500 group-hover:scale-110" 
                style={{ color: skill.color }}
              />
              <span className="font-bold text-white tracking-tight text-xs md:text-base">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
