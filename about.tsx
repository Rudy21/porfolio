import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { 
  SiPython, 
  SiPostgresql, 
  SiStreamlit, 
  SiGooglecloud, 
  SiFirebase, 
  SiTableau 
} from "react-icons/si";

export default function About() {
  const animationRef1 = useScrollAnimation();
  const animationRef2 = useScrollAnimation();
  const animationRef3 = useScrollAnimation();

  const skills = [
    { name: "Python", icon: SiPython, color: "text-blue-500" },
    { name: "SQL", icon: SiPostgresql, color: "text-orange-500" },
    { name: "Streamlit", icon: SiStreamlit, color: "text-green-500" },
    { name: "Vertex AI", icon: SiGooglecloud, color: "text-purple-500" },
    { name: "Firebase", icon: SiFirebase, color: "text-red-500" },
    { name: "Tableau", icon: SiTableau, color: "text-orange-400" },
  ];

  const capabilities = [
    "Machine Learning Model Development",
    "Data Analysis & Visualization",
    "Cloud Solution Architecture",
    "AI-Powered Application Development",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div ref={animationRef1} className="animate-on-scroll text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Data Scientist with expertise in AI, machine learning, and cloud technologies. 
            I love solving complex problems with data-driven solutions and building intelligent systems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={animationRef2} className="animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional data scientist workspace"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div ref={animationRef3} className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {skills.map((skill, index) => (
                <Card key={index} className="tech-icon">
                  <CardContent className="p-4 text-center">
                    <skill.icon className={`text-3xl ${skill.color} mb-2 mx-auto`} />
                    <p className="text-sm font-medium">{skill.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-4">What I Do</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {capabilities.map((capability, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-primary mr-3 h-4 w-4" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
