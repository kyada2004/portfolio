import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Mic, Brain, GraduationCap, FolderKanban } from "lucide-react";
import { getPortfolioData } from "@/lib/data-store";

const ProjectsSection = () => {
  const [projects, setProjects] = useState(getPortfolioData().projects);

  useEffect(() => {
    const handleUpdate = () => {
      setProjects(getPortfolioData().projects);
    };
    window.addEventListener("portfolio_data_updated", handleUpdate);
    return () => window.removeEventListener("portfolio_data_updated", handleUpdate);
  }, []);

  // Icon mapping helper
  const getIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("voice") || lowerTitle.includes("assistant")) return <Mic className="h-8 w-8 text-primary" />;
    if (lowerTitle.includes("neuro") || lowerTitle.includes("ai") || lowerTitle.includes("detection")) return <Brain className="h-8 w-8 text-primary" />;
    if (lowerTitle.includes("vision") || lowerTitle.includes("class") || lowerTitle.includes("training")) return <GraduationCap className="h-8 w-8 text-primary" />;
    return <FolderKanban className="h-8 w-8 text-primary" />;
  };

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative AI and software solutions that demonstrate technical
            expertise and creative problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {getIcon(project.title)}
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
                    {project.demo && project.demo !== "#" && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
