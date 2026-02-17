// lib/data.ts
// Data för projekt, arbete, utbildning, certifikat och färdigheter

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string; //live demo elr repo
  github: string;
  media?: string[];
  details?: string;
  features?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "(COMING SOON) ESP32 Buss-monitor",
    description: "En IoT-enhet som hämtar realtidsdata från Trafiklab API och visar nästa buss på en OLED-skärm. För personer som missar bussar :)",
    tech: ["C", "ESP32", "REST API", "ArduinoJson", "IoT"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Min Portfolio",
    description: "En modern portfolio byggd med Next.js, TypeScript och Tailwind CSS. Deployad på Vercel.",
    tech: ["Next.js", "React", "Tailwind", "Shadcn UI"],
    link: "#",
    github: "https://github.com/Olle-Langwagen/portfolio-v2",
  },
  {
    id: 3,
    title: "eCommerce webshop",
    description: "En e-commerce webshop byggd med vanilla JavaScript, HTML och CSS med fokus på användarupplevelse och responsiv design.",
    tech: ["Javascript", "HTML", "CSS", "LocalStorage", "UI/UX"],
    link: "https://olle-langwagen.github.io/Shopadero/",
    github: "https://github.com/Olle-Langwagen/Shopadero",
  },
  {
    id: 4,
    title: "Docker Monitor with ESP8266",
    description: "En fysisk dashboard som övervakar serverstatus i realtid via en OLED-skärm, webbpanel och ett egenutvecklat REST API.",
    tech: ["C++", "ESP8266", "Python (Flask)", "Docker", "REST API", "ArduinoJson", "IoT"],
    link: "#",
    github: "https://github.com/Olle-Langwagen/Docker-monitor-ESP", 
    media: ["/docker-watcher1.jpg", "/docker-watcher2.jpg",], 
    features: ["Docker API Integration", "Embedded Systems", "Fullstack IoT", "Real-time Monitoring", "Memory Optimization", "NTP Time Sync",  "Web Dashboard"],
    details: "Jag byggde detta projekt för att få en överblick över min hemmaservers containers utan att behöva logga in via SSH. \n\nSystemet består av två huvudkomponenter: \n\n1. En Backend (Python/Flask) som kommunicerar med Docker Socket för att hämta status på alla containers, sorterar containers med fel överst och exponerar datan via ett JSON-API.\n\n2. En ESP8266 + skärm som hämtar och visualiserar datan samt fungerar som webbserver. \n\nEn av de största tekniska utmaningarna var det begränsade RAM-minnet på ESP8266. För att förhindra krascher vid hantering av stora JSON-objekt och grafik samtidigt, implementerade jag 'Page Buffer'-rendering, via U8g2-biblioteket och dynamisk minnesallokering. Den byter sida automatiskt men man kan även klicka på flash knappen för att själv skrolla mellan sidorna. \n\nJag implementerade även bättre sortering av containers så att nere-liggande containers visas först, samt ett automatiskt nattläge som dimmar skärmen baserat på NTP-tidssynkronisering. \nJag gjorde även en webbpanel som körs direkt på ESPn för att enkelt se samma sak via en webbläsare."
  },
  {
    id: 5,
    title: "Pokémon battle simulator",
    description: "Ett CLI-baserat program som simulerar den klassiska Pokémon-striden från Pokémon Red/Blue/Yellow, där användaren kan se striden utspela sig i terminalen.",
    tech: ["Python", "Colorama", "OOP", "CLI", "Just_Playback"],
    link: "#",
    github: "https://github.com/Olle-Langwagen/CLI-Pokemon-battling-program",
    media: ["/PokemonCLI.gif"],
    features: ["Turn-based Combat", "Type Effectiveness", "Status Effects", "Damage Calculation", "ASCII", "Color-coded Output", "Music", "Critical Hits & Miss Chance", "Delay printing"],
    details: "Jag byggde detta projekt som en rolig övning i Python, där jag ville återskapa den klassiska Pokémon-striden i en textbaserad form. \n\nProgrammet väljer tre slumpmässiga Pokémon åt både spelare och motståndare, och sedan simuleras striden i terminalen med färgkodad output för att visa skador, statusförändringar och typfördelar. \n\nJag använde Colorama-biblioteket för att göra output mer visuellt tilltalande, och Just_Playback för att lägga till ljud- och musikstöd under striden."

  },
  {
    id: 6,
    title: "Trivia Game in Python",
    description: "Ett enkelt trivia-spel i Python gjort med customTkinter där användaren kan testa sina kunskaper inom olika kategorier och svårighetsgrader.",
    tech: ["Python", "customTkinter", "GUI", "CSV"],
    link: "#",
    github: "https://github.com/Olle-Langwagen/Trivia",
    media: ["/triviaGame.gif"],
    features: ["Multiple Categories", "Difficulty Levels", "Score Tracking", "CustomTkinter GUI", "CSV Data Storage"],
    details: "Jag byggde detta projekt som en övning i Python och GUI-utveckling med customTkinter. Spelet erbjuder flera kategorier (t.ex. Historia, Teknik, Musik) och tre svårighetsgrader (Lätt, Medel, Svår). \n\nAnvändaren kan svara eller passa på frågor, och poängen spåras under spelets gång, användaren kan sedan se sin slutpoäng när spelet är över. \n\nJag använde customTkinter för att skapa ett mer modernt och visuellt tilltalande GUI jämfört med standard Tkinter. \n\nDetta är ett gammalt projekt (~2021) men tycker ändå det är värt att visa upp :)"
  },
  {
    id: 7,
    title: "TypoTwist",
    description: "En hemsida för typography-nördar där användare kan skriva in en text och se den renderas i olika typsnitt och stilar. Simpel men elegant.",
    tech: ["HTML", "CSS", "JavaScript", "Google Fonts API"],
    link: "https://olle-langwagen.github.io/TypoTwist/",
    github: "https://github.com/Olle-Langwagen/TypoTwist",
    media: ["/TypoTwist.png"],
    features: ["Font Preview", "Custom Text Input", "Google Fonts Integration"],
    details: "Byggd med vanlig tech stack för enklast deployment på GitHub Pages. \n\nHemsidan visar hur en text kan renderas i olika typsnitt och stilar med hjälp av Google Fonts API. \n\nAnvändaren kan skriva in en text och se den renderas i realtid i olika typsnitt, vilket gör det till ett roligt verktyg för att utforska typografi och hitta det perfekta typsnittet för olika ändamål."
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
    description: "Utvecklar och underhåller webbapplikationer med fokus på användarupplevelse och prestanda.",
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
  frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS", "Flutter", "Flask"],
  tools: ["Git", "GitHub", "Docker", "Postman", "Linux", "Vercel", "Proxmox"],
};