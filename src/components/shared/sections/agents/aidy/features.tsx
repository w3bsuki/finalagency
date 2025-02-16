"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code,
  Bug,
  FileText,
  GitBranch,
  Sparkles,
  Terminal
} from "lucide-react";

const features = [
  {
    title: "Code Generation",
    description: "Generate high-quality code snippets and boilerplate with AI-powered suggestions.",
    icon: Code,
  },
  {
    title: "Intelligent Debugging",
    description: "Quickly identify and fix bugs with advanced error analysis and solutions.",
    icon: Bug,
  },
  {
    title: "Documentation Assistant",
    description: "Automatically generate and maintain comprehensive code documentation.",
    icon: FileText,
  },
  {
    title: "Version Control",
    description: "Smart Git operations and commit message suggestions for better version control.",
    icon: GitBranch,
  },
  {
    title: "Code Optimization",
    description: "Improve code quality and performance with AI-powered refactoring suggestions.",
    icon: Sparkles,
  },
  {
    title: "CLI Companion",
    description: "Get intelligent command-line suggestions and automation scripts.",
    icon: Terminal,
  },
];

export function AidyFeatures() {
  return (
    <section className="w-full bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Development Features
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-[700px]">
              Discover how AIDY can enhance your development workflow with powerful AI assistance.
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
                      <div className="p-2 rounded-md bg-purple-500/10">
                        <feature.icon className="h-5 w-5 text-purple-500" />
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