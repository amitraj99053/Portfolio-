export const portfolioConfig = {
  personal: {
    name: "AMIT KUMAR",
    preferredName: "Amit",
    monogram: "AK",
    title: "Software Engineer | Full-Stack Developer",
    terminalUser: "amit@portfolio:~",
    greeting: "HELLO, WORLD.",
    headline: "Building Scalable, Real-Time Digital Solutions That Drive Real Impact.",
    description: "MERN Stack Developer & 2026 MCA Graduate specializing in architecting scalable web applications, reactive user interfaces, and real-time backend systems with Socket.io and RESTful APIs.",
    location: "Noida, Delhi NCR, India",
    email: "amitraj99053@gmail.com",
    phone: "+91-8873467966",
    resumeUrl: "./Amit Kumar Resume.pdf",
    githubUrl: "https://github.com/amitraj99053",
    linkedinUrl: "https://linkedin.com/in/amit-kumar-654895220",
    repoUrl: "https://github.com/amitraj99053/Portfolio-",
    typingTitles: [
      "Software Engineer",
      "MERN Stack Developer",
      "Full-Stack Architect",
      "Real-Time Systems Specialist",
      "MCA Graduate '26"
    ]
  },

  systemStatus: {
    illustrative: true,
    services: [
      { id: "frontend", name: "Client Runtime", status: "Operational", ping: "14ms", indicator: "emerald" },
      { id: "gateway", name: "API Gateway", status: "Operational (Demo)", ping: "38ms", indicator: "cyan" },
      { id: "dispatch", name: "Dispatch Service", status: "Standby", ping: "Ready", indicator: "emerald" },
    ],
    environment: "Production / Edge",
    buildBranch: "main",
    protocol: "HTTPS / TLS 1.3"
  },

  currentFocus: {
    title: "CURRENT ENGINEERING FOCUS",
    badge: "Active",
    items: [
      "Architecting high-concurrency MERN applications with real-time Socket.io",
      "Optimizing React 18 state transitions & cinematic micro-interactions",
      "Integrating AI-assisted coding frameworks (Codex, Antigravity) to elevate software reliability",
      "Available for select freelance contracts & full-stack software engineering roles"
    ]
  },

  skills: {
    categories: [
      {
        name: "Frontend Development",
        icon: "Layout",
        skills: [
          { name: "React.js", level: "Expert", verified: true },
          { name: "JavaScript (ES6+)", level: "Expert", verified: true },
          { name: "Tailwind CSS", level: "Advanced", verified: true },
          { name: "Redux", level: "Advanced", verified: true },
          { name: "Next.js", level: "Intermediate", verified: true },
          { name: "TypeScript", level: "Intermediate", verified: true },
          { name: "HTML5 / CSS3", level: "Expert", verified: true },
        ]
      },
      {
        name: "Backend & Real-Time",
        icon: "Server",
        skills: [
          { name: "Node.js", level: "Advanced", verified: true },
          { name: "Express.js", level: "Advanced", verified: true },
          { name: "Socket.io", level: "Advanced", verified: true },
          { name: "RESTful APIs", level: "Advanced", verified: true },
          { name: "JWT Auth & RBAC", level: "Advanced", verified: true },
          { name: "Python", level: "Intermediate", verified: true },
          { name: "Java", level: "Advanced", verified: true },
        ]
      },
      {
        name: "Databases & Cloud",
        icon: "Database",
        skills: [
          { name: "MongoDB", level: "Advanced", verified: true },
          { name: "Mongoose", level: "Advanced", verified: true },
          { name: "MySQL", level: "Intermediate", verified: true },
          { name: "PostgreSQL", level: "Intermediate", verified: true },
          { name: "AWS Basics", level: "Foundational", verified: true },
          { name: "Firebase", level: "Intermediate", verified: true },
        ]
      },
      {
        name: "Engineering Tools & DevOps",
        icon: "Cpu",
        skills: [
          { name: "Git / GitHub", level: "Advanced", verified: true },
          { name: "CI/CD Pipelines", level: "Intermediate", verified: true },
          { name: "Jest / Testing", level: "Intermediate", verified: true },
          { name: "Antigravity & Codex", level: "Advanced", verified: true },
          { name: "VS Code / Terminal", level: "Expert", verified: true },
        ]
      }
    ],
    badges: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", 
      "JavaScript", "TypeScript", "Tailwind CSS", "JWT", "Java", "Git"
    ]
  },

  experience: [
    {
      role: "Web Development Intern",
      company: "Digiluma",
      period: "Jan 2026 - Present",
      location: "Noida, India",
      bullets: [
        "Architected and maintained scalable MERN stack applications, optimizing UI/UX components to drive a 25% increase in user engagement and ensure 99.9% application uptime.",
        "Engineered performance-critical site enhancements, refining React.js state management and implementing CI/CD pipelines, resulting in a 30% reduction in application latency."
      ],
      technologies: ["MERN Stack", "React.js", "Node.js", "CI/CD", "State Management"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "GL Bajaj Institute of Technology And Management | AKTU",
      period: "2024 - 2026",
      status: "Completed"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Vinoba Bhave University | VBU",
      period: "2021 - 2024",
      status: "Completed"
    }
  ],

  certifications: [
    {
      title: "AI Skills Passport",
      issuer: "Microsoft AI Skills",
      date: "Oct 2025"
    },
    {
      title: "Basics of Business Communication",
      issuer: "Infosys Springboard",
      date: "Feb 2025"
    }
  ],

  projects: [
    {
      id: "travel-assist",
      title: "Travel Assist Portal",
      featured: true,
      category: "Full-Stack Web Application",
      date: "June 2025 - Nov 2025",
      description: "Engineered a full-stack Travel Assist Portal using Node.js and MongoDB to establish real-time geolocation-based connectivity, reducing service alert latency. Integrated secure JWT-based role-based access control (RBAC) and real-time bi-directional communication using Socket.io for instant mechanic dispatch and emergency SOS alerts.",
      tags: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Geolocation"],
      image: "./assets/travel-portal.png",
      githubUrl: "https://github.com/amitraj99053/Travel-Assist-Portal",
      liveUrl: "https://travel-assist-portal.vercel.app/",
      stats: {
        latency: "-40% SOS alert delay",
        architecture: "Socket.io Bi-directional",
        security: "JWT RBAC"
      }
    },
    {
      id: "placement-management",
      title: "Campus Placement Management System",
      featured: true,
      category: "Enterprise MERN Platform",
      date: "Dec 2025 - April 2026",
      description: "Centralized campus recruitment platform built with MERN stack, Socket.io, and Face API. Automated recruitment workflows with biometric facial authentication and Google OAuth, real-time candidate notifications, and performance tracking analytics achieving 40% recruitment efficiency increase.",
      tags: ["MERN Stack", "Socket.io", "Face API", "Google OAuth", "Analytics"],
      image: null,
      githubUrl: "https://github.com/amitraj99053/campus-placement-management-system",
      liveUrl: "https://campus-placement-management-system-swart.vercel.app/",
      stats: {
        efficiency: "+40% recruitment speed",
        readiness: "+45% candidate readiness",
        auth: "Facial Recognition + OAuth"
      }
    },
    {
      id: "habit-tracker",
      title: "Habit Tracker",
      featured: false,
      category: "Full-Stack Web Application",
      date: "2024 - 2025",
      description: "A full-stack habit tracking application to help users build and maintain daily routines. Features streak tracking, progress visualization, category management, and reminder notifications with a clean, responsive UI.",
      tags: ["JavaScript", "HTML5", "CSS3", "Responsive UI"],
      image: null,
      githubUrl: "https://github.com/amitraj99053/Habit-Tracker-Frontend",
      liveUrl: "https://habit-tracker-frontend-sage.vercel.app/",
    },
    {
      id: "portfolio",
      title: "Developer Portfolio",
      featured: false,
      category: "Frontend Web Application",
      date: "2025 - 2026",
      description: "A hacker-style personal portfolio built with React.js featuring an interactive terminal, 3D Three.js cyber scene, animated typing titles, and a responsive dark-theme UI showcasing MERN stack projects and engineering skills.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Three.js", "JavaScript"],
      image: null,
      githubUrl: "https://github.com/amitraj99053/Portfolio-",
      liveUrl: "https://amit-portfolio-lac.vercel.app/"
    }
  ],

  terminalHelp: [
    { command: "help", description: "Display list of accessible commands" },
    { command: "about", description: "Print professional biography and overview" },
    { command: "skills", description: "List verified engineering skill matrix" },
    { command: "projects", description: "Display featured production and full-stack projects" },
    { command: "experience", description: "Show employment history and education" },
    { command: "contact", description: "Display verified email, phone, location & socials" },
    { command: "resume", description: "Download verified PDF resume" },
    { command: "status", description: "Query system diagnostics and node status" },
    { command: "clear", description: "Flush terminal screen buffer" }
  ]
};
