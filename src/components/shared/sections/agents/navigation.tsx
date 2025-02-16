"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Bot, Brain, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const navigation = [
  {
    name: "AIDR",
    href: "/agents/aidr",
    icon: Brain,
    description: "Your intelligent research assistant",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    name: "AIDO",
    href: "/agents/aido",
    icon: Bot,
    description: "The operations optimization expert",
    color: "bg-green-500/10 text-green-500",
  },
  {
    name: "AIDY",
    href: "/agents/aidy",
    icon: Sparkles,
    description: "Your development companion",
    color: "bg-purple-500/10 text-purple-500",
  },
];

export function AgentsNavigation() {
  const pathname = usePathname();

  return (
    <div className="border-b">
      <div className="container max-w-6xl mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link key={item.name} href={item.href} className="block">
                <Card className={cn(
                  "transition-colors hover:bg-muted/50",
                  isActive && "bg-muted"
                )}>
                  <CardHeader className="space-y-0 pb-2">
                    <div className="flex items-center gap-2">
                      <div className={cn("p-2 rounded-md", item.color)}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-base">{item.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
} 