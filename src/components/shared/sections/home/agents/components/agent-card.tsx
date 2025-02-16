"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight, Bot } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AgentCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
}

export function AgentCard({ title, description, href, index }: AgentCardProps) {
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
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-xl font-semibold tracking-tight">{title}</CardTitle>
          </div>
          <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-4 mt-auto border-t">
          <Button variant="ghost" className="group p-0 h-auto w-full justify-start" asChild>
            <Link href={href} className="flex items-center gap-2 text-primary hover:text-primary">
              Meet {title}
              <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
} 