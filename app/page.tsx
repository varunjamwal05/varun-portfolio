"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experiments from "@/components/Experiments";
import Certifications from "@/components/Certifications";
import Training from "@/components/Training";
import Education from "@/components/Education";
import CoCurricular from "@/components/CoCurricular";
import NotCoding from "@/components/NotCoding";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative z-10">
      <Hero />
      <About />
      <Projects />
      <Experiments />
      <Certifications />
      <Training />
      <Education />
      <CoCurricular />
      <NotCoding />
      <Skills />
      <Contact />
    </div>
  );
}
