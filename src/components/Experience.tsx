import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    period: "MAR 2026 — PRESENT",
    company: "Oatmeal AI / Oatmeal Farm Network",
    role: "Founding AI Engineer",
    location: "Remote · San Francisco, CA",
    intro: "Taking an agricultural advisory product from prototype to production across a hybrid cloud architecture.",
    bullets: [
      "Led Agent Charlie, a multi-agent assistant supporting 30+ agricultural users, using LangGraph, FastAPI, and specialized routing nodes.",
      "Reduced AI inference costs 40% through custom memory architecture, context pruning, and structured inter-agent communication.",
      "Built retrieval grounding with Firestore vector search and Pinecone, improving long-running conversation context retention by 35%.",
      "Deployed asynchronous AI services on Azure Container Apps with Celery and streaming responses, achieving 99.5% uptime.",
    ],
    accent: "current",
  },
  {
    period: "AUG 2025 — JUL 2026",
    company: "Berkshire Hathaway",
    role: "AI / ML Engineer",
    location: "San Jose, CA",
    intro: "Designed AI and cloud infrastructure for educational and policy-risk applications.",
    bullets: [
      "Architected cloud infrastructure for two AI-powered educational applications using Gemini 2.5 Flash Lite, Vertex AI, GCP, and Firebase.",
      "Engineered a recommendation engine serving 1,000+ daily requests, reducing task-selection time 25% and increasing completion rates 20%.",
      "Built modular matching, semantic search, and vector retrieval systems while establishing evaluation and observability pipelines.",
    ],
  },
  {
    period: "SEP 2024 — MAY 2026",
    company: "California State University, East Bay",
    role: "Software Engineer · AI/ML Research",
    location: "Hayward, CA",
    intro: "Built reliable administrative systems while researching applied ML and edge-efficient model architectures.",
    bullets: [
      "Migrated legacy portal pages to React and TailwindCSS, raising Lighthouse performance from 65 to 95 and cutting LCP from 4.2s to 1.2s.",
      "Developed PyTorch anomaly detection for 50,000+ admissions records, flagging 2,000+ ghost student profiles.",
      "Implemented binary neural networks and stochastic thresholding, reducing memory footprint 85% while maintaining 94% validation accuracy.",
      "Built a RAG teacher agent across 60+ curriculum units and evaluated 305 prompts at 83% classification accuracy and 81% Macro F1.",
    ],
  },
  {
    period: "JAN 2022 — JUN 2024",
    company: "Accenture",
    role: "Software Engineer · DevOps",
    location: "Remote",
    intro: "Operated at enterprise scale across financial data, cloud infrastructure, and event-driven services.",
    bullets: [
      "Orchestrated Apache Spark and Airflow ETL pipelines, migrating 15TB+ of transactional data into Amazon Redshift for ML ingestion.",
      "Built event streaming architectures with Kafka and Kinesis for onboarding workflows serving a 2M-customer retail banking base.",
      "Extended Jenkins and Terraform delivery pipelines with automated testing and rolling deployments, reducing lead time from two days to four hours.",
    ],
  },
];

const Experience = () => (
  <section id="work" className="section experience-section">
    <div className="section-heading split-heading">
      <div><p className="section-kicker">02 / Selected experience</p><h2>Where the work <span>compounds.</span></h2></div>
      <p className="heading-aside">A career built across enterprise infrastructure, applied research, and production AI.</p>
    </div>
    <div className="experience-list">
      {experiences.map((experience) => (
        <article className={`experience-item ${experience.accent ?? ""}`} key={experience.company}>
          <div className="experience-marker"><BriefcaseBusiness size={15} /></div>
          <div className="experience-meta"><span>{experience.period}</span><small>{experience.location}</small></div>
          <div className="experience-content">
            <div className="role-line"><h3>{experience.company}</h3><span>{experience.role}</span></div>
            <p className="experience-intro">{experience.intro}</p>
            <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
        </article>
      ))}
    </div>
    <a className="text-link" href="https://www.linkedin.com/in/ambadeatharva" target="_blank" rel="noopener noreferrer">
      More on LinkedIn <ArrowUpRight size={16} />
    </a>
  </section>
);

export default Experience;
