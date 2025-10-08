import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card/50 backdrop-blur-sm border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:ambade.atharva@outlook.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">ambade.atharva@outlook.com</span>
              </a>
              <a
                href="tel:5106953744"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">510-695-3744</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Jose, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <a
                href="/Resume_Master.pdf"
                download="Atharva_Ambade_Resume.pdf"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/ambadeatharva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/AmbadeAtharva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Atharva Ambade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
