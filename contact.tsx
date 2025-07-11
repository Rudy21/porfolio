import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const animationRef1 = useScrollAnimation();
  const animationRef2 = useScrollAnimation();
  const animationRef3 = useScrollAnimation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div ref={animationRef1} className="animate-on-scroll text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and AI.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={animationRef2} className="animate-on-scroll">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message here..."
                      rows={5}
                      className="mt-2 resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div ref={animationRef3} className="animate-on-scroll">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-primary text-xl mr-4" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">rd212003@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-primary text-xl mr-4" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+91 90224 14730</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-primary text-xl mr-4" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Mumbai, India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="https://github.com/Rudy21" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/rudra-dave-6880a21bb" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>

                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Let's Collaborate</h3>
                  <p className="text-muted-foreground mb-4">
                    I'm available for freelance projects, consultations, and full-time opportunities. 
                    Let's build something amazing together!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Available for Work
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Remote Friendly
                    </Badge>
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
