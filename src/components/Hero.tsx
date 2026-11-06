import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLight, setIsLight] = useState(() => document.documentElement.classList.contains("light"));

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <>
      <header className="site-header">
        <a className="brand-mark" href="#home" aria-label="Atharva Ambade home">
          AA<span>.</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <a className="header-resume" href="/Resume_Master.pdf" download="Atharva_Ambade_Resume.pdf">
            Resume <ArrowUpRight size={15} />
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            title={isLight ? "Switch to dark mode" : "Switch to light mode"}
            onClick={() => setIsLight((current) => !current)}
          >
            {isLight ? <Moon size={17} /> : <Sun size={17} />}
          </button>
        </div>
      </header>

      <main id="home" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for mid-level engineering roles</p>
          <h1>Building intelligent systems that <em>hold up</em> in production.</h1>
          <p className="hero-summary">
            I am a systems and AI engineer focused on backend architecture,
            agentic workflows, and cloud infrastructure. From 15TB data pipelines to
            multi-agent products serving real users.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore the work <ArrowDownRight size={17} />
            </a>
            <a className="button button-quiet" href="mailto:atharva.suneel.ambade@gmail.com">
              Let&apos;s connect <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-links">
            <a href="https://github.com/AmbadeAtharva" target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ambadeatharva" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <span><MapPin size={16} /> San Jose, CA</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <img src="/Professional photo.png" alt="Atharva Ambade" />
            <div className="photo-caption">
              <span>Systems / AI / Cloud</span>
              <span>2026</span>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <p>Turning complex technical constraints into useful, resilient products.</p>
            </div>
          </div>
        </div>
      </main>

      <section className="metric-strip" aria-label="Career highlights">
        <div><strong>4+</strong><span>years building<br />production systems</span></div>
        <div><strong>15TB+</strong><span>daily records<br />migrated at scale</span></div>
        <div><strong>40%</strong><span>AI inference cost<br />reduction</span></div>
        <div><strong>99.5%</strong><span>uptime for an<br />AI production service</span></div>
      </section>
    </>
  );
};

export default Hero;
