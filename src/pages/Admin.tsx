import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut,
  TrendingUp,
  Mail,
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  User,
  Cpu,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Phone,
  Award,
  Languages
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getPortfolioData, savePortfolioData, PortfolioData, SkillCategory, Experience, Education, Project, ContactInfo, Language } from "@/lib/data-store";
import { toast } from "sonner";

const Admin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState<PortfolioData>(getPortfolioData());
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    setData(getPortfolioData());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Admin@123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleSave = () => {
    savePortfolioData(data);
    toast.success("Portfolio content updated successfully!");
  };

  const updateHero = (field: keyof PortfolioData["hero"], value: string) => {
    setData({
      ...data,
      hero: { ...data.hero, [field]: value }
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: keyof PortfolioData["hero"]) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        updateHero(field, base64String);
        toast.success(`${field} uploaded successfully!`);
      };
      reader.readAsDataURL(file);
    }
  };

  // Generic list helpers
  const addItem = (section: keyof PortfolioData, defaultItem: any) => {
    setData({
      ...data,
      [section]: [...(data[section] as any[]), defaultItem]
    });
  };

  const removeItem = (section: keyof PortfolioData, index: number) => {
    const newList = [...(data[section] as any[])];
    newList.splice(index, 1);
    setData({ ...data, [section]: newList });
  };

  const updateListItem = (section: keyof PortfolioData, index: number, field: string, value: any) => {
    const newList = [...(data[section] as any[])];
    newList[index] = { ...newList[index], [field]: value };
    setData({ ...data, [section]: newList });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <Card className="w-full max-w-md shadow-card">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Settings className="text-primary h-6 w-6" />
            </div>
            <CardTitle className="text-2xl">Admin Authentication</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Please enter your password to access the admin panel
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                />
                {error && <p className="text-xs text-destructive font-medium">{error}</p>}
              </div>
              <div className="flex gap-3">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="submit" className="flex-1">
                  Login
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-background border-r p-6 flex flex-col h-screen sticky top-0">
        <div className="flex items-center space-x-2 mb-8 px-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Settings className="text-primary-foreground h-5 w-5" />
          </div>
          <span className="font-bold text-xl">AdminPanel</span>
        </div>

        <nav className="space-y-1 flex-grow overflow-y-auto">
          <div className="text-xs font-semibold text-muted-foreground mt-4 mb-2 px-2 uppercase">Content Management</div>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${activeTab === "hero" ? "bg-primary/10 text-primary" : ""}`}
            onClick={() => setActiveTab("hero")}
          >
            <User className="mr-2 h-4 w-4" />
            Hero Section
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${activeTab === "skills" ? "bg-primary/10 text-primary" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            <Cpu className="mr-2 h-4 w-4" />
            Skills & Tech
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${activeTab === "experience" ? "bg-primary/10 text-primary" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            Experience
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${activeTab === "education" ? "bg-primary/10 text-primary" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <GraduationCap className="mr-2 h-4 w-4" />
            Education
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${activeTab === "projects" ? "bg-primary/10 text-primary" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            <FolderKanban className="mr-2 h-4 w-4" />
            Projects
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${activeTab === "contact" ? "bg-primary/10 text-primary" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            <Phone className="mr-2 h-4 w-4" />
            Contact & Extra
          </Button>
        </nav>

        <div className="pt-4 mt-4 border-t border-border">
          <Button className="w-full mb-2" onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
          <Button variant="outline" className="w-full" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold capitalize">{activeTab} Management</h1>
            <p className="text-muted-foreground">Manage your portfolio {activeTab} information</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="font-medium text-sm">{data.hero.name} {data.hero.surname}</p>
              <p className="text-xs text-muted-foreground">Super Admin</p>
            </div>
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
              {data.hero.name[0]}{data.hero.surname[0]}
            </div>
          </div>
        </header>

        {activeTab === "hero" && (
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your main landing page details and assets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input value={data.hero.name} onChange={(e) => updateHero("name", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input value={data.hero.surname} onChange={(e) => updateHero("surname", e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Professional Title</label>
                <Input value={data.hero.title} onChange={(e) => updateHero("title", e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Summarize / Biography</label>
                <Textarea 
                  rows={5} 
                  value={data.hero.summary} 
                  onChange={(e) => updateHero("summary", e.target.value)} 
                />
              </div>

              {/* Assets Upload Section */}
              <div className="grid md:grid-cols-3 gap-6 pt-4 border-t">
                <div className="space-y-3">
                  <label className="text-sm font-bold">Logo</label>
                  <div className="flex flex-col items-center gap-2 p-4 border-2 border-dashed rounded-lg">
                    {data.hero.logo && (
                      <img src={data.hero.logo} alt="Logo Preview" className="h-16 w-auto object-contain mb-2" />
                    )}
                    <Input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      id="logo-upload"
                      onChange={(e) => handleFileUpload(e, "logo")}
                    />
                    <Button variant="outline" size="sm" asChild>
                      <label htmlFor="logo-upload" className="cursor-pointer">Change Logo</label>
                    </Button>
                    <p className="text-[10px] text-muted-foreground truncate w-full text-center">{data.hero.logo}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold">Profile Photo</label>
                  <div className="flex flex-col items-center gap-2 p-4 border-2 border-dashed rounded-lg">
                    {data.hero.profilePhoto && (
                      <img src={data.hero.profilePhoto} alt="Profile Preview" className="h-16 w-16 rounded-full object-cover mb-2" />
                    )}
                    <Input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      id="photo-upload"
                      onChange={(e) => handleFileUpload(e, "profilePhoto")}
                    />
                    <Button variant="outline" size="sm" asChild>
                      <label htmlFor="photo-upload" className="cursor-pointer">Change Photo</label>
                    </Button>
                    <p className="text-[10px] text-muted-foreground truncate w-full text-center">{data.hero.profilePhoto}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold">CV / Resume File</label>
                  <div className="flex flex-col items-center gap-2 p-4 border-2 border-dashed rounded-lg">
                    <div className="h-16 flex items-center justify-center">
                      <GraduationCap className="h-10 w-10 text-muted-foreground opacity-20" />
                    </div>
                    <Input 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      className="hidden" 
                      id="cv-upload"
                      onChange={(e) => handleFileUpload(e, "cvLink")}
                    />
                    <Button variant="outline" size="sm" asChild>
                      <label htmlFor="cv-upload" className="cursor-pointer">Upload New CV</label>
                    </Button>
                    <p className="text-[10px] text-muted-foreground truncate w-full text-center">{data.hero.cvLink}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">GitHub URL</label>
                  <Input value={data.hero.githubLink} onChange={(e) => updateHero("githubLink", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">LinkedIn URL</label>
                  <Input value={data.hero.linkedinLink} onChange={(e) => updateHero("linkedinLink", e.target.value)} />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "skills" && (
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Skill Categories</CardTitle>
                  <CardDescription>Manage your programming and tech categories with proficiency levels</CardDescription>
                </div>
                <Button size="sm" onClick={() => {
                  const newCats = [...data.skills.categories, { title: "New Category", skills: [] }];
                  setData({ ...data, skills: { ...data.skills, categories: newCats } });
                }}>
                  <Plus className="mr-2 h-4 w-4" /> Add Category
                </Button>
              </CardHeader>
              <CardContent className="space-y-8">
                {data.skills.categories.map((cat, catIdx) => (
                  <div key={catIdx} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <Input 
                        className="font-bold text-lg w-1/2" 
                        value={cat.title} 
                        onChange={(e) => {
                          const newCats = [...data.skills.categories];
                          newCats[catIdx].title = e.target.value;
                          setData({ ...data, skills: { ...data.skills, categories: newCats } });
                        }}
                      />
                      <Button variant="destructive" size="sm" onClick={() => {
                        const newCats = [...data.skills.categories];
                        newCats.splice(catIdx, 1);
                        setData({ ...data, skills: { ...data.skills, categories: newCats } });
                      }}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {cat.skills.map((skill, skillIdx) => (
                        <div key={skillIdx} className="flex gap-4 items-center">
                          <Input 
                            placeholder="Skill name" 
                            className="flex-grow"
                            value={skill.name}
                            onChange={(e) => {
                              const newCats = [...data.skills.categories];
                              newCats[catIdx].skills[skillIdx].name = e.target.value;
                              setData({ ...data, skills: { ...data.skills, categories: newCats } });
                            }}
                          />
                          <Input 
                            type="number" 
                            placeholder="Level %" 
                            className="w-24"
                            value={skill.level}
                            onChange={(e) => {
                              const newCats = [...data.skills.categories];
                              newCats[catIdx].skills[skillIdx].level = parseInt(e.target.value);
                              setData({ ...data, skills: { ...data.skills, categories: newCats } });
                            }}
                          />
                          <Button variant="ghost" size="sm" onClick={() => {
                            const newCats = [...data.skills.categories];
                            newCats[catIdx].skills.splice(skillIdx, 1);
                            setData({ ...data, skills: { ...data.skills, categories: newCats } });
                          }}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full" onClick={() => {
                        const newCats = [...data.skills.categories];
                        newCats[catIdx].skills.push({ name: "New Skill", level: 50 });
                        setData({ ...data, skills: { ...data.skills, categories: newCats } });
                      }}>
                        <Plus className="mr-2 h-4 w-4" /> Add Skill
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Expertise</CardTitle>
                  <CardDescription>Manage core expertise areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {data.skills.expertise.map((item, idx) => (
                      <div key={idx} className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item}
                        <button className="ml-2 text-blue-500 hover:text-blue-700" onClick={() => {
                          const newList = [...data.skills.expertise];
                          newList.splice(idx, 1);
                          setData({ ...data, skills: { ...data.skills, expertise: newList } });
                        }}>
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Add expertise..." 
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const val = (e.target as HTMLInputElement).value;
                          if (val) {
                            setData({ ...data, skills: { ...data.skills, expertise: [...data.skills.expertise, val] } });
                            (e.target as HTMLInputElement).value = '';
                          }
                        }
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Technologies</CardTitle>
                  <CardDescription>Manage tools and technologies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {data.skills.technologies.map((item, idx) => (
                      <div key={idx} className="flex items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item}
                        <button className="ml-2 text-purple-500 hover:text-purple-700" onClick={() => {
                          const newList = [...data.skills.technologies];
                          newList.splice(idx, 1);
                          setData({ ...data, skills: { ...data.skills, technologies: newList } });
                        }}>
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Add tech..." 
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const val = (e.target as HTMLInputElement).value;
                          if (val) {
                            setData({ ...data, skills: { ...data.skills, technologies: [...data.skills.technologies, val] } });
                            (e.target as HTMLInputElement).value = '';
                          }
                        }
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Concepts</CardTitle>
                  <CardDescription>Manage methodologies and concepts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {data.skills.concepts.map((item, idx) => (
                      <div key={idx} className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item}
                        <button className="ml-2 text-green-500 hover:text-green-700" onClick={() => {
                          const newList = [...data.skills.concepts];
                          newList.splice(idx, 1);
                          setData({ ...data, skills: { ...data.skills, concepts: newList } });
                        }}>
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Add concept..." 
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const val = (e.target as HTMLInputElement).value;
                          if (val) {
                            setData({ ...data, skills: { ...data.skills, concepts: [...data.skills.concepts, val] } });
                            (e.target as HTMLInputElement).value = '';
                          }
                        }
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Experience List</h2>
              <Button onClick={() => addItem("experience", {
                title: "New Role",
                company: "Company Name",
                location: "City, Country",
                duration: "2024 - Present",
                type: "Full-time",
                description: ["New responsibility"],
                technologies: ["React"]
              })}>
                <Plus className="mr-2 h-4 w-4" /> Add Experience
              </Button>
            </div>
            
            {data.experience.map((exp, idx) => (
              <Card key={idx} className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <Input 
                    className="font-bold text-xl h-auto p-0 border-none focus-visible:ring-0 w-3/4" 
                    value={exp.title}
                    onChange={(e) => updateListItem("experience", idx, "title", e.target.value)}
                  />
                  <Button variant="destructive" size="sm" onClick={() => removeItem("experience", idx)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">Company</label>
                      <Input value={exp.company} onChange={(e) => updateListItem("experience", idx, "company", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">Location</label>
                      <Input value={exp.location} onChange={(e) => updateListItem("experience", idx, "location", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">Duration</label>
                      <Input value={exp.duration} onChange={(e) => updateListItem("experience", idx, "duration", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">Type</label>
                      <Input value={exp.type} onChange={(e) => updateListItem("experience", idx, "type", e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase text-muted-foreground">Description (One per line)</label>
                    <Textarea 
                      rows={4}
                      value={exp.description.join('\n')}
                      onChange={(e) => updateListItem("experience", idx, "description", e.target.value.split('\n'))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase text-muted-foreground">Technologies (Comma separated)</label>
                    <Input 
                      value={exp.technologies.join(', ')}
                      onChange={(e) => updateListItem("experience", idx, "technologies", e.target.value.split(',').map(s => s.trim()))}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "education" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Education History</h2>
              <Button onClick={() => addItem("education", {
                degree: "New Degree",
                institution: "University Name",
                duration: "2024 - 2026",
                specialization: "Subject",
                gpa: "0.0",
                highlights: ["Achievement"]
              })}>
                <Plus className="mr-2 h-4 w-4" /> Add Education
              </Button>
            </div>
            
            {data.education.map((edu, idx) => (
              <Card key={idx} className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <Input 
                    className="font-bold text-xl h-auto p-0 border-none focus-visible:ring-0 w-3/4" 
                    value={edu.degree}
                    onChange={(e) => updateListItem("education", idx, "degree", e.target.value)}
                  />
                  <Button variant="destructive" size="sm" onClick={() => removeItem("education", idx)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">Institution</label>
                      <Input value={edu.institution} onChange={(e) => updateListItem("education", idx, "institution", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">Duration</label>
                      <Input value={edu.duration} onChange={(e) => updateListItem("education", idx, "duration", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">Specialization</label>
                      <Input value={edu.specialization} onChange={(e) => updateListItem("education", idx, "specialization", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">GPA / Result</label>
                      <Input value={edu.gpa} onChange={(e) => updateListItem("education", idx, "gpa", e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase text-muted-foreground">Highlights (Comma separated)</label>
                    <Input 
                      value={edu.highlights.join(', ')}
                      onChange={(e) => updateListItem("education", idx, "highlights", e.target.value.split(',').map(s => s.trim()))}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Projects</h2>
              <Button onClick={() => addItem("projects", {
                title: "New Project",
                description: "Short description",
                technologies: ["Tech"],
                features: ["Feature 1"],
                status: "Completed",
                date: "2024",
                github: "#",
                demo: "#"
              })}>
                <Plus className="mr-2 h-4 w-4" /> Add Project
              </Button>
            </div>
            
            {data.projects.map((proj, idx) => (
              <Card key={idx} className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <Input 
                    className="font-bold text-xl h-auto p-0 border-none focus-visible:ring-0 w-3/4" 
                    value={proj.title}
                    onChange={(e) => updateListItem("projects", idx, "title", e.target.value)}
                  />
                  <Button variant="destructive" size="sm" onClick={() => removeItem("projects", idx)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase text-muted-foreground">Description</label>
                    <Textarea 
                      rows={3}
                      value={proj.description}
                      onChange={(e) => updateListItem("projects", idx, "description", e.target.value)}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">Status</label>
                      <Input value={proj.status} onChange={(e) => updateListItem("projects", idx, "status", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">Date</label>
                      <Input value={proj.date} onChange={(e) => updateListItem("projects", idx, "date", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">GitHub URL</label>
                      <Input value={proj.github} onChange={(e) => updateListItem("projects", idx, "github", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase text-muted-foreground">Demo URL</label>
                      <Input value={proj.demo} onChange={(e) => updateListItem("projects", idx, "demo", e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase text-muted-foreground">Features (One per line)</label>
                    <Textarea 
                      rows={3}
                      value={proj.features.join('\n')}
                      onChange={(e) => updateListItem("projects", idx, "features", e.target.value.split('\n'))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase text-muted-foreground">Technologies (Comma separated)</label>
                    <Input 
                      value={proj.technologies.join(', ')}
                      onChange={(e) => updateListItem("projects", idx, "technologies", e.target.value.split(',').map(s => s.trim()))}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "contact" && (
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Update your public contact details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {data.contact.info.map((info, idx) => (
                  <div key={idx} className="grid md:grid-cols-3 gap-4 p-3 border rounded-lg">
                    <div className="space-y-1">
                      <label className="text-xs font-bold">{info.label}</label>
                      <Input 
                        value={info.value} 
                        onChange={(e) => {
                          const newInfo = [...data.contact.info];
                          newInfo[idx].value = e.target.value;
                          setData({ ...data, contact: { ...data.contact, info: newInfo } });
                        }}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold">Link (URL/Tel/Mailto)</label>
                      <Input 
                        value={info.link || ""} 
                        onChange={(e) => {
                          const newInfo = [...data.contact.info];
                          newInfo[idx].link = e.target.value;
                          setData({ ...data, contact: { ...data.contact, info: newInfo } });
                        }}
                      />
                    </div>
                    <div className="flex items-end pb-1">
                      <Button variant="destructive" size="sm" onClick={() => {
                        const newInfo = [...data.contact.info];
                        newInfo.splice(idx, 1);
                        setData({ ...data, contact: { ...data.contact, info: newInfo } });
                      }}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full" onClick={() => {
                  const newInfo = [...data.contact.info, { icon: "Mail", label: "New", value: "", link: "" }];
                  setData({ ...data, contact: { ...data.contact, info: newInfo } });
                }}>
                  <Plus className="mr-2 h-4 w-4" /> Add Contact Item
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>Manage your professional certificates</CardDescription>
                </div>
                <Button size="sm" onClick={() => {
                  const newCerts = [...data.contact.certifications, "New Certification"];
                  setData({ ...data, contact: { ...data.contact, certifications: newCerts } });
                }}>
                  <Plus className="mr-2 h-4 w-4" /> Add Certificate
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {data.contact.certifications.map((cert, idx) => (
                  <div key={idx} className="flex gap-2">
                    <Input 
                      value={cert} 
                      onChange={(e) => {
                        const newCerts = [...data.contact.certifications];
                        newCerts[idx] = e.target.value;
                        setData({ ...data, contact: { ...data.contact, certifications: newCerts } });
                      }}
                    />
                    <Button variant="ghost" size="sm" onClick={() => {
                      const newCerts = [...data.contact.certifications];
                      newCerts.splice(idx, 1);
                      setData({ ...data, contact: { ...data.contact, certifications: newCerts } });
                    }}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Languages</CardTitle>
                  <CardDescription>Manage your language proficiency</CardDescription>
                </div>
                <Button size="sm" onClick={() => {
                  const newLangs = [...data.contact.languages, { name: "New Language", proficiency: "Professional" }];
                  setData({ ...data, contact: { ...data.contact, languages: newLangs } });
                }}>
                  <Plus className="mr-2 h-4 w-4" /> Add Language
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {data.contact.languages.map((lang, idx) => (
                  <div key={idx} className="flex gap-4">
                    <Input 
                      placeholder="Language"
                      value={lang.name} 
                      onChange={(e) => {
                        const newLangs = [...data.contact.languages];
                        newLangs[idx].name = e.target.value;
                        setData({ ...data, contact: { ...data.contact, languages: newLangs } });
                      }}
                    />
                    <Input 
                      placeholder="Proficiency"
                      value={lang.proficiency} 
                      onChange={(e) => {
                        const newLangs = [...data.contact.languages];
                        newLangs[idx].proficiency = e.target.value;
                        setData({ ...data, contact: { ...data.contact, languages: newLangs } });
                      }}
                    />
                    <Button variant="ghost" size="sm" onClick={() => {
                      const newLangs = [...data.contact.languages];
                      newLangs.splice(idx, 1);
                      setData({ ...data, contact: { ...data.contact, languages: newLangs } });
                    }}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
