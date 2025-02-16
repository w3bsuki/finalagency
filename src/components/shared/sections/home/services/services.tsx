"use client";

import { ServiceCard } from "./components/service-card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Business Solutions",
    description: "Transform your business operations with AI-powered automation and analytics.",
    href: "/solutions/business",
  },
  {
    title: "Industry Solutions",
    description: "Optimize industrial processes with cutting-edge AI technology and machine learning.",
    href: "/solutions/industry",
  },
  {
    title: "Government Solutions",
    description: "Enhance public sector efficiency with secure and compliant AI solutions.",
    href: "/solutions/government",
  },
];

export function Services() {
  return (
    <section className="w-full">
      <Separator />
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
              Our Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-[700px]">
              Discover how our AI solutions can transform your operations, drive innovation, and deliver measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {services.map((service, index) => (
              <ServiceCard key={service.href} {...service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 