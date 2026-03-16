import { FiSearch, FiBookOpen, FiCpu, FiMonitor } from "react-icons/fi";

const interests = [
  {
    name: "Exploring UI/UX Inspiration",
    icon: FiSearch,
    description: "Diving deep into modern design trends."
  },
  {
    name: "Web Animations",
    icon: FiMonitor,
    description: "Experimenting with Framer Motion and GSAP."
  },
  {
    name: "Deep Reading",
    icon: FiBookOpen,
    description: "Broadening horizons through literature and tech blogs."
  },
  {
    name: "Exploring New Stacks",
    icon: FiCpu,
    description: "Staying at the edge with emerging technologies."
  }
];

export default function NotCoding() {
  return (
    <section id="notcoding" className="relative pt-20 pb-40 px-6 md:px-12 bg-black overflow-hidden scroll-mt-20">
      {/* Refined Background Texture */}
      <div className="absolute inset-0 bg-grid -z-10 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      
      {/* Sophisticated Ambient Glows */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[160px] -z-10" />
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-16 text-center">
        <div className="flex flex-col items-center gap-1.5 mb-24">
          <div className="w-8 h-1 bg-gradient-to-r from-purple-500/50 to-indigo-500/50 rounded-full" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white/90">Beyond the Code</h2>
          <p className="text-white/30 font-medium tracking-tight mt-4 italic text-sm md:text-lg max-w-xl mx-auto">
            "Balance is the key to sustainable creativity. Exploring the world beyond screens."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center justify-center p-8 md:p-10 bg-white/[0.01] backdrop-blur-2xl rounded-[2.5rem] border border-white/[0.05] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] overflow-hidden"
            >
              {/* Subtle Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/[0.03] border border-white/[0.05] rounded-[1.8rem] flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-105 group-hover:bg-white group-hover:text-black shadow-lg shadow-black/40">
                <interest.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>

              <h3 className="font-bold text-white/80 tracking-tight text-base md:text-lg mb-4">{interest.name}</h3>
              <p className="text-[10px] text-white/20 group-hover:text-white/50 transition-colors uppercase tracking-[0.2em] font-medium italic border-t border-white/[0.03] pt-4 w-full">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
