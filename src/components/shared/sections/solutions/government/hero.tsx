"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Landmark, MoveRight, Shield, Users, Scale } from "lucide-react";
import Link from "next/link";

export function GovernmentHero() {
  return (
    <section className="w-full">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-12 py-16 sm:py-20 lg:py-32 items-center justify-between flex-col lg:flex-row">
          <div className="flex gap-6 flex-col lg:max-w-[600px]">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <Landmark className="h-5 w-5" />
              <span className="text-sm font-medium">Government Solutions</span>
            </div>
            
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Transform Public Service Delivery
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
                Empower your agency with AI-driven solutions that enhance citizen services, improve operational efficiency, and ensure data security.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/contact">
                  Schedule Consultation
                  <MoveRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Shield, label: "99.9% Security", value: "Data Security Compliance" },
                { icon: Users, label: "+60% Efficiency", value: "Service Efficiency Increase" },
                { icon: Scale, label: "24/7 Service", value: "Citizen Service Availability" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="p-2 rounded-md bg-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:max-w-[500px] w-full aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl" />
            {/* Add government/public sector illustration here */}
          </div>
        </div>
      </div>
    </section>
  );
} 