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
  const [scrambledText, setScrambledText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;
    let currentText = text;
    let iteration = 0;

    const scramble = () => {
      if (iteration >= text.length) {
        setScrambledText(text);
        setIsScrambling(false);
        return;
      }

      setScrambledText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iteration += 1/3;
    };

    const startScramble = () => {
      setIsScrambling(true);
      iteration = 0;
      interval = setInterval(scramble, speed);
      timeout = setTimeout(() => {
        clearInterval(interval);
        setScrambledText(text);
        setIsScrambling(false);
      }, scrambleTime);
    };

    startScramble();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, speed, scrambleTime]);

  return (
    <motion.span
      className={cn("inline-block", className)}
      animate={{ opacity: isScrambling ? 0.7 : 1 }}
    >
      {scrambledText}
    </motion.span>
  );
} 