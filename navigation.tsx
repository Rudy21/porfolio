import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-poppins font-bold text-xl text-primary">
            Rudra Dave
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("resume")}
              className="hover:text-primary transition-colors"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hover:text-primary"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("resume")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
