import { Hero } from "./hero";
import { Services } from "./services";
import { Agents } from "./agents";
import { Benefits } from "./benefits";
import { Testimonials } from "./testimonials";
import { CTA } from "./cta";

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Agents />
      <Benefits />
      <Testimonials />
      <CTA />
    </main>
  );
} 