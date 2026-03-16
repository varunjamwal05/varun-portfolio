import { 
  FaHtml5, FaJs, FaReact, FaNodeJs, FaJava, FaPhp, FaFigma, FaGitAlt, FaDatabase 
} from "react-icons/fa6";
import { 
  SiCplusplus, SiMysql, SiMongodb
} from "react-icons/si";
import { motion, Variants } from "framer-motion";

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
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="relative pt-24 pb-48 px-6 md:px-12 bg-black overflow-hidden border-t border-white/5">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center gap-3 mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="w-12 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full animate-shimmer bg-[length:200%_100%]" 
          />
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-7xl font-heading font-black tracking-tighter text-white uppercase"
          >
            Technical <span className="text-white/20 italic font-light lowercase font-display">repertoire.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/30 max-w-2xl font-medium tracking-tight mt-4"
          >
            A curated selection of technologies I use to bring high-impact digital experiences to life.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.name} 
              variants={itemVariants}
              className="group flex flex-col items-center justify-center py-12 px-6 bg-white/[0.01] backdrop-blur-3xl rounded-[2.5rem] border border-white/[0.03] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <skill.icon 
                className="w-12 h-12 md:w-14 md:h-14 mb-8 transition-all duration-700 group-hover:scale-110 group-hover:brightness-125" 
                style={{ color: skill.color, filter: `drop-shadow(0 0 15px ${skill.color}33)` }}
              />
              <span className="font-bold text-white/40 group-hover:text-white tracking-widest text-[10px] uppercase transition-colors duration-700">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
