import { HeroSection } from "@/components/shared/sections/hero";
import { AiOverview } from "@/components/shared/sections/ai-overview";
import { AgentsPreview } from "@/components/shared/sections/agents-preview";
import { Solutions } from "@/components/shared/sections/solutions";
import { ContactSection } from "@/components/shared/sections/contact";
import { Separator } from "@/components/ui/separator";
import { MarqueeSection } from "@/components/shared/sections/marquee-section";

export default function Page() {
  return (
    <main className="relative w-full">
      <HeroSection />
      <Separator className="w-full border-t border-white" />
      <AiOverview />
      <Solutions />
      <Separator className="w-full border-t border-white" />
      <AgentsPreview />
      <Separator className="w-full border-t border-white" />
      <MarqueeSection />
      <Separator className="w-full border-t border-white" />
      <ContactSection />
      <Separator className="w-full border-t border-white" />
    </main>
  );
}
