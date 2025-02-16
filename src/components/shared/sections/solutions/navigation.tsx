"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Building2, Factory, Landmark } from "lucide-react";

const navigation = [
  {
    name: "Business",
    href: "/solutions/business",
    icon: Building2,
    description: "Strategic AI implementation for businesses",
  },
  {
    name: "Industry",
    href: "/solutions/industry",
    icon: Factory,
    description: "Tailored AI solutions for industrial needs",
  },
  {
    name: "Government",
    href: "/solutions/government",
    icon: Landmark,
    description: "Seamless AI integration for public sector",
  },
];

export function SolutionsNavigation() {
  const pathname = usePathname();

  return (
    <div className="border-b">
      <div className="container max-w-6xl mx-auto">
        <nav className="flex space-x-4 py-4" aria-label="Solutions">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive ? 
                    "bg-primary text-primary-foreground" : 
                    "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
} 