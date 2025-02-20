"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  variant?: "gradient" | "reveal" | "slide";
}

export function AnimatedText({
  text,
  className,
  variant = "reveal"
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const words = Array.isArray(text) ? text : text.split(" ");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  if (variant === "gradient") {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "inline-block bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {text}
      </motion.div>
    );
  }

  if (variant === "slide") {
    return (
      <motion.div
        ref={ref}
        className={cn("inline-block overflow-hidden", className)}
      >
        <motion.div
          initial={{ y: "100%" }}
          animate={controls}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block"
        >
          {text}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05
          }
        },
        hidden: {}
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
              }
            },
            hidden: {
              y: 20,
              opacity: 0
            }
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
} 