import { FiBook } from "react-icons/fi";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    details: "CGPA: 7.62",
    year: "Aug 2023 - Present"
  },
  {
    institution: "G.S.S. school Kangra",
    location: "Himachal Pradesh",
    degree: "Intermediate",
    details: "Percentage: 76.7%",
    year: "Apr 2022 - Mar 2023"
  },
  {
    institution: "D.A.V Public School Kangra",
    location: "Himachal Pradesh",
    degree: "Matriculation",
    details: "Percentage: 81%",
    year: "Apr 2020 - Mar 2021"
  }
];

export default function Education() {
  return (
    <section id="education" className="relative pt-20 pb-32 px-6 md:px-12 bg-black overflow-hidden scroll-mt-20">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid -z-10 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-16">
        <div className="flex flex-col gap-1.5 mb-16 items-center md:items-start">
          <div className="w-10 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full" />
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white">Education</h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl">
          {education.map((item, index) => (
            <div 
              key={index}
              className="group relative p-8 md:p-10 bg-white/[0.01] backdrop-blur-3xl rounded-[3rem] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-700">
                      <FiBook size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:text-indigo-100 transition-colors duration-700">
                        {item.institution}
                      </h3>
                      <p className="text-indigo-400/80 text-[10px] font-black uppercase tracking-[0.2em]">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1 md:pl-16">
                    <p className="text-white/80 font-bold text-lg leading-snug">
                      {item.degree}
                    </p>
                    <p className="text-white/40 font-medium text-sm italic">
                      {item.details}
                    </p>
                  </div>
                </div>

                <div className="md:text-right md:pl-8 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0">
                  <div className="inline-flex px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-white/50 tracking-[0.1em] group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all duration-700">
                    {item.year}
                  </div>
                </div>
              </div>

              {/* Minimal Accent */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-indigo-500 group-hover:h-1/2 transition-all duration-700 rounded-full opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
