"use client";

import { GovernmentHero } from "@/components/shared/sections/solutions/government/hero";
import { GovernmentFeatures } from "@/components/shared/sections/solutions/government/features";
import { CTA } from "@/components/shared/sections/cta";
import { Separator } from "@/components/ui/separator";

export default function GovernmentPage() {
  return (
    <main className="flex flex-col">
      <GovernmentHero />
      <Separator />
      <GovernmentFeatures />
      <CTA />
    </main>
  );
} 