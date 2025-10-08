import { Mail, MapPin, Phone, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center animate-fade-in">
        {/* Profile Image */}
        <div className="w-64 h-64 md:w-72 md:h-72 mx-auto mb-8 rounded-full shadow-soft overflow-hidden border-4 border-primary/20">
          <img 
            src="/Professional photo.png" 
            alt="Atharva Ambade" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 pb-2">
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Hey, I'm Atharva Ambade
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-foreground/80 mb-6">
          Software Engineer | Back-End Architect | Cloud Engineer
        </p>

        {/* Quick Info with Emojis */}
        <div className="space-y-2 mb-8 text-lg text-muted-foreground">
          <p>🦾 3+ Years Experience in Enterprise & FinTech</p>
          <p>💻 Java, Python, AWS, Kubernetes, Microservices</p>
          <p>🏋️ Problem Solving, System Design, Cloud Architecture</p>
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" />
            San Jose, CA
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://linkedin.com/in/ambadeatharva"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/AmbadeAtharva"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:ambade.atharva@outlook.com"
            className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="tel:5106953744"
            className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
            asChild
          >
            <a href="/Resume_Master.pdf" download="Atharva_Ambade_Resume.pdf" className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            About Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
