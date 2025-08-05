import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "CodeAlpha",
      period: "July – Oct 2025",
      type: "Internship",
      icon: Building,
      achievements: [
        "Built supervised and unsupervised ML models",
        "Applied real-world datasets to solve classification problems",
        "Learned model evaluation and deployment techniques"
      ],
      tags: ["Machine Learning", "Python", "Model Deployment", "Classification"]
    },
    {
      title: "Senior Executive Member (Data Science)",
      company: "NCC Club",
      period: "2024 – 2025",
      type: "Leadership",
      icon: Users,
      achievements: [
        "Led academic data analysis and visualizations",
        "Created dashboards using Python, Excel, Tableau",
        "Mentored junior data enthusiasts"
      ],
      tags: ["Data Analysis", "Visualization", "Leadership", "Mentoring"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and leadership roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow-primary"></div>
                  
                  <div className="ml-20">
                    <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                          <div className="flex items-start gap-4 mb-4 md:mb-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300">
                              <exp.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                              <p className="text-lg text-primary font-semibold">{exp.company}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-start md:items-end gap-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm font-medium">{exp.period}</span>
                            </div>
                            <Badge variant={exp.type === "Internship" ? "default" : "secondary"} className="w-fit">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-foreground/90">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, i) => (
                            <Badge key={i} variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 transition-colors">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;