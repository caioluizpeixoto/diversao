import { GenerateBonusContentButton } from './GenerateBonusContentButton';

export function GenerateBonusContentSection() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            A Criatividade Nunca Acaba
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Além dos nossos bônus, nosso sistema de IA pode gerar ainda mais ideias de atividades para sua família. Experimente!
          </p>
          <div className="mt-8">
            <GenerateBonusContentButton />
          </div>
        </div>
      </div>
    </section>
  );
}
