export const profile = {
  name: "S. Lingaraj",
  title: "Chief Engineer | Full-Stack & Mobile Architect",
  location: "Bangalore, India",
  relocation: "Open to relocation · Visa sponsorship may be required",
  email: "lingaraj.s@hotmail.com",
  phone: "+91 8553937697",
  summary:
    "Chief Engineer with 10+ years of experience designing and scaling complex distributed systems, mobile SDKs, and full-stack platforms. Expert in bridging the gap between mobile (Android) and backend ecosystems, with recent specialization in integrating AI/LLM orchestration into production workflows. Adept at driving product success from early-stage startup environments through two successful multi-million dollar acquisitions.",
  links: {
    github: "https://github.com/lingarajsankaravelu",
    linkedin: "https://www.linkedin.com/in/lingarajs/",
  },
};

export const competencies = [
  {
    group: "Artificial Intelligence & Emerging Tech",
    items: [
      { label: "LLM/Agentic Systems", skills: ["LangChain", "Agent Orchestration", "Local LLM Deployment"] },
      { label: "AI-Assisted Development", skills: ["Claude", "Cline.sr"] },
    ],
  },
  {
    group: "Full-Stack",
    items: [
      { label: "Frontend", skills: ["TypeScript", "React", "JavaScript", "Micro-frontends"] },
      { label: "Backend", skills: ["Ruby on Rails", "GraphQL", "Schema Design", "PostgreSQL"] },
    ],
  },
  {
    group: "Mobile Engineering",
    items: [
      { label: "Languages", skills: ["Kotlin", "Java"] },
      { label: "Architecture/Libraries", skills: ["MVVM", "Room", "Dagger", "Retrofit", "Android SDK Design", "Accessibility APIs"] },
      { label: "Specialization", skills: ["High-performance apps & SDKs across Mobile, Tablet, Android TV"] },
    ],
  },
];

export const experience = [
  {
    company: "Samsung R&D Institute India (SRIB)",
    period: "May 2022 – Jul 2026",
    role: "Led full-stack development and architectural evolution of Samsung's advertising reporting & analytics",
    bullets: [
      "Reporting System Modernization: Spearheaded the migration from a legacy monolithic UI to a modern micro-frontend architecture, significantly reducing technical debt and improving frontend load performance.",
      "Security & Access Control: Architected and implemented granular, role-based access control (RBAC), securing multi-tenant data integrity for external advertisers.",
      "Data Infrastructure: Designed GraphQL API layers and managed SQL data migrations to support evolving reporting schemas.",
      "Security & DevOps Excellence: Mitigated critical dependency vulnerabilities, integrated Sentry error monitoring, and optimized CI/CD pipelines.",
      "AI Integration: Successfully integrated AI-assisted development workflows, accelerating feature delivery and enhancing code quality through AI-driven architecture discussions and debugging.",
    ],
  },
  {
    company: "Zapr Media Labs",
    tag: "Acquired by Samsung",
    period: "Dec 2020 – Apr 2022",
    role: "Contributed to a high-growth startup specializing in unique audio fingerprinting technology for mobile and TV devices",
    bullets: [
      "SDK Development: Collaborated in a team of 4 to design, develop, and optimize production-ready SDKs.",
      "IR Integration: Developed an Infrared (IR) SDK to capture DTH and TV remote key presses.",
      "Android TV Specialization: Designed and developed an Image Recognition SDK for Android TV to identify channel logos in linear mode.",
      "DevOps Excellence: Established SDK release pipelines from scratch using Docker and Jenkins for Maven Central distribution.",
    ],
  },
  {
    company: "Digital Aristotle",
    tag: "Acquired by BYJU’S",
    period: "Jul 2015 – May 2020",
    role: "Led product development for an education-tech startup, later acquired by BYJU'S",
    bullets: [
      "Aristotle App: Designed and built a personalized, habit-building learning application for grades 6-10 (CBSE/ICSE) from the ground up within a small team of 2. Implemented core features including SchoolAtHome, Scan & Search, and interactive forums.",
      "Assessed App: Acted as the sole developer for a native Android application targeting phones and tablets, dedicated to teacher-led question paper creation, correction, and assessment reporting.",
    ],
  },
];

export const certifications = [
  {
    title: "Foundation: Introduction to Langchain - Python",
    issuer: "LangChain",
    issued: "Sep 2026",
    expires: "Sep 2028",
    credentialId: "qh1esnplxf",
    skills: ["LangChain"],
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    issued: "May 2026",
    credentialId: "cqr8svis7d7n",
    skills: ["Model Context Protocol (MCP)"],
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    issued: "May 2026",
    credentialId: "fn8ku3iyz59o",
    skills: ["Model Context Protocol (MCP)"],
  },
  {
    title: "Certificate of completion: Claude 101",
    issuer: "Anthropic",
    issued: "Apr 2026",
    credentialId: "js9ouag8b2on",
    skills: [],
  },
];

export const education = {
  degree: "Master in Computer Application",
  school: "Karpagam College of Engineering, Coimbatore, Tamil Nadu, India",
  period: "July 2010 – April 2013",
};

export const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "C1/C2 – Fluent" },
  { name: "Hindi", level: "Fluent" },
];
