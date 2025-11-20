
import { HeroSection } from '@/components/landing/HeroSection';
import { WhatsIncludedSection } from '@/components/landing/WhatsIncludedSection';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import { Footer } from '@/components/landing/Footer';
import { FaqSection } from '@/components/landing/FaqSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <WhatsIncludedSection />
        <FinalCtaSection />
        <FaqSection />
        <TestimonialsSection />
        <BenefitsSection />
        <GuaranteeSection />
      </main>
      <Footer />
    </div>
  );
}
