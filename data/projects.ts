export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  groupedTechStack?: {
    category: string;
    skills: string[];
  }[];
  githubLink: string;
  liveDemo: string;
}

export const projects: Project[] = [
  {
    id: "hiddenedge",
    title: "HiddenEdge",
    description: "A production-grade AI-powered investment research platform. An autonomous LangGraph agent fetches live financial data, classifies news sentiment, and delivers transparent INVEST / WATCH / PASS recommendations via a Bloomberg-inspired trading terminal UI.",
    techStack: [],
    groupedTechStack: [
      { category: "Frontend", skills: ["Next.js 15", "React.js", "Tailwind CSS", "Recharts", "TypeScript"] },
      { category: "AI / Agent", skills: ["LangGraph.js", "LangChain", "Google Gemini", "SSE Streaming"] },
      { category: "Backend / API", skills: ["Next.js API Routes", "Yahoo Finance API"] },
      { category: "Database", skills: ["PostgreSQL", "Supabase", "Prisma ORM"] },
      { category: "Deployment & Hosting", skills: ["Vercel", "Docker"] },
      { category: "Tools", skills: ["Git", "GitHub"] }
    ],
    githubLink: "https://github.com/varunjamwal05/HiddenEdge",
    liveDemo: "https://github.com/varunjamwal05/HiddenEdge"
  },
  {
    id: "inkvero",
    title: "Inkvero",
    description: "A full-stack social network platform for readers & community groups supporting real-time interactions and discussions.",
    techStack: [],
    groupedTechStack: [
      { category: "Frontend", skills: ["Next.js", "React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
      { category: "Backend / API", skills: ["Next.js API Routes", "REST API Integration"] },
      { category: "Database", skills: ["MongoDB Atlas"] },
      { category: "Media & Storage", skills: ["Cloudinary"] },
      { category: "Deployment & Hosting", skills: ["Vercel", "Render"] },
      { category: "Tools", skills: ["Git", "GitHub"] }
    ],
    githubLink: "https://github.com/varunjamwal05/inkvero",
    liveDemo: "https://inkvero.vercel.app/"
  },
  {
    id: "roametra",
    title: "Roametra",
    description: "A full-stack travel planning app with drag-and-drop itinerary builder, destination discovery, and seamless trip management — powered by a Node.js REST API backend.",
    techStack: [],
    groupedTechStack: [
      { category: "Frontend", skills: ["React.js", "Vite", "Framer Motion", "CSS3", "JavaScript"] },
      { category: "Backend / API", skills: ["Node.js", "Express.js", "REST API"] },
      { category: "Database", skills: ["MongoDB"] },
      { category: "Media & Storage", skills: ["Cloudinary"] },
      { category: "Tools", skills: ["Git", "GitHub", "Axios", "dnd-kit"] }
    ],
    githubLink: "https://github.com/varunjamwal05/Roametra",
    liveDemo: "https://github.com/varunjamwal05/Roametra"
  }
];
