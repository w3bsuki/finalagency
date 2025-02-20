"use client";

import { HeroSection } from "@/components/shared/hero-section";
import { AgentsPreview } from "@/components/shared/sections/agents-preview";
import { SolutionsPreview } from "@/components/shared/sections/solutions-preview";
import { ContactSection } from "@/components/shared/sections/contact";
import { AiOverview } from "@/components/shared/sections/ai-overview";

export const Home = () => {
  return (
    <div className="relative w-full">
      <HeroSection />
      <AiOverview />
      <AgentsPreview />
      <SolutionsPreview />
      <ContactSection />
    </div>
  );
};