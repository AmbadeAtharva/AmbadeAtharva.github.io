import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="footer">
    <div className="footer-inner">
      <div>
        <p className="section-kicker">05 / Start a conversation</p>
        <h2>Have a hard problem<br /><span>worth solving?</span></h2>
      </div>
      <div className="footer-contact">
        <a className="email-link" href="mailto:atharva.suneel.ambade@gmail.com">atharva.suneel.ambade@gmail.com <ArrowUpRight size={19} /></a>
        <div className="footer-socials">
          <a href="https://github.com/AmbadeAtharva" target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a>
          <a href="https://www.linkedin.com/in/ambadeatharva" target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn</a>
          <a href="tel:5106953744"><Mail size={17} /> 510-695-3744</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Atharva Ambade</span><span>Built with intent in San Jose, CA</span></div>
  </footer>
);

export default Footer;
