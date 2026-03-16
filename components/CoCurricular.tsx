import { FiActivity } from "react-icons/fi";

const activities = [
  {
    name: "National Service Scheme (NSS)",
    description: "Led, coordinated, and supervised a 100-member student unit; organized blood donation camps, plantation drives, and the Gyandeep education project.",
    role: "Unit Leader, Sarvshresth",
    year: "2023 - 2025",
    link: "/nss-cert.pdf"
  }
];

export default function CoCurricular() {
  return (
    <section id="co-curricular" className="relative pt-20 pb-32 px-6 md:px-12 bg-black overflow-hidden scroll-mt-20">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid -z-10 opacity-30 [mask-image:radial-gradient(ellipse_at_bottom,transparent_20%,black)]" />
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-16">
        <div className="flex flex-col gap-1.5 mb-12">
          <div className="w-10 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full animate-shimmer bg-[length:200%_100%]" />
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white">Leadership & Activity</h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="group relative p-10 md:p-16 bg-white/[0.01] backdrop-blur-3xl rounded-[4rem] border border-white/10 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-700 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            >
              <div className="absolute top-0 right-0 p-16 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000 text-[15rem] -translate-y-20 translate-x-20">
                <FiActivity size={100} />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-700 shadow-2xl shadow-indigo-500/10">
                      <FiActivity size={40} />
                    </div>
                    <div>
                      <div className="inline-flex px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 tracking-[0.2em] mb-2 uppercase">
                        {activity.year}
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none group-hover:text-indigo-100 transition-colors duration-700">{activity.name}</h3>
                    </div>
                  </div>

                  <div className="inline-block text-indigo-400/80 text-[11px] font-black uppercase tracking-[0.4em] mb-8 border-b-2 border-indigo-500/30 pb-3 group-hover:text-indigo-300 transition-all duration-700">
                    {activity.role}
                  </div>
                  
                  <p className="text-white/70 font-medium leading-relaxed text-xl md:text-2xl max-w-5xl italic border-l-4 border-white/5 pl-8 group-hover:border-indigo-500/40 transition-all duration-1000 mb-8 lg:mb-0">
                    "{activity.description}"
                  </p>
                </div>

                <div className="relative z-10 shrink-0">
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
              
              {/* Refined Accents */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
