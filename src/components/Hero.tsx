import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent leading-tight">
            Welcome to Raihan's Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-medium">
            Transforming Data into Insightful Intelligence
          </p>
          <p className="text-lg mb-12 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Machine Learning enthusiast and Computer Science student at University of Dhaka, 
            building intelligent systems to solve real-world problems through AI and Data Science.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow-accent transition-all duration-300">
              <ExternalLink className="mr-2 h-5 w-5" />
              View My Projects
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/raihann63" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-accent hover:shadow-glow-accent transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-2">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;