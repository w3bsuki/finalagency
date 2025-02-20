"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const values = [
  {
    icon: Heart,
    title: "Human-Centric",
    description: "We believe AI should enhance human capabilities, not replace them."
  },
  {
    icon: Shield,
    title: "Ethical AI",
    description: "We develop AI solutions with strong ethical principles and transparency."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously push boundaries while maintaining reliability."
  }
];

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop&auto=format",
    description: "20+ years in AI and Technology Leadership"
  },
  {
    name: "David Park",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop&auto=format",
    description: "PhD in Machine Learning, Former Tech Lead at Google AI"
  },
  {
    name: "Maria Rodriguez",
    role: "Head of AI Ethics",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop&auto=format",
    description: "Expert in AI Ethics and Responsible Innovation"
  }
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <Badge className="w-fit">About Us</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Bridging Humanity and Technology
              </h1>
              <p className="text-xl text-muted-foreground">
                We&apos;re on a mission to make AI technology accessible, ethical, and beneficial for businesses and society.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <AspectRatio ratio={16/9}>
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&h=1080&fit=crop&auto=format"
                  alt="Our Team"
                  fill
                  className="object-cover"
                  priority
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2020, we set out to bridge the gap between advanced AI technology and practical business needs. Our journey began with a simple belief: AI should be accessible, understandable, and beneficial for everyone.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we&apos;re proud to be at the forefront of AI innovation, helping businesses across sectors harness the power of artificial intelligence while maintaining a strong commitment to ethical practices and human-centric solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&h=800&fit=crop&auto=format"
                    alt="Team Collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&h=800&fit=crop&auto=format"
                    alt="Office Culture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&h=800&fit=crop&auto=format"
                    alt="Team Meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&h=800&fit=crop&auto=format"
                    alt="Innovation Lab"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission" className="py-20 scroll-mt-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Mission</Badge>
            <h2 className="text-3xl font-bold mb-4">Transforming Business Through Ethical AI</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our mission is to democratize AI technology while maintaining the highest standards of ethics and human-centric design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="relative overflow-hidden">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 w-fit rounded-xl bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-muted/50 scroll-mt-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our team combines deep expertise in AI technology with years of industry experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="relative overflow-hidden">
                <CardContent className="pt-6">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground">
              Join the growing number of businesses leveraging our AI solutions.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 