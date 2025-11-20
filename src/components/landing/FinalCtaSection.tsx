import { PricingCard } from '@/components/landing/PricingCard';
import { plans } from '@/lib/plans';

export function FinalCtaSection() {
  return (
    <section id="pricing" className="bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Seu filho merece brincar com algo que edifica.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Escolha o plano ideal para sua família e comece hoje mesmo a transformar o aprendizado em uma aventura de fé.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
