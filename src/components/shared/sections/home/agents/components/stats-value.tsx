"use client";

import { useInView, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatsValueProps {
  value: string;
  color: string;
}

export function StatsValue({ value, color }: StatsValueProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (!isInView) return;

    // Extract numeric value and suffix
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '').trim();

    let startValue = 0;
    const duration = 1500; // Animation duration in ms
    const steps = 60; // Number of steps in the animation
    const increment = numericValue / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.round(startValue * 10) / 10 + suffix);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <motion.div
        className={`text-lg font-bold mb-1 text-${color}-500`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {displayValue}
      </motion.div>
      
      {/* Highlight effect on hover */}
      <motion.div
        className={`absolute inset-0 -z-10 bg-${color}-500/10 rounded-lg opacity-0 group-hover:opacity-100`}
        initial={false}
        transition={{ duration: 0.2 }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 -z-20 blur-xl opacity-0 group-hover:opacity-30"
        style={{
          background: `radial-gradient(circle at center, var(--${color}-500) 0%, transparent 70%)`
        }}
        initial={false}
        animate={isInView ? { scale: [0.8, 1.2, 1] } : { scale: 0.8 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </motion.div>
  );
} 