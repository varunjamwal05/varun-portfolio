import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experiments from "@/components/Experiments";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative z-10">
      <Hero />
      <About />
      <Projects />
      <Experiments />
      <Skills />
      <Contact />
    </div>
  );
}
