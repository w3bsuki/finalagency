"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cog, 
  Eye, 
  Gauge, 
  Shield, 
  Wrench,
  BarChart
} from "lucide-react";

const features = [
  {
    title: "Predictive Maintenance",
    description: "Prevent equipment failures and reduce downtime with AI-powered predictive maintenance systems.",
    icon: Wrench,
  },
  {
    title: "Quality Control",
    description: "Ensure consistent product quality with computer vision and real-time defect detection.",
    icon: Eye,
  },
  {
    title: "Process Optimization",
    description: "Optimize manufacturing processes in real-time for maximum efficiency and output.",
    icon: Cog,
  },
  {
    title: "Performance Monitoring",
    description: "Track and analyze equipment performance with advanced IoT sensors and AI analytics.",
    icon: Gauge,
  },
  {
    title: "Safety & Compliance",
    description: "Enhance workplace safety and ensure regulatory compliance with AI monitoring systems.",
    icon: Shield,
  },
  {
    title: "Production Analytics",
    description: "Gain deep insights into production metrics and identify optimization opportunities.",
    icon: BarChart,
  },
];

export function IndustryFeatures() {
  return (
    <section className="w-full bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Industrial-Grade AI Solutions
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-[700px]">
              Advanced AI capabilities designed specifically for manufacturing and industrial applications.
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
                      <div className="p-2 rounded-md bg-primary/10">
                        <feature.icon className="h-5 w-5 text-primary" />
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