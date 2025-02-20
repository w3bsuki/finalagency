"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function CardWrapper({ 
  children, 
  className,
  animate = true 
}: CardWrapperProps) {
  const Wrapper = animate ? motion.div : 'div';
  
  return (
    <Wrapper
      className={cn(
        "relative rounded-xl overflow-hidden",
        "bg-[#0A0A0A]/80 backdrop-blur-sm",
        "border border-white/[0.05]",
        "shadow-[0_0_30px_-10px_rgba(0,0,0,0.4)]",
        className
      )}
      {...(animate && {
        whileHover: { scale: 1.02 },
        transition: { duration: 0.3, ease: "easeOut" }
      })}
    >
      {/* Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
      </div>

      {/* Inner Border Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[1px] rounded-xl bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />
      </div>
    </Wrapper>
  );
} 