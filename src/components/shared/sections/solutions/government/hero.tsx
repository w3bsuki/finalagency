"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, MoveRight, Shield, Users, Scale } from "lucide-react";

export function GovernmentHero() {
  return (
    <section className="w-full">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Transform Public Service Delivery
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-[700px]"
            >
              Empower your agency with AI-driven solutions that enhance citizen services, improve operational efficiency, and ensure data security.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4 justify-center mt-4"
            >
              <Button size="lg">
                Schedule Consultation
                <MoveRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
          >
            <div className="flex flex-col gap-2 items-center justify-center p-6 rounded-lg bg-muted/50">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">99.9%</h3>
              <p className="text-sm text-muted-foreground text-center">Data Security Compliance</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center p-6 rounded-lg bg-muted/50">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">+60%</h3>
              <p className="text-sm text-muted-foreground text-center">Service Efficiency Increase</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center p-6 rounded-lg bg-muted/50">
              <Scale className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">24/7</h3>
              <p className="text-sm text-muted-foreground text-center">Citizen Service Availability</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 