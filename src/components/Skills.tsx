import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Code, BarChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Supervised Machine Learning",
      icon: Brain,
      color: "primary",
      skills: ["Linear Regression", "Decision Tree", "SVM", "KNN", "Naïve Bayes"]
    },
    {
      title: "Deep Learning",
      icon: Database,
      color: "accent",
      skills: ["ANN", "CNN", "RNN", "LSTM", "GRU"]
    },
    {
      title: "Programming & Tools",
      icon: Code,
      color: "primary",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"]
    },
    {
      title: "Data & Analytics",
      icon: BarChart,
      color: "accent",
      skills: ["NLP & Text Classification", "Time-Series Forecasting", "Excel", "Tableau"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-tech-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full spectrum of machine learning and data science technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center group-hover:shadow-glow-${category.color} transition-all duration-300`}>
                    <category.icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className={`border-${category.color}/20 text-${category.color} hover:bg-${category.color}/10 transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
                Specialized Areas
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Natural Language Processing</h4>
                  <p className="text-muted-foreground text-sm">Sentiment analysis, text classification, and language modeling</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Predictive Analytics</h4>
                  <p className="text-muted-foreground text-sm">Credit prediction, time-series forecasting, and risk modeling</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Model Deployment</h4>
                  <p className="text-muted-foreground text-sm">Production-ready ML pipelines and model optimization</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Data Visualization</h4>
                  <p className="text-muted-foreground text-sm">Interactive dashboards and insightful data storytelling</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;