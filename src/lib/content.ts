export const PROFILE = {
  name: "Afiq",
  role: "Software Engineer",
  company: "Siemens Industry Software",
  tagline:
    "I build backend systems and AI-powered tools that are clean, scalable, and production-ready.",
  github: "https://github.com/mafiqqq",
  linkedin: "https://www.linkedin.com/in/afiqqqx/",
  email: "afiqqqx1997@email.com",
  devto: "mafiqqq",
  domain: "afiq.dev",
};

export const STATS = [
  { value: "4+", label: "years in industry", info: "Shipping production code since 2020." },
  { value: "2", label: "enterprise companies", info: "Intel and Siemens." },
  { value: "4", label: "career chapters", info: "Internships, junior, engineer, senior work." },
  { value: "3", label: "main strengths", info: "Backend · AI/LLM · Clean Code." },
] as const;

export const SKILL_GROUPS = [
  {
    label: "Languages & Frameworks",
    items: [
      "C#",
      "ASP.NET Core",
      "Python",
      "Desktop Application (WinUI3 / WPF)",
      "React",      
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    label: "AI / LLM",
    items: [
      "Prompt Engineering",
      "RAG / Vector Search",
      "ChromaDB",
      "OpenRouter",
      "Agent Design",
      "MCP (Model Context Protocol)",
      "Model Evaluation",
    ],
  },
  {
    label: "Practices & DevOps",
    items: [
      "Object-Oriented Programming",
      "Clean Architecture",
      "RESTful APIs",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "xUnit",
      "Pytest",
      "Cypress",
      "PowerShell",
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "Resume and Cover Letter Builder with AI",
    repo: "https://github.com/mafiqqq/resumatch-ai",
    description:
      "Architected a multi-agent LLM orchestration system with distinct agent roles: a Resume Tailoring Agent with a dedicated system prompt engineered to align bullet points and summaries to job descriptions, and a Cover Letter Agent with its own context window and prompt strategy demonstrating end-to-end agentic workflow design with structured outputs and per-agent prompt engineering.",
    stack: ["c#/.NET", "React", "OpenRouter", "LLM Integration"],
    status: "Code available",
  },
  {
    title: "mafiqqq dev",
    repo: "https://github.com/mafiqqq/human-folio-glow",
    description:
      "",
    stack: ["React", "TanStack Start", "Tailwind CSS", "TypeScript"],
    status: "Code available",
  },
  {
    title: "Feature file RAG Generation",
    repo: "https://github.com/mafiqqq/rag-fector",
    description:
      "AI-powered BDD feature file generation. Scrapes your existing .feature files, embeds them into pgvector, and uses RAG + GPT to generate new, consistent Gherkin scenarios that reuse your team's existing step phrasings.",
    stack: ["Python", "ASP.NET Core", "PostgreSQL", "RAG"],
    status: "Code available",
  },
] as const;

// Flat preview list (kept for compatibility with About page tools section)
export const TOOLS = [
  { name: "C# / .NET", tag: "CORE", emoji: "🧩" },
  { name: "Python", tag: "CORE", emoji: "🐍" },
  { name: "LLM Engineering", tag: "CORE", emoji: "🤖" },
  { name: "PostgreSQL", tag: "CORE", emoji: "🗄️" },
  { name: "React", tag: "OCCASIONAL", emoji: "⚛️" },
  { name: "Docker / GitHub Actions", tag: "OCCASIONAL", emoji: "☁️" },
] as const;

export const CAREER = [
  {
    company: "Siemens Industry Software",
    role: "Software Engineer",
    range: "APR 2024 – PRESENT",
    badge: "Current" as const,
    description: [
      "Designed and built scalable manufacturing system (MES) applications in Mendix, C# (.NET 6), JavaScript applying clean architecture to keep the codebase maintainable and performant as requirements evolved",
      "Engineered an internal productivity tool combining C#, Python, and LLM models (OpenAI-compatible) automated data extraction and enabled natural-language querying over vectorized data stored in ChromaDB",
      "Developed a WinUI 3 desktop application using MVVM, achieving clear separation of concerns and high testability",
      "Automated build and test workflows using Azure DevOps, Desktop Applications and PowerShell scripting, reducing manual CI steps and improving pipeline reliability"
    ],
    stack: ["C#", "ASP.NET Core", "WPF/WinUI 3", "Python", "ChromaDB","Azure DevOps", "SQL"],
    initial: "S",
  },
  {
    company: "Intel",
    role: "Software Development Engineer",
    range: "AUG 2020 – MAR 2024",
    badge: "Past" as const,
    description:[
      "Led database redesign and migration from MariaDB to PostgreSQL, improving system performance by up to 7x and ensuring data consistency",
      "Applied Agile methodologies in development of full-stack applications using React, ASP.NET Core, and Python, delivering clean, scalable, and production-ready code",
      "Implemented CI/CD pipelines using GitHub Actions, improving build, test, and deployment efficiency"
    ],
    stack: ["C#", "ASP.NET Core", "Python", "SQL", "REST APIs", "React", "GitHub Actions"],
    initial: "I",
  },
  {
    company: "Intel",
    role: "Yield Integration Intern",
    range: "FEB 2020 – AUG 2020",
    badge: "Past" as const,
    description:[
      "Reduced complexity and time for data analysis with SQL queries to retrieve the data then developed a data visualization dashboard using Python library (Bokeh), Pandas and Numpy for data cleaning",
      "Performed statistical analysis to determine the abnormality in data such as shifted signals and spike in trend using JMP software tool and used Scripthost to set a scheduler",
      "Automate the chart trend using Power BI tools and created an alert system for spike in defect trend"
    ],
    stack: ["Python", "SQL", "Data Analysis", "Numpy", "Pandas", "Power BI"],
    initial: "I",
  },
  {
    company: "ViaMed Sdn. Bhd.",
    role: "Ionic App Developer",
    range: "JAN 2019 – MAY 2019",
    badge: "Past" as const,
    description: [
      "Developed a mobile application for trip collaboration by using the Ionic Framework, Angular and JavaScript for the application as well as using Google's Firebase to serve the application and act as a database management system",
      "Integrated Firebase Login API for Google+ and Facebook. Next, Google location services to get the device location and suggest location-based search bar that are mapped onto the Google Maps"
    ],
    stack: ["Ionic", "Angular", "TypeScript", "Firebase"],
    initial: "V",
  },
] as const;

export const STRENGTHS = [
  {
    title: "Scalable Backend Systems",
    icon: "🧱",
    description: "Backend services and APIs designed for reliability, performance, and long-term growth.",
  },
  {
    title: "Applied AI Engineering",
    icon: "🤖",
    description: "Building practical LLM features with RAG, evaluation pipelines, and production-focused integrations.",
  },
  {
    title: "Engineering Clarity",
    icon: "✨",
    description: "Driving maintainable architecture, collaborative development, mentoring developers and long-term engineering quality.",
  },
] as const;
