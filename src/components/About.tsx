import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-tech-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate learner and hands-on practitioner in AI, ML, and Data Science. 
            I apply machine learning models to tasks like sentiment analysis, credit prediction, 
            and time-series forecasting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-glow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI & Machine Learning</h3>
              <p className="text-muted-foreground">
                Deep expertise in supervised and unsupervised learning, neural networks, and model optimization.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient border-border/50 hover:border-accent/30 transition-all duration-300 group hover:shadow-glow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:shadow-glow-accent transition-all duration-300">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Problem Solving</h3>
              <p className="text-muted-foreground">
                Focused on building data-driven solutions that create real-world impact and value.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-glow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Always exploring cutting-edge technologies and methodologies in the rapidly evolving AI landscape.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            My goal is to <span className="text-primary font-semibold">build intelligent systems</span> that 
            leverage the power of machine learning and deep learning to solve complex real-world challenges. 
            Through hands-on projects and continuous learning, I'm developing expertise in areas ranging from 
            <span className="text-accent font-semibold"> natural language processing</span> to 
            <span className="text-primary font-semibold"> time-series forecasting</span>, 
            always with an eye toward practical applications that make a meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;