import { AboutNavigation } from "@/components/shared/sections/about/navigation";

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <AboutNavigation />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
} 