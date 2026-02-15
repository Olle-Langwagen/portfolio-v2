// lib/projects.ts
//Data för projekt
//TODO: Lägg till fler projekt, kanske dela upp i olika kategorier (personliga projekt, skolprojekt, klicka för mer info)
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ESP32 Buss-monitor",
    description: "En IoT-enhet som visar realtidsdata för bussavgångar från Trafiklab API på en OLED-skärm.",
    techStack: ["C++", "ArduinoJson", "ESP32", "REST API"],
    link: "#", // Länk till demo om det finns
    github: "https://github.com/dittnamn/esp32-buss",
  },
  {
    id: 2,
    title: "Min Portfolio",
    description: "En modern portfolio byggd med Next.js 15 och Tailwind CSS för att visa upp mina projekt.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    link: "https://min-portfolio.vercel.app",
    github: "https://github.com/dittnamn/portfolio",
  },
  // Lägg till fler projekt här...
];