"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { MagneticButton } from "./MagneticButton";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-40 px-6 md:px-12 bg-black overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Refined Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto border-t border-white/[0.05] pt-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/30 mb-8 block">
            Available for Projects
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-12 leading-none text-white drop-shadow-sm">
            Let's build <br className="hidden md:block" /> something <span className="text-white/40">remarkable.</span>
          </h2>
          <p className="text-lg md:text-2xl text-white/40 mb-16 max-w-2xl font-light tracking-wide leading-relaxed mx-auto">
            Currently open to exclusive opportunities and ambitious collaborations. Let's start a conversation about your next big idea.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MagneticButton 
            as="a"
            href="mailto:varunkumarjamwal@gmail.com" 
            className="group relative px-10 py-5 mb-24 bg-white text-black font-bold uppercase tracking-[0.15em] text-sm md:text-base rounded-full transition-all duration-500 overflow-hidden flex items-center gap-3 border border-white"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <FiMail size={18} /> 
            <span className="relative z-10">Start the Discussion</span>
          </MagneticButton>
        </motion.div>

        <div className="flex gap-6 md:gap-8 mb-24">
          {[
            { id: 'github', icon: FiGithub, href: 'https://github.com/varunjamwal05/' },
            { id: 'linkedin', icon: FiLinkedin, href: 'https://www.linkedin.com/in/varunkumarjamwal/' }
          ].map((social, i) => (
            <motion.div
              key={social.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (i * 0.1) }}
            >
              <MagneticButton
                as="a"
                href={social.href}
                target="_blank" 
                rel="noreferrer" 
                className="w-14 h-14 md:w-16 md:h-16 bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500"
              >
                <social.icon size={24} />
              </MagneticButton>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-white/10 text-[9px] font-bold uppercase tracking-[0.6em]"
        >
          © {new Date().getFullYear()} VARUN JAMWAL • ALL RIGHTS RESERVED
        </motion.p>
      </div>
    </section>
  );
}
