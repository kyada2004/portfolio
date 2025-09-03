import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 30 },
        { name: "NOSQL", level: 60 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "AI/ML Technologies",
      skills: [
        { name: "TensorFlow", level: 70 },
        { name: "PyTorch", level: 60 },
        { name: "Scikit-learn", level: 90 },
        { name: "OpenCV", level: 60 },
        { name: "Pandas", level: 90 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 80 },
        { name: "Node.js", level: 60 },
        { name: "HTML/CSS", level: 90 },
        { name: "Bootstrap", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    }
  ];

  const technologies = [
    "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing",
    "Data Analysis", "Algorithm Design", "Software Development", "Database Management",
    "Version Control", "Agile Methodology", "Problem Solving", "Team Collaboration", "AI Usage & Analysis "
  ];

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
          {skillCategories.map((category, index) => (
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

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies & Concepts</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;