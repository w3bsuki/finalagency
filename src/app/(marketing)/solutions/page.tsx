"use client";

import { motion } from "framer-motion";
import { Building2, Factory, Landmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const solutions = [
  {
    name: "Business",
    description: "Transform your business operations with AI-powered automation, analytics, and strategic decision support. Perfect for enterprises looking to innovate and scale.",
    href: "/solutions/business",
    icon: Building2,
    color: "blue",
    stats: ["40% Cost Reduction", "2x Productivity", "24/7 Support"]
  },
  {
    name: "Industry",
    description: "Optimize manufacturing and industrial processes with cutting-edge AI technology. Enhance efficiency, reduce downtime, and improve quality control.",
    href: "/solutions/industry",
    icon: Factory,
    color: "green",
    stats: ["85% Efficiency Gain", "60% Less Downtime", "24/7 Monitoring"]
  },
  {
    name: "Government",
    description: "Enhance public sector operations with secure, compliant AI solutions. Streamline citizen services, improve decision-making, and ensure data security.",
    href: "/solutions/government",
    icon: Landmark,
    color: "purple",
    stats: ["99.9% Security", "+60% Efficiency", "24/7 Service"]
  },
];

export default function SolutionsPage() {
  return (
    <main className="flex flex-col">
      <section className="w-full">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                AI Solutions for Every Sector
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-[700px]">
                Discover how our tailored AI solutions can transform your operations, drive innovation, and deliver measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full pt-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link href={solution.href} className="block h-full">
                    <Card className="h-full hover:bg-muted/50 transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-md bg-${solution.color}-500/10`}>
                            <solution.icon className={`h-5 w-5 text-${solution.color}-500`} />
                          </div>
                          <CardTitle className="text-xl">{solution.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base">
                          {solution.description}
                        </CardDescription>
                        <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                          {solution.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                              <p className="text-sm font-medium">{stat}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Separator />
      <section className="w-full bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex gap-8 py-16 sm:py-20 items-center justify-center flex-col text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-[600px]">
              Let us help you choose the perfect AI solution for your specific needs.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 