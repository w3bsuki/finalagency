"use client";

import { ProcessCard } from "./components/process-card";
import { Separator } from "@/components/ui/separator";
import { Search, PenTool, Wrench, Rocket, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ParticleBackground } from "@/components/ui/particle-background";

const steps = [
  {
    title: "Discovery",
    description: "We analyze your needs and identify opportunities for AI implementation.",
    icon: Search,
    details: {
      benefits: [
        "Clear understanding of your business needs",
        "Identification of key opportunities",
        "Risk assessment and mitigation strategies",
        "Resource optimization planning"
      ],
      features: [
        "In-depth business analysis",
        "Stakeholder interviews",
        "Technical assessment",
        "ROI projection"
      ]
    }
  },
  {
    title: "Plan",
    description: "Develop a comprehensive strategy and implementation roadmap.",
    icon: PenTool,
    details: {
      benefits: [
        "Clear project timeline and milestones",
        "Resource allocation optimization",
        "Risk mitigation strategies",
        "Stakeholder alignment"
      ],
      features: [
        "Detailed project planning",
        "Resource allocation",
        "Technology stack selection",
        "Implementation roadmap"
      ]
    }
  },
  {
    title: "Build",
    description: "Implement AI solutions with continuous testing and refinement.",
    icon: Wrench,
    details: {
      benefits: [
        "Rapid development and iteration",
        "Quality assurance at every step",
        "Continuous improvement",
        "Minimal disruption to operations"
      ],
      features: [
        "Agile development process",
        "Regular testing and validation",
        "Performance optimization",
        "Integration with existing systems"
      ]
    }
  },
  {
    title: "Launch",
    description: "Deploy your AI solution with comprehensive training and support.",
    icon: Rocket,
    details: {
      benefits: [
        "Smooth transition to production",
        "Minimal downtime",
        "User adoption support",
        "Immediate value realization"
      ],
      features: [
        "Phased deployment strategy",
        "User training programs",
        "24/7 support system",
        "Performance monitoring"
      ]
    }
  },
  {
    title: "Scale",
    description: "Optimize and expand your AI capabilities for maximum impact.",
    icon: LineChart,
    details: {
      benefits: [
        "Increased ROI over time",
        "Expanded capabilities",
        "Improved efficiency",
        "Competitive advantage"
      ],
      features: [
        "Performance optimization",
        "Capability expansion",
        "Advanced analytics",
        "Continuous improvement"
      ]
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Process() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <ParticleBackground 
          variant="connect" 
          quantity={30}
          speed={0.5}
          color="rgba(255, 255, 255, 0.3)"
        />
      </div>

      <Separator className="bg-white/5" />
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex gap-12 py-20 items-center justify-center flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-3 flex-col text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Our Process
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-white/70">
              A systematic approach to AI integration and maximum value.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
          >
            {steps.slice(0, -1).map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="h-full"
              >
                <ProcessCard
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  details={step.details}
                />
              </motion.div>
            ))}
            {/* Scale card rendered separately for custom positioning */}
            <motion.div
              variants={itemVariants}
              className="h-full col-span-1 sm:col-span-2 lg:col-span-2 lg:col-start-2"
            >
              <ProcessCard
                step={steps.length}
                title={steps[steps.length - 1].title}
                description={steps[steps.length - 1].description}
                icon={steps[steps.length - 1].icon}
                details={steps[steps.length - 1].details}
                className="h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Separator className="bg-white/5" />
    </section>
  );
} 