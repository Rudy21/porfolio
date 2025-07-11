import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, GraduationCap } from "lucide-react";

export default function Resume() {
  const animationRef1 = useScrollAnimation();
  const animationRef2 = useScrollAnimation();
  const animationRef3 = useScrollAnimation();

  const education = [
    {
      degree: "Master of Science in Big Data Analytics",
      institution: "Jai Hind College",
      period: "2024-2026",
      description: "Specialized in Machine Learning, Deep Learning, and Big Data Analytics. Focus on advanced analytics and AI techniques."
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "KES B.K.Shroff College",
      period: "2020-2023",
      description: "Graduated with comprehensive knowledge in Information Technology, Software Development, and Database Systems."
    }
  ];

  const certifications = [
    "Python Full Stack Developer",
    "Ethical Hacking",
    "Bot Development",
    "Advance Excel"
  ];

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div ref={animationRef1} className="animate-on-scroll text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume or view my educational background and certifications.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Resume Download */}
          <div ref={animationRef2} className="animate-on-scroll">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mb-6">
                  <FileText className="h-16 w-16 text-red-500 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold mb-2">Download Resume</h3>
                  <p className="text-muted-foreground">Get the complete PDF version of my resume</p>
                </div>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => {
                    // Convert Google Drive view link to direct download link
                    const driveUrl = "https://drive.google.com/file/d/1YFz3SWF3o8gnMF4o4xCXkt1NibL8_rsS/view?usp=drive_link";
                    const fileId = "1YFz3SWF3o8gnMF4o4xCXkt1NibL8_rsS";
                    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
                    
                    // Create a temporary link element to trigger download
                    const link = document.createElement('a');
                    link.href = downloadUrl;
                    link.download = 'Rudra_Dave_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Education Timeline */}
          <div ref={animationRef3} className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="absolute left-0 top-6 w-1 h-full bg-primary rounded"></div>
                    <div className="ml-6">
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution} | {edu.period}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {edu.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="absolute left-0 top-6 w-1 h-full bg-primary rounded"></div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold">Certifications</h4>
                    <p className="text-muted-foreground">Various Platforms | 2020-2024</p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      {certifications.map((cert, index) => (
                        <li key={index}>• {cert}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
