export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  specialization: string;
  gpa: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  status: string;
  date: string;
  github: string;
  demo: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string | null;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface PortfolioData {
  hero: {
    name: string;
    surname: string;
    title: string;
    summary: string;
    logo: string;
    profilePhoto: string;
    cvLink: string;
    githubLink: string;
    linkedinLink: string;
  };
  skills: {
    categories: SkillCategory[];
    expertise: string[];
    technologies: string[];
    concepts: string[];
  };
  experience: Experience[];
  education: Education[];
  projects: Project[];
  contact: {
    info: ContactInfo[];
    certifications: string[];
    languages: Language[];
  };
}

const DEFAULT_DATA: PortfolioData = {
  hero: {
    name: "Kyada Ayush",
    surname: "Bharatbhai",
    title: "AI & Machine Learning Developer",
    summary: "Passionate about creating intelligent solutions through artificial intelligence and machine learning. Turning complex data into meaningful insights and innovative applications.",
    logo: "/src/assets/logo.png",
    profilePhoto: "/src/assets/profile-photo.png",
    cvLink: "/src/assets/Ayush Resume.pdf",
    githubLink: "https://github.com/kyada2004/",
    linkedinLink: "https://www.linkedin.com/in/ayush-kyada-747759237/",
  },
  skills: {
    categories: [
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
    ],
    expertise: [
      "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing",
      "Data Analysis", "Algorithm Design"
    ],
    technologies: [
      "React.js", "Node.js", "MongoDB", "Python", "Git", "Docker"
    ],
    concepts: [
      "Software Development", "Database Management", "Version Control", "Agile Methodology", 
      "Problem Solving", "Team Collaboration", "AI Usage & Analysis"
    ]
  },
  experience: [
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
  ],
  education: [
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
  ],
  projects: [
    {
      title: "Desktop Voice Assistant (DVA)",
      description: "A Python-based desktop AI assistant capable of executing multiple tasks such as voice control, weather updates, file operations, content generation, and system automation. It includes a login/register system, database support, and integrates modular AI-powered features.",
      technologies: ["Python", "CustomTkinter", "SQLite", "SpeechRecognition", "g4f", "OpenCV", "Requests"],
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
      description: "An AI-powered desktop assistant built in Python with features like weather updates, file analysis, AI chat responses, and image generation. It integrates an AI Brain for decision-making, an AI Agent for executing tasks, and a Vector DB for memory storage.",
      technologies: ["Python", "SQLite", "FAISS / Chroma / Pinecone", "Sentence-Transformers", "PIL", "Requests"],
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
      description: "A computer vision project that performs real-time detection and tracking of objects and people using deep learning techniques. It is optimized for accuracy and speed, enabling practical use in security, monitoring, and automation systems.",
      technologies: ["Python", "OpenCV", "TensorFlow / PyTorch", "YOLO", "Deep Learning", "Computer Vision"],
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
      description: "A web-based platform designed to simplify training and job placement processes by providing a centralized digital bridge between students and employers. It automates training, job applications, and communication while ensuring better access to opportunities.",
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
      description: "A modern and responsive portfolio website built using React, TypeScript, Tailwind CSS, and Vite. It showcases professional skills, expertise, projects, and contact information with a clean UI and smooth animations. Designed to provide an elegant online presence for AI/ML and software development portfolios.",
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
  ],
  contact: {
    info: [
      {
        icon: "Mail",
        label: "Email",
        value: "ayushkyada2124@gmail.com",
        link: "mailto:ayushkyada2124@gmail.com",
      },
      {
        icon: "Phone",
        label: "Phone",
        value: "+91 7201898457",
        link: "tel:+917201898457",
      },
      {
        icon: "MapPin",
        label: "Location",
        value: "Ahmedabad, Gujarat, India",
        link: null,
      },
      {
        icon: "Calendar",
        label: "Date of Birth",
        value: "02 January 2004",
        link: null,
      },
    ],
    certifications: [
      "Designing and implementing a Microsoft Azure AI Solution (04/2024)",
      "Introduction to AI Concepts (01/2024)",
      "Employee Education to Explore the Potential of Artificial Intelligence (01/2024)",
      "Cisco Networking Academy: Introduction to Cybersecurity (10/2025)", 
    ],
    languages: [
      { name: "Hindi", proficiency: "Professional Working Proficiency" },
      { name: "English", proficiency: "Professional Working Proficiency" },
      { name: "Gujarati", proficiency: "Professional Working Proficiency" },
    ],
  }
};

const STORAGE_KEY = "portfolio_data";

export const getPortfolioData = (): PortfolioData => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      // Ensure new fields exist by merging with DEFAULT_DATA
      return {
        ...DEFAULT_DATA,
        ...parsed,
        hero: { ...DEFAULT_DATA.hero, ...parsed.hero },
        skills: { ...DEFAULT_DATA.skills, ...parsed.skills },
        contact: { ...DEFAULT_DATA.contact, ...parsed.contact }
      };
    } catch (e) {
      console.error("Failed to parse saved portfolio data", e);
    }
  }
  return DEFAULT_DATA;
};

export const savePortfolioData = (data: PortfolioData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  // Dispatch a custom event to notify components that data has changed
  window.dispatchEvent(new Event("portfolio_data_updated"));
};
