"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ProcessCardProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  details?: {
    benefits: string[];
    features: string[];
  };
}

export function ProcessCard({ 
  step, 
  title, 
  description, 
  icon: Icon,
  className,
  details
}: ProcessCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "relative group w-full h-full text-left",
          "rounded-2xl overflow-hidden",
          "bg-[#0A0A0A] border border-[#1A1A1A]",
          "p-6",
          "transition-colors duration-300",
          "hover:bg-[#0F0F0F]",
          className
        )}
      >
        {/* Icon Container */}
        <div className="relative w-12 h-12 mb-6">
          <div className={cn(
            "absolute inset-0 rounded-xl",
            "bg-[#1A1A1A]",
            "shadow-[inset_0px_1px_1px_rgba(255,255,255,0.05)]"
          )} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-5 h-5 text-white/70" />
          </div>
        </div>

        {/* Step */}
        <div className="mb-3 flex items-center gap-3">
          <div className="text-xs font-medium text-white/40">
            Step {step}
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed">
          {description}
        </p>

        {/* Hover Effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
        </div>

        {/* Inner Border Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />
        </div>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-[#0A0A0A] border-[#1A1A1A] text-white">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-xl bg-[#1A1A1A]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white/70" />
                </div>
              </div>
              <DialogTitle className="text-xl font-semibold">
                {title} - Step {step}
              </DialogTitle>
            </div>
            <DialogDescription className="text-white/60">
              {description}
            </DialogDescription>
          </DialogHeader>

          {details && (
            <div className="mt-6 space-y-6">
              {/* Benefits */}
              <div>
                <h4 className="text-sm font-medium text-white/80 mb-3">
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  {details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/60">
                      <div className="w-1 h-1 rounded-full bg-white/40 mt-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-medium text-white/80 mb-3">
                  What We Do
                </h4>
                <ul className="space-y-2">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/60">
                      <div className="w-1 h-1 rounded-full bg-white/40 mt-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 