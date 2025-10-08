import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Languages & Scripting",
    skills: ["Java", "Python", "C++", "Golang", "JavaScript/TypeScript", "Shell Script", "PHP", "Swift"]
  },
  {
    category: "Web Development",
    skills: ["React", "Next.js", "Angular", "Spring Boot", "Flask", "Django", "FastAPI", "GraphQL"]
  },
  {
    category: "AI & ML",
    skills: ["LLM", "NLP", "RAG", "Computer Vision", "PyTorch", "TensorFlow", "Scikit-learn", "LangChain"]
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS (EKS, ECS, Lambda, S3, RDS)", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Neo4j", "Db2"]
  },
  {
    category: "DevOps & Tools",
    skills: ["CI/CD", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana", "SonarQube", "Maven"]
  }
];

const Skills = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software Engineer with 3+ years architecting scalable back-end systems for enterprise and FinTech applications.
            Proven record of reducing system latency and leading complex cloud migrations on AWS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="p-6 hover:shadow-soft transition-smooth hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-2"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
