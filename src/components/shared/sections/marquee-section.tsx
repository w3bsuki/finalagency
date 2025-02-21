"use client";

import { motion } from "framer-motion";

export function MarqueeSection() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-24">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-black to-transparent z-10" />
      
      {/* Marquee container */}
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-16"
          animate={{ 
            x: ["0%", "-50%"]
          }}
          transition={{ 
            repeat: Infinity,
            ease: "linear",
            duration: 25,
            repeatType: "loop"
          }}
        >
          {[...Array(6)].map((_, index) => (
            <span 
              key={index} 
              className="text-[100px] font-bold tracking-tight select-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(255,255,255,0.05)'
              }}
            >
              SYNTAI
            </span>
          ))}
        </motion.div>

        {/* Clone for seamless loop */}
        <motion.div
          className="flex whitespace-nowrap gap-16 absolute left-[100%]"
          animate={{ 
            x: ["0%", "-50%"]
          }}
          transition={{ 
            repeat: Infinity,
            ease: "linear",
            duration: 25,
            repeatType: "loop"
          }}
        >
          {[...Array(6)].map((_, index) => (
            <span 
              key={index} 
              className="text-[100px] font-bold tracking-tight select-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(255,255,255,0.05)'
              }}
            >
              SYNTAI
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Option 2: Outlined Text (commented out)
/*
export function MarqueeSection() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-24">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ 
          x: ["0%", "-50%"]
        }}
        transition={{ 
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className="inline-flex items-center justify-center px-12"
          >
            <span 
              className="text-[120px] font-bold text-transparent"
              style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)'
              }}
            >
              SYNTAI
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
*/ 