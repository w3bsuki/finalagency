import { BusinessHero } from "@/components/shared/sections/solutions/business/hero";
import { BusinessFeatures } from "@/components/shared/sections/solutions/business/features";
import { CTA } from "@/components/shared/sections/cta";
import { Separator } from "@/components/ui/separator";

export default function BusinessSolutionsPage() {
  return (
    <div className="flex flex-col">
      <BusinessHero />
      <Separator />
      <BusinessFeatures />
      <CTA />
    </div>
  );
} 