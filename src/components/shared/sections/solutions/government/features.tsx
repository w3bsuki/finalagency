"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  Scale, 
  FileText, 
  BarChart3,
  MessageSquare
} from "lucide-react";

const features = [
  {
    title: "Citizen Services",
    description: "Streamline citizen interactions with AI-powered service portals and automated response systems.",
    icon: Users,
  },
  {
    title: "Compliance & Security",
    description: "Maintain the highest levels of data security and regulatory compliance in all operations.",
    icon: Shield,
  },
  {
    title: "Policy Analysis",
    description: "Leverage AI to analyze policy impacts and make data-driven decisions for public benefit.",
    icon: Scale,
  },
  {
    title: "Document Processing",
    description: "Automate document processing and reduce administrative burden with AI-powered systems.",
    icon: FileText,
  },
  {
    title: "Performance Analytics",
    description: "Track and optimize service delivery with comprehensive analytics and reporting.",
    icon: BarChart3,
  },
  {
    title: "Public Engagement",
    description: "Enhance citizen communication and feedback collection through AI-assisted channels.",
    icon: MessageSquare,
  },
];

export function GovernmentFeatures() {
  return (
    <section className="w-full bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Government-Grade AI Solutions
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-[700px]">
              Secure and efficient AI solutions designed specifically for government agencies and public sector organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-md bg-primary/10">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 