import { ArrowUpRight, Award, GraduationCap } from "lucide-react";

const Education = () => (
  <section id="education" className="section education-section">
    <div className="section-heading"><p className="section-kicker">04 / Foundations</p><h2>Always learning, <span>still shipping.</span></h2></div>
    <div className="education-grid">
      <article className="education-card">
        <GraduationCap size={24} strokeWidth={1.4} />
        <p className="education-date">AUG 2024 — MAY 2026</p>
        <h3>M.S. Computer Science</h3>
        <p>California State University, East Bay</p>
        <span>GPA 3.8 / 4.0</span>
        <div className="course-list">Distributed Systems · Advanced Algorithms · Database Systems · Cloud Computing · Advanced AI · System Design</div>
      </article>
      <article className="education-card">
        <GraduationCap size={24} strokeWidth={1.4} />
        <p className="education-date">AUG 2017 — MAY 2021</p>
        <h3>B.E. Computer Engineering</h3>
        <p>Savitribai Phule Pune University</p>
        <span>GPA 3.5 / 4.0</span>
        <div className="course-list">Data Structures · Software Engineering · Computer Networks · Operating Systems · Computer Architecture</div>
      </article>
      <article className="education-card certification">
        <Award size={24} strokeWidth={1.4} />
        <p className="education-date">AUGUST 2026</p>
        <h3>AMD ROCm Certified Associate</h3>
        <p>AI / HPC applications on AMD Instinct GPU platforms</p>
        <a className="text-link" href="https://www.credly.com/badges/304a0ce1-a4ba-45af-a2d0-7776c7c3f652/public_url" target="_blank" rel="noopener noreferrer">View credential <ArrowUpRight size={15} /></a>
      </article>
    </div>
  </section>
);

export default Education;
