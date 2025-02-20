"use client";

import { Cpu, Network, Zap, LineChart, Shield, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI Core Technology",
    description: "Powered by cutting-edge machine learning models and neural networks that continuously evolve and improve.",
    color: "blue"
  },
  {
    title: "Seamless Integration",
    description: "Effortlessly integrate AI into your existing systems and workflows with our flexible API architecture.",
    color: "green"
  },
  {
    title: "Data-Driven Insights",
    description: "Transform raw data into actionable insights with our advanced analytics and prediction models.",
    color: "purple"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and security measures to protect your sensitive data and AI operations.",
    color: "blue"
  },
  {
    title: "Intelligent Automation",
    description: "Automate complex tasks and processes with AI that learns and adapts to your specific needs.",
    color: "green"
  },
  {
    title: "Real-time Processing",
    description: "Process and analyze data in real-time for immediate insights and faster decision-making.",
    color: "purple"
  }
];

const colorVariants = {
  blue: {
    icon: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    card: "hover:bg-gradient-to-b hover:from-blue-500/[0.075] hover:to-transparent",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    glow: "group-hover:bg-blue-500/[0.15]"
  },
  green: {
    icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    card: "hover:bg-gradient-to-b hover:from-emerald-500/[0.075] hover:to-transparent",
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    glow: "group-hover:bg-emerald-500/[0.15]"
  },
  purple: {
    icon: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    card: "hover:bg-gradient-to-b hover:from-purple-500/[0.075] hover:to-transparent",
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    glow: "group-hover:bg-purple-500/[0.15]"
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function AiOverview() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Simplified Background - Keep only essential gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(59,130,246,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-black to-black/90" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1]" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center gap-4 text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div {...fadeInUp}>
            <Badge 
              variant="outline" 
              className="bg-blue-500/10 text-blue-400 px-4 py-1.5 text-sm backdrop-blur-sm border border-blue-500/20"
            >
              Cutting-edge Technology
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70"
            {...fadeInUp}
          >
            Intelligent Solutions for Modern Business
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-white/90 max-w-[42rem] leading-relaxed"
            {...fadeInUp}
          >
            Harness the power of AI with our enterprise-ready solutions designed for your success
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={`/solutions#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <Card className="relative h-full p-6 bg-black/40 backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.02] transition-colors duration-300">
                <div className="flex">
                  <div className="w-[30px] mr-6">
                    <div className={cn(
                      "w-[30px] h-[140px] rounded-lg backdrop-blur-sm border flex items-center justify-center",
                      feature.color === "blue" ? "bg-blue-500/10 border-blue-500/20" :
                      feature.color === "green" ? "bg-emerald-500/10 border-emerald-500/20" :
                      "bg-purple-500/10 border-purple-500/20"
                    )}>
                      <div className={cn(
                        "flex flex-col items-center text-[11px] font-medium tracking-wider leading-[1.8]",
                        feature.color === "blue" ? "text-blue-400" :
                        feature.color === "green" ? "text-emerald-400" :
                        "text-purple-400"
                      )}>
                        {"SYNTAI".split("").map((letter, i) => (
                          <span key={i}>{letter}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {feature.description}
                      </p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "px-2 py-0.5 text-xs font-medium backdrop-blur-sm",
                        feature.color === "blue" ? "bg-blue-500/10 border-blue-500/20 text-blue-400" :
                        feature.color === "green" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" :
                        "bg-purple-500/10 border-purple-500/20 text-purple-400"
                      )}
                    >
                      {feature.color === "blue" ? "Advanced" : 
                       feature.color === "green" ? "Efficient" : "Powerful"}
                    </Badge>
                  </div>
                </div>
                <div className={cn(
                  "absolute bottom-6 right-6",
                  feature.color === "blue" ? "text-blue-400" :
                  feature.color === "green" ? "text-emerald-400" :
                  "text-purple-400"
                )}>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div 
          className="mt-24 pt-16 border-t border-white/10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div className="space-y-4" {...fadeInUp}>
                <Badge 
                  variant="outline" 
                  className="bg-blue-500/10 text-blue-400 px-3 py-1 text-sm backdrop-blur-sm border border-blue-500/20"
                >
                  Why Choose Us
                </Badge>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                  Leading the Future of Enterprise AI
                </h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  Leverage our advanced AI solutions to transform your operations and drive sustainable growth
                </p>
              </motion.div>
              <ul className="space-y-4">
                {[
                  "State-of-the-art machine learning models",
                  "Scalable and secure infrastructure",
                  "Dedicated AI engineering team",
                  "Continuous learning and improvement"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <div className="p-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Keep the visual element simple */}
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 border rounded-3xl border-white/10 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-30" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div {...fadeInUp}>
            <Badge 
              variant="outline" 
              className="bg-blue-500/10 text-blue-400 px-3 py-1 text-sm backdrop-blur-sm border border-blue-500/20"
            >
              Get Started Today
            </Badge>
          </motion.div>
          <motion.h3 
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70"
            {...fadeInUp}
          >
            Transform Your Business with AI Today
          </motion.h3>
          <motion.p 
            className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
            {...fadeInUp}
          >
            Join industry leaders who trust our AI solutions to drive innovation and growth
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4 flex-wrap pt-4"
            {...fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Button 
                size="lg" 
                className="h-12 px-8 rounded-full text-base font-medium bg-blue-500/20 hover:bg-blue-500/30 text-white backdrop-blur-sm border-0 transition-colors duration-300"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your AI Journey
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Button 
                variant="outline"
                size="lg" 
                className="h-12 px-8 rounded-full text-base font-medium bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm border-white/10 hover:border-white/20 transition-colors duration-300"
                asChild
              >
                <Link href="/solutions" className="flex items-center gap-2">
                  Explore Solutions
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 