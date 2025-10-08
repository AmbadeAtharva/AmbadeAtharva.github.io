import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Science, Computer Science",
    school: "California State University East Bay",
    period: "August 2024 - May 2026",
    location: "Hayward, CA",
    courses: [
      "Advanced Algorithms",
      "Advanced Computer Networks",
      "Operating Systems",
      "Web Systems",
      "Cloud Computing",
      "Advanced AI",
      "Machine Learning",
      "System Design"
    ]
  },
  {
    degree: "Bachelor of Engineering, Computer Science",
    school: "Pune University",
    period: "August 2017 - May 2021",
    location: "Pune, India",
    courses: [
      "Data Structures and Algorithms",
      "Database Management",
      "Assembly Language",
      "Digital Electronics",
      "Computer Architecture",
      "Programming Language Concepts",
      "Computer Vision"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <Card
              key={idx}
              className="p-8 hover:shadow-soft transition-smooth hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-2"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-lg text-primary font-semibold">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.period}</span>
                </div>
              </div>

              <div className="ml-16">
                <p className="text-sm font-semibold text-foreground mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
