"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export function ScrambleText({
  text,
  className,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newText = text.split('').map(char => {
        if (Math.random() < 0.1) {
          return characters[Math.floor(Math.random() * characters.length)];
        }
        return char;
      }).join('');
      setDisplayText(newText);
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span
      className={cn("inline-block", className)}
      animate={{ opacity: opacity }}
    >
      {displayText}
    </motion.span>
  );
} 