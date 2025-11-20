'use client';

import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { testimonials } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Amado por Pais, Líderes e Crianças
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Veja o que estão dizendo sobre os jogos que estão transformando famílias e ministérios.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const image = PlaceHolderImages.find(img => img.id === testimonial.avatar);
                return (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="flex h-full flex-col justify-between">
                        <CardContent className="flex-1 p-6 text-center flex flex-col items-center">
                          <div className="flex text-yellow-400 mb-4">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                        </CardContent>
                        <div className="flex flex-col items-center gap-2 p-6 pt-0">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="h-16 w-16 rounded-full object-cover"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                          <div>
                            <p className="font-semibold text-center">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground text-center">{testimonial.city}, {testimonial.state}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <CarouselDots />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
