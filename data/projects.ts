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
    id: "quick-gear",
    title: "Quick Gear",
    description: "A fully responsive full-stack product rental and management platform with role-based authentication and secure checkout.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "phpMyAdmin"],
    githubLink: "https://github.com/varunjamwal05",
    liveDemo: "https://github.com/varunjamwal05"
  }
];
