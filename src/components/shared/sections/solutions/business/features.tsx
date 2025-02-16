"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  LineChart, 
  Users, 
  ShieldCheck, 
  Zap,
  Bot
} from "lucide-react";

const features = [
  {
    title: "Predictive Analytics",
    description: "Leverage AI to forecast market trends, customer behavior, and business outcomes with unprecedented accuracy.",
    icon: LineChart,
  },
  {
    title: "Process Automation",
    description: "Streamline operations and reduce manual tasks with intelligent automation powered by machine learning.",
    icon: Zap,
  },
  {
    title: "Customer Intelligence",
    description: "Understand your customers better with AI-driven insights and personalized engagement strategies.",
    icon: Users,
  },
  {
    title: "Decision Support",
    description: "Make data-driven decisions with AI-powered recommendations and real-time analytics.",
    icon: Brain,
  },
  {
    title: "Risk Management",
    description: "Identify and mitigate risks proactively using advanced AI risk assessment models.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 AI Assistant",
    description: "Get continuous support from our AI agents for monitoring, analysis, and instant insights.",
    icon: Bot,
  },
];

export function BusinessFeatures() {
  return (
    <section className="w-full bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Comprehensive Business Solutions
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-[700px]">
              Our AI-powered features help you optimize every aspect of your business operations.
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