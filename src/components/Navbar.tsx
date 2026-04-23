import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPortfolioData } from "@/lib/data-store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroData, setHeroData] = useState(getPortfolioData().hero);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleUpdate = () => {
      setHeroData(getPortfolioData().hero);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("portfolio_data_updated", handleUpdate);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("portfolio_data_updated", handleUpdate);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-12 overflow-hidden">
            {heroData.logo ? (
              <img src={heroData.logo} alt="Logo" className="w-full h-full object-contain" />
            ) : (
              <Code2 className="text-primary-foreground h-6 w-6" />
            )}
          </div>
          <span className="text-xl font-bold tracking-tight">
            {heroData.name} <span className="text-primary">{heroData.surname}</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button size="sm" className="shadow-primary px-6" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background border-b transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-64 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full" onClick={() => setIsOpen(false)}>Hire Me</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
