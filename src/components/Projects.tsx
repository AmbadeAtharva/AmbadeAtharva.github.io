import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, Shield } from "lucide-react";

const projects = [
  {
    title: "Atlassian & Slack Model Context Protocol (MCP) Server",
    icon: Code2,
    tags: ["Python", "MCP", "Jira", "Confluence", "Llama 3.2", "Slack"],
    description: "Developed a Model Context Protocol server with full CRUD operations for Atlassian Jira and Confluence, automating ticket and page management.",
    highlights: [
      "Reduced manual task time by over 70%",
      "Integrated Llama 3.2 for natural language interface via Slack bot",
      "Achieved 95% success rate in command interpretation"
    ]
  },
  {
    title: "Knowledge Graph for Research Papers",
    icon: Database,
    tags: ["Neo4j", "Streamlit", "Graph Queries", "Python"],
    description: "Designed a Neo4j-based knowledge graph that accelerated keyword retrieval by 30% and improved citation analysis by 10x.",
    highlights: [
      "Enhanced research insights and literature discovery",
      "Interactive UI for real-time search of research trends",
      "Improved user engagement by 50%"
    ]
  },
  {
    title: "Plagiarism and Exam Cheating Detection",
    icon: Brain,
    tags: ["Computer Vision", "Deep Learning", "Flask", "AI", "Cloud"],
    description: "Developed an AI-powered exam monitoring system using real-time computer vision model with 95% accuracy.",
    highlights: [
      "Detects screen lookaways, mobile phone use, and headphone detection",
      "Reduced cheating incidents by 60%",
      "Refactored detection time by 40%"
    ]
  },
  {
    title: "Smart Calorie Counter",
    icon: Shield,
    tags: ["MLOps", "Docker", "EKS", "Terraform", "CNN", "Prometheus"],
    description: "Engineered a scalable production-ready MLOps platform by containerizing Flask application and CNN model.",
    highlights: [
      "Deployed to highly available EKS cluster using Terraform",
      "Implemented horizontal pod autoscaling (HPA)",
      "Comprehensive observability with Prometheus and CloudWatch"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovative solutions leveraging AI, Cloud, and Modern Software Architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card
                key={idx}
                className="p-8 hover:shadow-soft transition-smooth hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4">{project.description}</p>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
