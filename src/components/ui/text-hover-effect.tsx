"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextHoverEffectProps {
  text: string;
  className?: string;
}

export function TextHoverEffect({ text, className }: TextHoverEffectProps) {
  return (
    <div className={cn("relative w-full h-full flex items-center justify-center", className)}>
      <h1 className="text-[20vw] font-bold tracking-tighter">
        {text}
      </h1>
    </div>
  );
}
