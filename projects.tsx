import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const animationRef1 = useScrollAnimation();
  const animationRef2 = useScrollAnimation();
  const animationRef3 = useScrollAnimation();

  const projects = [
    {
      title: "Project Kisan",
      description: "AI-powered agricultural platform helping farmers optimize crop yields using machine learning and weather data analysis.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tech: ["Python", "Machine Learning", "Streamlit"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Financial News Sentiment Analysis",
      description: "Real-time sentiment analysis of financial news using NLP and machine learning to predict market trends. To view my project please visit my Github account.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tech: ["Python", "NLP", "Firebase"],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div ref={animationRef1} className="animate-on-scroll text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in data science, AI, and cloud technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={index === 0 ? animationRef2 : animationRef3}
              className="animate-on-scroll"
            >
              <Card className="project-card overflow-hidden h-full">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      asChild
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
