import { Bird } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto py-8 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-2">
            <Bird className="h-5 w-5"/>
            <p className="font-headline font-semibold">Diversão Bíblica</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Diversão Bíblica. Todos os direitos reservados.</p>
        <p>Uma nova forma de aprender sobre fé.</p>
      </div>
    </footer>
  );
}
