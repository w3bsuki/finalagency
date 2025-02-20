"use client";

import { Brain, Bot, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ShineBorder } from "@/components/ui/shine-border";

const agents = [
  {
    name: "AIDR",
    title: "Most Powerful",
    description: "Our most advanced AI agent, designed to handle complex tasks and deliver powerful solutions.",
    href: "/agents/aidr",
    icon: Brain,
    color: "blue",
    stats: [
      { value: "40%", label: "Cost Reduction" },
      { value: "2x", label: "Productivity" },
      { value: "24/7", label: "Support" }
    ],
    features: [
      "AI-powered analytics dashboard",
      "Automated workflow optimization",
      "Real-time performance tracking",
      "Strategic decision support"
    ]
  },
  {
    name: "AIDO",
    title: "Data Manager",
    description: "Specialized in organizing, analyzing, and optimizing your data infrastructure.",
    href: "/agents/aido",
    icon: Bot,
    color: "green",
    stats: [
      { value: "85%", label: "Efficiency Gain" },
      { value: "60%", label: "Less Downtime" },
      { value: "24/7", label: "Monitoring" }
    ],
    features: [
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization",
      "Energy efficiency monitoring"
    ]
  },
  {
    name: "AIDY",
    title: "Customer Support",
    description: "Intelligent assistance and support for all your customer service needs.",
    href: "/agents/aidy",
    icon: Sparkles,
    color: "purple",
    stats: [
      { value: "99.9%", label: "Satisfaction" },
      { value: "+60%", label: "Efficiency" },
      { value: "24/7", label: "Service" }
    ],
    features: [
      "24/7 customer support",
      "Multi-language support",
      "Ticket automation",
      "Customer insights"
    ]
  }
];

export function AgentsPreview() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(59,130,246,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-black to-black/90" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1]" />

      {/* Gradient Orbs */}
      <div 
        className="absolute left-0 top-0 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.07)_0%,rgba(56,189,248,0)_70%)] blur-[60px] animate-pulse"
        style={{ animationDuration: '12s' }}
      />
      <div 
        className="absolute right-0 bottom-1/4 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,rgba(59,130,246,0)_70%)] blur-[60px] animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
      />
      <div 
        className="absolute left-1/4 bottom-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05)_0%,rgba(147,51,234,0)_70%)] blur-[60px] animate-pulse"
        style={{ animationDuration: '8s', animationDelay: '1s' }}
      />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <div className="opacity-0 translate-y-4 animate-[fadeIn_0.5s_ease-out_forwards]">
            <Badge 
              variant="outline" 
              className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors px-4 py-1.5 text-sm backdrop-blur-sm border border-blue-500/20"
            >
              Our AI Agents
            </Badge>
          </div>
          
          <h2 
            className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold text-white opacity-0 translate-y-4 animate-[fadeIn_0.5s_ease-out_0.1s_forwards]"
          >
            Meet Your AI Companions
          </h2>
          
          <p 
            className="text-white/90 max-w-[42rem] text-lg sm:text-xl font-medium opacity-0 translate-y-4 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]"
          >
            Discover our specialized AI agents designed to enhance your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div
              key={agent.name}
              className="opacity-0 translate-y-4 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <Link href={agent.href} className="block h-full group">
                <Card className="h-full flex flex-col relative overflow-hidden border border-white/[0.08] bg-black/40 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.12] to-white/[0.08] hover:from-white/[0.15] hover:to-white/[0.10] transition-all duration-300" />
                  
                  <CardHeader className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn(
                        "p-2.5 rounded-xl backdrop-blur-sm border transition-transform duration-300 group-hover:scale-110",
                        agent.color === "blue" ? "bg-blue-500/20 border-blue-500/30" :
                        agent.color === "green" ? "bg-emerald-500/20 border-emerald-500/30" :
                        "bg-purple-500/20 border-purple-500/30"
                      )}>
                        <agent.icon className={cn(
                          "h-6 w-6",
                          agent.color === "blue" ? "text-blue-400" :
                          agent.color === "green" ? "text-emerald-400" :
                          "text-purple-400"
                        )} />
                      </div>
                      <div className="space-y-1">
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "px-2 py-0.5 text-xs font-medium backdrop-blur-sm",
                            agent.color === "blue" ? "bg-blue-500/10 border-blue-500/20 text-blue-400" :
                            agent.color === "green" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" :
                            "bg-purple-500/10 border-purple-500/20 text-purple-400"
                          )}
                        >
                          {agent.title}
                        </Badge>
                        <CardTitle className="text-2xl font-bold text-white">
                          {agent.name}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base text-white/90">
                      {agent.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between">
                    {/* Stats */}
                    <div className={cn(
                      "grid grid-cols-3 gap-4 pt-4 border-t",
                      agent.color === "blue" ? "border-blue-500/30" :
                      agent.color === "green" ? "border-emerald-500/30" :
                      "border-purple-500/30"
                    )}>
                      {agent.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <p className="text-lg font-bold mb-1 text-white">{stat.value}</p>
                          <p className="text-xs text-white/70">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mt-6">
                      {agent.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            agent.color === "blue" ? "bg-blue-400" :
                            agent.color === "green" ? "bg-emerald-400" :
                            "bg-purple-400"
                          )} />
                          <span className="text-sm text-white/90 font-medium group-hover:text-white transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className={cn(
                      "pt-6 mt-6 border-t",
                      agent.color === "blue" ? "border-blue-500/30" :
                      agent.color === "green" ? "border-emerald-500/30" :
                      "border-purple-500/30"
                    )}>
                      <Button 
                        variant="outline" 
                        className={cn(
                          "w-full rounded-full backdrop-blur-sm text-white group border transition-all duration-300",
                          agent.color === "blue" ? "bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/40" :
                          agent.color === "green" ? "bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/40" :
                          "bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-500/40"
                        )}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        <div 
          className="flex justify-center mt-16 opacity-0 translate-y-4 animate-[fadeIn_0.5s_ease-out_forwards]"
          style={{ animationDelay: '0.6s' }}
        >
          <ShineBorder
            borderRadius={9999}
            borderWidth={1}
            duration={8}
            color={["rgba(255,255,255,0.2)", "rgba(255,255,255,0.4)"]}
            className="w-fit h-fit min-h-0 transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <Button 
              size="lg" 
              className="h-12 px-8 rounded-full text-base font-medium bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border-0 transition-all duration-300"
              asChild
            >
              <Link href="/agents" className="flex items-center">
                Explore All Agents
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ShineBorder>
        </div>
      </div>
    </section>
  );
} 