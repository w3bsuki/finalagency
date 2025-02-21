"use client";

import { AidoHero } from "@/components/shared/sections/agents/aido/hero";
import { AidoFeatures } from "@/components/shared/sections/agents/aido/features";
import { CTA } from "@/components/shared/sections/cta";
import { Separator } from "@/components/ui/separator";

export default function AidoAgentPage() {
  return (
    <main className="flex flex-col">
      <AidoHero />
      <Separator />
      <AidoFeatures />
      <CTA />
    </main>
  );
} 