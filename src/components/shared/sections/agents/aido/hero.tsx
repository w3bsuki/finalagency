"use client";

import { Button } from "@/components/ui/button";
import { Bot, MoveRight, Cog, Gauge, Timer } from "lucide-react";
import { motion } from "framer-motion";

export function AidoHero() {
  return (
    <section className="w-full">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-12 py-16 sm:py-20 lg:py-32 items-center justify-between flex-col lg:flex-row">
          <div className="flex gap-6 flex-col lg:max-w-[600px]">
            <div className="inline-flex items-center gap-2">
              <div className="p-2 rounded-md bg-green-500/10">
                <Bot className="h-5 w-5 text-green-500" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">AIDO Agent</span>
            </div>
            
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Operations Optimization Expert
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
                Streamline your operations, automate workflows, and maximize efficiency with AI-powered optimization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Deploy AIDO Now
                <MoveRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Features
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Cog, label: "40% Cost Reduction" },
                  { icon: Gauge, label: "2x Productivity" },
                  { icon: Timer, label: "24/7 Optimization" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <div className="p-2 rounded-md bg-green-500/10">
                      <stat.icon className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:max-w-[500px] w-full aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-3xl" />
            {/* Add operations/automation themed illustration here */}
          </div>
        </div>
      </div>
    </section>
  );
} 