"use client";
import React from "react";
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
