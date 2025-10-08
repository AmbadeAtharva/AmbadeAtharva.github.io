import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Engineer Assistant",
    company: "California State University - East Bay",
    period: "September 2024 - Present",
    location: "San Jose, CA",
    highlights: [
      "Enhanced university website UI using React.js and Express, increasing traffic by 50% and engagement by 25%",
      "Implemented OAuth 2.0 and MFA, fortifying system security and safeguarding user data",
      "Integrated MySQL and Apache Kafka for real-time data streaming, optimizing query performance by 30%",
      "Implemented system monitoring with Prometheus and Grafana, reducing incident response time by 35%",
      "Built CI/CD pipelines using GitHub Actions and ArgoCD, improving release efficiency and reducing downtime by 40%"
    ]
  },
  {
    title: "Software Development Engineer Analyst",
    company: "Accenture",
    period: "January 2022 - June 2024",
    location: "Remote",
    highlights: [
      "Improved data retrieval latency by 30% through strategic indexing and query optimization on IBM Db2 mainframe databases handling 10,000+ daily transactions",
      "Led legacy modernization initiative migrating COBOL mainframes to AWS, cutting infrastructure costs by 35%",
      "Boosted automated batch job scheduling with Control-M, reducing failure rates by 40%",
      "Configured Spring Boot microservices with Spring Security and IAM policies, reducing vulnerabilities by 40%",
      "Leveraged Splunk for real-time log analysis, reducing incident resolution time by 40%"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="p-8 hover:shadow-soft transition-smooth hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-2"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3 text-foreground/80">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
