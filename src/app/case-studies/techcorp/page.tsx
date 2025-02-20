"use client";

import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BarChart2, Brain, Lightbulb, Rocket, Target, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const challenges = [
  {
    icon: Clock,
    title: "Manual Process Bottlenecks",
    description: "TechCorp struggled with time-consuming manual processes that created operational bottlenecks."
  },
  {
    icon: Target,
    title: "Data Analysis Complexity",
    description: "Managing and analyzing large datasets was becoming increasingly challenging and error-prone."
  },
  {
    icon: Brain,
    title: "Decision-Making Delays",
    description: "Lack of real-time insights led to delayed strategic decisions and missed opportunities."
  }
];

const solutions = [
  {
    icon: Rocket,
    title: "AI-Powered Automation",
    description: "Implemented intelligent automation for routine tasks, reducing manual intervention by 90%."
  },
  {
    icon: BarChart2,
    title: "Smart Analytics Dashboard",
    description: "Deployed real-time analytics with predictive insights for better decision-making."
  },
  {
    icon: Lightbulb,
    title: "Strategic AI Integration",
    description: "Seamlessly integrated AI across key business processes for maximum efficiency."
  }
];

const results = [
  { metric: "85%", label: "Efficiency Increase", description: "Overall operational efficiency improvement" },
  { metric: "3.5x", label: "ROI Achieved", description: "Return on AI investment within 12 months" },
  { metric: "90%", label: "Time Saved", description: "Reduction in manual processing time" },
  { metric: "98%", label: "User Satisfaction", description: "Employee satisfaction with new AI tools" }
];

export default function TechCorpCaseStudy() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.12),transparent)]" />
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="w-fit">Case Study</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
                TechCorp&apos;s AI Transformation Journey
              </h1>
              <p className="text-xl text-muted-foreground">
                How we helped TechCorp achieve an 85% efficiency boost through strategic AI implementation
              </p>
            </motion.div>

            <motion.div
              className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <AspectRatio ratio={16/9} className="bg-muted">
                <Image
                  src="/case-study-hero.jpg"
                  alt="TechCorp Transformation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent mix-blend-multiply" />
              </AspectRatio>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <Tabs defaultValue="challenge" className="space-y-12">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px] h-12 items-center rounded-full p-1 mx-auto">
              <TabsTrigger value="challenge" className="rounded-full">Challenge</TabsTrigger>
              <TabsTrigger value="solution" className="rounded-full">Solution</TabsTrigger>
              <TabsTrigger value="results" className="rounded-full">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="challenge" className="space-y-12">
              <div className="grid md:grid-cols-3 gap-8">
                {challenges.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="pt-6 space-y-4">
                        <div className="p-2.5 w-fit rounded-xl bg-primary/10 ring-1 ring-primary/20">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="solution" className="space-y-12">
              <div className="grid md:grid-cols-3 gap-8">
                {solutions.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="pt-6 space-y-4">
                        <div className="p-2.5 w-fit rounded-xl bg-primary/10 ring-1 ring-primary/20">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="results" className="space-y-12">
              <div className="grid md:grid-cols-4 gap-8">
                {results.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="pt-6 text-center space-y-2">
                        <div className="text-3xl font-bold text-primary">{item.metric}</div>
                        <div className="font-medium">{item.label}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground">
              Learn how our AI solutions can help you achieve similar results
            </p>
            <Button asChild size="lg" className="h-12 px-8 rounded-full">
              <Link href="/contact">
                Let&apos;s Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 