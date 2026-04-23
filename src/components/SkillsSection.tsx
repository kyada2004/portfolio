import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getPortfolioData } from "@/lib/data-store";

const SkillsSection = () => {
  const [data, setData] = useState(getPortfolioData().skills);

  useEffect(() => {
    const handleUpdate = () => {
      setData(getPortfolioData().skills);
    };
    window.addEventListener("portfolio_data_updated", handleUpdate);
    return () => window.removeEventListener("portfolio_data_updated", handleUpdate);
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent applications and solving complex problems
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.categories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-primary transition-smooth hover:-translate-y-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-gradient">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise Tags */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-6">Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {data.expertise.map((item, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-smooth cursor-default border-blue-500/20"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>

        {/* Technology Tags */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-6">Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {data.technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-purple-500/10 text-purple-400 hover:bg-purple-500 hover:text-white transition-smooth cursor-default border-purple-500/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Concepts Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Concepts</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {data.concepts.map((item, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white transition-smooth cursor-default border-green-500/20"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
