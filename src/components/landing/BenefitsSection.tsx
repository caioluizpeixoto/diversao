import { benefits, forWhom } from '@/lib/content';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';

export function BenefitsSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Benefícios que Vão Além da Brincadeira
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Pais compram por transformação, não por produtos. Veja como este kit edifica sua família.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="font-headline text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="text-center">
            <h3 className="font-headline text-2xl font-bold tracking-tight sm:text-3xl">
              Perfeito Para Quem Deseja...
            </h3>
          </div>
          <div className="mt-8 max-w-4xl mx-auto">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3">
              {forWhom.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
