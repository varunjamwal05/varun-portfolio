"use client";

import { FiGithub, FiLinkedin, FiMail, FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { MagneticButton } from "./MagneticButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "Failed to send message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-12 bg-black overflow-hidden font-sans">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Ambient Glows - Synced with Projects.tsx */}
      <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[160px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-32 flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-24 flex flex-col items-center"
        >
          {/* Accent Line - Synced with Projects.tsx */}
          <motion.div 
            variants={itemVariants}
            className="w-12 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full animate-shimmer bg-[length:200%_100%] mb-10" 
          />
          
          <motion.h2 
            variants={itemVariants} 
            className="text-6xl md:text-9xl font-heading font-black tracking-tighter mb-10 leading-[0.8] text-white uppercase"
          >
            LET'S BUILD <br /> SOMETHING <span className="text-white/20 italic font-light lowercase font-display block md:inline mt-4 md:mt-0">remarkable.</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-3xl text-white/30 max-w-3xl font-medium tracking-tight leading-tight mx-auto"
          >
            Currently open to <span className="text-white/60">exclusive opportunities</span> and ambitious collaborations. Let's start a conversation about your next big idea.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="w-full max-w-3xl"
        >
          <motion.div 
            variants={itemVariants}
            className="relative p-1 md:p-1.5 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent shadow-2xl group transition-all duration-700 hover:from-white/20"
          >
            <div className="relative p-10 md:p-16 bg-black/80 backdrop-blur-3xl rounded-[2.3rem] w-full h-full overflow-hidden">
              {/* Subtle inner grid for texture */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                   style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <form onSubmit={handleSubmit} className="space-y-10 relative z-10 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label htmlFor="name" className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/30 ml-2 font-bold font-heading">The Collaborator</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-8 py-6 bg-white/[0.02] border border-white/5 rounded-[2rem] text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500/30 focus:bg-white/[0.04] focus:shadow-[0_0_40px_rgba(99,102,241,0.05)] transition-all duration-700 font-medium tracking-tight backdrop-blur-3xl"
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="email" className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/30 ml-2 font-bold font-heading">Digital Presence</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full px-8 py-6 bg-white/[0.02] border border-white/5 rounded-[2rem] text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500/30 focus:bg-white/[0.04] focus:shadow-[0_0_40px_rgba(99,102,241,0.05)] transition-all duration-700 font-medium tracking-tight backdrop-blur-3xl"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label htmlFor="message" className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/30 ml-2 font-bold font-heading">The Proposition</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full px-8 py-7 bg-white/[0.02] border border-white/5 rounded-[2.5rem] text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500/30 focus:bg-white/[0.04] focus:shadow-[0_0_40px_rgba(99,102,241,0.05)] transition-all duration-700 resize-none font-medium tracking-tight backdrop-blur-3xl"
                  />
                </div>

                <div className="flex flex-col items-center gap-8 pt-4">
                  <MagneticButton 
                    as="button"
                    type="submit"
                    disabled={status === "loading"}
                    className={`group relative px-12 py-5 w-full md:w-auto bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] md:text-[11px] rounded-full transition-all duration-700 overflow-hidden flex items-center justify-center gap-4 ${status === "loading" ? "opacity-50 cursor-not-allowed" : "hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-95"}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 transition-all duration-1000 animate-shimmer bg-[length:200%_100%]" />
                    <span className="relative z-10 text-black transition-colors duration-700">
                      {status === "loading" ? "Transmitting..." : "Initiate Discussion"}
                    </span>
                    {status === "loading" ? (
                      <FiLoader className="relative z-10 animate-spin text-black" size={16} />
                    ) : (
                      <FiSend className="relative z-10 text-black group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-700" size={16} />
                    )}
                  </MagneticButton>

                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        className="flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-white/10 rounded-2xl text-white text-[11px] font-bold uppercase tracking-widest backdrop-blur-md"
                      >
                        <FiCheckCircle className="text-green-500" size={16} />
                        <span>Transmission Successful</span>
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        className="flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-red-500/20 rounded-2xl text-white text-[11px] font-bold uppercase tracking-widest backdrop-blur-md"
                      >
                        <FiAlertCircle className="text-red-500" size={16} />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex gap-8 md:gap-10 my-24">
          {[
            { id: 'github', icon: FiGithub, href: 'https://github.com/varunjamwal05/' },
            { id: 'linkedin', icon: FiLinkedin, href: 'https://www.linkedin.com/in/varunkumarjamwal/' },
            { id: 'mail', icon: FiMail, href: 'mailto:varunkumarjamwal@gmail.com' }
          ].map((social, i) => (
            <motion.div
              key={social.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1.2 }}
            >
              <MagneticButton
                as="a"
                href={social.href}
                target="_blank" 
                rel="noreferrer" 
                className="w-16 h-16 md:w-24 md:h-24 bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[2rem] flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-all duration-700 shadow-2xl group"
              >
                <social.icon size={26} className="transition-transform duration-700 group-hover:scale-110" />
              </MagneticButton>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-white/10 text-[10px] md:text-[11px] font-black uppercase tracking-[1em] pb-12 select-none"
        >
          © {new Date().getFullYear()} VARUN JAMWAL • CURATED FOR EXCELLENCE
        </motion.p>
      </div>
    </section>
  );
}
