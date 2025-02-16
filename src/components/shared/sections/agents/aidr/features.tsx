"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search,
  LineChart,
  Database,
  BookOpen,
  Network,
  FileText
} from "lucide-react";

const features = [
  {
    title: "Smart Data Analysis",
    description: "Process and analyze large datasets quickly with advanced machine learning algorithms.",
    icon: Database,
  },
  {
    title: "Pattern Recognition",
    description: "Identify trends and patterns in complex data that might be missed by human analysis.",
    icon: Network,
  },
  {
    title: "Literature Review",
    description: "Automatically scan and summarize relevant research papers and documents.",
    icon: BookOpen,
  },
  {
    title: "Insight Generation",
    description: "Generate actionable insights and recommendations based on analyzed data.",
    icon: LineChart,
  },
  {
    title: "Semantic Search",
    description: "Find exactly what you need with context-aware search capabilities.",
    icon: Search,
  },
  {
    title: "Report Generation",
    description: "Create comprehensive research reports with automated documentation.",
    icon: FileText,
  },
];

export function AidrFeatures() {
  return (
    <section className="w-full bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Research Assistant Capabilities
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-[700px]">
              Discover how AIDR can transform your research process with powerful AI-driven features.
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
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <feature.icon className="h-5 w-5 text-blue-500" />
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