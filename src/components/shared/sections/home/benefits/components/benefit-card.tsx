"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function BenefitCard({ title, description, icon: Icon, index }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="flex flex-col h-full">
        <CardHeader className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-md bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-xl font-semibold tracking-tight">{title}</CardTitle>
          </div>
          <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-4 mt-auto border-t">
          <div className="h-1 w-20 bg-primary/10 rounded-full" />
        </CardContent>
      </Card>
    </motion.div>
  );
} 