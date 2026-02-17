import Link from "next/link";
import { work, education, certificates } from "@/lib/data";
import { Timeline } from "@/components/ui/timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, skills } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { FadeIn } from "@/components/ui/fade-in";
import { TypewriterTitle } from "@/components/ui/typewriter-title";
import { Github, ExternalLink } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8 md:p-24 relative overflow-hidden">
      
      {/* BAKGRUNDS-EFFEKT */}
      <div className="absolute top-0 left-0 w-full h-125 bg-blue-500/20 dark:bg-blue-900/20 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      {/* Theme (dark/light) */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50">
        <ModeToggle />
      </div>
      {/*HERO*/}
      <section className="max-w-4xl mx-auto mb-20 space-y-6 pt-10">
        <FadeIn>
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                Hej, jag är <span className="text-blue-600">Olle Langwagen</span>.
              </h1>
              <div className="text-xl text-muted-foreground h-8 mb-6">
                Jag är en <TypewriterTitle />
              </div>
              {/*WORK BANNER*/}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-sm text-green-700 dark:text-green-300 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Öppen för jobb / praktik
              </div>

              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild>
                  <Link href="https://github.com/olle-langwagen" target="_blank">Min GitHub</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:olle.langwagen@gmail.com">Kontakta mig</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://www.linkedin.com/in/olle-langwagen/" target="_blank" >LinkedIn</Link>
                </Button>
              </div>
            </div>

            {/*Portrait*/}
            <div className="relative w-40 h-40 md:w-64 md:h-64 shrink-0">
              <Image
                src="/portrait3.jpg"
                alt="OL"
                fill
                className="object-cover rounded-full shadow-2xl ring-4 ring-white dark:ring-gray-800"
                priority
              />
            </div>

          </div>
        </FadeIn>
      </section>
      {/*MAIN*/}
      <section className="max-w-4xl mx-auto mb-20">
        
        <h2 className="text-2xl font-bold mb-6">Teknisk Kompetens</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/*Languages*/}
          <FadeIn delay={0.05}>
          <div className="space-y-3">
            <h3 className="font-semibold text-muted-foreground uppercase tracking-wider text-sm">Språk</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <Badge key={skill} variant="outline" className="text-base py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          </FadeIn>
          
          {/* Frameworks */}
          <FadeIn delay={0.1}>
          <div className="space-y-3">
            <h3 className="font-semibold text-muted-foreground uppercase tracking-wider text-sm">Ramverk & Bibliotek</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <Badge key={skill} variant="outline" className="text-base py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          </FadeIn>
          {/* Tools */}
          <FadeIn delay={0.15}>
          <div className="space-y-3">
            <h3 className="font-semibold text-muted-foreground uppercase tracking-wider text-sm">Verktyg</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <Badge key={skill} variant="outline" className="text-base py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/*PROJEKT*/}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <Card className="flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-800/50 h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="pt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* BUTTONS - "Läs mer", "GitHub", "Besök" */}
                <CardFooter className="flex flex-col gap-3 pt-4">
                  
                  {/* Läs mer-button, only shows if details is defined */}
                  {project.details && (
                    <DialogTrigger asChild>
                      <Button variant="secondary" size="sm" className="w-full cursor-pointer">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Läs mer
                      </Button>
                    </DialogTrigger>
                  )}

                  {/* Github button and link */}
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Kod
                      </Link>
                    </Button>

                    {project.link && project.link !== "#" && (
                      <Button size="sm" className="flex-1" asChild>
                        <Link href={project.link} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Besök
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>

              {/* POPUP - shows when "läs mer" is pressed*/}
              <DialogContent className="sm:max-w-7xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                </DialogHeader>

                <div className="grid md:grid-cols-12 gap-x-8 gap-y-6 py-4">
                  {/* Left col, media */}
                  <div className="md:col-span-5 space-y-4">
                    {project.media &&
                      project.media.length > 0 &&
                      project.media.map((mediaSrc, index) => (
                        <Image
                          key={index}
                          src={mediaSrc}
                          alt={`${project.title} - media ${index + 1}`}
                          width={1000}
                          height={1000}
                          className="w-full h-auto rounded-lg border shadow-md"
                        />
                      ))}
                  </div>

                  {/* Mid col, text*/}
                  <div className="md:col-span-4 space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Om projektet</h3>
                    <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
                      {project.details ||
                        project.description ||
                        "Ingen detaljerad beskrivning tillgänglig."}
                    </div>
                  </div>

                  {/* Right col, features */}
                  <div className="md:col-span-3 space-y-6">
                    {project.features && (
                      <>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Nyckelfunktioner</h4>
                        <ul className="list-disc list-inside space-y-1.5 text-sm text-foreground/90">
                          {project.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>

                {/* Links in popup */}
                <div className="flex justify-end gap-3 border-t pt-4">
                    {project.link && project.link !== "#" && (
                      <Button asChild>
                        <Link href={project.link} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Besök
                        </Link>
                      </Button>
                    )}
                    <Button variant="outline" asChild>
                      <Link href={project.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                      </Link>
                    </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      {/*ERFARENHET*/}
      <section className="max-w-4xl mx-auto mt-24 mb-32">
        <FadeIn delay={0.3}>
          <h2 className="text-3xl font-bold mb-8">Min Resa</h2>
          
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="work" className="cursor-pointer py-1 rounded-md transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:shadow-sm" >Arbete</TabsTrigger>
              <TabsTrigger value="education" className="cursor-pointer py-1 rounded-md transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:shadow-sm" >Utbildning</TabsTrigger>
              <TabsTrigger value="certificates" className="cursor-pointer py-1 rounded-md transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:shadow-sm" >Certifikat</TabsTrigger>
            </TabsList>
            
            <TabsContent value="work">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <Timeline items={work} />
              </div>
            </TabsContent>
            
            <TabsContent value="education">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <Timeline items={education} />
              </div>
            </TabsContent>

            <TabsContent value="certificates">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <Timeline items={certificates} />
              </div>
            </TabsContent>
          </Tabs>
        </FadeIn>
      </section>

      {/*KONTAKT */}
      <section className="max-w-3xl mx-auto mb-20 text-center">
        <FadeIn delay={0.4}>
          <div className="bg-linear-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 border border-blue-200/20 dark:border-blue-800/20 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">Kontakta mig</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Jag söker just nu extrajobb/sommarjobb inom Fullstack-utveckling och mjukvarutveckling. Har du en idé eller ett problem som behöver lösas?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-md px-8" asChild>
                <Link href="mailto:olle.langwagen@gmail.com">
                  Skicka ett mejl
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-md px-8" asChild>
                <Link href="https://www.linkedin.com/in/olle-langwagen/" target="_blank">
                  Connecta på LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/*FOOTER*/}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t bg-background/50 backdrop-blur-sm">
        <p>
          Designad och byggd av <span className="font-semibold text-foreground">Olle</span>. 
          Källkoden finns på <a href="https://github.com/Olle-Langwagen/portfolio-v2" className="underline hover:text-blue-500">GitHub</a>.
        </p>
      </footer>
    </main>
  );
}