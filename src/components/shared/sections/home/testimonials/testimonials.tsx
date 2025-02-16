"use client";

import { TestimonialCard } from "./components/testimonial-card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Solutions",
    image: "https://i.pravatar.cc/150?img=1",
    quote: "SYNTAI's AI solutions have transformed our business operations. The efficiency gains and insights provided are truly remarkable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Director of Innovation",
    company: "Future Industries",
    image: "https://i.pravatar.cc/150?img=2",
    quote: "The level of precision and reliability we've achieved with SYNTAI's AI agents has exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    company: "Global Dynamics",
    image: "https://i.pravatar.cc/150?img=3",
    quote: "Implementing SYNTAI's solutions was seamless. Their 24/7 support and continuous optimization have been invaluable.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CEO",
    company: "Innovative Systems",
    image: "https://i.pravatar.cc/150?img=4",
    quote: "The ROI we've seen from SYNTAI's AI implementation has been outstanding. They've become an essential partner in our growth.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="w-full">
      <Separator />
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-[700px]">
              Discover how SYNTAI is transforming businesses through innovative AI solutions.
            </p>
          </div>

          <div className="w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard {...testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:flex justify-end gap-2 pt-8">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
} 