"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary";
  interactive?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  variant = "default",
  interactive = true 
}: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    if (!interactive) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const variantStyles = {
    default: "bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10",
    primary: "bg-primary/10 border-primary/20",
    secondary: "bg-secondary/10 border-secondary/20",
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={interactive ? { scale: 1.02 } : undefined}
      className={cn(
        "relative rounded-xl border backdrop-blur-xl",
        "transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      {interactive && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 
            transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255,255,255,0.1),
                transparent 80%
              )
            `,
          }}
        />
      )}
      <div className="relative h-full w-full">
        {children}
      </div>
    </motion.div>
  );
} 