
import { gamesList } from '@/lib/content';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function WhatsIncludedSection() {
  const gamesGridImage = PlaceHolderImages.find(img => img.id === 'games-grid-main');
  
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Um Tesouro de 26 Jogos Bíblicos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tudo pronto para imprimir e usar em casa, na igreja, em células, EBD e eventos. Uma biblioteca completa de diversão com propósito.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {gamesGridImage && (
            <div className="flex justify-center">
              <Image
                src={gamesGridImage.imageUrl}
                alt={gamesGridImage.description}
                width={500}
                height={500}
                className="rounded-lg object-contain"
                data-ai-hint={gamesGridImage.imageHint}
              />
            </div>
          )}
          <div>
            <Card>
              <CardContent className="p-6 pt-6">
                <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  {gamesList.map((game, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{game}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
