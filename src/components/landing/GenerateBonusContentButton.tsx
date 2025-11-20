'use client';

import { useState } from 'react';
import { Wand2, Loader2, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { generateIdeasAction } from '@/app/actions';

export function GenerateBonusContentButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ideas, setIdeas] = useState<string[]>([]);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setIdeas([]);
    const result = await generateIdeasAction();
    setIsLoading(false);

    if ('error' in result) {
      toast({
        title: 'Erro',
        description: result.error,
        variant: 'destructive',
      });
    } else {
      setIdeas(result.ideas);
      setIsOpen(true);
    }
  };

  return (
    <>
      <Button size="lg" onClick={handleGenerate} disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Gerando...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Gerar Novas Ideias de Bônus com IA
          </>
        )}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">Novas Ideias de Bônus!</DialogTitle>
            <DialogDescription>
              Aqui estão algumas ideias geradas por nossa IA para enriquecer ainda mais seus momentos em família.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <ul className="space-y-3">
              {ideas.map((idea, index) => (
                <li key={index} className="flex items-start">
                  <Lightbulb className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                  <span className="text-muted-foreground">{idea}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
