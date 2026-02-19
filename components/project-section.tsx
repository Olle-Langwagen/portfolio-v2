'use client'
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useState } from 'react'
import { getDictionary } from "@/lib/get-dictionary";
import { Project } from "@/lib/data";

export function ProjectSection({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["project_section"];
}) {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const projects = dictionary.projects as Project[];
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{dictionary.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllProjects ? projects : featuredProjects).map((project) => (
                <Card key={project.id} className="flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white/50 dark:bg-slate-900/50 border-gray-200/50 dark:border-gray-800/50 h-full">
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
                        <Button variant="secondary" size="sm" className="w-full cursor-pointer" onClick={() => setSelectedProject(project)}>
                          <BookOpen className="mr-2 h-4 w-4" />
                          {dictionary.read_more}
                        </Button>
                    )}
  
                    {/* Github button and link */}
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          {dictionary.code}
                        </Link>
                      </Button>
  
                      {project.link && project.link !== "#" && (
                        <Button size="sm" className="flex-1" asChild>
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {dictionary.visit}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
            ))}
          </div>

          <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
            <DialogContent className="sm:max-w-7xl max-h-[90vh] overflow-y-auto">
                {selectedProject && (
                    <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="hidden">
                      {selectedProject.description}
                    </DialogDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedProject.tech.map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                  </DialogHeader>
  
                  <div className="grid md:grid-cols-12 gap-x-8 gap-y-6 py-4">
                    {/* Left col, media */}
                    <div className="md:col-span-5 space-y-4">
                      {selectedProject.media &&
                        selectedProject.media.length > 0 &&
                        selectedProject.media.map((mediaSrc, index) => (
                          <Image
                            key={index}
                            src={mediaSrc}
                            alt={`${selectedProject.title} - media ${index + 1}`}
                            width={1000}
                            height={1000}
                            className="w-full h-auto rounded-lg border shadow-md"
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                        ))}
                    </div>
  
                    {/* Mid col, text*/}
                    <div className="md:col-span-4 space-y-6">
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">{dictionary.about_project}</h3>
                      <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
                        {selectedProject.details ||
                          selectedProject.description ||
                          dictionary.no_details}
                      </div>
                    </div>
  
                    {/* Right col, features */}
                    <div className="md:col-span-3 space-y-6">
                      {selectedProject.features && (
                        <>
                          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">{dictionary.key_features}</h4>
                          <ul className="list-disc list-inside space-y-1.5 text-sm text-foreground/90">
                            {selectedProject.features.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
  
                  {/* Links in popup */}
                  <div className="flex justify-end gap-3 border-t pt-4">
                      {selectedProject.link && selectedProject.link !== "#" && (
                        <Button asChild>
                          <Link href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {dictionary.visit}
                          </Link>
                        </Button>
                      )}
                      <Button variant="outline" asChild>
                        <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            {dictionary.github}
                        </Link>
                      </Button>
                  </div>
                    </>
                )}
            </DialogContent>
          </Dialog>
          <div className="mt-6 text-center mb-24">
              <Button onClick={() => setShowAllProjects(!showAllProjects)} className="cursor-pointer">
                {showAllProjects ? dictionary.show_less : dictionary.more_projects}
              </Button>
            </div>
        </section>
    )
}
