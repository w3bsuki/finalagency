"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  metrics?: {
    value: string;
    label: string;
  }[];
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge,
  heading,
  description,
  tabs = [],
}: Feature108Props) => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '10s', animationDelay: '1s' }} />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge 
              variant="outline" 
              className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors px-4 py-1.5 text-sm backdrop-blur-sm border border-blue-500/20"
            >
              {badge}
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="max-w-2xl text-3xl font-bold md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {heading}
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground/90 max-w-[42rem] text-base sm:text-lg font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {tabs.map((tab, index) => (
            <motion.div
              key={tab.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="h-full"
            >
              <Link href={`/solutions/${tab.value}`} className="block h-full group">
                <Card className="h-full flex flex-col relative overflow-hidden border border-blue-500/10 bg-blue-500/[0.02] backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-transparent opacity-20" />
                  
                  <div className="relative p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
                        {tab.icon}
                      </div>
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90">
                        {tab.content.title.split(' ')[0]}
                      </h3>
                    </div>
                    <p className="text-base text-muted-foreground/90 font-medium">
                      {tab.content.description}
                    </p>
                  </div>

                  <div className="relative flex-1 flex flex-col justify-between p-6">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-500/10">
                      {[
                        { value: "40%", label: "Cost Reduction" },
                        { value: "2x", label: "Productivity" },
                        { value: "24/7", label: "Support" }
                      ].map((metric, i) => (
                        <div key={i} className="text-center">
                          <p className="text-base font-semibold mb-1 text-white/90">{metric.value}</p>
                          <p className="text-xs text-white/40">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mt-6">
                      {[
                        "AI-powered analytics",
                        "Workflow optimization",
                        "Real-time tracking",
                        "Strategic support"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          <span className="text-sm text-muted-foreground/90 font-medium group-hover:text-muted-foreground transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 mt-6 border-t border-blue-500/10">
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full border-blue-500/20 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 backdrop-blur-sm transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Feature108 }; 