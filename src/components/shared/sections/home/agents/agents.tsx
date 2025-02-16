"use client";

import { AgentCard } from "./components/agent-card";
import { Separator } from "@/components/ui/separator";

const agents = [
  {
    title: "AIDR",
    description: "Your intelligent research assistant. AIDR helps analyze data, generate insights, and accelerate your research process.",
    href: "/agents/aidr",
  },
  {
    title: "AIDO",
    description: "The operations optimization expert. AIDO streamlines workflows, automates tasks, and improves operational efficiency.",
    href: "/agents/aido",
  },
  {
    title: "AIDY",
    description: "Your development companion. AIDY assists with code generation, debugging, and technical documentation.",
    href: "/agents/aidy",
  },
];

export function Agents() {
  return (
    <section className="w-full bg-muted/50">
      <Separator />
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
              Meet Our AI Agents
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-[700px]">
              Specialized AI agents designed to handle specific tasks and challenges in your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {agents.map((agent, index) => (
              <AgentCard key={agent.href} {...agent} index={index} />
            ))}
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
} 