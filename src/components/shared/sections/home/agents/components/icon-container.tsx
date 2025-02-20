"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconContainerProps {
  icon: LucideIcon;
  color: string;
  className?: string;
}

export function IconContainer({ icon: Icon, color, className }: IconContainerProps) {
  return (
    <div className={cn("relative group", className)}>
      {/* Main container with glass effect */}
      <motion.div
        className={cn(
          "relative p-4 rounded-2xl backdrop-blur-sm",
          "bg-gradient-to-b from-white/10 to-white/5",
          "border border-white/10",
          "shadow-lg"
        )}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Icon */}
        <Icon className={cn(
          "w-8 h-8 relative z-10",
          `text-${color}-500`
        )} />

        {/* Inner glow */}
        <div className={cn(
          "absolute inset-0 rounded-2xl opacity-25",
          "bg-gradient-to-b from-white/20 to-transparent"
        )} />
      </motion.div>

      {/* Glow border effect */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `
            linear-gradient(
              to bottom right,
              ${color === 'blue' ? 'rgba(59, 130, 246, 0.3)' : 
                color === 'green' ? 'rgba(34, 197, 94, 0.3)' : 
                'rgba(168, 85, 247, 0.3)'},
              transparent
            )
          `,
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(
              circle at center,
              ${color === 'blue' ? 'rgb(59, 130, 246)' : 
                color === 'green' ? 'rgb(34, 197, 94)' : 
                'rgb(168, 85, 247)'} 0%,
              transparent 70%
            )
          `,
        }}
      />
    </div>
  );
} 