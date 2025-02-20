"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  scrambleTime?: number;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export function ScrambleText({
  text,
  className,
  speed = 50,
  scrambleTime = 1000,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newText = text.split('').map((char, i) => {
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
      animate={{ opacity: isScrambling ? 0.7 : 1 }}
    >
      {displayText}
    </motion.span>
  );
} 