import { FiBookOpen } from "react-icons/fi";

const training = [
  {
    name: "FLAMES '25 Summer Training Program",
    description: "Completed and mastered a rigorous 7-week DSA training (C++) focused on industry-standard problem-solving and algorithmic thinking.",
    platform: "W3grads x Angaar",
    year: "Jun 2025 – Jul 2025",
    link: "/flames-dsa-cert.pdf"
  }
];

export default function Training() {
  return (
    <section id="training" className="relative pt-20 pb-32 px-6 md:px-12 bg-black overflow-hidden scroll-mt-20">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid -z-10 opacity-30 [mask-image:radial-gradient(ellipse_at_left,transparent_20%,black)]" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-16">
        <div className="flex flex-col gap-1.5 mb-12">
          <div className="w-10 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-full animate-shimmer bg-[length:200%_100%]" />
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white">Professional Training</h2>
        </div>

        <div className="flex flex-col gap-10">
          {training.map((item, index) => (
            <div 
              key={index}
              className="group relative p-10 md:p-14 bg-white/[0.01] backdrop-blur-3xl rounded-[3.5rem] border border-white/10 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-700 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 text-[12rem]">
                <FiBookOpen />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                      <FiBookOpen size={28} />
                    </div>
                    <div>
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] block mb-1">{item.platform}</span>
                      <div className="inline-flex px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400 tracking-wider">
                        {item.year}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-[1.1]">{item.name}</h3>
                  <p className="text-white/60 font-medium text-lg leading-relaxed max-w-4xl italic border-l-2 border-white/10 pl-6 group-hover:border-purple-500/50 transition-colors duration-700 mb-8 lg:mb-0">
                    "{item.description}"
                  </p>
                </div>

                <div className="relative z-10 shrink-0">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
              
              {/* Bottom Decorative Pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
