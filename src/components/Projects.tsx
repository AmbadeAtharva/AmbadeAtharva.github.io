import { ArrowUpRight, Cpu, FileSearch, GitBranch, Layers3, LockKeyhole, Zap } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Concurrent Document Processor",
    type: "Systems / Rust",
    description: "Memory-conscious pipeline that cleans, chunks, and streams large text corpora into Pinecone-compatible JSONL for vector ingestion.",
    result: "73.9% lower latency · 3.88× throughput",
    stack: "Rust · Rayon · Serde · JSONL",
    icon: Zap,
    href: "https://github.com/AmbadeAtharva/concurrent-document-processor",
  },
  {
    number: "02",
    title: "GPU Inference Engine",
    type: "Hardware / C++",
    description: "Custom tiled matrix multiplication kernels with shared-memory reuse, ported between NVIDIA CUDA and AMD ROCm/HIP.",
    result: "~30% lower kernel latency",
    stack: "C++ · CUDA · AMD ROCm · HIP",
    icon: Cpu,
    href: "https://github.com/AmbadeAtharva/GPU-Inference-Engine",
  },
  {
    number: "03",
    title: "Slate LMS",
    type: "Product / AI platform",
    description: "AI-first learning platform with role-specific workflows and schema-constrained content generation for students, teachers, and administrators.",
    result: "Multi-LLM orchestration",
    stack: "FastAPI · PostgreSQL · Redis · LangChain",
    icon: Layers3,
    href: "https://slatelms.in/",
  },
  {
    number: "04",
    title: "Distributed MCP Server",
    type: "Agents / Infrastructure",
    description: "Async MCP server connecting Jira and Confluence workflows to a Llama-powered natural language interface with distributed locking.",
    result: "95% command accuracy · 60% fewer tokens",
    stack: "Python · AsyncIO · Redis · Llama 3.2",
    icon: GitBranch,
    href: "https://github.com/AmbadeAtharva/jira-slack-mcp",
  },
  {
    number: "05",
    title: "We-Recruit-Real",
    type: "Product / Applied AI",
    description: "Candidate evaluation platform that analyzes resumes, generates interview questions, and scores transcripts for consistency.",
    result: "End-to-end AI evaluation",
    stack: "FastAPI · React · PostgreSQL · Groq",
    icon: FileSearch,
    href: "https://recruit-the-real.vercel.app/",
  },
  {
    number: "06",
    title: "Exam Integrity Monitor",
    type: "Research / Computer vision",
    description: "Peer-reviewed ICINC 2021 research evolved into a Dockerized, autoscaling Flask service for real-time exam integrity monitoring.",
    result: "99.25% model confidence",
    stack: "Python · MobileNetV2 · OpenCV · Kubernetes",
    icon: LockKeyhole,
    href: "https://github.com/AmbadeAtharva/Plagiarism_Detection_Web",
  },
];

const Projects = () => (
  <section id="projects" className="section projects-section">
    <div className="section-heading split-heading">
      <div><p className="section-kicker">03 / Things I&apos;ve built</p><h2>Curiosity, made <span>concrete.</span></h2></div>
      <p className="heading-aside">A selection spanning low-level performance work, developer infrastructure, and AI-native products.</p>
    </div>
    <div className="project-grid">
      {projects.map(({ icon: Icon, ...project }) => (
        <a className="project-card" href={project.href} target="_blank" rel="noopener noreferrer" key={project.title}>
          <div className="project-topline"><span>{project.number}</span><Icon size={21} strokeWidth={1.4} /></div>
          <p className="project-type">{project.type}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-bottom"><span className="project-result">{project.result}</span><ArrowUpRight size={18} /></div>
          <p className="project-stack">{project.stack}</p>
        </a>
      ))}
    </div>
    <div className="projects-cta"><span>More experiments live on GitHub.</span><a className="text-link" href="https://github.com/AmbadeAtharva" target="_blank" rel="noopener noreferrer">Browse repository <ArrowUpRight size={16} /></a></div>
  </section>
);

export default Projects;
