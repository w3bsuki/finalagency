"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, MoveRight, Code, GitBranch, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export function AidyHero() {
  return (
    <section className="w-full">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-12 py-16 sm:py-20 lg:py-32 items-center justify-between flex-col lg:flex-row">
          <div className="flex gap-6 flex-col lg:max-w-[600px]">
            <div className="inline-flex items-center gap-2">
              <div className="p-2 rounded-md bg-purple-500/10">
                <Sparkles className="h-5 w-5 text-purple-500" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">AIDY Agent</span>
            </div>
            
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Your Development Companion
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
                Accelerate your development process with AI-powered code generation, debugging, and documentation assistance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Start Coding with AIDY
                <MoveRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Examples
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Code, label: "50% Faster Development" },
                  { icon: GitBranch, label: "90% Test Coverage" },
                  { icon: Wrench, label: "Instant Debug Support" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <div className="p-2 rounded-md bg-purple-500/10">
                      <stat.icon className="h-5 w-5 text-purple-500" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:max-w-[500px] w-full aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-3xl" />
            {/* Add development/coding themed illustration here */}
          </div>
        </div>
      </div>
    </section>
  );
} 