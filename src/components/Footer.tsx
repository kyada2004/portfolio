import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center space-y-4">
        {/* Copyright */}
        <p className="text-sm text-white/70">
          &copy; 2023 Kyada Ayush Bharatbhai. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/kyada2004/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transform transition-transform duration-300 hover:scale-110"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-kyada-747759237/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transform transition-transform duration-300 hover:scale-110"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
