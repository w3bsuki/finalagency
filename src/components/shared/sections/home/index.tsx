import { Hero } from "./hero";
import { Services } from "./services";
import { Agents } from "./agents";
import { Benefits } from "./benefits";
import { Testimonials } from "./testimonials";
import { CTA } from "./cta";
import { Process } from "./process/process";

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Agents />
      <Process />
      <Benefits />
      <Testimonials />
      <CTA />
    </main>
  );
} 