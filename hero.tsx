import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const animationRef = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Abstract data visualization background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="Abstract data visualization background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div ref={animationRef} className="animate-on-scroll">
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            Hi, I'm <span className="text-primary">Rudra Dave</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Building AI, Data, and Cloud Solutions
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Data Scientist and AI enthusiast passionate about transforming complex data into actionable insights and building intelligent systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("resume")}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
