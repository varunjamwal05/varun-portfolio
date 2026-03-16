import { FiExternalLink, FiAward } from "react-icons/fi";
import { MagneticButton } from "./MagneticButton";

const certifications = [
  {
    name: "Cloud Infrastructure 2025 Certified Generative AI Professional",
    platform: "Oracle",
    year: "2025",
    link: "/oracle-cert.pdf"
  },
  {
    name: "Privacy and Security in Online Social Media",
    platform: "NPTEL",
    year: "2025",
    link: "/nptel-cert.pdf"
  },
  {
    name: "Unrevealing Basic Python towards ML/AI",
    platform: "CSE Pathshala",
    year: "2024",
    link: "/cse-pathshala-cert.pdf"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative pt-20 pb-32 px-6 md:px-12 bg-black overflow-hidden scroll-mt-20">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-16">
        <div className="flex flex-col gap-1.5 mb-12">
          <div className="w-10 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-full animate-shimmer bg-[length:200%_100%]" />
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white">Certifications</h2>
          <p className="text-white/40 font-medium tracking-tight text-sm md:text-base">Validated technical expertise from industry leaders.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group relative p-8 md:p-10 bg-white/[0.01] backdrop-blur-3xl rounded-[3rem] border border-white/10 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-700 flex flex-col justify-between overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 text-8xl">
                <FiAward />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] block">{cert.platform}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3 leading-[1.1] transition-colors duration-500 group-hover:text-purple-200">{cert.name}</h3>
                <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/50 tracking-wider">
                  ISSUED {cert.year}
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <MagneticButton
                  as="a"
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                >
                  View Credential <FiExternalLink size={14} />
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
