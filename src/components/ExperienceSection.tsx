import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "React.js & MongoDB",
      location: "Ahmedabad ,Gujarat",
      duration: "2024",
      type: "Internship",
      description: [
        "Developed responsive web applications using React.js with modern UI/UX principles",
        "Integrated MongoDB database solutions for efficient data management",
        "Collaborated with development teams using version control and agile methodologies",
        "Optimized application performance and implemented best coding practices"
      ],
      technologies: ["React.js", "MongoDB", "JavaScript", "HTML/CSS", "Git"]
    },
    {
      title: "PHP Developer Intern", 
      company: "INFOTRONICS Pvt Ltd",
      location: "Ahmedabad, Gujarat",
      duration: "2024",
      type: "Internship",
      description: [
        "Developed server-side applications using PHP and related technologies",
        "Worked on database integration and data management solutions",
        "Participated in code reviews and collaborative development processes",
        "Gained experience in full-stack web development lifecycle"
      ],
      technologies: ["PHP", "MySQL"]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (M.C.A)",
      institution: "Silver Oak University",
      duration: "2024 - 2026",
      specialization: "Artificial Intelligence & Machine Learning",
      gpa: "8.88",
      highlights: ["AI/ML Specialization", "Academic Excellence", "Research Projects"]
    },
    {
      degree: "Bachelor of Computer Applications (B.C.A)",
      institution: "Silver Oak University", 
      duration: "2021 - 2024",
      specialization: "Computer Applications",
      gpa: "8.44",
      highlights: ["Programming Fundamentals", "Software Development", "Database Management", "Website Development"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Building className="mr-3 h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="shadow-card hover:shadow-primary transition-smooth">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                        <p className="text-lg font-medium text-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm space-x-4">
                      <div className="flex items-center">
                        <CalendarDays className="mr-1 h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <CalendarDays className="mr-3 h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-card hover:shadow-primary transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
                    <p className="text-lg font-medium text-foreground">{edu.institution}</p>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <CalendarDays className="mr-1 h-4 w-4" />
                      {edu.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{edu.specialization}</p>
                    {edu.gpa && (
                      <p className="font-medium text-primary mb-3">CGPA : {edu.gpa}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;