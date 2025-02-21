"use client";

import { IndustryHero } from "@/components/shared/sections/solutions/industry/hero";
import { IndustryFeatures } from "@/components/shared/sections/solutions/industry/features";
import { CTA } from "@/components/shared/sections/cta";
import { Separator } from "@/components/ui/separator";

export default function IndustryPage() {
  return (
    <main className="flex flex-col">
      <IndustryHero />
      <Separator />
      <IndustryFeatures />
      <CTA />
    </main>
  );
} 