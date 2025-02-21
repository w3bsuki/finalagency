"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.15]" />
      </div>

      {/* Content Container */}
      <div className="relative w-full flex flex-col items-center px-4">
        {/* Logo Container */}
        <div className="w-full max-w-[1400px] h-[45vh] md:h-[55vh] relative">
          <TextHoverEffect 
            text="SYNTAI" 
            className="text-white"
          />
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col items-center gap-6 mt-4">
          <motion.h2
            className="text-3xl md:text-4xl text-white/80 font-light tracking-wide text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Next-Gen AI Solutions
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/solutions"
              className="text-lg text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5 flex items-center gap-2 font-light tracking-wider group"
            >
              Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/agents"
              className="text-lg text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5 flex items-center gap-2 font-light tracking-wider group"
            >
              Agents
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 