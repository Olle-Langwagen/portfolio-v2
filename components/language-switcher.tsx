'use client'

import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import Link from 'next/link';

const languages = [
    { name: "Svenska", code: "sv" },
    { name: "English", code: "en" },
];

export default function LanguageSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    const isLocale = languages.some(lang => lang.code === segments[1])
    if (isLocale) {
      segments[1] = locale
      return segments.join('/')
    }
    segments.splice(1, 0, locale)
    return segments.join('/')
  }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Change language">
                <Globe className="h-5 w-5" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            {languages.map((lang) => {
                return (
                    <DropdownMenuItem key={lang.code} asChild>
                        <Link href={redirectedPathName(lang.code)}>{lang.name}</Link>
                    </DropdownMenuItem>
                )
            })}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
