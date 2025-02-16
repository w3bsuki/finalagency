"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

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
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <blockquote className="text-lg leading-relaxed text-muted-foreground">
            "{quote}"
          </blockquote>
          <div className="flex items-center gap-4 pt-4">
            <Avatar className="h-12 w-12">
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
    </Card>
  );
} 