"use client";

import { Card } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
  index: number;
}

export function ServiceCard({ 
  title, 
  description, 
  href, 
  icon: Icon,
  color,
  stats,
  index
}: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <Card className="relative h-full group overflow-hidden border-white/[0.05] bg-black/40 backdrop-blur-sm">
          <div className="flex flex-col p-4 h-full">
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-9 h-9 shrink-0">
                <div className={cn(
                  "absolute inset-0 rounded-lg",
                  "bg-[#1A1A1A]",
                  "shadow-[inset_0px_1px_1px_rgba(255,255,255,0.05)]"
                )} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white/70" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-white/90">
                  {title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              {description}
            </p>

            {/* Stats */}
            <div className="mt-auto">
              <div className="grid grid-cols-3 gap-2 py-3 border-t border-white/[0.05] mb-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-sm font-bold mb-0.5 text-white group-hover:text-white/90">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-white/40 capitalize group-hover:text-white/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="w-full group/button bg-white/5 hover:bg-white/10 text-white rounded-md px-4 py-2 text-sm flex items-center justify-between">
                <span className="text-xs">Learn More</span>
                <MoveRight className="w-3.5 h-3.5 transition-transform group-hover/button:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Background Gradient */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `
                radial-gradient(
                  600px circle at 50% 50%,
                  ${color === 'blue' ? 'rgba(59, 130, 246, 0.05)' : 
                    color === 'green' ? 'rgba(34, 197, 94, 0.05)' : 
                    'rgba(168, 85, 247, 0.05)'},
                  transparent 100%
                )
              `
            }}
          />

          {/* Hover Effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
          </div>

          {/* Inner Border Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[1px] rounded-xl bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />
          </div>
        </Card>
      </motion.div>
    </Link>
  );
} 