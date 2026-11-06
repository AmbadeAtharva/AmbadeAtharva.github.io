import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import AtharvaBot from "@/components/AtharvaBot";

const Index = () => (
  <div className="portfolio-shell">
    <AnimatedBackground />
    <Hero />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Footer />
    <AtharvaBot />
  </div>
);

export default Index;
