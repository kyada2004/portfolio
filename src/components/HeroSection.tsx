import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import CV from "@/assets/Ayush resume (1).pdf";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Optional Background Patterns */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#3b82f6_0%,_transparent_40%)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-white/20 rounded-full animate-bounce"></div>
      <div
        className="absolute bottom-20 right-20 w-16 h-16 border border-white/20 rounded-lg animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-10 w-12 h-12 border border-white/20 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white/20 transform transition-transform duration-300 hover:scale-105">
              <img
                src={profilePhoto}
                alt="Kyada Ayush Bharatbhai"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Active Indicator */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-ping"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 transform transition-transform duration-300 hover:scale-105">
            Kyada Ayush
            <span className="block text-4xl md:text-5xl text-white/90 mt-2">
              Bharatbhai
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            AI & Machine Learning Developer
          </p>

          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating intelligent solutions through artificial
            intelligence and machine learning. Turning complex data into
            meaningful insights and innovative applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Download CV (open in new tab) */}
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              download="Ayush_Kyada_CV.pdf"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>

            {/* View Projects (GitHub) */}
            <a
              href="https://github.com/kyada2004/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                View Projects
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/ayush-kyada-747759237/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transform transition-transform duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/kyada2004/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transform transition-transform duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
