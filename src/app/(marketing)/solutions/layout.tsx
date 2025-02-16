import { SolutionsNavigation } from "@/components/shared/sections/solutions/navigation";

interface SolutionsLayoutProps {
  children: React.ReactNode;
}

export default function SolutionsLayout({ children }: SolutionsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <SolutionsNavigation />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
} 