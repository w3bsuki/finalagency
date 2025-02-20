"use client";

import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Factory, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "TechCorp's AI Transformation",
    description: "How we helped TechCorp achieve an 85% efficiency boost through strategic AI implementation",
    image: "/case-study-dashboard.jpg",
    industry: "Technology",
    metrics: [
      { value: "85%", label: "Efficiency" },
      { value: "3.5x", label: "ROI" }
    ],
    href: "/case-studies/techcorp",
    icon: Building2,
    color: "blue"
  },
  {
    title: "Manufacturing Excellence",
    description: "Revolutionizing production processes with AI-powered automation and predictive maintenance",
    image: "/case-study-manufacturing.jpg",
    industry: "Manufacturing",
    metrics: [
      { value: "60%", label: "Less Downtime" },
      { value: "40%", label: "Cost Reduction" }
    ],
    href: "/case-studies/manufacturing",
    icon: Factory,
    color: "green"
  },
  {
    title: "Public Sector Innovation",
    description: "Transforming government services with secure, compliant AI solutions",
    image: "/case-study-government.jpg",
    industry: "Government",
    metrics: [
      { value: "99.9%", label: "Security" },
      { value: "2x", label: "Efficiency" }
    ],
    href: "/case-studies/government",
    icon: Landmark,
    color: "purple"
  }
];

export default function CaseStudies() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.12),transparent)]" />
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">Case Studies</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
                Real Results, Real Impact
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover how our AI solutions have transformed businesses across industries, delivering measurable results and driving innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={study.href} className="block group">
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
                    <div className="relative">
                      <AspectRatio ratio={16/9}>
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </AspectRatio>
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge 
                          variant="secondary" 
                          className={`bg-background/95 ${
                            study.color === "blue" ? "text-blue-500" :
                            study.color === "green" ? "text-green-500" :
                            "text-purple-500"
                          }`}
                        >
                          {study.industry}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">{study.title}</CardTitle>
                      <CardDescription>{study.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                          {study.metrics.map((metric, i) => (
                            <div key={i} className="text-center">
                              <div className={`text-lg font-bold ${
                                study.color === "blue" ? "text-blue-500" :
                                study.color === "green" ? "text-green-500" :
                                "text-purple-500"
                              }`}>{metric.value}</div>
                              <div className="text-xs text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <study.icon className={`h-5 w-5 ${
                          study.color === "blue" ? "text-blue-500" :
                          study.color === "green" ? "text-green-500" :
                          "text-purple-500"
                        }`} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-muted-foreground">
              Join the ranks of businesses that have transformed their operations with our AI solutions.
            </p>
            <Button asChild size="lg" className="h-12 px-8 rounded-full">
              <Link href="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 