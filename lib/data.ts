//
// Data for projects, work, education, certificates and skills
//

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  media?: string[];
  details?: string;
  features?: string[];
};



export type TimelineItem = {
  id: number;
  date: string;
  title: string;
  organization: string;
  description: string;
  highlights?: string[];
};

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "C", "SQL", "HTML/CSS", "C#", "F#", "PHP", "Dart"],
  frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS", "Flutter", "Flask"],
  tools: ["Git", "GitHub", "Docker", "Postman", "Linux", "Vercel", "Proxmox"],
};