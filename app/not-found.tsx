import Link from 'next/link'
import { Button } from '@/components/ui/button'
 
export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground space-y-6 text-center p-4">
      <h1 className="text-9xl font-extrabold text-blue-600/20 select-none">404</h1>
      <div className="absolute space-y-4">
        <h2 className="text-3xl font-bold">Sidan finns inte</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Kanske har du skrivit fel adress, eller så har jag flyttat på något.
        </p>
        <Button asChild>
          <Link href="/">Tillbaka till startsidan</Link>
        </Button>
      </div>
    </div>
  )
}