"use client";

import { motion } from "framer-motion";
import { Brain, Bot, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const agents = [
  {
    name: "AIDR",
    description: "Your intelligent research assistant. AIDR helps analyze data, generate insights, and accelerate your research process.",
    href: "/agents/aidr",
    icon: Brain,
    color: "blue",
  },
  {
    name: "AIDO",
    description: "The operations optimization expert. AIDO streamlines workflows, automates tasks, and improves operational efficiency.",
    href: "/agents/aido",
    icon: Bot,
    color: "green",
  },
  {
    name: "AIDY",
    description: "Your development companion. AIDY assists with code generation, debugging, and technical documentation.",
    href: "/agents/aidy",
    icon: Sparkles,
    color: "purple",
  },
];

export default function AgentsPage() {
  return (
    <main className="flex flex-col">
      <section className="w-full">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Meet Our AI Agents
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-[700px]">
                Discover our specialized AI agents designed to handle specific tasks and challenges in your organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-8">
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link href={agent.href} className="block h-full">
                    <Card className="h-full hover:bg-muted/50 transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-md bg-${agent.color}-500/10`}>
                            <agent.icon className={`h-5 w-5 text-${agent.color}-500`} />
                          </div>
                          <CardTitle className="text-xl">{agent.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {agent.description}
                        </CardDescription>
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
              Ready to Experience AI-Powered Excellence?
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-[600px]">
              Choose the agent that best fits your needs or contact us for a personalized recommendation.
            </p>
            <Button size="lg">Book a Consultation</Button>
          </div>
        </div>
      </section>
    </main>
  );
} 