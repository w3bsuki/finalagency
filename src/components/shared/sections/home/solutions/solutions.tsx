"use client";

import { ServiceCard } from "./components/service-card";
import { motion } from "framer-motion";
import { GradientBackground } from "@/components/ui/gradient-background";

const solutions = [
  {
    title: "Business Solutions",
    description: "Transform your business operations with AI-powered automation and analytics. From predictive insights to process optimization, we help you stay ahead of the competition.",
    href: "/solutions/business",
    icon: Building2,
    color: "blue",
    stats: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Efficiency Gain", value: "2x" },
      { label: "ROI Timeline", value: "3 mo" },
    ]
  },
  {
    title: "Industry Solutions",
    description: "Optimize industrial processes with cutting-edge AI technology. Enhance manufacturing efficiency, reduce downtime, and improve quality control with real-time monitoring.",
    href: "/solutions/industry",
    icon: Factory,
    color: "green",
    stats: [
      { label: "Downtime Reduction", value: "60%" },
      { label: "Quality Improvement", value: "85%" },
      { label: "Production Boost", value: "3x" },
    ]
  },
  {
    title: "Government Solutions",
    description: "Enhance public sector operations with secure, compliant AI solutions. Streamline citizen services, improve decision-making, and ensure data security at every step.",
    href: "/solutions/government",
    icon: Landmark,
    color: "purple",
    stats: [
      { label: "Service Efficiency", value: "75%" },
      { label: "Data Security", value: "99.9%" },
      { label: "Cost Savings", value: "45%" },
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Solutions() {
  return (
    <section className="relative w-full overflow-hidden">
      <GradientBackground 
        variant="secondary"
        className="absolute inset-0 opacity-50"
      />
      
      <div className="container max-w-6xl mx-auto px-4 relative">
        <div className="flex gap-16 py-24 sm:py-32 items-center justify-center flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-4 flex-col text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Transformative AI Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground max-w-[700px]">
              Discover how our tailored AI solutions can revolutionize your operations, drive innovation, and deliver measurable results.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full"
          >
            {solutions.map((solution, index) => (
              <ServiceCard 
                key={solution.href} 
                {...solution} 
                index={index} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 