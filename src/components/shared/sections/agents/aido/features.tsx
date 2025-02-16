"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Workflow,
  Settings,
  BarChart,
  Zap,
  Shield,
  Bot
} from "lucide-react";

const features = [
  {
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline complex workflows with intelligent process automation.",
    icon: Workflow,
  },
  {
    title: "Process Optimization",
    description: "Continuously analyze and optimize operational processes for maximum efficiency.",
    icon: Settings,
  },
  {
    title: "Performance Analytics",
    description: "Track key metrics and generate insights to improve operational performance.",
    icon: BarChart,
  },
  {
    title: "Real-time Monitoring",
    description: "Monitor operations 24/7 with instant alerts and automated responses to issues.",
    icon: Shield,
  },
  {
    title: "Resource Management",
    description: "Optimize resource allocation and utilization across your organization.",
    icon: Zap,
  },
  {
    title: "AI-Driven Decisions",
    description: "Make data-driven operational decisions with AI-powered recommendations.",
    icon: Bot,
  },
];

export function AidoFeatures() {
  return (
    <section className="w-full bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Optimization Features
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-[700px]">
              Explore how AIDO can transform your operations with intelligent automation and optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-md bg-green-500/10">
                        <feature.icon className="h-5 w-5 text-green-500" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 