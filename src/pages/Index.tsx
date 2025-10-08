import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
};

export default Index;
