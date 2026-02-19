import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { FadeIn } from "@/components/ui/fade-in";
import { TypewriterTitle } from "@/components/ui/typewriter-title";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import LanguageSwitcher from "@/components/language-switcher";
import { ProjectSection } from "@/components/project-section";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  
  return {
    title: `${dictionary.page.home.name} - Portfolio`,
    description: dictionary.page.home.contact_description,
    openGraph: {
      title: dictionary.page.home.name,
      description: dictionary.page.home.contact_description,
      siteName: 'Olle Langwagen Portfolio',
    }
  }
}

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  const { work, education, certificates } = dictionary;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: dictionary.page.home.name,
    jobTitle: 'Fullstack Developer',
    url: 'https://ollelangwagen.se/sv', // Replace with your actual domain if different
    sameAs: [
      'https://www.linkedin.com/in/olle-langwagen/',
      'https://github.com/olle-langwagen'
    ],
    description: dictionary.page.home.contact_description
  }

  return (
    <main className="min-h-screen bg-background p-8 md:p-24 relative overflow-hidden">
      
      {/* BACKGROUND-EFFECT */}
      <div className="absolute top-0 left-0 w-full h-125 bg-blue-500/20 dark:bg-blue-900/20 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      {/* Theme (dark/light) & Language */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex gap-2">
        <LanguageSwitcher />
        <ModeToggle />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/*HERO*/}
      <section className="max-w-4xl mx-auto mb-20 space-y-6 pt-10">
        <FadeIn>
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                {dictionary.page.home.title}{' '}
                <span className="text-blue-600">{dictionary.page.home.name}</span>.
              </h1>
              <div className="text-xl text-muted-foreground h-8 mb-6">
                {dictionary.page.home.description} <TypewriterTitle words={dictionary.page.home.typewriter_words} />
              </div>
              {/*WORK BANNER*/}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-sm text-green-700 dark:text-green-300 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {dictionary.page.home.availability}
              </div>

              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild>
                  <Link href="https://github.com/olle-langwagen" target="_blank">{dictionary.page.home.github_button}</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:olle.langwagen@gmail.com">{dictionary.page.home.contact_button}</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://www.linkedin.com/in/olle-langwagen/" target="_blank" >{dictionary.page.home.linkedin_button}</Link>
                </Button>
              </div>
            </div>

            {/*Portrait*/}
            <div className="relative w-40 h-40 md:w-64 md:h-64 shrink-0">
              <Image
                src="/portrait3.jpg"
                alt="Olle Langwagen"
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
        
        <FadeIn delay={0.05}><h2 className="text-2xl font-bold mb-6">{dictionary.page.home.technical_skills}</h2></FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/*Languages*/}
          <FadeIn delay={0.05}>
          <div className="space-y-3">
            <h3 className="font-semibold text-muted-foreground uppercase tracking-wider text-sm">{dictionary.page.home.languages}</h3>
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
            <h3 className="font-semibold text-muted-foreground uppercase tracking-wider text-sm">{dictionary.page.home.frameworks_and_libraries}</h3>
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
            <h3 className="font-semibold text-muted-foreground uppercase tracking-wider text-sm">{dictionary.page.home.tools}</h3>
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

      {/*EXPERIENCE*/}
      <section className="max-w-4xl mx-auto mt-24 mb-32">
        <FadeIn delay={0.3}>
          <h2 className="text-3xl font-bold mb-8">{dictionary.page.home.my_journey}</h2>
          
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="work" className="cursor-pointer py-1 rounded-md transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:shadow-sm" >{dictionary.page.home.work}</TabsTrigger>
              <TabsTrigger value="education" className="cursor-pointer py-1 rounded-md transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:shadow-sm" >{dictionary.page.home.education}</TabsTrigger>
              <TabsTrigger value="certificates" className="cursor-pointer py-1 rounded-md transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:shadow-sm" >{dictionary.page.home.certificates}</TabsTrigger>
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

      <FadeIn delay={0.4}><ProjectSection dictionary={dictionary.project_section} /></FadeIn>


      {/*CONTACT */}
      <section className="max-w-3xl mx-auto mb-20 text-center">
        <FadeIn delay={0.4}>
          <div className="bg-linear-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 border border-blue-200/20 dark:border-blue-800/20 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">{dictionary.page.home.contact_me}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              {dictionary.page.home.contact_description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-md px-8" asChild>
                <Link href="mailto:olle.langwagen@gmail.com">
                  {dictionary.page.home.send_email_button}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-md px-8" asChild>
                <Link href="https://www.linkedin.com/in/olle-langwagen/" target="_blank">
                  {dictionary.page.home.connect_on_linkedin_button}
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/*FOOTER*/}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t bg-background/50 backdrop-blur-sm">
        <p>
          {dictionary.page.home.footer_text} <span className="font-semibold text-foreground">Olle</span>. 
          {dictionary.page.home.source_code_text} <a href="https://github.com/Olle-Langwagen/portfolio-v2" className="underline hover:text-blue-500">GitHub</a>.
        </p>
      </footer>
    </main>
  );
}
