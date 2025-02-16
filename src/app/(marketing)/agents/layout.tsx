interface AgentsLayoutProps {
  children: React.ReactNode;
}

export default function AgentsLayout({ children }: AgentsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <main>
          {children}
        </main>
      </div>
    </div>
  );
} 