"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AnimatedText } from "@/components/ui/animated-text";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ScrambleText } from "@/components/ui/scramble-text";
import Link from "next/link";

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Business", "Industry", "Government"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="flex gap-12 py-20 items-center justify-center flex-col max-w-4xl mx-auto">
          <SpotlightCard className="p-2 bg-white/5">
            <Link href="/blog/launch">
              <AnimatedButton 
                variant="ghost" 
                size="sm" 
                className="text-white/80 hover:text-white hover:bg-white/5"
              >
                Read our launch article
                <MoveRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </SpotlightCard>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl tracking-tight font-medium text-center text-white">
              <span className="block mb-4">
                AI-Powered Solutions for
              </span>
              <div className="relative h-[80px] sm:h-[100px] flex items-center justify-center">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{
                      opacity: titleNumber === index ? 1 : 0,
                      y: titleNumber === index ? 0 : -40,
                    }}
                    transition={{ 
                      type: "spring", 
                      damping: 20,
                      stiffness: 200
                    }}
                  >
                    {title}
                  </motion.span>
                ))}
              </div>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto text-center mt-8">
              We deliver cutting-edge artificial intelligence solutions tailored to the unique needs of businesses, industrial enterprises, and government agencies. From automation to advanced analytics, we empower you to thrive in the age of AI.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <AnimatedButton 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-white/20 hover:border-white/40 text-white hover:bg-white/5"
              >
                <PhoneCall className="w-4 h-4" />
                Jump on a call
              </AnimatedButton>
            </Link>
            <Link href="/signup">
              <AnimatedButton 
                size="lg" 
                className="w-full sm:w-auto bg-white text-black hover:bg-white/90"
              >
                Sign up here
                <MoveRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 