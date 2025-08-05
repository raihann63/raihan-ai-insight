import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, CreditCard, Wind } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sentiment Analysis on Amazon Reviews",
      description: "Advanced NLP model for analyzing customer sentiment in Amazon product reviews. Implemented various machine learning algorithms to classify reviews as positive, negative, or neutral with high accuracy.",
      icon: BarChart3,
      technologies: ["Python", "NLP", "Scikit-learn", "Pandas", "NLTK"],
      liveLink: "https://raihann63.github.io/ML_PROJCT_01/",
      githubLink: "https://github.com/raihann63/ML_PROJCT_01",
      highlights: ["Text preprocessing and feature extraction", "Multiple ML model comparison", "Real-time sentiment prediction"]
    },
    {
      title: "Credit Mix Prediction",
      description: "Machine learning model to predict optimal credit mix for individuals based on their financial profiles. Helps financial institutions make informed lending decisions.",
      icon: CreditCard,
      technologies: ["Python", "Classification", "Feature Engineering", "Model Evaluation"],
      githubLink: "https://github.com/raihann63/ML_PROJECT_02",
      highlights: ["Feature engineering for financial data", "Risk assessment modeling", "Performance optimization"]
    },
    {
      title: "Time-Series Forecasting of Air Quality",
      description: "Predictive model for air quality forecasting using historical environmental data. Implemented LSTM and other time-series algorithms for accurate pollution predictions.",
      icon: Wind,
      technologies: ["Python", "LSTM", "Time-Series", "TensorFlow", "Data Visualization"],
      githubLink: "https://github.com/raihann63/ML_PROJECT_03",
      highlights: ["Deep learning for time-series", "Environmental data analysis", "Trend prediction and visualization"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world machine learning solutions solving complex problems across different domains
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-glow animate-slide-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-tight">{project.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 transition-colors text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.liveLink && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow-primary transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/raihann63" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;