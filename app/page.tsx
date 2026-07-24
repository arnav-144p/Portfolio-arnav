import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import { projects } from "@/lib/projects";

export default function Home() {


  return (
    <main>
      <ScrollRevealObserver />
      <Nav />
      <Hero />
      <div data-reveal="fade">
        <About />
      </div>
      <div data-reveal="fade">
        <Experience />
      </div>
      <div data-reveal="fade">
        <Projects projects={projects} />
      </div>
      <div data-reveal="fade">
        <OpenSource />
      </div>
      <div data-reveal="fade">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
