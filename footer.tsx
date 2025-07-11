import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Rudra Dave</h3>
            <p className="text-gray-400">
              Data Scientist & AI Enthusiast passionate about building intelligent solutions 
              that make a difference.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("resume")}
                  className="hover:text-white transition-colors"
                >
                  Resume
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                asChild
              >
                <a href="https://github.com/Rudy21" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                asChild
              >
                <a href="https://www.linkedin.com/in/rudra-dave-6880a21bb" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Rudra Dave. All rights reserved. Built with ❤️ and lots of ☕</p>
        </div>
      </div>
    </footer>
  );
}
