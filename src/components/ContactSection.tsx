import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar, Award, Languages, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { getPortfolioData } from "@/lib/data-store";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactSection = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(getPortfolioData().contact);

  useEffect(() => {
    const handleUpdate = () => {
      setData(getPortfolioData().contact);
    };
    window.addEventListener("portfolio_data_updated", handleUpdate);
    return () => window.removeEventListener("portfolio_data_updated", handleUpdate);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Mail": return <Mail className="h-5 w-5" />;
      case "Phone": return <Phone className="h-5 w-5" />;
      case "MapPin": return <MapPin className="h-5 w-5" />;
      case "Calendar": return <Calendar className="h-5 w-5" />;
      default: return <Mail className="h-5 w-5" />;
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (
      values.name === "admin" &&
      values.email === "admin@gmail.com" &&
      values.subject === "open panel" &&
      values.message === "open admin panel"
    ) {
      toast.info("Secret trigger detected. Redirecting to authentication...");
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
      return;
    }

    console.log(values);
    toast.success("Message sent successfully! I'll get back to you soon.");
    form.reset();
  };

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

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Send className="mr-3 h-6 w-6 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gmail ID / Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me more about your project or inquiry..." 
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full md:w-auto px-8 transition-smooth">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {data.info.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {getIcon(info.icon)}
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

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-3 h-6 w-6 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <p className="text-sm text-muted-foreground">{cert}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Languages className="mr-3 h-6 w-6 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.languages.map((lang, index) => (
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
      </div>
    </section>
  );
};

export default ContactSection;
