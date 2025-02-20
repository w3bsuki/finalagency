"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "blue" | "green" | "purple";
}

export function GradientBackground({ 
  className,
  children,
  variant = "default" 
}: GradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const variantStyles = {
    default: "from-primary/20 via-secondary/20 to-background",
    primary: "from-primary/30 via-primary/5 to-background",
    secondary: "from-secondary/30 via-secondary/5 to-background",
    blue: "from-blue-500/30 via-blue-500/5 to-background",
    green: "from-green-500/30 via-green-500/5 to-background",
    purple: "from-purple-500/30 via-purple-500/5 to-background",
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-50",
          variantStyles[variant]
        )}
        animate={{
          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
        transition={{ type: "spring", bounce: 0.25, damping: 10 }}
      />
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            transparent 0%, 
            rgba(0, 0, 0, 0.1) 100%
          )`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
} 