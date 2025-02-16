"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Bot, Lightbulb, Users } from "lucide-react";

const navigation = [
  {
    name: "AI Agents",
    href: "/about/ai-agents",
    icon: Bot,
    description: "Learn about our AI agents",
  },
  {
    name: "Services",
    href: "/about/services",
    icon: Lightbulb,
    description: "Our service offerings",
  },
  {
    name: "AI and Humans",
    href: "/about/ai-and-humans",
    icon: Users,
    description: "How we combine AI with human expertise",
  },
];

export function AboutNavigation() {
  const pathname = usePathname();

  return (
    <div className="border-b">
      <div className="container max-w-6xl mx-auto">
        <nav className="flex flex-col sm:flex-row sm:space-x-8 py-4" aria-label="About">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors",
                  isActive ? 
                    "text-foreground" : 
                    "text-muted-foreground hover:text-foreground"
                )}
              >
                <div className={cn(
                  "p-1 rounded-md transition-colors",
                  isActive ?
                    "bg-primary/10 text-primary" :
                    "bg-muted group-hover:bg-primary/10 group-hover:text-primary"
                )}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-xs text-muted-foreground">{item.description}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
} 