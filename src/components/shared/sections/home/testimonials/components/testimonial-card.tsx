"use client";

import { CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({ name, role, company, image, quote, rating }: TestimonialCardProps) {
  return (
    <GlassCard className="h-full group">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 transition-colors duration-300 ${
                  i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
                }`}
              />
            ))}
          </motion.div>
          <blockquote className="text-lg leading-relaxed text-muted-foreground">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4 pt-4">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-semibold">{name}</div>
              <div className="text-sm text-muted-foreground">
                {role} at {company}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </GlassCard>
  );
} 