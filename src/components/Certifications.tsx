import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, GraduationCap } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Science & Machine Learning with Python",
      issuer: "Professional Certification",
      category: "Machine Learning",
      link: "https://drive.google.com/file/d/1nh6rC7bcKViC8yGwxJ1fSZyBEofRUlrF/view",
      skills: ["Python", "Data Science", "Machine Learning", "Analytics"]
    },
    {
      title: "Essentials of Data Visualization using Excel",
      issuer: "UniAthena",
      category: "Data Visualization",
      link: "https://docs.uniathena.com/prod/course/certificate/124_1725128346_certificate.jpg",
      skills: ["Excel", "Data Visualization", "Analytics", "Dashboards"]
    },
    {
      title: "Basics of Data Science",
      issuer: "UniAthena",
      category: "Data Science",
      link: "https://docs.uniathena.com/prod/course/certificate/117_1725127556_certificate.jpg",
      skills: ["Data Science", "Statistics", "Analysis", "Fundamentals"]
    },
    {
      title: "Foundation & Function of Data",
      issuer: "UniAthena",
      category: "Data Fundamentals",
      link: "https://docs.uniathena.com/prod/course/certificate/814_1725122186_certificate.jpg",
      skills: ["Data Management", "Data Processing", "Foundation", "Functions"]
    },
    {
      title: "Numpy for Data Science",
      issuer: "Udemy",
      category: "Programming",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-cd3bc980-1c75-4393-995c-ece640a1d0cb.jpg?v=1724085745000",
      skills: ["NumPy", "Python", "Data Science", "Arrays"]
    },
    {
      title: "Introduction to Python",
      issuer: "UniAthena",
      category: "Programming",
      link: "https://docs.uniathena.com/prod/course/certificate/323_1724089936_certificate.jpg",
      skills: ["Python", "Programming", "Basics", "Syntax"]
    }
  ];

  const categories = ["All", "Machine Learning", "Data Science", "Programming", "Data Visualization"];

  return (
    <section id="certifications" className="py-20 bg-tech-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300 flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-bold text-foreground leading-tight mb-2 text-sm">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground truncate">{cert.issuer}</span>
                    </div>
                  </div>
                </div>

                <Badge 
                  variant="outline" 
                  className="border-accent/20 text-accent hover:bg-accent/10 transition-colors mb-4 text-xs"
                >
                  {cert.category}
                </Badge>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="border-primary/20 text-primary hover:bg-primary/10 transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  size="sm" 
                  className="w-full bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow-primary transition-all duration-300 text-sm"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                  Education
                </h3>
              </div>
              <p className="text-lg font-semibold text-foreground mb-2">
                B.Sc. in Computer Science & Engineering
              </p>
              <p className="text-muted-foreground">
                University of Dhaka
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;