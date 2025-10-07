import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar, Award, Languages } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ayushkyada2124@gmail.com",
      link: "mailto:ayushkyada2124@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7201898457",
      link: "tel:+917201898457",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      link: null,
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Date of Birth",
      value: "02 January 2004",
      link: null,
    },
  ];

  const certifications = [
    "Designing and implementing a Microsoft Azure AI Solution (04/2024)",
    "Introduction to AI Concepts (01/2024)",
    "Employee Education to Explore the Potential of Artificial Intelligence (01/2024)",
    "Cisco Networking Academy: Introduction to Cybersecurity (10/2025)", 
];


  const languages = [
    { name: "Hindi", proficiency: "Professional Working Proficiency" },
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Gujarati", proficiency: "Professional Working Proficiency" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can work together to bring innovative AI solutions to life
          </p>
        </div>

        {/* Cards in one row */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-3 h-6 w-6 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-medium hover:text-primary transition-smooth"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <p className="text-sm text-muted-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Languages className="mr-3 h-6 w-6 text-primary" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {lang.proficiency.split(" ")[0]}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {lang.proficiency}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
