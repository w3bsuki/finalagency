"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AgentCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  features: string[];
  stats: Record<string, string>;
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function AgentCard({ 
  title, 
  description, 
  href, 
  icon,
  color,
  features,
  stats
}: AgentCardProps) {
  const Icon = icon;
  const accentColorMap = {
    blue: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
    green: "group-hover:border-green-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]",
    purple: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]"
  };

  const statColorMap = {
    blue: "text-blue-400",
    green: "text-green-400",
    purple: "text-purple-400"
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full"
    >
      <Link href={href} className="block h-full">
        <motion.div 
          className="h-full group"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <Card className={cn(
            "relative h-full p-6",
            "bg-black/40 backdrop-blur-sm",
            "border border-white/[0.05]",
            "transition-all duration-500",
            accentColorMap[color as keyof typeof accentColorMap]
          )}>
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white/70" />
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <span className="text-[10px] font-medium text-white/50 tracking-wider uppercase bg-white/5 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span className="text-sm text-white/90 font-medium group-hover:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats & CTA */}
            <div className="mt-auto">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className={cn(
                      "text-lg font-semibold mb-1 transition-colors duration-300",
                      "text-white/70 group-hover:text-white",
                      statColorMap[color as keyof typeof statColorMap]
                    )}>
                      {value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40">
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                className="w-full gap-2 border-white/10 hover:border-white/20 hover:bg-white/5"
              >
                Learn More
                <MoveRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  );
} 