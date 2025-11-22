
'use client'

import { Check } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface PricingCardProps {
  planName: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}

export function PricingCard({ planName, price, originalPrice, description, features, buttonText, isPopular }: PricingCardProps) {
  const router = useRouter();

  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  
  const UpsellDialog = () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button 
          className={cn("w-full font-bold", isPopular && "animate-zoom-in-out")}
          size="lg" 
          variant={isPopular ? 'secondary' : 'default'}
        >
          {buttonText}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-headline text-2xl">Espere! Oferta Imperdível!</AlertDialogTitle>
          <AlertDialogDescription>
            Não perca a chance de ter a experiência completa. Leve o <strong>Plano Completo</strong> com todos os bônus por apenas <strong>R$ 14,90</strong>! É mais conteúdo e mais transformação por um preço especial.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col-reverse gap-2 sm:flex-row sm:gap-0">
          <AlertDialogCancel onClick={() => router.push('https://checkout.biblicoplay.online/VCCL1O8SCIPS')}>Não, obrigado. Quero o plano Essencial.</AlertDialogCancel>
          <AlertDialogAction onClick={() => router.push('https://checkout.biblicoplay.online/VCCL1O8SCIPT')}>Sim! Eu quero o Plano Completo por R$ 14,90!</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
  
  const RegularButton = () => (
    <Link href="https://checkout.biblicoplay.online/VCCL1O8SCIPU" className="w-full">
     <Button 
        className={cn("w-full font-bold", isPopular && "animate-zoom-in-out")}
        size="lg" 
        variant={isPopular ? 'secondary' : 'default'}
      >
        {buttonText}
      </Button>
    </Link>
  )


  return (
    <Card className={cn("relative flex flex-col w-full max-w-sm shadow-lg rounded-xl", isPopular ? "bg-primary text-primary-foreground" : "bg-card")}>
      {isPopular && (
        <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 font-bold">MAIS VENDIDO</Badge>
      )}
      <CardHeader className="text-center pt-8">
        <CardTitle className="font-headline text-2xl font-bold">{planName}</CardTitle>
        <div className="py-4">
          {originalPrice && (
             <p className="text-lg line-through text-muted-foreground">De {formatPrice(originalPrice)}</p>
          )}
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-black tracking-tighter">
              {formatPrice(price)}
            </span>
          </div>
        </div>
        <CardDescription className={cn(isPopular ? "text-primary-foreground/80" : "text-muted-foreground")}>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={cn("mr-3 mt-1 h-5 w-5 flex-shrink-0", isPopular ? "text-white" : "text-primary")} />
              <span className={cn(isPopular ? "text-primary-foreground/90" : "text-muted-foreground")}>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {!isPopular ? <UpsellDialog/> : <RegularButton />}
      </CardFooter>
    </Card>
  );
}
