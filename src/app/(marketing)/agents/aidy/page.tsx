"use client";

import { AidyHero } from "@/components/shared/sections/agents/aidy/hero";
import { AidyFeatures } from "@/components/shared/sections/agents/aidy/features";
import { CTA } from "@/components/shared/sections/cta";
import { Separator } from "@/components/ui/separator";

export default function AidyAgentPage() {
  return (
    <main className="flex flex-col">
      <AidyHero />
      <Separator />
      <AidyFeatures />
      <CTA />
    </main>
  );
} 