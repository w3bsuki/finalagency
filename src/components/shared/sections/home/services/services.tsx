"use client";

import { ServiceCard } from "./components/service-card";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  Factory, 
  Landmark, 
  BarChart3, 
  Boxes, 
  Cog,
  Bot,
  Shield,
  LineChart,
  Users,
  Lock,
  FileCheck
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Business",
    description: "Transform operations with AI-powered automation and analytics for data-driven growth.",
    href: "/solutions/business",
    icon: Building2,
    color: "blue",
    features: [
      { icon: BarChart3, text: "Predictive Analytics" },
      { icon: Bot, text: "Process Automation" },
      { icon: Boxes, text: "Resource Optimization" }
    ],
    stats: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Efficiency", value: "2x" },
      { label: "ROI", value: "3 mo" },
    ]
  },
  {
    title: "Industry",
    description: "Revolutionize manufacturing with smart systems and predictive maintenance.",
    href: "/solutions/industry",
    icon: Factory,
    color: "green",
    features: [
      { icon: Cog, text: "Smart Manufacturing" },
      { icon: LineChart, text: "Real-time Monitoring" },
      { icon: Shield, text: "Predictive Maintenance" }
    ],
    stats: [
      { label: "Downtime", value: "60%" },
      { label: "Quality", value: "85%" },
      { label: "Output", value: "3x" },
    ]
  },
  {
    title: "Government",
    description: "Modernize public sector with secure, compliant AI solutions and automation.",
    href: "/solutions/government",
    icon: Landmark,
    color: "purple",
    features: [
      { icon: Users, text: "Service Automation" },
      { icon: Lock, text: "Enterprise Security" },
      { icon: FileCheck, text: "Compliance" }
    ],
    stats: [
      { label: "Efficiency", value: "75%" },
      { label: "Security", value: "99.9%" },
      { label: "Savings", value: "45%" },
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Services() {
  return (
    <section className="w-full bg-black">
      <Separator className="bg-white/5" />
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex gap-10 sm:gap-12 py-16 sm:py-20 items-center justify-center flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-4 flex-col text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Transformative AI Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/60 max-w-[700px]">
              Discover how our tailored AI solutions can revolutionize your operations.
            </p>
          </motion.div>
          
          <div className="relative w-full rounded-xl overflow-hidden bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/[0.05] p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-50" />
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            >
              {services.map((service, index) => (
                <ServiceCard 
                  key={service.href} 
                  {...service} 
                  index={index} 
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Separator className="bg-white/5" />
    </section>
  );
} 