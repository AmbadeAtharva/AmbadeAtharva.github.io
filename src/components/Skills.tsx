import { ArrowUpRight, BrainCircuit, Cloud, Code2, Database, Network } from "lucide-react";

const skillGroups = [
  { icon: Code2, label: "Languages", skills: "Python · Java · Rust · Go · C++ · SQL · TypeScript" },
  { icon: BrainCircuit, label: "AI / ML", skills: "LangGraph · LangChain · RAG · PyTorch · TensorFlow · AI agents · MCP" },
  { icon: Network, label: "Systems", skills: "Distributed systems · Event-driven architecture · Concurrency · REST · SSE" },
  { icon: Cloud, label: "Cloud / Infra", skills: "AWS · Azure · GCP · Docker · Kubernetes · Terraform · CI/CD" },
  { icon: Database, label: "Data", skills: "PostgreSQL · Redis · Firestore · Pinecone · Kafka · Spark · Airflow" },
];

const Skills = () => (
  <section id="about" className="section about-section">
    <div className="section-heading">
      <p className="section-kicker">01 / The throughline</p>
      <h2>Systems thinking, <span>applied to AI.</span></h2>
    </div>
    <div className="about-grid">
      <div className="about-copy">
        <p className="lead">
          I work at the intersection of dependable backend systems and emerging AI.
          My path has moved from enterprise infrastructure and data engineering at
          Accenture to building production agentic products from the ground up.
        </p>
        <p>
          That range matters: I care about the model, but also the queue, the
          observability, the auth boundary, and what happens when the happy path ends.
          I&apos;m currently targeting SWE II and applied AI roles where strong fundamentals
          meet ambitious product work.
        </p>
        <a className="text-link" href="/Resume_Master.pdf" download="Atharva_Ambade_Resume.pdf">
          Download full resume <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="skill-grid">
        {skillGroups.map(({ icon: Icon, label, skills }) => (
          <div className="skill-tile" key={label}>
            <Icon size={19} strokeWidth={1.5} />
            <div><h3>{label}</h3><p>{skills}</p></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
