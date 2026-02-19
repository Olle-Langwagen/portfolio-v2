'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()
  const lang = pathname?.split('/')[1] === 'sv' ? 'sv' : 'en'

  const dictionary = {
    en: {
      title: "Page not found",
      description: "Maybe you typed the wrong address, or I moved something.",
      button: "Back to home"
    },
    sv: {
      title: "Sidan finns inte",
      description: "Kanske har du skrivit fel adress, eller så har jag flyttat på något.",
      button: "Tillbaka till startsidan"
    }
  }

  const t = dictionary[lang as keyof typeof dictionary]

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground space-y-6 text-center p-4 relative">
      <h1 className="text-9xl font-extrabold text-blue-600/20 select-none">404</h1>
      <div className="absolute space-y-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <h2 className="text-3xl font-bold">{t.title}</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          {t.description}
        </p>
        <Button asChild>
          <Link href={`/${lang}`}>{t.button}</Link>
        </Button>
      </div>
    </div>
  )
}