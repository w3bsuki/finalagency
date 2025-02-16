"use client";

import { Button } from "@/components/ui/button";
import { Building2, MoveRight, ChartBar, LineChart, PieChart } from "lucide-react";
import { motion } from "framer-motion";

export function BusinessHero() {
  return (
    <section className="w-full">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-12 py-16 sm:py-20 lg:py-32 items-center justify-between flex-col lg:flex-row">
          <div className="flex gap-6 flex-col lg:max-w-[600px]">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <Building2 className="h-5 w-5" />
              <span className="text-sm font-medium">Business Solutions</span>
            </div>
            
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Transform Your Business with AI
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
                Harness the power of artificial intelligence to optimize operations, drive growth, and stay ahead of the competition.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Get Started
                <MoveRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: ChartBar, label: "30% Cost Reduction" },
                  { icon: LineChart, label: "2x Productivity" },
                  { icon: PieChart, label: "ROI in 3 Months" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <div className="p-2 rounded-md bg-primary/10">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:max-w-[500px] w-full aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl" />
            {/* Add business-related illustration or image here */}
          </div>
        </div>
      </div>
    </section>
  );
} 