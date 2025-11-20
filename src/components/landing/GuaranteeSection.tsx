import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function GuaranteeSection() {
  const guaranteeSeal = PlaceHolderImages.find(img => img.id === 'guarantee-seal');

  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl rounded-xl border-2 border-primary/20 bg-card p-8 text-center shadow-lg">
          <div className="mx-auto flex h-32 w-32 items-center justify-center">
            {guaranteeSeal && (
              <Image
                src={guaranteeSeal.imageUrl}
                alt={guaranteeSeal.description}
                width={150}
                height={150}
                data-ai-hint={guaranteeSeal.imageHint}
              />
            )}
          </div>
          <h2 className="mt-6 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Você tem 7 dias para testar todos os jogos e bônus. Se por qualquer motivo não gostar ou não achar que valeu a pena, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
          </p>
        </div>
      </div>
    </section>
  );
}
