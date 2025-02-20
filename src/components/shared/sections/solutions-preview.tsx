"use client";

import { motion } from "framer-motion";
import { Building2, Factory, Landmark, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShineBorder } from "@/components/ui/shine-border";

const solutions = [
  {
    name: "Business",
    description: "AI-powered automation and analytics for business operations",
    href: "/solutions/business",
    icon: Building2,
    color: "blue"
  },
  {
    name: "Industry",
    description: "Smart manufacturing and industrial process optimization",
    href: "/solutions/industry",
    icon: Factory,
    color: "green"
  },
  {
    name: "Government",
    description: "Secure, compliant AI solutions for public sector",
    href: "/solutions/government",
    icon: Landmark,
    color: "purple"
  }
];

const colorVariants = {
  blue: {
    icon: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    card: "hover:bg-gradient-to-b hover:from-blue-500/[0.075] hover:to-transparent",
    glow: "group-hover:bg-blue-500/[0.15]"
  },
  green: {
    icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    card: "hover:bg-gradient-to-b hover:from-emerald-500/[0.075] hover:to-transparent",
    glow: "group-hover:bg-emerald-500/[0.15]"
  },
  purple: {
    icon: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    card: "hover:bg-gradient-to-b hover:from-purple-500/[0.075] hover:to-transparent",
    glow: "group-hover:bg-purple-500/[0.15]"
  }
};

const iconColorVariants = {
  blue: "text-blue-400",
  green: "text-emerald-400",
  purple: "text-purple-400",
};

const borderColorVariants = {
  blue: ["rgba(59,130,246,0.3)", "rgba(59,130,246,0.5)"],
  green: ["rgba(16,185,129,0.3)", "rgba(16,185,129,0.5)"],
  purple: ["rgba(168,85,247,0.3)", "rgba(168,85,247,0.5)"],
};

export function SolutionsPreview() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(59,130,246,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-black to-black/90" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1]" />

      {/* Gradient Orbs */}
      <div 
        className="absolute right-0 top-1/4 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.06)_0%,rgba(56,189,248,0)_70%)] blur-[60px] animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,rgba(59,130,246,0)_70%)] blur-[60px] animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '1s' }}
      />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <span className="text-white/90 font-medium">
            Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            AI Solutions for Every Sector
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-[42rem]">
            Discover how our tailored AI solutions can transform your operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {solutions.map((solution) => (
            <Link 
              key={solution.name} 
              href={solution.href} 
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.12] to-white/[0.08] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Card className="relative h-full overflow-hidden border border-white/[0.08] bg-black/40 backdrop-blur-sm p-6">
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "p-2.5 rounded-xl backdrop-blur-sm border shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-[8deg]",
                    solution.color === "blue" ? "bg-blue-500/20 border-blue-500/30" :
                    solution.color === "green" ? "bg-emerald-500/20 border-emerald-500/30" :
                    "bg-purple-500/20 border-purple-500/30"
                  )}>
                    <solution.icon className={cn(
                      "h-5 w-5",
                      solution.color === "blue" ? "text-blue-400" :
                      solution.color === "green" ? "text-emerald-400" :
                      "text-purple-400"
                    )} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg text-white">
                      {solution.name}
                    </h3>
                    <p className="text-sm text-white/70">
                      {solution.description}
                    </p>
                  </div>
                </div>
                <div className={cn(
                  "absolute bottom-6 right-6 transition-transform duration-300 group-hover:translate-x-1",
                  solution.color === "blue" ? "text-blue-400" :
                  solution.color === "green" ? "text-emerald-400" :
                  "text-purple-400"
                )}>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            size="lg" 
            className="h-12 px-8 rounded-full text-base font-medium bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border-0 transition-all duration-300"
            asChild
          >
            <Link href="/solutions" className="flex items-center">
              Explore All Solutions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 