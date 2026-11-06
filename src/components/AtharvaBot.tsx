import { Bot, Download, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const openingMessage =
  "Hi! I’m Atharva’s portfolio assistant. Ask me about his experience, projects, skills, education, or contact information.";

const responses: Record<string, string> = {
  help: "Try about, experience, projects, skills, education, contact, resume, whoami, or hire. You can also use the quick actions below.",
  about: "Atharva is a systems and AI engineer focused on backend architecture, agentic workflows, and cloud infrastructure. He works across production AI, distributed systems, and cloud platforms.",
  experience: "Atharva is a Founding AI Engineer at Oatmeal AI, where he leads Agent Charlie and production multi-agent services. Previously, he worked at Berkshire Hathaway, California State University East Bay, and Accenture.",
  projects: "Featured work includes a concurrent Rust document processor, a CUDA/ROCm GPU inference engine, Slate LMS, a distributed MCP server, We-Recruit-Real, and an exam integrity computer-vision service.",
  skills: "Core skills include Python, Java, Rust, C++, FastAPI, LangGraph, LangChain, RAG, PyTorch, PostgreSQL, Redis, AWS, Azure, GCP, Docker, Kubernetes, Terraform, Kafka, Spark, and Airflow.",
  education: "Atharva earned an M.S. in Computer Science from California State University, East Bay with a 3.8 GPA in May 2026, and a B.E. in Computer Engineering from Savitribai Phule Pune University in May 2021. He is also an AMD ROCm Certified Associate.",
  contact: "You can reach Atharva at atharva.suneel.ambade@gmail.com, connect on LinkedIn, or find him on GitHub.",
  resume: "You can download the resume here.",
  whoami: "I’m a local portfolio assistant. I use a small, deterministic knowledge base about Atharva’s work, with no external AI service behind this chat.",
  hire: "Atharva is targeting mid-level software engineering and applied AI roles. Send a note to atharva.suneel.ambade@gmail.com to start a conversation.",
};

const quickActions = [
  ["About Atharva", "about"],
  ["Latest experience", "experience"],
  ["Featured projects", "projects"],
  ["Technical skills", "skills"],
  ["Download resume", "resume"],
  ["Contact Atharva", "contact"],
];

const normalize = (value: string) => value.trim().toLowerCase().replace(/[?!.,]/g, "");

const AtharvaBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([{ id: 0, role: "assistant", text: openingMessage }]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const respond = (command: string, displayText = command) => {
    const key = normalize(command);
    if (key === "clear") {
      setMessages([{ id: Date.now(), role: "assistant", text: openingMessage }]);
      return;
    }
    const response = responses[key] ?? "I can help with experience, projects, skills, education, contact, or the resume. Try “help” for all available commands.";
    setMessages((current) => [
      ...current,
      { id: Date.now(), role: "user", text: displayText },
      { id: Date.now() + 1, role: "assistant", text: response },
    ]);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) return;
    respond(input);
    setInput("");
  };

  const activateQuickAction = (label: string, command: string) => {
    if (command === "resume") {
      window.open("/Resume_Master.pdf", "_blank", "noopener,noreferrer");
    }
    respond(command, label);
  };

  return (
    <div className={`atharva-bot ${isOpen ? "is-open" : ""}`}>
      {isOpen && (
        <section className="bot-panel" aria-label="Atharva AI portfolio assistant">
          <div className="bot-panel-header">
            <div className="bot-title"><span className="bot-icon"><Bot size={17} /></span><div><h2>Atharva AI</h2><span><i /> Beta</span></div></div>
            <button type="button" className="bot-close" aria-label="Close Atharva AI" title="Close" onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          <p className="bot-disclaimer"><Sparkles size={13} /> Portfolio assistant — knowledge base in progress</p>
          <div className="bot-messages" aria-live="polite">
            {messages.map((message) => <div className={`bot-message ${message.role}`} key={message.id}>{message.text}{message.text === responses.resume && <a className="bot-resume-link" href="/Resume_Master.pdf" download="Atharva_Ambade_Resume.pdf"><Download size={13} /> Download resume</a>}</div>)}
            <div ref={messagesEndRef} />
          </div>
          <div className="bot-quick-actions">
            {quickActions.map(([label, command]) => <button type="button" key={command} onClick={() => activateQuickAction(label, command)}>{label}</button>)}
          </div>
          <form className="bot-form" onSubmit={submit}>
            <input aria-label="Ask Atharva a question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about the portfolio..." />
            <button type="submit" aria-label="Send message" title="Send"><Send size={16} /></button>
          </form>
        </section>
      )}
      <button className="bot-trigger" type="button" aria-expanded={isOpen} aria-label={isOpen ? "Close Ask Atharva" : "Ask Atharva"} title={isOpen ? "Close Ask Atharva" : "Ask Atharva"} onClick={() => setIsOpen((current) => !current)}>
        <span className="bot-trigger-icon">{isOpen ? <X size={19} /> : <MessageCircle size={19} />}</span>
        <span className="bot-trigger-label">Ask Atharva</span><i className="bot-status" />
      </button>
    </div>
  );
};

export default AtharvaBot;
