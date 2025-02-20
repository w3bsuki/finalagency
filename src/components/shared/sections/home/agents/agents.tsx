"use client";

import { AgentCard } from "./components/agent-card";
import { Separator } from "@/components/ui/separator";
import { Brain, Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";

const agents = [
  {
    title: "AIDR",
    description: "Your intelligent research assistant. AIDR helps analyze data, generate insights, and accelerate your research process.",
    href: "/agents/aidr",
    icon: Brain,
    color: "blue",
    features: [
      "Advanced data analysis",
      "Pattern recognition",
      "Research automation",
      "Insight generation"
    ],
    stats: {
      "Performance": "10x",
      "Accuracy": "95%",
      "Coverage": "100%"
    }
  },
  {
    title: "AIDO",
    description: "The operations optimization expert. AIDO streamlines workflows, automates tasks, and improves operational efficiency.",
    href: "/agents/aido",
    icon: Bot,
    color: "green",
    features: [
      "Process automation",
      "Workflow optimization",
      "Resource management",
      "Performance tracking"
    ],
    stats: {
      "Performance": "85%",
      "Accuracy": "70%",
      "Coverage": "45%"
    }
  },
  {
    title: "AIDY",
    description: "Your development companion. AIDY assists with code generation, debugging, and technical documentation.",
    href: "/agents/aidy",
    icon: Sparkles,
    color: "purple",
    features: [
      "Code generation",
      "Automated testing",
      "Bug detection",
      "Documentation"
    ],
    stats: {
      "Performance": "3x",
      "Accuracy": "99%",
      "Coverage": "95%"
    }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Agents() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Background with particles */}
      <div className="absolute inset-0">
        <ParticleBackground 
          variant="connect" 
          quantity={30}
          speed={0.5}
          color="rgba(255, 255, 255, 0.3)"
        />
      </div>

      <Separator className="bg-white/5" />
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="flex gap-8 sm:gap-12 py-16 sm:py-20 items-center justify-center flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-3 flex-col text-center max-w-[640px] mx-auto px-0 sm:px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Meet Our AI Agents
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Specialized AI agents designed to handle specific tasks and challenges in your organization.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[1200px] mx-auto"
          >
            {agents.map((agent, index) => (
              <AgentCard 
                key={agent.href} 
                {...agent} 
                index={index} 
              />
            ))}
          </motion.div>
        </div>
      </div>
      <Separator className="bg-white/5" />
    </section>
  );
} 