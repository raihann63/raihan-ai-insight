import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to internship and job opportunities in Machine Learning, Data Science, and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">raihan.cse.du@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">University</p>
                    <p className="text-muted-foreground">University of Dhaka</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Connect Online</h3>
              
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/raihann63" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <p className="font-semibold">GitHub</p>
                      <p className="text-sm text-muted-foreground">@raihann63</p>
                    </div>
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Connect with me</p>
                    </div>
                  </a>
                </Button>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow-primary transition-all duration-300 mt-6"
                  asChild
                >
                  <a href="mailto:raihan.cse.du@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>

              <div className="mt-8 p-6 bg-tech-gradient rounded-lg border border-border/20">
                <h4 className="font-semibold text-foreground mb-3">Portfolio Goal</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Showcase my ML/DL projects, certificates, skills, and experience for potential 
                  <span className="text-primary font-medium"> internship and job opportunities</span> in 
                  AI, Machine Learning, and Data Science.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Currently seeking opportunities to apply my machine learning expertise in real-world projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;