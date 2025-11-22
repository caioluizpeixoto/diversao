
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  const gamesCollage = PlaceHolderImages.find(img => img.id === 'games-collage');

  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              26 jogos bíblicos que fazem seu filho{' '}
              <span className="text-primary">brincar, aprender e crescer na fé</span>
            </h1>
            {gamesCollage && (
              <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
                 <Image
                    src={gamesCollage.imageUrl}
                    alt={gamesCollage.description}
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover"
                    data-ai-hint={gamesCollage.imageHint}
                />
              </div>
            )}
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl lg:mx-0 mx-auto">
              Tudo de forma leve, divertida e inesquecível. Transforme o tempo de tela em tempo com propósito. Ensine valores cristãos enquanto seu filho se diverte.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start w-full">
            <Link href="#pricing" className="w-full max-w-md">
              <Button size="lg" className="mt-8 text-xl font-bold w-full">
                  Tenha Acesso Agora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
