// lib/data.ts
// Data för projekt, arbete, utbildning, certifikat och färdigheter

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string; //live demo elr repo
  github: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "(COMING SOON) ESP32 Buss-monitor",
    description: "En IoT-enhet som hämtar realtidsdata från Trafiklab API och visar nästa buss på en OLED-skärm. För personer som missar bussar :)",
    tech: ["C", "ESP32", "REST API", "ArduinoJson"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Min Portfolio",
    description: "En modern portfolio byggd med Next.js, TypeScript och Tailwind CSS. Deployad på Vercel.",
    tech: ["Next.js", "React", "Tailwind", "Shadcn UI"],
    link: "#", //live
    github: "#",
  },
    {
    id: 3,
    title: "eCommerce webshop",
    description: "En e-commerce webshop byggd med vanilla JavaScript, HTML och CSS med fokus på användarupplevelse och responsiv design.",
    tech: ["Javascript", "HTML", "CSS", "LocalStorage", "UI/UX"],
    link: "https://olle-langwagen.github.io/Shopadero/", //live
    github: "https://github.com/Olle-Langwagen/Shopadero",
  },
    {
    id: 4,
    title: "Pokemon battle simulator",
    description: "Ett CLI-baserat program som simulerar den klassiska Pokémon-striden från Pokémon Red/Blue/Yellow, där användaren kan välja sina Pokémon och se striden utspela sig i terminalen.",
    tech: ["Python", "Colorama", "OOP", "CLI", "Just_Playback"],
    link: "#",
    github: "https://github.com/Olle-Langwagen/CLI-Pokemon-battling-program",
  },
    {
    id: 5,
    title: "Trivia Game in Python",
    description: "Ett enkelt trivia-spel i Python gjort med customTkinter där användaren kan testa sina kunskaper inom olika kategorier och svårighetsgrader.",
    tech: ["Python", "customTkinter", "GUI"],
    link: "#",
    github: "https://github.com/Olle-Langwagen/Trivia",
  },
];


export type TimelineItem = {
  id: number;
  date: string;
  title: string;
  organization: string;
  description: string;
};

export const work: TimelineItem[] = [
  {
    id: 1,
    date: "Feb. 2026 - Nu",
    title: "Fullstack-utvecklare",
    organization: "SoMe Software",
    description: "Utvecklar och underhåller webbapplikationer med fokus på anvädnarupplevelse och prestanda.",
  },
  {
    id: 2,
    date: "Sommar 2023",
    title: "Tobaksprevention",
    organization: "Region Uppsala",
    description: "Utvecklade material och utförde intervjuer för att främja tobaksavvänjning bland ungdomar.",
  },
    {
    id: 3,
    date: "Okt. 2021- Juli 2022",
    title: "Restaurangbiträde",
    organization: "Jureskogs",
    description: "Arbetade i restaurang med fokus på kundtjänst och servering.",
  },
    {
    id: 4,
    date: "Sommar 2021",
    title: "Lagerarbete",
    organization: "Uppsala kommun",
    description: "Arbetade i lager med fokus på logistik och produktivitet.",
  },
    {
    id: 5,
    date: "Nov. 2019 - Feb. 2020",
    title: "Restaurangbiträde",
    organization: "Yukikos Sushi",
    description: "Arbetade i restaurang med fokus på kundtjänst och servering.",
  },
];

export const education: TimelineItem[] = [
  {
    id: 1,
    date: "2024 - Nu",
    title: "Kandidatprogram i Datavetenskap",
    organization: "Mälardalens Universitet",
    description: "Läser kurser inom programmering, algoritmer, databaser och mjukvaruutveckling.",
  },
  {
    id: 2,
    date: "2021 - 2024",
    title: "Teknikprogrammet",
    organization: "NTI Gymnasiet",
    description: "Inriktning informations- och medieteknik - Fördjupning: Software.",
  },
];

export const certificates: TimelineItem[] = [
  {
    id: 1,
    date: "2024",
    title: "IT Specialist - Python",
    organization: "Certiport - A Pearson VUE Business",
    description: "Grundläggande kurs i Python-programmering och problemlösning.",
  },
  {
    id: 2,
    date: "2024",
    title: "IT Specialist - Networking",
    organization: "Certiport - A Pearson VUE Business",
    description: "Grundläggande kurs i nätverksadministration och säkerhet.",
  },
    {
    id: 3,
    date: "2023",
    title: "IT Specialist - Javascript",
    organization: "Certiport - A Pearson VUE Business",
    description: "Grundläggande kurs i JavaScript-programmering och webbutveckling.",
  },

];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "C", "SQL", "HTML/CSS", "C#", "F#", "PHP", "Dart"],
  frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS", "Flutter"],
  tools: ["Git", "GitHub", "Docker", "Postman", "Linux", "Vercel"],
};