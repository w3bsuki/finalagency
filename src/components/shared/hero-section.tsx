"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "AI Support" },
  { value: "500+", label: "Projects Delivered" },
  { value: "85%", label: "Efficiency Increase" }
];

export const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.15]" />
        
        {/* Top gradient similar to contact section */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge 
              variant="outline" 
              className="mb-8 bg-black/40 text-white/70 hover:bg-black/60 transition-colors px-4 py-1.5 text-sm backdrop-blur-sm border border-white/[0.08]"
            >
              Transforming Industries with AI
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The Future of Business is{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4D9FFF] to-[#4DC8FF]">
              Intelligent
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We combine cutting-edge AI with deep industry expertise to transform 
            how businesses operate, innovate, and grow.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="h-12 px-8 rounded-full text-base font-medium bg-white hover:bg-white/90 text-black"
              asChild
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-8 rounded-full text-base font-medium bg-black/40 backdrop-blur-sm border-white/[0.08] text-white/70 hover:bg-black/60 hover:text-white hover:border-white/[0.12]"
              asChild
            >
              <Link href="/contact">
                Book a Demo
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-white/[0.08]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white/90 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 