import { bonuses } from '@/lib/content';
import { Card } from '@/components/ui/card';

export function BonusSection() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            E tem mais! 6 Bônus Exclusivos no Plano Mais Vendido
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Para multiplicar o valor e a transformação, o plano completo inclui estes presentes que custariam mais que o próprio kit.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="p-6 text-center transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <bonus.icon className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">{bonus.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{bonus.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
