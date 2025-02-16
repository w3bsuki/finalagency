"use client";

import { BenefitCard } from "./components/benefit-card";
import { Separator } from "@/components/ui/separator";
import { Zap, Shield, Gauge, Brain, Target, Clock } from "lucide-react";

const benefits = [
  {
    title: "Lightning Fast",
    description: "Experience rapid response times and real-time processing capabilities that keep your operations running at peak efficiency.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and security measures ensure your data and operations remain protected at all times.",
    icon: Shield,
  },
  {
    title: "High Performance",
    description: "Optimized algorithms and scalable infrastructure deliver consistent, high-performance results across all operations.",
    icon: Gauge,
  },
  {
    title: "Advanced AI",
    description: "Cutting-edge artificial intelligence and machine learning capabilities that evolve with your business needs.",
    icon: Brain,
  },
  {
    title: "Precision Accuracy",
    description: "Achieve unprecedented levels of accuracy in data analysis, predictions, and automated decision-making.",
    icon: Target,
  },
  {
    title: "24/7 Operation",
    description: "Round-the-clock availability ensures your AI solutions are always working, monitoring, and delivering value.",
    icon: Clock,
  },
];

export function Benefits() {
  return (
    <section className="w-full bg-secondary/30">
      <Separator />
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
              Why Choose SYNTAI
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-[700px]">
              Discover the advantages that make our AI solutions stand out from the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} {...benefit} index={index} />
            ))}
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
} 