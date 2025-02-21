"use client";

import { AidrHero } from "@/components/shared/sections/agents/aidr/hero";
import { AidrFeatures } from "@/components/shared/sections/agents/aidr/features";
import { CTA } from "@/components/shared/sections/cta";
import { Separator } from "@/components/ui/separator";

export default function AidrAgentPage() {
  return (
    <main className="flex flex-col">
      <AidrHero />
      <Separator />
      <AidrFeatures />
      <CTA />
    </main>
  );
} 