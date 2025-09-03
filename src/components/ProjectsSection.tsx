import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Mic, Brain, Eye, GraduationCap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Desktop Voice Assistant (DVA)",
      description:
        "A Python-based desktop AI assistant capable of executing multiple tasks such as voice control, weather updates, file operations, content generation, and system automation. It includes a login/register system, database support, and integrates modular AI-powered features.",
      icon: <Mic className="h-8 w-8 text-primary" />,
      technologies: [
        "Python",
        "CustomTkinter",
        "SQLite",
        "SpeechRecognition",
        "g4f (AI responses)",
        "OpenCV / PIL",
        "Requests",
      ],
      features: [
        "Voice & Text Control – Understands spoken and typed queries to execute actions.",
        "Multi-Feature Modules – Weather, YouTube, Google Search, Wikipedia, file operations, screenshots, and more.",
        "AI-Powered Responses – Generates text, emails, business letters, and images.",
        "System Automation – Controls brightness, voice volume, and app installations.",
        "Login & Security – Includes authentication with database verification for personalized sessions.",
      ],
      status: "Update project",
      date: "2025",
      github: "https://github.com/kyada2004/dva",
      demo: "#",
    },
    {
      title: "NeuroDesk : AI Intelligent Desktop Assistant",
      description:
        "An AI-powered desktop assistant built in Python with features like weather updates, file analysis, AI chat responses, and image generation. It integrates an AI Brain for decision-making, an AI Agent for executing tasks, and a Vector DB for memory storage.",
      icon: <Brain className="h-8 w-8 text-primary" />,
      technologies: [
        "Python",
        "SQLite",
        "FAISS / Chroma / Pinecone",
        "Sentence-Transformers",
        "PIL",
        "Requests",
      ],
      features: [
        "Smart Assistant – Handles greetings, weather, file analysis, image generation, and AI chat.",
        "AI Brain + AI Agent – Brain decides intent, Agent executes tasks like API calls or generating outputs.",
        "Memory Support – Uses Vector DB to store chat history and recall past queries.",
        "User Authentication – Login/Register with secure SQLite database.",
        "Lightweight & Expandable – Works locally without cloud dependence, new features can be added easily.",
      ],
      status: "Update project",
      date: "2024",
      github: "https://github.com/kyada2004/NeuroDesk-AI-Intelligent-Desktop-Assistant",
      demo: "#",
    },
    {
      title: "Object and Person Detection System",
      description:
        "A computer vision project that performs real-time detection and tracking of objects and people using deep learning techniques. It is optimized for accuracy and speed, enabling practical use in security, monitoring, and automation systems.",
      icon: <Brain className="h-8 w-8 text-primary" />, 
        technologies: [
        "Python",
        "OpenCV",
        "TensorFlow / PyTorch",
        "YOLO (You Only Look Once)",
        "Deep Learning",
        "Computer Vision"
      ],
      features: [
        "Real-time detection of multiple objects and persons in video streams.",
        "Person tracking and identity recognition across frames.",
        "Integration with camera systems for live monitoring.",
        "Performance optimization for fast inference on CPU/GPU.",
        "Scalable for security, surveillance, and automation use cases."
      ],
      status: "Completed",
      date: "2024",
      github: "https://github.com/kyada2004/object-and-person-detection.git",
      demo: "#"
    },
    {
      title: "Vision Classes – Online Training & Placement System",
      description:
        "A web-based platform designed to simplify training and job placement processes by providing a centralized digital bridge between students and employers. It automates training, job applications, and communication while ensuring better access to opportunities.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Node.js", "MySQL"],
      features: [
        "Centralized Platform – Connects students and employers in one place.",
        "Automated Training – Provides structured modules with video lectures.",
        "Job Placement Portal – Lists jobs, allows applications, and connects with recruiters.",
        "Admin Control – Manages users, training content, and job postings.",
        "Notifications & Communication – Real-time SMS alerts and direct interaction between students and recruiters.",
      ],
      status: "Completed",
      date: "2024",
      github: "https://github.com/kyada2004/Vision-Classes",
      demo: "#",
    },
    {
      title: "Portfolio",
      description:
        "A modern and responsive portfolio website built using React, TypeScript, Tailwind CSS, and Vite. It showcases professional skills, expertise, projects, and contact information with a clean UI and smooth animations. Designed to provide an elegant online presence for AI/ML and software development portfolios.",
      icon: <Brain className="h-8 w-8 text-primary" />,
      technologies: ["React", "Tailwind", "Framer Motion" , "TypeScript" , "Vite" , "ShadCN UI Components"],
      features: [
       " Responsive Design – Fully optimized for desktop, tablet, and mobile devices.",
       "Interactive UI – Built with Tailwind and ShadCN UI for modern look and feel.",
       "Portfolio Showcase – Displays projects with descriptions, technologies, and GitHub/demo links.",
       "Skills & Experience Sections – Highlights programming skills, AI/ML expertise, and education.",
       "Contact & Social Links – Integrated contact form, social media links, and downloadable CV.",
      ],
      status: "Completed",
      date: "2022",
      github: "https://github.com/kyada2004/portfolio",
      demo: "#",
    },
  ];

  // 🎨 Status Badge Colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Created":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Update project":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Planning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "On Working":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative AI and software solutions that demonstrate technical
            expertise and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {project.date}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-2 pt-4">
                    <Button asChild size="sm" className="flex-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      {/* <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a> */}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/kyada2004/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
